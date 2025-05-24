"use client";

import { TESTIMONIAL_DATA } from "@/services/mock";
import "./styles.css";
import { useState } from "react";
import Image from "next/image";
export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState(TESTIMONIAL_DATA);

  // Function to handle likes
  const handleLike = (id: number, isReply = false, parentId?: number) => {
    setTestimonials((prev) => {
      return prev.map((item) => {
        if (!isReply && item.id === id) {
          // Like a main testimonial
          return { ...item, likes: item.likes + 1 };
        } else if (isReply && parentId) {
          // Like a reply
          if (item.id === parentId) {
            return {
              ...item,
              replies: item.replies.map((reply) =>
                reply.id === id ? { ...reply, likes: reply.likes + 1 } : reply
              ),
            };
          }
        }
        return item;
      });
    });
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Khách Hàng Nói Gì</h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial) => (
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

              <div className="testimonial-actions">
                <button
                  className="like-button"
                  onClick={() => handleLike(testimonial.id)}
                >
                  <span className="like-icon">❤️</span>
                  <span className="like-count">{testimonial.likes}</span>
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

                      <div className="testimonial-actions">
                        <button
                          className="like-button"
                          onClick={() =>
                            handleLike(reply.id, true, testimonial.id)
                          }
                        >
                          <span className="like-icon">❤️</span>
                          <span className="like-count">{reply.likes}</span>
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
