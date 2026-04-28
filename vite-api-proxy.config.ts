// Vite dev server proxy configuration
// This file configures the dev server to proxy API requests

export const apiProxy = {
  '/api': {
    target: 'https://api.resend.com',
    changeOrigin: true,
    rewrite: (path) => {
      // Rewrite /api/contact to /emails
      if (path.includes('/api/contact') || path.includes('/api/quote')) {
        return '/emails';
      }
      return path;
    },
  },
};
