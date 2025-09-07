import { Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Ramply
            </h3>
            <p className="text-muted-foreground mt-2">
              The seamless on/off ramp for local currencies
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://twitter.com/ramply" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Twitter className="w-6 h-6" />
            </a>
            
            <a 
              href="https://github.com/ramply" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            
            <a 
              href="https://linkedin.com/company/ramply" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2024 Ramply. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;