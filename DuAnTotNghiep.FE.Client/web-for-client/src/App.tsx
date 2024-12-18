import Controller from "./Controller";
import Header from "./components/layout/header.tsx";
import "./assets/css/base.css"
import Footer from "./components/layout/footer.tsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe
('pk_test_51QMTJEGoIZvD6rjmJtwjiquJtr6MsOQSCK6n3jEXEdjnisj9FjSYDZPMr00SgACQBEkp58SErxJEFokLMmZRv72h006G8Uzsk7');
function App() {
  return (
    <>
      <Header />
      <Elements stripe={stripePromise}>
        <Controller />
      </Elements>
      <ToastContainer></ToastContainer>
      <Footer />
    </>
  );
}

export default App;
