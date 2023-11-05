import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import Wrapper from './Wrapper';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-sa0me5m2m3g3n8i8.us.auth0.com"
    clientId="9lRaoay9EGYzUPbLyrZv7OKLQlB4L96O"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Wrapper />
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
