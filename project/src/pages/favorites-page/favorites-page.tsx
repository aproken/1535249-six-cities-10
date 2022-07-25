import { LogoLocation, Logo } from '../../components/logo/logo';
import FavoritesList from '../../components/places-lists/favorites-list';
import { Offers } from '../../types/offer';

type FavoritePageProps = {
  offers: Offers;
}

export default function FavoritesPage(props: FavoritePageProps): JSX.Element {
  const {offers} = props;
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo location={LogoLocation.header} width={81} height={41} />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#todo">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#todo">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo location={LogoLocation.footer} width={64} height={33} />
      </footer>
    </div>
  );
}
