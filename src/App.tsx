import { ReactElement, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Loading from "./components/loading/loading";
import "./App.scss";

const SupportPage = lazy(() => import("./page/SupportPage/SupportPage"));
const HomePage = lazy(() => import("./page/HomePage/HomePage"));

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <div className="absolute">
        <NavBar />
        {/* <div className="z-1"> */}
        <Switch>
          <Suspense fallback={<Loading />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/support" component={SupportPage} />
          </Suspense>
        </Switch>
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
