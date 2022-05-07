import { Header } from "./Layout/Header";
import { Footer } from "./Layout/Footer";
import { Routes, Route } from 'react-router-dom';
import { HomePage } from "./pages/HomePage";
import { AuthenticationPage } from "./pages/AuthenticationPage/AuthenticationPage";
import { UserPage } from "./pages/UserPage/UserPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthenticationPage />} />
        <Route path='/profile' element={<UserPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
