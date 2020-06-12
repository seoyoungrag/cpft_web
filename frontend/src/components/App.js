import * as React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../HomePage.react";
import FormElementsPage from "../FormElementsPage.react";
import PricingCardsPage from "../interface/PricingCardsPage.react";
import CardsDesignPage from "../interface/CardsDesignPage.react";
import StoreCardsPage from "./StoreCardsPage.react.js";
import IconPage from "./IconPage.react.js";
import ChartsPage from "../interface/ChartsPage.react";
import GalleryPage from "../GalleryPage.react";
import MapCardsPage from "./MapCardsPage.react";
import BlogPage from "./BlogPage.react";

import BaseContainer from "../containers/BaseContainer";
import {
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  Error400,
  Error401,
  Error403,
  Error404,
  Error500,
  Error503,
  Empty,
  Email,
  ProfilePage,
  Test,
  Main,
  Auth,
  NotFound,
} from "../pages";

//import "tabler-react/dist/Tabler.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route path="/auth/:kind" exact={true} component={Auth} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/400" component={Error400} />
          <Route exact path="/401" component={Error401} />
          <Route exact path="/403" component={Error403} />
          <Route exact path="/404" component={Error404} />
          <Route exact path="/500" component={Error500} />
          <Route exact path="/503" component={Error503} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/cards" component={CardsDesignPage} />
          <Route exact path="/charts" component={ChartsPage} />
          <Route exact path="/email" component={Email} />
          <Route exact path="/empty-page" component={Empty} />
          <Route exact path="/form-elements" component={FormElementsPage} />
          <Route exact path="/forgot-password" component={ForgotPasswordPage} />
          <Route exact path="/gallery" component={GalleryPage} />
          <Route exact path="/icons" component={IconPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/maps" component={MapCardsPage} />
          <Route exact path="/pricing-cards" component={PricingCardsPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/store" component={StoreCardsPage} />
          <Route component={NotFound} />
        </Switch>
        <BaseContainer />
      </div>
    );
  }
}

export default App;
