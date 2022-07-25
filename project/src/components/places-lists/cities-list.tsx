import { useState, MouseEvent } from 'react';
import PlaceCard, { PlaceCardLocation } from '../place-card/place-card';
import { Offers } from '../../types/offer';

type PlacesListProps = {
  offers: Offers;
}

export default function PlacesList(props: PlacesListProps): JSX.Element {
  const {offers,} = props;
  const [/*currentId*/, setIdPlaceCard] = useState(0);
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((placeCard) => (
          <PlaceCard
            offer={placeCard}
            key={placeCard.id}
            location={PlaceCardLocation.cities}
            onMouseOver={(evt: MouseEvent) => {
              evt.preventDefault();
              setIdPlaceCard(placeCard.id);
            }}
          />
        ))
      }
    </div>
  );
}
