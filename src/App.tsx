
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";

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
  const [isInIframe, setIsInIframe] = useState(false);

  useEffect(() => {
    try {
      // Safer way to check if we're in an iframe
      setIsInIframe(window.self !== window.top);
    } catch (e) {
      // If accessing window.top throws an error due to cross-origin restrictions,
      // we're definitely in a cross-origin iframe
      setIsInIframe(true);
    }
    
    // Disable browser developer tools for production environments
    if (process.env.NODE_ENV === 'production') {
      // Use a safer approach for context menu prevention
      const preventContextMenu = (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && !e.target.closest('input, textarea')) {
          e.preventDefault();
        }
      };
      
      document.addEventListener('contextmenu', preventContextMenu);
      
      // Add event listeners to detect common dev tool keyboard shortcuts
      const preventDevTools = (e: KeyboardEvent) => {
        // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if (
          e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
        ) {
          if (!(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
            e.preventDefault();
          }
        }
      };
      
      document.addEventListener('keydown', preventDevTools);
      
      return () => {
        document.removeEventListener('contextmenu', preventContextMenu);
        document.removeEventListener('keydown', preventDevTools);
      };
    }
  }, []);

  // Show a warning for iframe embedding instead of trying to break out
  if (isInIframe) {
    return (
      <div className="fixed inset-0 bg-white p-6 z-[9999]">
        <div className="max-w-lg mx-auto mt-10 p-6 bg-yellow-50 border border-yellow-200 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-4">Embedding Notice</h1>
          <p className="mb-4">This website should not be displayed in an iframe for security reasons.</p>
          <p>
            Please visit{" "}
            <a 
              href={window.location.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              our website directly
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

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
        
        {/* Security headers */}
        <meta http-equiv="X-Frame-Options" content="DENY" />
        <meta http-equiv="Content-Security-Policy" content="frame-ancestors 'none'" />
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
