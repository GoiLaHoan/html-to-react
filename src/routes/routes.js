import { Route, Switch } from "react-router-dom";
import * as React from "react";
import Home from "../components/Home";
import { Element } from "../components/Element";
import { Typography } from "../components/Typography";
import { Button } from "../components/Button";
import { Widget } from "../components/Widgets";
import { Table } from "../components/Tables";
import { Form } from "../components/Form";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/element" component={Element} />
        <Route exact path="/typography" component={Typography} />
        <Route exact path="/button" component={Button} />
        <Route exact path="/widgets" component={Widget} />
        <Route exact path="/tables" component={Table} />
        <Route exact path="/form" component={Form} />
        {/* <Route component={Error} /> */}
    </Switch>
);

export default Routes;
