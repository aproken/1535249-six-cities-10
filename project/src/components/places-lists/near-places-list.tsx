import { useState, MouseEvent } from 'react';
import PlaceCard, { PlaceCardLocation } from '../place-card/place-card';
import { Offers } from '../../types/offer';

type NearPlacesListProps = {
  nearOffers: Offers;
}

export default function NearPlacesList(props: NearPlacesListProps): JSX.Element {
  const {nearOffers} = props;
  const [/*currentId*/, setIdPlaceCard] = useState(0);

  return (
    <div className="near-places__list places__list">
      {
        nearOffers.map((placeCard) => (
          <PlaceCard
            offer={placeCard}
            key={placeCard.id}
            location={PlaceCardLocation.nearPlaces}
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
