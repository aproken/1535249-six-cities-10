import PlaceCard, { PlaceCardLocation } from '../place-card/place-card';
import LocationsItemLink from '../locations/locations-item-link';
import { Offers, City } from '../../types/offer';

type FavoritesLocationsItemProps = {
  offers: Offers;
  city: City;
}

export default function FavoritesLocationsItem(props: FavoritesLocationsItemProps) {
  const {city, offers} = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <LocationsItemLink city={city}/>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((placeCard) => (
            <PlaceCard
              offer={placeCard}
              key={placeCard.id}
              location={PlaceCardLocation.cities}
            />
          ))
        }
      </div>
    </li>
  );
}
