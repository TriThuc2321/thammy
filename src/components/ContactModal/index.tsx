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
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h3 className="text-4xl text-center font-bold mb-4 text-red-800">
          Nhận ngay ưu đãi
        </h3>
        <div onClick={(e) => e.stopPropagation()}>
          <ContactForm />
        </div>
      </div>
    </div>
  ) : null;
};

export default ContactModal;
