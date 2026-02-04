import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VidrirosPage from "./pages/VidrirosPage";
import PvcAluminioPage from "./pages/PvcAluminioPage";
import MamparasPage from "./pages/MamparasPage";
import ContactoPage from "./pages/ContactoPage";

import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vidrios" element={<VidrirosPage />} />
          <Route path="/pvc-aluminio" element={<PvcAluminioPage />} />
          <Route path="/mamparas" element={<MamparasPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          {/* Redirects for old routes */}
          <Route path="/ventanas" element={<Navigate to="/pvc-aluminio" replace />} />
          <Route path="/cerramientos" element={<Navigate to="/" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
