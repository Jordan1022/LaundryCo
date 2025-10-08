import Image from "next/image";
import styles from "./page.module.css";
import { ContactSection } from "./components/ContactSection";

const features = [
  {
    title: "Bright wash bays",
    description:
      "We are refreshing the floor with easy-to-clean tile, clear signage, and plenty of folding room so laundry day stays relaxed.",
  },
  {
    title: "Simple service menu",
    description:
      "Self-serve washers, drop-off service, and more add-ons coming as we finish the cleanup. Tell us what works for you.",
  },
  {
    title: "Comfortable wait",
    description:
      "Grab a seat, plug in, and enjoy soft lighting while we continue polishing the space. The vibe is calm, coastal, and welcoming.",
  },
];

const progress = [
  {
    label: "Laundromat refresh",
    value: "In progress",
  },
  {
    label: "Service upgrades",
    value: "Rolling out",
  },
  {
    label: "Guest feedback",
    value: "Always welcome",
  },
];

const gallery = [
  {
    src: "/images/laundry2.png",
    alt: "Laundry Co interior view",
  },
  {
    src: "/images/laundry3.png",
    alt: "Laundry Co facility details",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.heroBadge}>Laundry Co | League City</span>
          <h1>A fresh chapter for neighborhood laundry.</h1>
          <p>
            We&apos;re giving the shop a glow-up with new tile accents, tuned machines, and
            an easygoing layout that feels calm and familiar. Drop by while we tidy
            things up and share what would make laundry day better for you.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#contact">
              Plan a visit
            </a>
            <a className={styles.secondaryButton} href="#studio">
              See what&apos;s changing
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroPanel}>
            <div className={styles.panelOverlay} />
            <Image
              src="/images/laundry.png"
              alt="Sunlight across glossy blue tile"
              fill
              priority
              className={styles.heroImage}
            />
          </div>
          <dl className={styles.progressPanel}>
            {progress.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section className={styles.featureSection} id="studio">
        <div className={styles.sectionHeading}>
          <h2>Making laundry calm, clean, and convenient.</h2>
          <p>
            We&apos;re brightening the room, tuning every machine, and adding little comforts so the
            routine feels easy. Come wash, fold, and see the progress for yourself.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <article key={feature.title} className={styles.featureCard}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.galleryCopy}>
          <h2>Making the space feel more welcoming.</h2>
          <p>
            We&apos;re creating a calm, comfortable environment that reflects the easygoing spirit of League City.
            Each visit should feel a little more relaxed and inviting than the last.
          </p>
          <ul className={styles.galleryDetails}>
            <li>Fresh paint, polished floors, and reorganized folding zones</li>
            <li>Comfortable seating with charging ledges</li>
            <li>Warm, even lighting to make late loads easy</li>
          </ul>
        </div>
        <div className={styles.galleryGrid}>
          {gallery.map((item) => (
            <figure key={item.alt} className={styles.galleryTile}>
              <Image src={item.src} alt={item.alt} fill className={styles.galleryImage} />
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.processCard}>
          <h2>How Laundry Co flows right now.</h2>
          <ol>
            <li>
              <strong>Arrive &amp; load.</strong> Bring your baskets, choose a washer, and let our team recommend the best cycle.
            </li>
            <li>
              <strong>Refresh in the space.</strong> Settle into the lounge or explore nearby spots while the machines do their thing.
            </li>
            <li>
              <strong>Share feedback.</strong> Tell us what would make your next visit smoother. We&apos;re improving week by week.
            </li>
          </ol>
        </div>
        <div className={styles.processVisual}>
          <div className={styles.glassCard}>
            <p>Coming soon</p>
            <h3>Neighborhood laundry nights once the refresh wraps.</h3>
            <span>Sign up for updates at the counter so you know when new perks arrive.</span>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
