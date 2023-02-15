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
      <div className="testimonial-heading">
        <span>Comments</span>
        <h1>Clients Says</h1>
      </div>
      <div className="testimonial-box-container">
        {reviews.map((review, index) => (
          <TestimonialBox key={index} review={review} />
        ))}
      </div>
    </section>
  );
};

const TestimonialBox = ({ review }) => {
  const { name, text, photo } = review;

  return (
    <div className="testimonial-box">
      <div className="box-top">
        <Profile name={name} photo={photo} />
        <Reviews />
      </div>
      <div className="client-comment">
        <p>{text}</p>
      </div>
    </div>
  );
};

const Profile = ({ name, photo }) => {
  return (
    <div className="profile">
      <div className="profile-img">
        <img src={photo} alt={name} />
      </div>
      <div className="name-user">
        <strong>{name}</strong>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="reviews">
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="far fa-star"></i>
    </div>
  );
};

export default Testimonial;
