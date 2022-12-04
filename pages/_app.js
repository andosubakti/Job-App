import '../styles/globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId="555557885461-ujecqldoq1m26mgma420mqb5vu6lnhen.apps.googleusercontent.com">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default MyApp
