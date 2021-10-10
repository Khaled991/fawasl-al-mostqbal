import { ReactElement, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Loading from './components/loading/loading';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import BusinessPartnersPage from './page/BusinessPartnersPage/BusinessPartnersPage';

const PartnerDetailsPage = lazy(
  () => import('./page/PartnerDetailsPage/PartnerDetailsPage')
);
const AnswerOfQuestion = lazy(
  () => import('./page/SupportPage/subpage/AnswerOfQuestion')
);
const HomePage = lazy(() => import('./page/HomePage/HomePage'));
const DownloadPage = lazy(() => import('./page/DownloadPage/DownloadPage'));
const SupportPage = lazy(() => import('./page/SupportPage/SupportPage'));
const PartnersPage = lazy(() => import('./page/PartnersPage/PartnersPage'));
const ServicesPage = lazy(() => import('./page/ServicesPage/ServicesPage'));
const NotFoundPage = lazy(() => import('./page/NotFoundPage/NotFoundPage'));
const VideosPage = lazy(() => import('./page/VideosPage/VideosPage'));

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <div className="pr-0 md:pr-32 pt-16 md:pt-0">
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/support" component={SupportPage} />
              <Route exact path="/partners" component={PartnersPage} />
              <Route
                exact
                path="/partners/:id"
                component={PartnerDetailsPage}
              />
              <Route
                exact
                path="/support/AnswerOfQuestion/:id"
                component={AnswerOfQuestion}
              />
              <Route exact path="/download" component={DownloadPage} />
              <Route exact path="/services" component={ServicesPage} />
              <Route exact path="/videos" component={VideosPage} />
              <Route
                exact
                path="/businessPartners"
                component={BusinessPartnersPage}
              />
              {/* <Route exact path="/404" component={NotFoundPage} />
                <Redirect to="/404" /> */}
              <Route component={NotFoundPage} />
            </Switch>
          </Suspense>
        </div>
        {/* TODO footer */}
        {/* <Footer /> */}
      </BrowserRouter>
    </Provider>
  );
};

export default App;
