import { ReactElement, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.scss';

const HomePage = lazy(() => import('./page/HomePage/HomePage'));
const DownloadPage = lazy(() => import('./page/DownloadPage/DownloadPage'));
const SupportPage = lazy(() => import('./page/SupportPage/SupportPage'));
const PartnersPage = lazy(() => import('./page/PartnersPage/PartnersPage'));
const PartnerDetailsPage = lazy(
  () => import('./page/PartnerDetailsPage/PartnerDetailsPage')
);

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="background pr-0 md:pr-32">
        <Switch>
          <Suspense fallback={<div>loading...</div>}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/support" component={SupportPage} />
            <Route exact path="/partners" component={PartnersPage} />
            <Route
              exact
              path="/partnerDetails"
              component={PartnerDetailsPage}
            />
            <Route exact path="/download" component={DownloadPage} />
          </Suspense>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
