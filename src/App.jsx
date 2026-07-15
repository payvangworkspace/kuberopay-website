import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Infrastructure from "./components/Infrastructure";
import Services from "./components/Services";
import Excellence from "./components/Excellence";
import Clients from "./components/Clients";
import Industries from "./components/Industries";
import Footer from "./components/Footer";

import PaymentGateway from "./components/PaymentGateway";
import Invoice from "./components/Invoice";
import VirtualAccount from "./components/VirtualAccount";
import WhiteLabel from "./components/WhiteLabel";
import SolutionAndFeatures from "./components/SolutionAndFeatures";
import NfcPage from "./components/NfcPage";
import MerchantServiceReseller from "./components/MerchantServiceReseller";
import Pricing from "./components/Pricing";
import Faqs from "./components/Faqs";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Company from "./components/Company";
import Developer from "./components/Developer";
import Contact from "./components/Contact";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Infrastructure />
      <Services />
      <Excellence />
      <Clients />
      <Industries />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment-gateway" element={<PaymentGateway />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/virtual-account" element={<VirtualAccount />} />
        <Route path="/white-label-solutions" element={<WhiteLabel/>} />
        <Route path="solution-and-features" element={<SolutionAndFeatures/>}/>
        <Route path="nfc-solution" element={<NfcPage/>} />
        <Route path="merchant-service-reseller" element={<MerchantServiceReseller/>} />
        <Route path="pricing" element={<Pricing/>} />
        <Route path="faqs" element={<Faqs/>} />
        <Route path="terms-and-conditions" element={<TermsAndConditions/>}/>
        <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="company" element={<Company/>} />
        <Route path="developer" element={<Developer/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="signin" element={<SignIn/>} />
        <Route path="signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
