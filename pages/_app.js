import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/app.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

library.add(fab, faEnvelope);
export default MyApp;
