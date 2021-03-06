import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./layout/Alert";
import Login from "./Users/Login";
import Listing from "./Listing/Listing";
import Pages from "./Pages/Pages";
import store from "../store";
import Dashboard from "./Dashboard/Dashboard";
import HeaderOwn from "./layout/HeaderOwn";
import { Segment, Sidebar, Container } from "semantic-ui-react";

const alertOptions = {
  timeout: 3000,
  position: "bottom center"
};

class App extends Component {
  handleResponse = data => {
    console.log(data);
  };

  handleError = error => {
    this.setState({ error });
  };

  state = { visible: false };
  handleClick = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <HeaderOwn
              sidebar={this.handleClick}
              visible={this.state.visible}
            />
            <Sidebar.Pushable as={Segment}>
              <Sidebar.Pusher dimmed={this.state.visible}>
                <Segment basic>
                  <Fragment>
                    <Container>
                      <Switch>
                        <Route exact path="/login" component={Login} />
                        <PrivateRoute exact path="/" component={Dashboard} />
                        <PrivateRoute exact path="/pages" component={Pages} />
                        <PrivateRoute
                          exact
                          path="/listing"
                          component={Listing}
                        />
                      </Switch>
                    </Container>
                  </Fragment>
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
            <Alerts />
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
