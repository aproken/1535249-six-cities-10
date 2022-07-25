import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import MainPage from '../../pages/main-page/main-page';
import AuthPage from '../../pages/auth-page/auth-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import PropertyPage from '../../pages/property-page/property-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

import { Offers } from '../../types/offer';
import { Review } from '../../types/review';

type AppPageProps = {
  offersCount: number;
  offers: Offers;
  reviews: Review[],
}

export default function App(props: AppPageProps): JSX.Element {
  const {offersCount, offers, reviews} = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage offersCount={offersCount} offers={offers} />} />
        <Route
          path={AppRoute.Login}
          element={<AuthPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyPage offer={offers[0]} reviews={reviews}/>}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
