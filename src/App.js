import React from "react";
import { Container } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer"
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/Profile/Profile"
import Members from './components/Profile/Members'
import Investment from "./components/Report/Investment";
import Beneficiary from "./components/Report/Beneficiary";
import Rent from "./components/Report/Rent"
import QuarterUpdate from "./components/Report/QuarterUpdate"
import Property from "./components/Report/Property"
import Quarter from "./components/Report/Quarter"
import Edit from './components/Report/Edit'


const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/members" exact component={Members} />
          <Route path="/investment" exact component={Investment} />
          <Route path="/beneficiary" exact component={Beneficiary} />
          <Route path="/quarter" exact component={Quarter} />
          <Route path="/property" exact component={Property} />
          <Route path="/rent" exact component={Rent} />
          <Route path="/quarterupdate" exact component={QuarterUpdate} />
          <Route path="/edit" exact component={Edit} />

        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
