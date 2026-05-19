import { lazy, Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingScrollToTop from "@/components/FloatingScrollToTop";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/components/ThemeProvider";

const queryClient = new QueryClient();

const Index = lazy(() => import("./pages/Index"));
const Admin = lazy(() => import("./pages/Admin"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const InternshipPage = lazy(() => import("./pages/InternshipPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AcademyPage = lazy(() => import("./pages/AcademyPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const NewsArticlePage = lazy(() => import("./pages/NewsArticlePage"));

const PageLoader = () => (
  <div className="min-h-screen bg-background" aria-hidden="true" />
);

const ScrollToTop = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) {
      return undefined;
    }

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    let secondFrame = 0;
    let timeout = 0;

    const scrollToRoutePosition = () => {
      if (hash) {
        const target = document.getElementById(hash.slice(1));

        if (target) {
          target.scrollIntoView({ behavior: "auto", block: "start" });
          return true;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return false;
    };

    const frame = window.requestAnimationFrame(() => {
      const handled = scrollToRoutePosition();

      if (!handled) {
        secondFrame = window.requestAnimationFrame(scrollToRoutePosition);
        timeout = window.setTimeout(scrollToRoutePosition, 120);
      }
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(timeout);
    };
  }, [hash, pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <I18nProvider>
        <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <FloatingScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/academy" element={<AcademyPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<NewsArticlePage />} />
              <Route path="/internship" element={<InternshipPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        </TooltipProvider>
      </I18nProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
