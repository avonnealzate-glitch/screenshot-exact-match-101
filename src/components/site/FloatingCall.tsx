import { Phone } from "lucide-react";

export function FloatingCall() {
  return (
    <a
      href="tel:+14702292626"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy-deep shadow-[0_10px_30px_-8px_rgba(201,168,76,0.7)] transition-transform hover:scale-105"
    >
      <Phone size={16} />
      Call Ava · +1 (470) 229-2626
    </a>
  );
}
