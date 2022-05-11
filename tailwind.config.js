module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#312e81",
                
        "secondary": "#fcd34d",
                
        "accent": "#ec4899",
                
        "neutral": "#181A25",
                
        "base-100": "#F5F5FA",
                
        "info": "#d8b4fe",
                
        "success": "#86efac",
                
        "warning": "#facc15",
                
        "error": "#b91c1c",
        },
      },
    ],
  },
  plugins: [require("daisyui", 'flowbite/plugin')],
}
