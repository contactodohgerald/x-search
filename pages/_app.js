import "../styles/tailwind.css";
import "../styles/slick.css";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, Slide } from 'react-toastify';
import "vercel-toast/css";

function MyApp({ Component, pageProps }) {
  return <>
      <Component {...pageProps} />
      <ToastContainer
        className="impct-toast"
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable={false}
        pauseOnHover
        transition={Slide}
      />
  </>
}

export default MyApp;
