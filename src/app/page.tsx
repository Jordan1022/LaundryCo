import Image from "next/image";
import styles from "./page.module.css";
import { ContactSection } from "./components/ContactSection";

const features = [
  {
    title: "Bright wash bays",
    description:
      "Clean tile floors, clear signage, and plenty of folding room so laundry day stays relaxed. Everything you need, ready to go.",
  },
  {
    title: "Simple service menu",
    description:
      "Self-serve washers, drop-off service, and convenient add-ons. Tell us what works for you and we'll make it happen.",
  },
  {
    title: "Comfortable wait",
    description:
      "Grab a seat, plug in, and enjoy soft lighting while your clothes spin. The vibe is calm, coastal, and welcoming.",
  },
];

const progress = [
  {
    label: "Laundromat",
    value: "Open daily",
  },
  {
    label: "Service upgrades",
    value: "Now available",
  },
  {
    label: "Guest feedback",
    value: "Always welcome",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?w=800&auto=format&fit=crop&q=80",
    alt: "Clean laundromat interior with rows of washers",
  },
  {
    src: "https://images.unsplash.com/photo-1604335398980-ededcadcc37d?w=800&auto=format&fit=crop&q=80",
    alt: "Bright front-load washing machines ready to use",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.heroBadge}>Laundry Co | League City</span>
          <h1>Your neighborhood laundromat, open and ready.</h1>
          <p>
            Fresh tile accents, tuned machines, and an easygoing layout that feels calm
            and familiar. Stop in today — we&apos;re here to make laundry day better for you.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#contact">
              Visit us today
            </a>
            <a className={styles.secondaryButton} href="#studio">
              See our services
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroPanel}>
            <div className={styles.panelOverlay} />
            <Image
              src="https://images.unsplash.com/photo-1550025005-05b9002486c5?w=900&auto=format&fit=crop&q=80"
              alt="Clean white washers and dryers in a bright laundromat"
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
          <h2>Calm, clean, and convenient — every visit.</h2>
          <p>
            Bright rooms, tuned machines, and little comforts that make the routine feel easy.
            Come wash, fold, and see for yourself.
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
          <h2>A space that feels like your neighborhood.</h2>
          <p>
            A calm, comfortable environment that reflects the easygoing spirit of League City.
            Every visit feels relaxed and inviting.
          </p>
          <ul className={styles.galleryDetails}>
            <li>Fresh paint, polished floors, and organized folding zones</li>
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
          <h2>How Laundry Co works.</h2>
          <ol>
            <li>
              <strong>Arrive &amp; load.</strong> Bring your baskets, choose a washer, and let our team recommend the best cycle.
            </li>
            <li>
              <strong>Relax while we run.</strong> Settle into the lounge or explore nearby spots while the machines do their thing.
            </li>
            <li>
              <strong>Grab &amp; go.</strong> Pick up your fresh, clean laundry and head out. It&apos;s that easy.
            </li>
          </ol>
        </div>
        <div className={styles.processVisual}>
          <div className={styles.glassCard}>
            <p>Now offering</p>
            <h3>Drop-off wash &amp; fold service, available weekdays.</h3>
            <span>Hand off your laundry and pick it up fresh. Ask at the counter or send us a message for details.</span>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
