import styles from "../styles/Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3>Laundry Co</h3>
          <p>League City, TX</p>
        </div>

        <div className={styles.links}>
          <div className={styles.linkColumn}>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="tel:8327624706">(832) 762-4706</a>
              </li>
              <li>
                <a href="mailto:hello@laundryco.com">hello@laundryco.com</a>
              </li>
              <li>1191 E Main Street, League City, TX</li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4>Hours</h4>
            <ul>
              <li>Laundromat: Daily 8am-8pm</li>
              <li>Office: M-F 10am-4pm</li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>&copy; {currentYear} Laundry Co. All rights reserved.</p>
      </div>
    </footer>
  );
}
