import Image from "next/image";
import styles from "./page.module.css";
import { ContactSection } from "./components/ContactSection";

const features = [
  {
    title: "Self-serve washers",
    description:
      "Bring your baskets, pick a machine, and settle in while the wash gets done.",
  },
  {
    title: "Drop-off help",
    description:
      "Ask about wash-and-fold timing at the counter when your week is already full.",
  },
  {
    title: "Neighborhood hours",
    description:
      "Open daily from 8am to 8pm at 1191 E Main Street in League City.",
  },
];

const progress = [
  {
    label: "Laundromat",
    value: "Daily 8-8",
  },
  {
    label: "Office",
    value: "M-F 10-4",
  },
  {
    label: "League City",
    value: "Main St.",
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
          <Image
            src="/brand/wordmark-leaguecity-below-script.png"
            alt="The Laundry Co. League City"
            width={330}
            height={194}
            priority
            unoptimized
            className={styles.brandmark}
          />
          <h1>League City laundry, washed right.</h1>
          <p>
            Drop in for self-serve laundry, easy wash-and-fold help, and a clean
            neighborhood spot that feels friendly from the first load to the last fold.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#contact">
              Plan a visit
            </a>
            <a className={styles.secondaryButton} href="#studio">
              See services
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroPanel}>
            <div className={styles.panelOverlay} />
            <Image
              src="/images/laundry.png"
              alt="Laundry Co washers and folding area"
              fill
              sizes="(min-width: 960px) 48vw, 100vw"
              priority
              unoptimized
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
            No fuss, no corporate language. Just clean machines, plain answers, and a
            local team keeping laundry day moving.
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
          <h2>Built for regular laundry days.</h2>
          <p>
            The shop is being shaped around real routines: quick starts, clear counters,
            useful folding room, and a place to pause between loads.
          </p>
          <ul className={styles.galleryDetails}>
            <li>Self-serve washers and dryers for everyday loads</li>
            <li>Wash-and-fold support during office hours</li>
            <li>Simple hours, clear service, and no runaround</li>
          </ul>
        </div>
        <div className={styles.galleryGrid}>
          {gallery.map((item) => (
            <figure key={item.alt} className={styles.galleryTile}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 960px) 24vw, (min-width: 640px) 44vw, 100vw"
                unoptimized
                className={styles.galleryImage}
              />
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.processCard}>
          <h2>How Laundry Co works.</h2>
          <ol>
            <li>
              <strong>Arrive &amp; load.</strong> Bring your baskets, choose a washer, and ask for help if you need it.
            </li>
            <li>
              <strong>Wash &amp; wait.</strong> Fold at the counter, take a seat, or step out while the machines do their thing.
            </li>
            <li>
              <strong>Head out clean.</strong> Leave with fresh laundry and a little more of your day intact.
            </li>
          </ol>
        </div>
        <div className={styles.processVisual}>
          <div className={styles.glassCard}>
            <Image
              src="/brand/mascot-washer-character.png"
              alt="Laundry Co washer mascot"
              width={180}
              height={194}
              unoptimized
              className={styles.mascot}
            />
            <p>League City</p>
            <h3>Drop it off. We&apos;ll handle it.</h3>
            <span>Ask at the counter about current wash-and-fold timing.</span>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
