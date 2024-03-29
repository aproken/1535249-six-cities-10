import { useRef, useEffect, MutableRefObject } from 'react';
import { Icon, Marker} from 'leaflet';
import classNames from 'classnames';

import { City, Offer, Offers } from '../../types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offers;
  selectedOffer: Offer | undefined ;
  location: MapLocation;
};

export enum MapLocation {
  cities = 'cities',
  nearPlaces = 'nearPlaces',
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map(props: MapProps): JSX.Element {
  const {city, offers, selectedOffer, location} = props;
  const mapRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const map = useMap(mapRef, city);
  const mapClassName = classNames('map', {
    'cities__map': location === MapLocation.cities,
    'property__map': location === MapLocation.nearPlaces,
  });

  useEffect(() => {

    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker.setIcon(
          selectedOffer !== undefined && offer.id === selectedOffer.id
            ? currentCustomIcon
            : defaultCustomIcon
        ).addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      //style={{width:'512px', height: '512px'}}
      ref={mapRef}
      className={mapClassName}
    >
    </section>
  );
}
