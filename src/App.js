import React, { lazy, Suspense } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Normalize, DefaultStyles } from './styles/index';

const Main = lazy(() => import(/* webpackChunkName: "MainApp" */'./views/main/index'));

const SuspenseRoute = (props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route {...props} />
    </Suspense>
  )
}

/**
 * Set default global CSS styles
 * - Normalized stylesheets
 * - Default app styles
 */
const GlobalStyle = createGlobalStyle`
  ${Normalize}
  ${DefaultStyles}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <SuspenseRoute exact path="/" component={Main} />
      </Switch>
    </>
  );
}

export default App;
