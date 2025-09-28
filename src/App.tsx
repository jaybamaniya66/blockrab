import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/pages/Index";
// import NotFound from "./pages/NotFound";
import NotFound from "./components/pages/NotFound"
import DevOpsPage from "./components/pages/services/DevOpsPage";
import AIAgents from "./components/pages/services/AIAgents";
import CloudInfrastructure from "./components/pages/services/CloudInfrastructure";
import FullStackDevelopment from "./components/pages/services/FullStackDevelopment";
import WebDevelopment from "./components/pages/services/WebDevelopment";
import BlockchainSolutions from "./components/pages/services/BlockchainSolutions";
import AboutUs from "./components/pages/AboutUs";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsOfService from "./components/pages/TermsOfService";
import DeleteData from "./components/pages/DeleteData";
import { ThemeProvider } from "./components/ThemeProvider";
// import { ThemeProvider } from "./components/ThemeProvider";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Service Routes */}
          <Route path="/services/devops" element={<DevOpsPage/>} />
          <Route path="/services/ai-agents" element={<AIAgents/>} />
          <Route path="/services/cloud-infrastructure" element={<CloudInfrastructure />} />
          <Route path="/services/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/blockchain-solutions" element={<BlockchainSolutions />} />
          {/* About Us Route */}
          <Route path="/about" element={<AboutUs />} />
          {/* Privacy Policy Route */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* Terms of Service Route */}
          <Route path="/terms" element={<TermsOfService />} />
          {/* User Data Deletion Route */}
          <Route path="/delete-data" element={<DeleteData />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </ThemeProvider>
);

export default App;
