
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Enquire from "./pages/Enquire";
import NotFound from "./pages/NotFound";

// Create a new query client with security settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
    mutations: {
      retry: 0,
    },
  },
});

// Security middleware component
const SecurityProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Prevent clickjacking attempts
    if (window.self !== window.top) {
      window.top.location = window.self.location;
    }
    
    // Disable browser developer tools for production environments
    if (process.env.NODE_ENV === 'production') {
      document.addEventListener('contextmenu', (e) => e.preventDefault());
      
      // Add event listeners to detect common dev tool keyboard shortcuts
      document.addEventListener('keydown', (e) => {
        // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if (
          e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
        ) {
          e.preventDefault();
        }
      });
    }
  }, []);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Helmet>
        {/* Global base meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="author" content="Indo Foundation School" />
        <meta name="generator" content="React" />
        <meta name="application-name" content="Indo Foundation School Website" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Indo Foundation School" />
        
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Helmet>
      <SecurityProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner position="top-right" />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/enquire" element={<Enquire />} />
              <Route path="/admin/*" element={<Navigate to="/" replace />} />
              <Route path="/wp-admin/*" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </SecurityProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
