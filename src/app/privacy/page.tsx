import styles from "./privacy.module.css";

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: February 17, 2026</p>

        <section>
          <h2>Introduction</h2>
          <p>
            Laundry Co (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us, including:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Messages and feedback you provide</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Pages viewed and time spent on pages</li>
            <li>Referring website addresses</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and maintain our services</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you updates, promotions, and service announcements via SMS and email (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Understand and analyze how you use our website</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>SMS Text Messaging</h2>
          <p>
            If you opt in to receive text messages from us, we will send you automated marketing and transactional messages about our services, promotions, hours, and updates. Message and data rates may apply. Message frequency varies.
          </p>
          <p>
            You can opt out at any time by replying STOP to any message. Reply HELP for assistance. Your consent to receive text messages is not a condition of purchase.
          </p>
          <p>
            We use service providers to send SMS messages and maintain required consent records. These providers may process phone numbers only as needed to deliver messages and support compliance.
          </p>
        </section>

        <section>
          <h2>Sharing Your Information</h2>
          <p>We may share your information in the following situations:</p>
          <ul>
            <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as email services and analytics.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
            <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
          <p>
            Mobile opt-in data and consent will not be shared with third parties or affiliates for marketing or promotional purposes.
          </p>
          <p>
            All sharing categories above exclude text messaging originator opt-in data and consent. This information is not sold or shared with external organizations except as required to deliver SMS services you requested.
          </p>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>Your Privacy Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>The right to access the personal information we hold about you</li>
            <li>The right to request correction or deletion of your personal information</li>
            <li>The right to object to or restrict processing of your information</li>
            <li>The right to withdraw consent for SMS messages or email communications at any time</li>
          </ul>
          <p>To exercise these rights, please contact us using the information below.</p>
        </section>

        <section>
          <h2>Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
          </p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
          <address>
            <strong>Laundry Co</strong><br />
            1191 E Main Street<br />
            League City, TX<br />
            Phone: (832) 762-4706<br />
            Email: hello@laundryco.com
          </address>
        </section>
      </div>
    </main>
  );
}
