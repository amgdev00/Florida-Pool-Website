"use client";

import { useId, useState } from "react";

type FaqItem = { question: string; answer: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const id = useId();

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div className="faq-item" key={item.question}>
            <button
              type="button"
              className={`faq-q${open ? " open" : ""}`}
              aria-expanded={open}
              aria-controls={`${id}-answer-${index}`}
              id={`${id}-question-${index}`}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              {item.question} <span className="arrow" aria-hidden="true">▼</span>
            </button>
            <div
              className={`faq-a${open ? " open" : ""}`}
              id={`${id}-answer-${index}`}
              aria-labelledby={`${id}-question-${index}`}
              hidden={!open}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
