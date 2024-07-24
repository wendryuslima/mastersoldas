import Main from "./components/main/main.component";
import Header from "./components/header/header.component";
import About from "./components/about/about.component";
import Depoiments from "./components/depoiments/depoiments.components";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Depoiments />
      <Footer/>
    </>
  );
};

export default App;
