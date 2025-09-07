import { Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
              ramply.xyz
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              // seamless crypto ramp
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://twitter.com/ramply" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
            
            <a 
              href="https://github.com/ramply" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© 2024 ramply</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;