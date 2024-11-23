/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'phonedown': {'max': '767px'},
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'annapurna': ['Annapurna SIL', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(90deg, rgba(186,83,4,1) 0%, rgba(201,109,21,1) 39%, rgba(255,94,0,1) 100%)',
      },
    },
  },
  plugins: [],
}
);

