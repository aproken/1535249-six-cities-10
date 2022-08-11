import ReviewsItem from '../reviews/reviews-item';
import { Reviews } from '../../types/review';

type ReviewsListProps = {
  reviews: Reviews;
}

export default function ReviewsList(props: ReviewsListProps):JSX.Element {
  const {reviews} = props;
  return (
    <ul className="reviews__list">
      {
        reviews.map((review) => (
          <ReviewsItem
            review={review}
            key={review.id}
          />
        ))
      }
    </ul>
  );
}

