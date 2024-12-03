import type { Config } from 'tailwindcss'
import formsPlugin from '@tailwindcss/forms'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [formsPlugin]
} satisfies Config
