import { useState } from "react";
import "../styles/globals.css";
import { Theme } from "react-daisyui";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [modeSelected, setModeSelected] = useState("halloween");

  const mode = (preferredMode) => {
    console.log(preferredMode);
    setModeSelected(preferredMode);
  };

  return (
    <>
      <Theme dataTheme={modeSelected}>
        <Navbar mode={mode} modeSelected={modeSelected} />{" "}
        <Component {...pageProps} /> <Footer />
      </Theme>
    </>
  );
}

export default MyApp;
