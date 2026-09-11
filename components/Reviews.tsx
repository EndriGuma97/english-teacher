import { reviews } from "@/lib/content";
import { ReviewsCarousel } from "./ReviewsCarousel";

export function Reviews() {
  return (
    <section id="reviews" className="section bg-stone" aria-labelledby="reviews-title">
      <div className="container">
        <h2 id="reviews-title" className="display h2">
          {reviews.heading}
        </h2>
        <div className="mt-10">
          <ReviewsCarousel items={reviews.items} />
        </div>
      </div>
    </section>
  );
}
