import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showChevron, setShowChevron] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation cycle for mobile button - pause when menu is open
  useEffect(() => {
    if (!isMobile || dropdownOpen) return;
    
    const interval = setInterval(() => {
      setShowChevron(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, dropdownOpen]);

  // Body scroll lock and close dropdown when clicking outside
  useEffect(() => {
    if (!isMobile) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideButton = dropdownRef.current && !dropdownRef.current.contains(event.target as Node);
      const isOutsideMenu = menuContentRef.current && !menuContentRef.current.contains(event.target as Node);
      
      if (isOutsideButton && isOutsideMenu) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Restore body scroll
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen, isMobile]);

  const navigateToPage = (path: string) => {
    navigate(path);
    setDropdownOpen(false); // Close dropdown on navigation
  };

  const handleMobileButtonClick = () => {
    // Always open the menu when clicked, regardless of chevron state
    setDropdownOpen(!dropdownOpen);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-navbar-scrolled' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name - Left Side */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src="/lovable-uploads/ecca2066-2f6c-41b4-b1d7-eddaafc991d2.png" alt="Rx Codex Logo" className="w-10 h-10 object-contain" />
            </div>
            <span className="text-lg sm:text-xl font-semibold text-white">Rx Codex AI</span>
          </div>

          {/* Center Navigation Pill */}
          <div className="hidden md:flex items-center justify-center flex-1">
          <div className="nav-pill">
            <button 
              onClick={() => navigateToPage('/home')} 
              className={`nav-pill-button text-xs sm:text-sm lg:text-base ${location.pathname === '/home' || location.pathname === '/' ? 'active' : ''}`}
            >
              RX CODEX
            </button>
            <button 
              onClick={() => navigateToPage('/company')} 
              className={`nav-pill-button text-xs sm:text-sm lg:text-base ${location.pathname === '/company' ? 'active' : ''}`}
            >
              COMPANY
            </button>
            <button 
              onClick={() => navigateToPage('/models')} 
              className={`nav-pill-button text-xs sm:text-sm lg:text-base ${location.pathname === '/models' ? 'active' : ''}`}
            >
              MODELS
            </button>
            <button 
              onClick={() => navigateToPage('/news')} 
              className={`nav-pill-button text-xs sm:text-sm lg:text-base ${location.pathname === '/news' ? 'active' : ''}`}
            >
              NEWS
            </button>
          </div>
          </div>

          {/* Desktop Button */}
          {!isMobile && (
            <Button onClick={() => window.open('https://www.chat.rxcodexai.com', '_blank')} className="bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-4 md:px-4 lg:px-6 py-2 rounded-lg font-medium transition-all duration-300">
              Try Rx Codex
            </Button>
          )}

          {/* Mobile Animated Button */}
          {isMobile && (
            <div className="relative" ref={dropdownRef}>
              <Button
                onClick={handleMobileButtonClick}
                className={`bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 py-2 rounded-lg font-medium transition-all duration-500 mobile-transform-button ${
                  showChevron ? 'show-chevron' : 'show-text'
                }`}
              >
                <span className={`transition-all duration-500 ${showChevron ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
                  Try Rx Codex
                </span>
                <ChevronDown 
                  className={`absolute inset-0 m-auto transition-all duration-500 ${
                    showChevron ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-90'
                  } ${dropdownOpen ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </Button>
            </div>
          )}

        </div>
      </div>
      
      {/* Mobile Menu Portal */}
      {isMobile && dropdownOpen && createPortal(
        <>
          {/* Backdrop */}
          <div 
            className="mobile-menu-backdrop-portal" 
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setDropdownOpen(false);
              }
            }}
          />
          
          {/* Mobile Menu */}
          <div className="mobile-menu-portal">
            <div 
              ref={menuContentRef}
              className="mobile-menu-content-portal"
              onMouseDown={(e) => e.stopPropagation()}
            >
              {/* Logo and Brand in Menu */}
              <div className="flex items-center justify-center space-x-2 mb-8 pb-6 border-b border-white/20">
                <img src="/lovable-uploads/ecca2066-2f6c-41b4-b1d7-eddaafc991d2.png" alt="Rx Codex Logo" className="w-10 h-10 object-contain" />
                <span className="text-xl font-semibold text-white">Rx Codex AI</span>
              </div>

              {/* Navigation Buttons */}
              <div className="space-y-4">
                <button 
                  onClick={() => navigateToPage('/home')} 
                  className={`mobile-nav-button ${location.pathname === '/home' || location.pathname === '/' ? 'active' : ''}`}
                >
                  RX CODEX
                </button>
                <button 
                  onClick={() => navigateToPage('/company')} 
                  className={`mobile-nav-button ${location.pathname === '/company' ? 'active' : ''}`}
                >
                  COMPANY
                </button>
                <button 
                  onClick={() => navigateToPage('/models')} 
                  className={`mobile-nav-button ${location.pathname === '/models' ? 'active' : ''}`}
                >
                  MODELS
                </button>
                <button 
                  onClick={() => navigateToPage('/news')} 
                  className={`mobile-nav-button ${location.pathname === '/news' ? 'active' : ''}`}
                >
                  NEWS
                </button>
                
                {/* Separator */}
                <div className="border-t border-white/20 my-6"></div>
                
                {/* Try Rx Codex Link */}
                <button 
                  onClick={() => {
                    window.open('https://www.chat.rxcodexai.com', '_blank');
                    setDropdownOpen(false);
                  }} 
                  className="mobile-nav-button try-codex-button"
                >
                  Try Rx Codex →
                </button>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </nav>;
};
export default Navbar;