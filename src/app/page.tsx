import Image from "next/image";
import styles from "./page.module.css";
import { ContactSection } from "./components/ContactSection";

const featureData = [
  {
    title: "Sparkling Clean Results",
    description:
      "High-efficiency washers and eco-friendly detergents give you a brighter clean with less waste.",
  },
  {
    title: "Wash & Fold Concierge",
    description:
      "Drop-off, pick-up, or delivery - choose whatever works best and we'll handle the rest with care.",
  },
  {
    title: "Tech-Enabled Convenience",
    description:
      "Track load progress, reserve machines, and get notified when your clothes are ready to roll.",
  },
];

const highlights = [
  {
    label: "Same-day turns",
    value: "90%",
  },
  {
    label: "Customers recommending",
    value: "4.9/5",
  },
  {
    label: "Loads handled weekly",
    value: "850+",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Neighborhood favorite | Est. 1998</span>
          <h1>Your uptown laundromat, refreshed.</h1>
          <p>
            Laundry Co is under new ownership, and we're bringing modern machines,
            a polished space, and friendly service to every single wash day.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#contact">
              Get in touch
            </a>
            <a className={styles.secondaryButton} href="#services">
              See services
            </a>
          </div>
          <dl className={styles.heroStats}>
            {highlights.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className={styles.heroIllustration}>
          <div className={styles.machineMock}>
            <div className={styles.machineCircle} />
            <div className={styles.machineHandle} />
          </div>
          <div className={styles.bubbleOne} />
          <div className={styles.bubbleTwo} />
        </div>
      </header>

      <section id="services" className={styles.featuresSection}>
        <div className={styles.sectionHeading}>
          <h2>Clean clothes, clean conscience.</h2>
          <p>
            Whether you're a busy family, a local business, or part of the
            community, we have a service built just for you.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {featureData.map((feature) => (
            <article key={feature.title} className={styles.featureCard}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.processCard}>
          <h2>How it works</h2>
          <ol>
            <li>
              <strong>Show up or schedule.</strong> Reserve a machine or set a
              pick-up time in under two minutes.
            </li>
            <li>
              <strong>We handle the heavy lifting.</strong> Sort, pretreat, wash,
              dry, fold, and package - done.
            </li>
            <li>
              <strong>Enjoy your fresh start.</strong> Clothes arrive same day or
              right when the dryers stop.
            </li>
          </ol>
        </div>
        <div className={styles.processImage}>
          <Image
            src="https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1080&q=80"
            alt="Neatly folded laundry with a navy blue towel on top"
            width={640}
            height={480}
          />
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
