import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Analysis from "./pages/Analysis";
import Contexts from "./pages/Contexts";
import Contents from "./pages/Contents";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Analysis />} exact />
          <Route path="/contexts/" element={<Contexts />} />
          <Route path="/contents/" element={<Contents />} />
          <Route element={<NotFound />} />
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;
