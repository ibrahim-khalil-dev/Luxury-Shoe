import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container text-center px-4 sm:px-8">
      <h3 className="text-5xl font-bold max-sm:text-3xl">
        What OUR <span className="text-[#FF6452]">Customer</span> Say?
      </h3>
      <p className="text-[#6D6D6D] mt-4 max-sm:max-w-xl mx-auto text-center">
        Hear genuine stories from our satisfied customers.
      </p>

      <div className="mt-24 flex flex-wrap justify-center gap-12">
        {reviews.map((review, index) => (
          <div
            key={review.customerName}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="800"
          >
            <ReviewCard
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
