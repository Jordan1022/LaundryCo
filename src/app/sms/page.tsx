"use client";

import { useState } from "react";
import styles from "../styles/SMS.module.css";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function SMSPage() {
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [smsOptIn, setSmsOptIn] = useState(false);
    const [status, setStatus] = useState<SubmitState>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        try {
            const response = await fetch("/api/sms/optin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone, name, smsOptIn, program: "Laundry Co Text Updates" }),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.error || "Failed to save consent");
            }

            setStatus("success");
            setPhone("");
            setName("");
            setSmsOptIn(false);
        } catch (error) {
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
        }
    };

    return (
        <main className={styles.wrapper}>
            <section className={styles.card}>
                <h1>Text updates from Laundry Co</h1>
                <p className={styles.lead}>
                    Get announcements about hours, promos, and service updates by text.
                </p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.labelRow}>
                        Name (optional)
                        <input
                            name="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="name"
                        />
                    </label>

                    <label className={styles.labelRow}>
                        Mobile number
                        <input
                            required
                            name="phone"
                            type="tel"
                            inputMode="tel"
                            pattern="^[+]?[0-9\-()\s]{7,20}$"
                            placeholder="e.g. (555) 123-4567"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            autoComplete="tel"
                        />
                    </label>

                    <label className={styles.checkboxRow}>
                        <input
                            required
                            name="smsOptIn"
                            type="checkbox"
                            checked={smsOptIn}
                            onChange={(e) => setSmsOptIn(e.target.checked)}
                        />
                        <span>
                            I agree to receive automated marketing and transactional text messages from Laundry Co at the mobile number provided. Msg & data rates may apply. Msg frequency varies. Reply HELP for help and STOP to cancel. Consent is not a condition of purchase.
                        </span>
                    </label>

                    <p className={styles.legalLinks}>
                        See our <a href="/terms" target="_blank" rel="noopener noreferrer">Terms</a> and <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                    </p>

                    <button className={styles.submitButton} type="submit" disabled={status === "submitting"}>
                        {status === "submitting" ? "Submitting..." : "Sign up"}
                    </button>

                    {status === "success" && (
                        <p className={styles.success}>Thanks! You’re on the list.</p>
                    )}
                    {status === "error" && (
                        <p className={styles.error}>{errorMessage}</p>
                    )}
                </form>
            </section>
        </main>
    );
}


