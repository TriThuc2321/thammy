"use client";

import { FormEvent, useState, useRef } from "react";
import "./styles.css";

export default function ContactForm() {
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
      <form ref={formRef} onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label htmlFor="name">Họ và Tên</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số Điện Thoại</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Tin Nhắn</label>
          <textarea id="message" name="message" rows={3} required></textarea>
        </div>
        {submitStatus.message && (
          <div className={`status-message ${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Đang gửi..." : "Gửi Tin Nhắn"}
        </button>
      </form>
    </div>
  );
}
