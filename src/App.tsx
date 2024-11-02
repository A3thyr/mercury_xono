// import { IntlProvider } from "react-intl";
import "./App.scss";
import { Benefits } from "./components/Benefits";
import { Discover } from "./components/Discover";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Partners } from "./components/Partners";
import { Projects } from "./components/Projects";
import { Reviews } from "./components/Reviews";
import { Stats } from "./components/Stats";
// import { useSetLocale } from "./store/useSetLocale";
import { BurgerMenu } from "./components/BurgerMenu";
// import messages_en from "./translations/en.json";
// import messages_ru from "./translations/ru.json";
// import messages_ua from "./translations/ua.json";

function App() {
  return (
    <>
      <Header />
      <BurgerMenu />
      <Intro />
      <Discover />
      <Projects />
      <Stats />
      <Partners />
      <Benefits />
      <Form />
      <Reviews />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
