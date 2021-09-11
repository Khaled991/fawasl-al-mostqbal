import { ReactElement, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.scss";

const SupportPage = lazy(() => import("./page/SupportPage/SupportPage"));
const HomePage = lazy(() => import("./page/HomePage/HomePage"));

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="pr-8 md:pr-32">
        <Switch>
          <Suspense fallback={<div>loading...</div>}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/support" component={SupportPage} />
          </Suspense>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
