import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import axtrioLogo from '@/assets/axtrio-navbar-logo.png';

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-navbar-scrolled' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name - Left Side */}
          <div className="flex items-center">
            <img 
              src={axtrioLogo} 
              alt="Axtrio AI" 
              className="h-8 sm:h-9 md:h-10 w-auto object-contain cursor-pointer" 
              loading="lazy"
              onClick={() => navigateToPage('/')}
            />
          </div>

          {/* Center Navigation Pill */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="nav-pill">
              <button 
                onClick={() => navigateToPage('/home')} 
                className={`nav-pill-button text-xs sm:text-sm lg:text-base tracking-[0.15em] ${location.pathname === '/home' || location.pathname === '/' ? 'active' : ''}`}
              >
                HOME
              </button>
              <button 
                onClick={() => navigateToPage('/company')} 
                className={`nav-pill-button text-xs sm:text-sm lg:text-base tracking-[0.15em] ${location.pathname === '/company' ? 'active' : ''}`}
              >
                COMPANY
              </button>
              <button 
                onClick={() => navigateToPage('/models')} 
                className={`nav-pill-button text-xs sm:text-sm lg:text-base tracking-[0.15em] ${location.pathname === '/models' ? 'active' : ''}`}
              >
                MODELS
              </button>
              <button 
                onClick={() => navigateToPage('/news')} 
                className={`nav-pill-button text-xs sm:text-sm lg:text-base tracking-[0.15em] ${location.pathname === '/news' ? 'active' : ''}`}
              >
                NEWS
              </button>
            </div>
          </div>

          {/* Desktop Button */}
          {!isMobile && (
            <Button 
              onClick={() => window.open('https://www.chat.axtrioai.com', '_blank')} 
              variant="glass"
              className="px-4 md:px-4 lg:px-6 py-3 rounded-full font-medium"
            >
              Try Txa 1
            </Button>
          )}

          {/* Mobile Animated Button */}
          {isMobile && (
            <div className="relative" ref={dropdownRef}>
              <Button
                onClick={handleMobileButtonClick}
                variant="glass"
                className={`px-6 py-3 rounded-full font-medium transition-all duration-500 mobile-transform-button ${
                  showChevron ? 'show-chevron' : 'show-text'
                }`}
              >
                <span className={`transition-all duration-500 ${showChevron ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
                  Try Txa 1
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
              <div className="flex items-center justify-center mb-8 pb-6 border-b border-white/20">
                <img 
                  src={axtrioLogo} 
                  alt="Axtrio AI" 
                  className="h-10 w-auto object-contain" 
                  loading="lazy" 
                />
              </div>

              {/* Navigation Buttons */}
              <div className="space-y-4">
                <button 
                  onClick={() => navigateToPage('/home')} 
                  className={`mobile-nav-button tracking-[0.15em] ${location.pathname === '/home' || location.pathname === '/' ? 'active' : ''}`}
                >
                  HOME
                </button>
                <button 
                  onClick={() => navigateToPage('/company')} 
                  className={`mobile-nav-button tracking-[0.15em] ${location.pathname === '/company' ? 'active' : ''}`}
                >
                  COMPANY
                </button>
                <button 
                  onClick={() => navigateToPage('/models')} 
                  className={`mobile-nav-button tracking-[0.15em] ${location.pathname === '/models' ? 'active' : ''}`}
                >
                  MODELS
                </button>
                <button 
                  onClick={() => navigateToPage('/news')} 
                  className={`mobile-nav-button tracking-[0.15em] ${location.pathname === '/news' ? 'active' : ''}`}
                >
                  NEWS
                </button>
                
                {/* Separator */}
                <div className="border-t border-white/20 my-6"></div>
                
                {/* Try Axtrio Link */}
                <button 
                  onClick={() => {
                    window.open('https://www.chat.axtrioai.com', '_blank');
                    setDropdownOpen(false);
                  }} 
                  className="mobile-nav-button try-codex-button tracking-[0.15em]"
                >
                  Try Txa 1 →
                </button>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;
