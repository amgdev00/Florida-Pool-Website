"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import styles from "@/app/gallery/gallery.module.css";

// Add or replace collection photos here. Keep descriptions tied to the image;
// do not assign customer names or project locations without verified details.
const photos = [
  {
    src: "/images/pool-70d7d90275c5.png",
    alt: "Clear blue swimming pool surrounded by tropical landscaping and a sunlit patio",
    title: "Your own little escape",
    category: "Poolside living",
    position: "center 58%",
    wide: true,
  },
  {
    src: "/images/pool-54834147b263.png",
    alt: "Sparkling rectangular backyard pool framed by palm trees and lush greenery",
    title: "Blue, all the way through",
    category: "Crystal clear water",
    position: "center",
  },
  {
    src: "/images/pool-7fa031c4c330.png",
    alt: "Sunlight reflecting across clean blue pool water beside a tropical garden",
    title: "Made for a slow afternoon",
    category: "The details that matter",
    position: "center",
  },
  {
    src: "/images/pool-98095a77d73c.png",
    alt: "Florida Pool Co. technician cleaning a backyard pool with professional equipment",
    title: "Care in every visit",
    category: "Professional pool service",
    position: "45% center",
  },
  {
    src: "/images/pool-44a98223d9b5.png",
    alt: "Side by side view of a curved pool with green water and clear blue water",
    title: "A fresh start",
    category: "Before & after",
    position: "center",
  },
  {
    src: "/images/pool-79afffac87ff.png",
    alt: "Side by side comparison of a pool with fallen leaves and the same setting with clean water",
    title: "Back to swim-ready",
    category: "Before & after",
    position: "center",
  },
  {
    src: "/images/pool-4734939f0303.png",
    alt: "Professional pool cleaning tools and equipment beside a clear swimming pool",
    title: "Ready for the next pool day",
    category: "Behind the clean",
    position: "center 55%",
    wide: true,
  },
];

export function PoolGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const captionId = useId();
  const isOpen = selected !== null;
  const photo = photos[selected ?? 0];

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  function open(index: number) {
    setSelected(index);
    dialog.current?.showModal();
  }

  function step(direction: number) {
    setSelected(index => ((index ?? 0) + direction + photos.length) % photos.length);
  }

  return (
    <>
      <div className={styles.mosaic}>
        {photos.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className={`${styles.tile} ${item.wide ? styles.wide : ""}`}
            onClick={() => open(index)}
            aria-label={`View photo ${index + 1}: ${item.title}`}
            aria-haspopup="dialog"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={item.wide
                ? "(max-width: 600px) 100vw, (max-width: 900px) 100vw, 66vw"
                : "(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"}
              loading={index < 2 ? "eager" : "lazy"}
              style={{ objectFit: "cover", objectPosition: item.position }}
            />
            <span className={styles.tileShade} />
            <span className={styles.photoNumber}>{String(index + 1).padStart(2, "0")}</span>
            <span className={styles.expand} aria-hidden="true">↗</span>
            <span className={styles.caption}>
              <span>{item.category}</span>
              <strong>{item.title}</strong>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        className={styles.viewer}
        aria-label="Pool photo viewer"
        aria-describedby={captionId}
        onClose={() => setSelected(null)}
        onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}
        onKeyDown={event => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            step(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
      >
        <button type="button" className={styles.close} aria-label="Close photo viewer" onClick={() => dialog.current?.close()}>×</button>
        {isOpen && (
          <div className={styles.viewerContent}>
            <div className={styles.viewerImage}>
              <Image key={photo.src} src={photo.src} alt={photo.alt} fill sizes="95vw" style={{ objectFit: "contain" }} />
            </div>
            <div className={styles.viewerFooter}>
              <div id={captionId} aria-live="polite">
                <span>{photo.category}</span>
                <h2>{photo.title}</h2>
              </div>
              <div className={styles.viewerControls}>
                <button type="button" aria-label="Previous photo" onClick={() => step(-1)}>←</button>
                <span aria-live="polite">{String((selected ?? 0) + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>
                <button type="button" aria-label="Next photo" onClick={() => step(1)}>→</button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
