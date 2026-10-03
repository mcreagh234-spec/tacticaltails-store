export const SITE = {
  brand: 'Tactical Tails',
  accent: '#464E1E',
  dark: '#121212',
  sale: '#dd1d1d',
  announcement: 'Early Halloween Sale!',
  shippingThreshold: 50,
  configuredLogo: 'https://cdn.shopify.com/s/files/1/0731/4862/9101/files/BCDA791F-8556-457E-8CA7-05350C845184.jpg'
};

const outfitImages = [
  'https://cdn.shopify.com/s/files/1/0731/4862/9101/files/IMG-9547.png?v=1788395065',
  'https://cdn.shopify.com/s/files/1/0731/4862/9101/files/IMG-9500.png?v=1788269855',
  'https://cdn.shopify.com/s/files/1/0731/4862/9101/files/D9271323-48CF-47A2-BD4E-B48077430EEE.png?v=1788381729',
  'https://cdn.shopify.com/s/files/1/0731/4862/9101/files/079ED5F2-4466-41E6-897B-E281F0BBE0C4.webp?v=1787881596',
  'https://cdn.shopify.com/s/files/1/0731/4862/9101/files/345DD695-8F87-45A7-833C-EF91377AE4AE.webp?v=1787881596',
  'https://cdn.shopify.com/s/files/1/0731/4862/9101/files/DD8237B7-4821-4B4F-967A-3B29160B16C8.webp?v=1787881596',
  'https://cdn.shopify.com/s/files/1/0731/4862/9101/files/D4EC9667-E7B0-4151-904B-B3555805C632.webp?v=1787881596',
  'https://cdn.shopify.com/s/files/1/0731/4862/9101/files/92D029A0-D074-48E5-9960-53334713B409.png?v=1788111968',
  'https://cdn.shopify.com/s/files/1/0731/4862/9101/files/F7DCD397-3166-4463-A6A4-1E293A3F1C18.png?v=1788111968'
];

export const PRODUCTS = [
  {
    handle: 'tacticaltails-doggy-soldier-outfit',
    name: 'TacticalTails- Doggy Soldier Outfit',
    price: 39.99,
    compareAt: 49.99,
    rating: 4.7,
    reviewCount: 1443,
    urgency: 'JOIN THE TACTICALTAILS MILITARY',
    images: outfitImages,
    sizes: ['S','M','L','XL','2XL'],
    variants: ['Tactical Santa','Ice Agent','Police Officer','US Army','US Marines','US Navy','US Airforce'],
    variantImage: {
      'Tactical Santa': outfitImages[0], 'Ice Agent': outfitImages[1], 'Police Officer': outfitImages[2],
      'US Army': outfitImages[3], 'US Marines': outfitImages[4], 'US Navy': outfitImages[5], 'US Airforce': outfitImages[6]
    },
    short: 'Turn your pup into the cutest soldier on the block.',
    description: `Meet the Doggy Soldier Outfit — the hilarious tactical-inspired costume that turns an ordinary walk into a full-on mission. Complete with a military-style vest, helmet, American flag detail, and playful accessories, it creates the illusion of your pup standing ready for duty. Perfect for Halloween, parties, photos, gifts, or simply making everyone on your next walk do a double take.`,
    bullets: ['Comfortable & lightweight','Full soldier look','Unforgettable gift','Made for photos','Multiple sizes available'],
    reviews: [
      ['Jake M.','Bought the Army one and the Navy one for my two dogs for Halloween and they got here in four days. I love it. It’s so funny!'],
      ['Sarah T.','Bought it for my boyfriend and he absolutely loves it!'],
      ['Chris R.','Absolutely hilarious 😂 It fit our German Shepherd perfectly and everyone kept asking where we got it.']
    ],
    sizing: [
      ['SMALL · 5-12 lb','Chest 14-17” · Neck 10-12” · Back 9-12”','Pomeranian, Maltese, Yorkie, Chihuahua, Papillon, Toy Poodle'],
      ['MEDIUM · 12-22 lb','Chest 17-21” · Neck 12-15” · Back 12-15”','Shih Tzu, Dachshund, Pug, Boston Terrier, Mini Schnauzer, Cavalier'],
      ['LARGE · 22-35 lb','Chest 21-25” · Neck 15-18” · Back 15-18”','French Bulldog, Corgi, Beagle, Cocker Spaniel, Mini Aussie'],
      ['X-LARGE · 35-60 lb','Chest 25-30” · Neck 18-21” · Back 18-22”','Border Collie, Australian Shepherd, Springer Spaniel, Standard Poodle, Whippet, Staffy'],
      ['XXL · 55-90 lb','Chest 29-34” · Neck 21-24” · Back 22-27”','Golden Retriever, Labrador, German Shepherd, Husky, Boxer, Doberman, Rottweiler, Bernese']
    ]
  },
  {
    handle: 'tactical-chew-toy',
    name: 'Tactical Chew Toy',
    price: 14.99,
    compareAt: 19.99,
    rating: 4.8,
    reviewCount: 412,
    images: ['/assets/images/tactical-dogs-showcase.png'],
    sizes: [],
    variants: ['Tactical Grenade'],
    short: 'A tactical-inspired chew toy built for playtime.',
    description: 'A rugged tactical-themed dog toy designed for fetch, chewing and play. Easy to toss, fun to carry, and made to match the Tactical Tails collection.',
    bullets: ['Built for everyday play','Tactical-inspired design','Easy to toss & carry','Pairs with Tactical Tails costumes'],
    reviews: [['Mike R.','My dog grabbed it immediately and carries it everywhere.'],['Dani P.','Funny little add-on with the costume.'],['Alex J.','Exactly what I wanted for the full tactical setup.']]
  },
  {
    handle: 'military-glasses',
    name: 'TacticalTails- Military Glasses',
    price: 12.99,
    compareAt: 17.99,
    rating: 4.7,
    reviewCount: 287,
    images: ['/assets/images/tactical-agent.png'],
    sizes: [],
    variants: ['Black'],
    short: 'Finish the look with tactical-style dog glasses.',
    description: 'Complete your pup’s mission-ready look with lightweight tactical-style glasses made for costumes, photos and short supervised wear.',
    bullets: ['Completes the tactical look','Great for photos & videos','Lightweight costume accessory','Pairs with multiple variants'],
    reviews: [['Kayla M.','The glasses made the whole costume.'],['Troy B.','Looks ridiculous in the best way.'],['Megan S.','Perfect for pictures.']]
  }
];

export const getProduct = (handle) => PRODUCTS.find(p => p.handle === handle) || PRODUCTS[0];
