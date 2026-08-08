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
  name: "Business Name",
  tagline: "Fresh Food. Great Taste.",
  logo: "/logo.png",
  
  description:
  "Write a short description about your food business here.",

  footerLocation: "City · State",

  address: {
  line1: "Street Address",
  locality: "Area",
  city: "City",
  state: "State",
  postal: "000000",
  country: "India",
  landmark: "Nearby Landmark",
},
  phoneDisplay:  "00000 00000",
  phoneE164: "+910000000000",
  whatsappE164:  "910000000000",
  hoursLabel:  "Open Daily · 10:00 AM – 10:00 PM",
  hoursOpen:  "10:00",
  hoursClose: "22:00",
  priceRange: "₹₹",
  rating: {
            value: 4.5, 
            count: 100, 
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
  swiggyUrl: "https://www.swiggy.com/", // client-editable placeholder
  googleReviewUrl: "#",
  googleMapsEmbed:
    "",
  googleDirectionsUrl:
    "#",
  social: {
    instagram: "#",
    facebook: "#",
  },
};

export const tel = () => `tel:${SITE.phoneE164}`;
export const wa = (msg = `Hi ${SITE.name}, I'd like to place an order.`) =>
  `https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent(msg)}`;
