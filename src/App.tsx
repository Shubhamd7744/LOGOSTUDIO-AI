import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LogoGenerator } from './pages/LogoGenerator';
import Home from './pages/Home';
import InnovativeLanding from './pages/InnovativeLanding';
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<InnovativeLanding />} />
              <Route path="/classic" element={<Home />} />
              <Route path="/generator" element={<LogoGenerator />} />
              <Route path="/index" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
