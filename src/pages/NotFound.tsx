import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useSEO({
    title: "Page Not Found - Rx Codex AI",
    description: "The page you're looking for doesn't exist. Return to Rx Codex AI homepage to explore our AI models and research.",
    keywords: "404, Page Not Found, Rx Codex AI",
    canonicalUrl: "https://rxcodexai.com/404",
  });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dark-gradient overflow-x-hidden">
      <Navbar />
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" size="lg" className="gap-2">
              <Link to="/">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/sitemap">
                <ArrowLeft className="w-4 h-4" />
                View Sitemap
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
