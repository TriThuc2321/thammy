"use client";

import { useEffect, useRef, useState } from "react";
import ContactForm from "../ContactForm";
import { useClickOutside } from "@/hooks";
import Image from "next/image";
import modalbg from "@/assets/images/modalbg.png";

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
        className="relative p-6 rounded-lg shadow-lg w-full lg:max-w-[680px] max-w-sm"
      >
        <Image
          src={modalbg}
          alt=""
          fill
          className="absolute inset-0 -z-10 rounded-3xl"
          priority
        />

        <p className="absolute top-[200px] right-6 text-white text-xl font-bold text-center line-through">
          (Giá gốc 2.800.000đ)
        </p>

        <button
          className="absolute cursor-pointer top-3 right-3 text-white hover:text-gray-500"
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
        <div className="mt-60" onClick={(e) => e.stopPropagation()}>
          <ContactForm isModal />
        </div>
      </div>
    </div>
  ) : null;
};

export default ContactModal;
