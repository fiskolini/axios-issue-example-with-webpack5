import React, {Component} from 'react';
import propTypes from 'prop-types';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import App from './App';
import {ApolloProvider} from "@apollo/client";
import {client} from "../plugins/apollo-client";

export default class Root extends Component {
  render() {
    const {store, history} = this.props;
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ConnectedRouter history={history}>
            <App/>
          </ConnectedRouter>
        </ApolloProvider>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: propTypes.object.isRequired,
  history: propTypes.object.isRequired
};
