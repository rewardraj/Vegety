import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Testimonial = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviews = [
    {
      name: "John Doe",
      text: "This product is amazing! I highly recommend it.",
      photo: "/src/assets/images/customer1.jpeg",
    },
    {
      name: "Jane Doe",
      text: "I've been using this product for a while now and I am so happy with it.",
      photo: "/src/assets/images/customer2.jpeg",
    },
    {
      name: "Bob Smith",
      text: "I never write reviews, but this product is just that good. 10/10!",
      photo: "/src/assets/images/customer3.jpeg",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setReviewIndex((reviewIndex + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [reviewIndex, reviews.length]);

  const review = reviews[reviewIndex];

  return (
    <section className="testimonial__Section">
      <div className="ctaOne__Text">
        <h3>What Our Customers Say</h3>
      </div>
    <TransitionGroup className="customer-reviews">
      <CSSTransition key={reviewIndex} timeout={800} classNames="review">
        <div>
          <img src={review.photo} alt={`${review.name}'s photo`} />
          <div className="review-text">
            <p>"{review.text}"</p>
            <p>- {review.name}</p>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
    </section>
  );
};

export default Testimonial;
