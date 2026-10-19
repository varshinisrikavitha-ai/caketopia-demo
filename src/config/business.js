// Public listing details used for this design demo. Confirm these with the owner before publication.
export const business = {
  name: 'Caketopia Home Baking',
  shortName: 'Caketopia',
  phone: '+91 97917 11204',
  phoneHref: 'tel:+919791711204',
  whatsappNumber: '919791711204',
  address: 'Site 88, Nila Residency, Saravanampatty, Vellamadi Road, Athipalayam, Coimbatore, Tamil Nadu 641110.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Caketopia+Home+Baking+Athipalayam+Coimbatore',
  disclaimer: 'Unofficial website concept created as a design demo. Business details and content should be confirmed by the owner before publication.',
};

export function whatsappUrl(message) {
  if (!business.whatsappNumber) return null;
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general: `Hi ${business.name}, I would like to enquire about your cakes.`,
  delivery: `Hi ${business.name}, I would like to enquire about cake delivery. Please confirm availability, delivery areas, charges and timings.`,
};
