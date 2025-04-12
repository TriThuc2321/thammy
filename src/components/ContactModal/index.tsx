"use client";

import { useEffect, useState } from "react";
import ContactForm from "../ContactForm";

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 4000);
  }, []);

  return isOpen ? (
    <div
      onClick={() => setIsOpen(false)}
      className="z-10 fixed inset-0 flex items-center justify-center bg-black/60"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h3 className="text-4xl text-center font-bold mb-4 text-red-800">
          Nhận ngay ưu đãi
        </h3>

        <ContactForm />
      </div>
    </div>
  ) : null;
};

export default ContactModal;
