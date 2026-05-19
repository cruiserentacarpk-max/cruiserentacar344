export const WHATSAPP_NUMBER = "923056333341";
export const PHONE_DISPLAY = "0305 6333341";
export const EMAIL = "cruiserentacar7@gmail.com";
export const ADDRESS = "345 B Block Sabzazar, Lahore, Pakistan 54572";
export const INSTAGRAM = "https://www.instagram.com/cruiserentacar7/";

export function whatsappLink(vehicleName?: string, duration?: string) {
  let msg = "Hello Cruise Rent A Car,\n\n";
  if (vehicleName) {
    msg += `I want ${vehicleName}`;
    if (duration) msg += ` for ${duration}`;
    msg += ".\n\nKindly confirm the availability and price.\n\nThank you.";
  } else {
    msg += "I would like more information about your rental services.\n\nThank you.";
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
