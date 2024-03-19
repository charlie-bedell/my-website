import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
			animation: {
				autoScroll: '1s linear 1.5s forwards scroll, 1s linear 4s forwards scrollReverse'
			},
			keyframes: {
				scroll: {
					'0%': { transform: 'translateY(0)'},
					'100%': { transform: 'translateY(-49%)'}
				},
				scrollReverse: {
					'0%': { transform: 'translateY(-49%)'},
					'100%': { transform: 'translateY(0)'}
				},
				scrollHorizontal: {
					'0%': { transform: 'translateX(0)'},
					'100%': { transform: 'translateX(-100%)'}
				},
				scrollHorizontalReverse: {
					'0%': { transform: 'translateX(-100%)'},
					'100%': { transform: 'translateX(0)'}
				}
			}
    }
  },
  plugins: [],
};
export default config;
