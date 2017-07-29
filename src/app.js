import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import { IntlProvider } from 'react-intl';
import Intl from 'intl';

import {lang} from './common/BOM';
import localeEnUS from './locale/en-US'
import localeZhCN from './locale/zh-CN'
import reducers from './reducers/index';
import App from './component/index';

// compatible with safari
if (!window.Intl) {
  window.IntlPolyfill = Intl;
}

let locale = localeZhCN;

if (/^en\b/.test(lang)) {
  locale = localeEnUS;
}

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default class Application extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <IntlProvider locale={locale.lang} messages={locale.messages}>
        <Provider store={store}>
          <App/>
        </Provider>
      </IntlProvider>
    );
  }
}
