import type { Metadata } from "next";
import Link from "next/link";
import { PoolGallery } from "@/components/pool-gallery";
import styles from "./gallery.module.css";

export const metadata: Metadata = {
  title: "Pool Gallery | Our Work in South Florida",
  description: "Explore Florida Pool Co.’s pool care gallery, from sparkling backyard pools to green pool transformations and professional weekly service.",
};

export default function GalleryPage() {
  return (
    <div className={styles.page}>
      <section className={styles.collection} aria-labelledby="gallery-title">
        <div className={styles.intro}>
          <span className={styles.eyebrow}><span /> Our work</span>
          <div className={styles.headingRow}>
            <h1 id="gallery-title">Pool Gallery<span>.</span></h1>
            <p>A closer look at the pools we care for.<br />A little care. A whole lot of blue.</p>
          </div>
        </div>

        <PoolGallery />

        <div className={styles.collectionNote}>
          <span>Clean water. Beautiful backyards.</span>
          <span>South Florida, through our lens.</span>
        </div>
      </section>

      <section className={styles.invitation} aria-labelledby="invitation-title">
        <div>
          <span className={styles.invitationLabel}>YOUR POOL COULD BE NEXT</span>
          <h2 id="invitation-title">More pool days.<br />Less to worry about.</h2>
          <p>Let us take care of the water. You make the memories.</p>
        </div>
        <Link href="/contact" className={styles.contactLink}>
          Get your free inspection <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </div>
  );
}
