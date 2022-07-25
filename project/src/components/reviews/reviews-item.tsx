import { Review } from '../../types/review';
import { RatingIndex} from '../../const';

type ReviewsItemProps = {
  review: Review,
}

export default function ReviewsItem(props: ReviewsItemProps): JSX.Element {
  const {review} = props;
  const {rating, comment, user, date,} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(rating) * RatingIndex}%`,}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        {/* TODO: человекочитаемая дата */}
        <time className="reviews__time" dateTime={date}>{date}</time>
      </div>
    </li>
  );
}
