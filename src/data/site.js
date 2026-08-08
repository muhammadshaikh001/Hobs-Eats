// Editable business configuration.
// Change these values to customize the website for any food business.
// =====================================================
// MASTER CONFIGURATION
// Edit only this file to update business information.
// =====================================================
// Business Identity

// Address

// Contact

// Business Details

// Social Links

export const SITE = {
  name: "Hob's Eats",
  tagline: "Ahmedabad’s Favourite Cafe.",
  logo: "/logo.png",
  
  description:
  "Hob's Eats is a favourite cafe in Ahmedabad, serving delicious food with a great dining experience.",

  footerLocation: "Ahmedabad · Gujarat",

  address: {
  line1: "Royal Park, 09, opp. Hariyali Society",
  locality: "Juhapura",
  city: "Ahmedabad",
  state: "Gujarat",
  postal: "380055",
  country: "India",
  landmark: "Nearby Landmark",
},
  phoneDisplay:  "078744 62587",
  phoneE164: "+9178744 62587",
  whatsappE164:  "9178744 62587",
  hoursLabel:  "Open Daily ·  2:00 PM – 5:00 AM",
  hoursOpen:  "14:00",
  hoursClose: "05:00",
  priceRange: "₹200–₹400",
  rating: {
            value: 4.7, 
            count: 120, 
          },
  services: [
    "Dine-in", 
    "Takeaway", 
    "Delivery", 
    "Reservations"
  ],
  cuisines: [
        "Multi Cuisine",
     ],
  swiggyUrl: "https://www.swiggy.com/city/ahmedabad/hobs-eats-prahlad-nagar-juhapura-royal-park-rest1059368", // client-editable placeholder
  googleReviewUrl: "https://maps.app.goo.gl/AZSKRQZvsyDNfNDk8",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.9043391822106!2d72.52664947399957!3d22.990544917525153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8544422d566b%3A0x3958c0a5409015a4!2sHob's%20Eats!5e0!3m2!1sen!2sin!4v1786155466202!5m2!1sen!2sin",
  googleDirectionsUrl:
    "https://maps.app.goo.gl/9sJViQwNKoXZVgZr7?g_st=ic",
  social: {
    instagram: "https://www.instagram.com/hobs.eats/?hl=en",
    facebook: "#",
  },
};

export const tel = () => `tel:${SITE.phoneE164}`;
export const wa = (msg = `Hi ${SITE.name}, I'd like to place an order.`) =>
  `https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent(msg)}`;
