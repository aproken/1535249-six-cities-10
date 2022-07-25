//import { useState, MouseEvent } from 'react';
import FavoritesLocationsItem from '../favorites/favorites-locations-item';
import { Offers, Offer, City } from '../../types/offer';

type FavoritesListProps = {
  offers: Offers;
}

export default function FavoritesList(props: FavoritesListProps) {
  const {offers} = props;
  const favoritesList: Map<City, Offers> = offers.reduce((accumulator, offer: Offer) => {
    if (accumulator.has(offer.city)) {
      accumulator.get(offer.city).push(offer);
    } else {
      accumulator.set(offer.city, offer);
    }
    return accumulator;
  }, new Map());

  return (
    <ul className="favorites__list">
      {
        Array.from(favoritesList).map(([city, favoritesPlaces]) => (
          <FavoritesLocationsItem offers={favoritesPlaces} city={city} key={city.name} />
        ))
      }
    </ul>
  );
}
