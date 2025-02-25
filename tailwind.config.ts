import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-gra": "linear-gradient(90deg, #1D4C1F 0%, #44B249 100%)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          pink: {
            main: "#4A2E74",
            hover: "#8A4BE9"
          },
          blue: {
            main: "#121D42"
          },
          DEFAULT:
            "linear-gradient(150.75deg, #121D42 -1.08%, #152764 44.87%, #4857BD 89.46%)",
          pinkGradient: "linear-gradient(180deg, #482D72 0%, #6841A5 50%, #8855D8 100%)",
          foreground: "hsl(var(--primary-foreground))",
          green: "#1D4C1F",
          "green-hover": "#2A6C2D",
          light: "#EAF0EA",
          black: "#000000",
          "black-light": "#1A1A1A",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "14px",
          lg: "20px",
        },
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1170px",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        moveBackground: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        moveBackground: "moveBackground 30s linear infinite alternate",
        fadeIn: "fadeIn 1s ease-in-out",
      },
      backgroundImage: {
        pinkGradient: "linear-gradient(180deg, #482D72 0%, #6841A5 50%, #8855D8 100%)",
        blurGradient: "blurGradient: linear-gradient(150.75deg, #121D42 -1.08%, #152764 44.87%, #4857BD 89.46%)",
       
        'hover-gradient': "linear-gradient(150.75deg, rgba(112, 145, 255, 0.8) -1.08%, rgba(47, 70, 151, 0.8) 48.26%, rgba(116, 133, 251, 0.8) 89.46%)",
        "green-linear": "linear-gradient(90deg, #1D4C1F 0%, #44B249 100%)",
        primary:
          "linear-gradient(150.75deg, #121D42 -1.08%, #152764 44.87%, #4857BD 89.46%)",
        "primary-hover":
          "linear-gradient(150.75deg, #7091FF -1.08%, #2F4697 48.26%, #7485FB 89.46%)",
        "primary-disabled":
          "linear-gradient(150.75deg, #A2A2A2 -1.08%, #B6B6B6 44.87%, #D0D0D0 89.46%)",
      },
      boxShadow: {
        feature_card: "0px 0px 10px 1px #C1C9E4",
      },
    },

    
  },
  variants: {
    extend: {
      backdropBlur: ["responsive", "hover", "focus"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
