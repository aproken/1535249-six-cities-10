import MainPage from '../../pages/main-page/main';

type AppPageProps = {
  offersCount: number;
}

export default function App({offersCount}: AppPageProps): JSX.Element {
  return (
    <MainPage offersCount = {offersCount}/>
  );
}
