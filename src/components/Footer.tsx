import { Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold gradient-primary bg-clip-text text-transparent">
              ramply.xyz
            </h3>
            <p className="text-muted-foreground text-xs mt-1">
              // seamless crypto ramp
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://twitter.com/ramply" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Twitter className="w-4 h-4" />
            </a>
            
            <a 
              href="https://github.com/ramply" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center text-muted-foreground text-xs">
          <p>© 2024 ramply</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;