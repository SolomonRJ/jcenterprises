import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-24">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">J C ENTERPRISES</h3>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Your trusted partner for industrial steel and construction supplies. Quality products, timely delivery, competitive pricing.
            </p>
            <div className="flex items-center space-x-2 text-sm text-secondary-foreground/80">
              <span className="font-semibold">Est. 2010</span>
              <span>|</span>
              <span>15+ Years</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Products
              </Link>
              <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/products?category=Pipes" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Pipes
              </Link>
              <Link to="/products?category=Sheets" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Sheets
              </Link>
              <Link to="/products?category=Section Items" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Section Items
              </Link>
              <Link to="/products?category=SS Materials" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                SS Materials
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-3">
              <a href="tel:+911234567890" className="flex items-center space-x-2 text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 123 456 7890</span>
              </a>
              <a href="mailto:info@jcenterprises.com" className="flex items-center space-x-2 text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@jcenterprises.com</span>
              </a>
              <div className="flex items-start space-x-2 text-sm text-secondary-foreground/80">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Industrial Area, Phase-II<br />Sector 17, Delhi - 110020</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-secondary-foreground/20">
              <p className="text-xs text-secondary-foreground/60">
                Mon-Sat: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} J C Enterprises. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
