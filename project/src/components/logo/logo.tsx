import { Link } from 'react-router-dom';
import classNames from 'classnames';

type LogoProps = {
  location: LogoLocation,
  width: number,
  height: number,
}

export enum LogoLocation {
  header = 'header',
  footer = 'footer',
}

export function Logo({location, width, height}: LogoProps): JSX.Element {
  const logoClass = classNames({
    'header__logo': location === LogoLocation.header,
    'footer__logo': location === LogoLocation.footer
  });

  const logoLinkClass = classNames({
    'header__logo-link': location === LogoLocation.header,
    'footer__logo-link': location === LogoLocation.footer
  });

  return (
    <Link className={logoLinkClass} to="/">
      <img className={logoClass} src="img/logo.svg" alt="6 cities logo" width={width} height={height} />
    </Link>
  );
}
