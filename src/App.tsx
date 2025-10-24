import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteDetail from "./pages/NoteDetail";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/note/:id" element={<NoteDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
