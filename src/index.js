import React, { StrictMode, Fragment } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

// import { PageHeader } from 'antd';

import PageHeader from 'antd';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const Header = (data) => {
  return <header id="header" />;
};
let data = {
  header: {},
  content: {},
  footer: {},
};
// let loadThemes = require('')

class Page extends React.Component {
  constructor(config) {
    super(config);
    this.config = {}
  }

  render() {
    return (
      <>
        <header>1</header>

        <section>...Content</section>
      </>
    );
  }
}

root.render(
  <>
    <Page />
    <App />
  </>
);
