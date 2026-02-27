import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Careers from "./pages/Careers";
import AdsPage from "./pages/Ads";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import BrandIdentity from "./pages/BrandIdentity";
import OnlineService from "./pages/OnlineService";
import MarketingDesign from "./pages/MarketingDesign";
import PhotoVideo from "./pages/PhotoVideo";
import PrintDesign from "./pages/PrintDesign";
import Faq from "./pages/Faq";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NigerianJobsEducation from "./pages/NigerianJobsEducation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/ads" element={<AdsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          {/* service detail pages */}
          <Route path="/services/brand-identity" element={<BrandIdentity />} />
          <Route path="/services/online-service" element={<OnlineService />} />
          <Route path="/services/marketing-design" element={<MarketingDesign />} />
          <Route path="/services/photo-video" element={<PhotoVideo />} />
          <Route path="/services/print-design" element={<PrintDesign />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blog/nigerian-jobs-and-education" element={<NigerianJobsEducation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
