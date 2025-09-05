import { Button } from '@/components/ui/button';
import { Linkedin, Github, Mail } from 'lucide-react';
const Footer = () => {
  const handleLinkedInClick = () => {
    window.open('https://sorry-sepia-beta.vercel.app/rxcodex', '_blank');
  };
  const handleGithubClick = () => {
    window.open('https://github.com/rxcodexai', '_blank');
  };
  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=contact@rxcodexai.com', '_blank');
  };
  return <footer className="py-12 border-t border-white/10 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Copyright and links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2024 Rx Codex AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Right side - Logo and social links */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src="/lovable-uploads/ecca2066-2f6c-41b4-b1d7-eddaafc991d2.png" alt="Rx Codex Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-white font-semibold">Rx Codex AI</span>
            </div>
            
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" onClick={handleLinkedInClick} className="hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleGithubClick} className="hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleEmailClick} className="hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;