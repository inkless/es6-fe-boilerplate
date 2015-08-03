import React from 'react';
import AppContainer from './components/app-container.jsx';

export default class App {
  constructor(node) {
    this.node = node;
  }
  run() {
    React.render(React.createElement(AppContainer, {text: 'Hello World'}), this.node);
  }
}
