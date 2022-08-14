import classNames from 'classnames';
import { MouseEvent } from 'react';
import { Link} from 'react-router-dom';
import { Offer } from '../../types/offer';
import { RatingIndex } from '../../const';

type PropertyPageProps = {
  offer: Offer;
  location: PlaceCardLocation;
  onMouseOver?: (evt: MouseEvent) => void;
}

export enum PlaceCardLocation {
  favorites = 'favorites',
  cities = 'cities',
  nearPlaces = 'nearPlaces',
}

export default function PlaceCard(props: PropertyPageProps): JSX.Element {
  const {offer, location, onMouseOver, } = props;
  const {isPremium, previewImage, price, rating, title, type, id, } = offer;

  const placeCardClass = classNames('place-card', {
    'favorites__card': location === PlaceCardLocation.favorites,
    'cities__card': location === PlaceCardLocation.cities,
    'near-places__card': location === PlaceCardLocation.nearPlaces,
  });

  const placeCardImageClass = classNames('place-card__image-wrapper', {
    'favorites__image-wrapper': location === PlaceCardLocation.favorites,
    'cities__image-wrapper': location === PlaceCardLocation.cities,
    'near-places__image-wrapper': location === PlaceCardLocation.nearPlaces,
  });

  return (
    <article className={placeCardClass} onMouseOver={onMouseOver}>
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className={placeCardImageClass}>
        <Link to="#todo">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ { width: `${Math.round(rating) * RatingIndex}%`, } }></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/:${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
