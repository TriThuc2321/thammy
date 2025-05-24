"use client";

import { TESTIMONIAL_DATA } from "@/services/mock";
import "./styles.css";
import Image from "next/image";
export default function TestimonialsSection() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Khách Hàng Nói Gì</h2>
        <div className="testimonial-list">
          {TESTIMONIAL_DATA.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="avatar-container">
                  <Image
                    src={testimonial.avatar}
                    alt={`Avatar của ${testimonial.name}`}
                    className="avatar"
                  />
                </div>
                <div className="testimonial-info">
                  <h3 className="client-name">{testimonial.name}</h3>
                  <span className="timestamp">{testimonial.time}</span>
                </div>
              </div>

              <div className="quote">{testimonial.comment}</div>

              <div className="flex items-center gap-2 text-sm ">
                <button className="cursor-pointer hover:text-blue-500 ">
                  Thích
                </button>
                <p>-</p>
                <button className="cursor-pointer hover:text-blue-500 ">
                  Phản hồi
                </button>
              </div>

              {testimonial.replies.length > 0 && (
                <div className="testimonial-replies">
                  {testimonial.replies.map((reply) => (
                    <div key={reply.id} className="reply-card">
                      <div className="testimonial-header">
                        <div className="avatar-container">
                          <Image
                            src={reply.avatar}
                            alt={`Avatar của ${reply.name}`}
                            className="avatar small"
                          />
                        </div>
                        <div className="testimonial-info">
                          <h4 className="client-name">{reply.name}</h4>
                          <span className="timestamp">{reply.time}</span>
                        </div>
                      </div>

                      <div className="reply-quote">{reply.comment}</div>

                      <div className="flex items-center gap-2 text-sm ">
                        <button className="cursor-pointer hover:text-blue-500 ">
                          Thích
                        </button>
                        <p>-</p>
                        <button className="cursor-pointer hover:text-blue-500 ">
                          Phản hồi
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
