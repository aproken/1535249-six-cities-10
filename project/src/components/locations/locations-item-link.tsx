import { Link} from 'react-router-dom';
import { City } from '../../types/offer';

type LocationsItemLinkProps = {
  city: City;
}

export default function LocationsItemLink(props: LocationsItemLinkProps) {
  const {city} = props;
  return (
    <Link className="locations__item-link" to="#todo">
      <span>{city.name}</span>
    </Link>
  );
}
