import { ReactElement, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Loading from './components/loading/loading';
import './App.scss';
import './test.scss';
// import Footer from "./components/Footer/Footer";

const HomePage = lazy(() => import('./page/HomePage/HomePage'));
const DownloadPage = lazy(() => import('./page/DownloadPage/DownloadPage'));
const SupportPage = lazy(() => import('./page/SupportPage/SupportPage'));
const PartnersPage = lazy(() => import('./page/PartnersPage/PartnersPage'));
const ServicesPage = lazy(() => import('./page/ServicesPage/ServicesPage'));
const PartnerDetailsPage = lazy(
  () => import('./page/PartnerDetailsPage/PartnerDetailsPage')
);
const AnswerOfQuestion = lazy(
  () => import('./page/SupportPage/subpage/AnswerOfQuestion')
);

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="background pr-0 md:pr-32">
        <Switch>
          <Suspense fallback={<Loading />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/support" component={SupportPage} />
            <Route exact path="/partners" component={PartnersPage} />
            <Route
              exact
              path="/partnerDetails"
              component={PartnerDetailsPage}
            />
            <Route
              exact
              path="/support/AnswerOfQuestion/:id"
              component={AnswerOfQuestion}
            />
            <Route exact path="/download" component={DownloadPage} />
            <Route exact path="/services" component={ServicesPage} />
            <Route exact path="/test" component={GridTest} />
          </Suspense>
        </Switch>
      </div>
      {/* TODO footer */}
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;

const GridTest = () => (
  <div className="grid gap-4 h-screen grid-partner-details-page">
    <div className="title-grid">title</div>
    <div className="info-grid">info</div>
    <div className="logo-grid">logo</div>
    <div className="map-grid">map</div>
  </div>
);
