import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    // Aggressive chunk splitting for better caching & faster loading
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React — cached separately, rarely changes
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // Framer Motion — large lib, isolated chunk
          "vendor-motion": ["framer-motion"],
          // Iconify — loaded only when icons appear
          "vendor-icons": ["@iconify/react"],
        },
      },
    },
    // Compress output aggressively
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,   // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ["console.log", "console.warn"],
      },
    },
    // Split chunks at smaller size for faster initial load
    chunkSizeWarningLimit: 500,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Use ES2020 for smaller output on modern browsers
    target: "es2020",
    // Inline assets smaller than 4KB (avoid extra HTTP requests)
    assetsInlineLimit: 4096,
  },

  // Dev server optimizations
  server: {
    // Enable HTTP2 for dev (multiplexing)
    hmr: { overlay: true },
  },

  // Pre-bundle heavy deps for faster dev startup
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "framer-motion", "@iconify/react"],
  },
})
