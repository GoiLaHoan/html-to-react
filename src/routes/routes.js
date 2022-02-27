import { Route, Switch } from "react-router-dom";
import * as React from "react";
import Home from "../components/Home/Home";
import { Element } from "../components/Element";
import { Typography } from "../components/Typography";
import { Button } from "../components/Button";
import { Widget } from "../components/Widgets";
import { Table } from "../components/Tables";
import { Form } from "../components/Form";

import SignIn from "../components/pages/SignIn";
import SignUp from "../components/pages/SignUp";
import BlackPage from "../components/pages/BlackPage";
import Error from "../components/pages/Error";
import Chart from "../components/Chart";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/element" component={Element} />
        <Route exact path="/typography" component={Typography} />
        <Route exact path="/button" component={Button} />
        <Route exact path="/widgets" component={Widget} />
        <Route exact path="/tables" component={Table} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/chart" component={Chart} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/404" component={Error} />
        <Route exact path="/blackpage" component={BlackPage} />
    </Switch>
);

export default Routes;
