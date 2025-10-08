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
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [showDialog, setShowDialog] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    // Fake async submission so the UI can be demoed without a backend.
    setTimeout(() => {
      setStatus("success");
      setFormData(initialFormState);
    }, 800);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setStatus("idle");
  };

  return (
    <section className={styles.wrapper} id="contact">
      <div className={styles.card}>
        <h2>Ready for fresher laundry days?</h2>
        <p>
          Drop us a note with what you need - pick-up and delivery, wash and fold,
          commercial loads - we'll tailor a plan for you.
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
            <dt>Hours</dt>
            <dd>Every day | 7am-9pm</dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>(555) 123-4567</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>123 Main Street, Your City</dd>
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
                  Thanks! We'll be in touch within one business day.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
