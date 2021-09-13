import { ReactElement, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Loading from "./components/loading/loading";
import "./App.scss";

<<<<<<< HEAD
const HomePage = lazy(() => import('./page/HomePage/HomePage'));
const DownloadPage = lazy(() => import('./page/DownloadPage/DownloadPage'));
const SupportPage = lazy(() => import('./page/SupportPage/SupportPage'));
const PartnersPage = lazy(() => import('./page/PartnersPage/PartnersPage'));
const PartnerDetailsPage = lazy(
  () => import('./page/PartnerDetailsPage/PartnerDetailsPage')
);
=======
const SupportPage = lazy(() => import("./page/SupportPage/SupportPage"));
const HomePage = lazy(() => import("./page/HomePage/HomePage"));
>>>>>>> 7b3aa969b87a2e28d9218366b7907ad25e9584a5

const App = (): ReactElement => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <NavBar />
      <div className="background pr-0 md:pr-32">
=======
      <div className="absolute">
        <NavBar />
        {/* <div className="z-1"> */}
>>>>>>> 7b3aa969b87a2e28d9218366b7907ad25e9584a5
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
            <Route exact path="/download" component={DownloadPage} />
          </Suspense>
        </Switch>
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
