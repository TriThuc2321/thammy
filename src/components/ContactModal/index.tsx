"use client";

import { useEffect, useRef, useState } from "react";
import ContactForm from "../ContactForm";
import { useClickOutside } from "@/hooks";

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside({ ref: modalRef, callback: () => setIsOpen(false) });
  useEffect(() => {
    setTimeout(() => setIsOpen(true), 4000);
  }, []);

  return isOpen ? (
    <div className="z-50 fixed inset-0 pt-32 flex items-center justify-center bg-black/60">
      <div
        ref={modalRef}
        className="bg-white relative p-6 rounded-lg shadow-lg w-full lg:max-w-xl max-w-sm"
      >
        <p className="font-waterBrush mx-auto text-3xl text-center text-[#453a15] font-medium">
          Chân Mày Sương Mai
        </p>
        <h3 className="text-4xl font-noto text-center font-bold mb-4 text-[#721c24]">
          Nhận ngay ưu đãi
        </h3>

        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={() => setIsOpen(false)}
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div onClick={(e) => e.stopPropagation()}>
          <ContactForm />
        </div>
      </div>
    </div>
  ) : null;
};

export default ContactModal;
