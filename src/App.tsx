import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Careers = lazy(() => import("./pages/Careers"));
const AdsPage = lazy(() => import("./pages/Ads"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Quote = lazy(() => import("./pages/Quote"));
const BrandIdentity = lazy(() => import("./pages/BrandIdentity"));
const OnlineService = lazy(() => import("./pages/OnlineService"));
const MarketingDesign = lazy(() => import("./pages/MarketingDesign"));
const PhotoVideo = lazy(() => import("./pages/PhotoVideo"));
const PrintDesign = lazy(() => import("./pages/PrintDesign"));
const Faq = lazy(() => import("./pages/Faq"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));

const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
