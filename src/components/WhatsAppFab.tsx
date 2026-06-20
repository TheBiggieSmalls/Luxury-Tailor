import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "32000000000"; // TODO: replace with real number
const MESSAGE = "Goeiedag, ik heb interesse in een maatpak. Mag ik meer informatie?";

const WhatsAppFab = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform"
    >
      <MessageCircle className="w-6 h-6" strokeWidth={2} fill="currentColor" />
    </a>
  );
};

export default WhatsAppFab;
