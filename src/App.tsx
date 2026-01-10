import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Teams from "./pages/Teams";
import ModelsPage from "./pages/Models";
import News from "./pages/News";
import ResearchPaper from "./pages/ResearchPaper";
import ResearchPage from "./pages/Research";
import Benchmarks from "./pages/Benchmarks";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/company" element={<Company />} />
          <Route path="/models" element={<ModelsPage />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/company/teams/profiles/:username" element={<Profile />} />
          <Route path="/news" element={<News />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/rx-codex-v1-tiny" element={<ResearchPaper />} />
          <Route path="/benchmarks" element={<Benchmarks />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
