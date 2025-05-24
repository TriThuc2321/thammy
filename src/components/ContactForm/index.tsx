"use client";

import { FormEvent, useState, useRef } from "react";
import "./styles.css";

type ContactFormProps = {
  isModal?: boolean;
};

export default function ContactForm({ isModal = false }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const formValues = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      console.info(JSON.stringify(formValues));
      const data = await response.json();
      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Tin nhắn đã được gửi thành công!",
        });
        formRef.current?.reset();
      } else {
        throw new Error(data.message || "Có lỗi xảy ra");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message: "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form">
      <form
        className="flex flex-col"
        ref={formRef}
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name" className={`${isModal ? "text-white" : ""}`}>
            Họ và Tên
          </label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className={`${isModal ? "text-white" : ""}`}>
            Email
          </label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className={`${isModal ? "text-white" : ""}`}>
            Số Điện Thoại
          </label>
          <input type="tel" id="phone" name="phone" />
        </div>
        {!isModal && (
          <div className="form-group">
            <label
              htmlFor="message"
              className={`${isModal ? "text-white" : ""}`}
            >
              Tin Nhắn
            </label>
            <textarea id="message" name="message" rows={3} required></textarea>
          </div>
        )}

        {submitStatus.message && (
          <div className={`status-message ${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}
        <button
          type="submit"
          className={`btn ${
            isModal ? "!bg-[#f16a6a] animate-zoom  w-[260px] mx-auto mt-4 " : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Đang gửi..." : "Đặt Lịch Ngay"}
        </button>
      </form>
    </div>
  );
}
