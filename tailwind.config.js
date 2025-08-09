// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.7s ease-in",
        spinSlow: "spin 60s linear infinite",
      },
      backgroundImage: {
        // === HOME ===
        "home-mobile": "url('/src/images/background-home-mobile.jpg')",
        "home-tablet": "url('/src/images/background-home-tablet.jpg')",
        "home-desktop": "url('/src/images/background-home-desktop.jpg')",

        // === DESTINATION ===
        "destination-mobile":
          "url('/src/images/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/src/images/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('/src/images/background-destination-desktop.jpg')",

        // === CREW ===
        "crew-mobile": "url('/src/images/background-crew-mobile.jpg')",
        "crew-tablet": "url('/src/images/background-crew-tablet.jpg')",
        "crew-desktop": "url('/src/images/background-crew-desktop.jpg')",

        // === TECHNOLOGY ===
        "technology-mobile":
          "url('/src/images/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('/src/images/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('/src/images/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
