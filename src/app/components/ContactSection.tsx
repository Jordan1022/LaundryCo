"use client";

import { useState } from "react";
import styles from "../styles/ContactSection.module.css";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  smsOptIn: false,
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
    const { name } = event.target;
    const value =
      event.target instanceof HTMLInputElement && event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
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
            <dd>Daily | 8am-8pm</dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>832 762 4706</dd>
          </div>
          <div>
            <dt>Laundromat</dt>
            <dd>1191 E Main Street, League City, TX</dd>
          </div>
          <div>
            <dt>Office & wash and fold</dt>
            <dd>M-F | 10am-4pm</dd>
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
                Mobile number
                <input
                  required={!!formData.smsOptIn}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  pattern="^[+]?[0-9\-()\s]{7,20}$"
                  placeholder="e.g. (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
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
              <div className={styles.consent}>
                <label className={styles.consentRow}>
                  <input
                    name="smsOptIn"
                    type="checkbox"
                    checked={!!formData.smsOptIn}
                    onChange={handleChange}
                  />
                  <span className={styles.consentText}>
                    Optional: I agree to receive automated marketing and transactional text messages from Laundry Co at the mobile number provided. Msg & data rates may apply. Msg frequency varies. Reply HELP for help and STOP to cancel. Consent is not a condition of purchase.
                  </span>
                </label>
                <p className={styles.legalLinks}>
                  See our <a href="/terms" target="_blank" rel="noopener noreferrer">Terms</a> and <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                </p>
              </div>
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
