import Controller from "./Controller";
import Header from "./components/layout/header.tsx";
import "./assets/css/base.css"
import Footer from "./components/layout/footer.tsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Header/>
          <Controller />
          <ToastContainer></ToastContainer>
      <Footer/>
    </>
  );
}

export default App;
