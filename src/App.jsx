
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/footer";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/About-Us";
import Careers from "./pages/career";
import ContactUs from "./pages/Contact-Us";
import Corporateevent from "./pages/Corporate-event";
import Corporateformation from "./pages/corporate-formation";
import ComprehensiveTaxSolutions from "./pages/Comprehensive-Tax-Solutions";
import EmployeeBenefits from "./pages/employee-benefits";
import FinancialReporting from "./pages/financial-reporting";
import Leader from "./pages/leader";
import Regulatorycompliance from "./pages/regulatory-compliance";
import Service from "./pages/services";
import Transferpricing from "./pages/transfer-pricing";
import InquiryForm from "./components/InquiryForm";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/Career" element={<Careers />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="/Corporate-event" element={<Corporateevent />} />

          <Route
            path="/corporate-formation"
            element={<Corporateformation />}
          />

          <Route
                    path="/Comprehensive-Tax-Solutions"
                    element={<ComprehensiveTaxSolutions />}
                />

          <Route path="/employee-benefits" element={<EmployeeBenefits />} />
          <Route path="/financial-reporting" element={<FinancialReporting />} />
          <Route path="/leader" element={<Leader />} />

          <Route
            path="/regulatory-compliance"
            element={<Regulatorycompliance />}
          />

          <Route path="/services" element={<Service />} />
          <Route path="/transfer-pricing" element={<Transferpricing />} />

          <Route
                    path="/inquiry-form"
                    element={<InquiryForm />}
                />

          <Route
            path="*"
            element={<h2>404 - Page Not Found</h2>}
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
