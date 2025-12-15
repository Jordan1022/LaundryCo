import styles from "./terms.module.css";

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1>Terms of Service</h1>
        <p className={styles.updated}>Last updated: December 15, 2024</p>

        <section>
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using the services of Laundry Co, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2>Services</h2>
          <p>
            Laundry Co provides laundromat services including self-service washing and drying, drop-off wash and fold service, and related amenities at our League City, Texas location.
          </p>
        </section>

        <section>
          <h2>Use of Our Services</h2>
          <h3>Eligibility</h3>
          <p>
            You must be at least 18 years old to use our services independently. Minors must be accompanied by a parent or guardian.
          </p>

          <h3>Prohibited Conduct</h3>
          <p>You agree not to:</p>
          <ul>
            <li>Damage, misuse, or tamper with our equipment</li>
            <li>Leave items unattended beyond reasonable timeframes</li>
            <li>Use our facilities for any unlawful purpose</li>
            <li>Interfere with other customers&apos; use of the facilities</li>
            <li>Violate any posted rules or instructions from staff</li>
          </ul>
        </section>

        <section>
          <h2>Payment and Pricing</h2>
          <p>
            Pricing for our services is posted at our facility and may change without notice. Payment is required at the time of service. We accept cash, credit cards, and other payment methods as posted.
          </p>
        </section>

        <section>
          <h2>Lost or Damaged Items</h2>
          <p>
            While we take reasonable care in handling your items, Laundry Co is not responsible for:
          </p>
          <ul>
            <li>Items left unattended in machines or on premises</li>
            <li>Damage to items due to normal washing and drying processes</li>
            <li>Damage caused by items not suited for machine washing or drying</li>
            <li>Loss or damage to valuables left in pockets or with laundry</li>
            <li>Items not claimed within 30 days of service completion</li>
          </ul>
          <p>
            For drop-off services, we will make reasonable efforts to care for your items but cannot guarantee against all damage or loss.
          </p>
        </section>

        <section>
          <h2>SMS Text Messaging Terms</h2>
          <p>
            By providing your mobile phone number and opting in, you consent to receive automated marketing and transactional text messages from Laundry Co. This includes but is not limited to:
          </p>
          <ul>
            <li>Service updates and announcements</li>
            <li>Promotional offers and discounts</li>
            <li>Hours of operation changes</li>
            <li>Order status notifications</li>
          </ul>

          <h3>Message Frequency and Charges</h3>
          <p>
            Message frequency varies. Message and data rates may apply depending on your mobile plan. Contact your mobile carrier for details.
          </p>

          <h3>Opt-Out</h3>
          <p>
            You can opt out at any time by replying STOP to any message. After opting out, you will receive one final confirmation message. You may also contact us directly to opt out.
          </p>

          <h3>Help</h3>
          <p>
            For assistance, reply HELP to any message or contact us at (832) 762-4706.
          </p>

          <h3>No Condition of Purchase</h3>
          <p>
            Your consent to receive text messages is not a condition of purchasing any goods or services from Laundry Co.
          </p>
        </section>

        <section>
          <h2>Privacy</h2>
          <p>
            Your use of our services is also governed by our Privacy Policy. Please review our <a href="/privacy">Privacy Policy</a> to understand how we collect, use, and protect your information.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Laundry Co shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
          </p>
          <ul>
            <li>Your use or inability to use our services</li>
            <li>Any unauthorized access to or use of our facilities</li>
            <li>Any interruption or cessation of our services</li>
            <li>Any damage to or loss of items</li>
          </ul>
        </section>

        <section>
          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Laundry Co and its owners, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services or violation of these terms.
          </p>
        </section>

        <section>
          <h2>Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2>Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2>Contact Information</h2>
          <p>If you have questions about these Terms of Service, please contact us:</p>
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
