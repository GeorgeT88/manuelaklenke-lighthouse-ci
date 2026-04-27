module.exports = {
  ci: {
    collect: {
      urls: [
        'https://manuelaklenke.com',
        'https://manuelaklenke.com/about',
        'https://manuelaklenke.com/portfolio',
        'https://manuelaklenke.com/events',
        'https://manuelaklenke.com/contact',
      ],
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--no-sandbox --disable-dev-shm-usage',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.7 }],
        'categories:accessibility': ['error', { minScore: 0.8 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci-reports',
    },
  },
};
