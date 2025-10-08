"use client";

import { useState } from "react";
import styles from "../styles/ContactSection.module.css";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();

        // Handle rate limiting specifically
        if (response.status === 429) {
          const retryAfter = errorData.retryAfter || 60;
          throw new Error(`Too many requests. Please wait ${retryAfter} seconds before trying again.`);
        }

        throw new Error(errorData.error || 'Failed to send message');
      }

      setStatus("success");
      setFormData(initialFormState);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    }
  };

  const closeDialog = () => {
    setShowDialog(false);
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section className={styles.wrapper} id="contact">
      <div className={styles.card}>
        <h2>Bring your laundry. Shape the refresh.</h2>
        <p>
          We&apos;re tuning the space, polishing machines, and listening to what our neighbors need most.
          Drop us a line if you have ideas, questions, or just want a heads-up on the next update.
        </p>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primaryButton}
            onClick={() => setShowDialog(true)}
          >
            Contact us
          </button>
          <a className={styles.secondaryLink} href="mailto:hello@laundryco.com">
            hello@laundryco.com
          </a>
        </div>
        <dl className={styles.contactDetails}>
          <div>
            <dt>Laundromat hours</dt>
            <dd>Daily | 7am-9pm</dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>832-779-5623</dd>
          </div>
          <div>
            <dt>Laundromat</dt>
            <dd>1191 E Main Street, League City, TX</dd>
          </div>
        </dl>
      </div>

      {showDialog && (
        <div className={styles.dialogBackdrop} role="presentation">
          <div className={styles.dialog} role="dialog" aria-modal="true">
            <div className={styles.dialogHeader}>
              <h3>Send us a message</h3>
              <button
                type="button"
                aria-label="Close dialog"
                className={styles.closeButton}
                onClick={closeDialog}
              >
                {"\u00d7"}
              </button>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  required
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </label>
              <label>
                Email
                <input
                  required
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </label>
              <label>
                Message
                <textarea
                  required
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send message"}
              </button>
              {status === "success" && (
                <p className={styles.successMessage}>
                  Thanks! We&apos;ll be in touch within one business day.
                </p>
              )}
              {status === "error" && (
                <p className={styles.errorMessage}>
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
