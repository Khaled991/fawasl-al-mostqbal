import { ReactElement, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Loading from "./components/loading/loading";
import "./App.scss";

const HomePage = lazy(() => import("./page/HomePage/HomePage"));
const SupportPage = lazy(() => import("./page/SupportPage/SupportPage"));
const PartnersPage = lazy(() => import("./page/PartnersPage/PartnersPage"));
const PartnerDetailsPage = lazy(
  () => import("./page/PartnerDetailsPage/PartnerDetailsPage")
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
          </Suspense>
        </Switch>
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
