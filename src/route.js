import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/home";
import Sobre from "./pages/Sobre/sobre";
import Aplicativo from "./pages/Aplicativo/aplicativo";
import Contato from "./pages/Contato/contato";
import Header from "./components/Header/header";
import Erro from "./pages/Erro/erro";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeWithHeader />} />
        <Route path="/sobre" element={<PageWithHeader component={Sobre} />} />
        <Route path="/aplicativo.js" element={<PageWithHeader component={Aplicativo} />} />
        <Route path="/contato" element={<PageWithHeader component={Contato} />} />
        <Route path="*" element={<PageWithHeader component={Erro} />} />
      </Routes>
    </BrowserRouter>
  );
}

function HomeWithHeader() {
  const location = useLocation();
  if (location.pathname === "/") {
    return <Home />;
  } else {
    return (
      <>
        <Header />
        <Home />
      </>
    );
  }
}

function PageWithHeader({ component: Component }) {
  return (
    <>
      <Header />
      <Component />
    </>
  );
}

export default RouterApp;
