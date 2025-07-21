import React from 'react';

const testimonials = [
  {
    text: "NexGen made my tax season completely stress-free. They explained everything clearly and helped me save more than expected.",
    author: "— Emily T., Freelancer",
  },
  {
    text: "Switching to NexGen CPA was the best move we made. They're not just accountants; they’re true partners in our business growth.",
    author: "— Raj P., Startup Founder",
  },
  {
    text: "NexGen CPA gave me complete peace of mind during tax season. Their advice was clear, actionable, and helped me avoid costly mistakes.",
    author: "— Anita S., Online Boutique Founder",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">"{item.text}"</p>
            <p className="testimonial-author">{item.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
