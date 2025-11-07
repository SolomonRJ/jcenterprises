import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingContact = () => {
  const phoneNumber = "+919845304327";
  const whatsappNumber = "919845304327";
  const whatsappMessage = "Hi, I'm interested in your products";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call us"
      >
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Phone className="h-6 w-6 text-primary-foreground" />
        </Button>
      </a>
    </div>
  );
};
