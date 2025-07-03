// Performance optimization utilities

/**
 * Preload critical images to improve LCP and user experience
 */
export const preloadCriticalImages = () => {
  if (typeof window === 'undefined') return;
  
  const criticalImages = [
    '/images/logo.webp',
    '/images/banner.webp',
    '/images/about.webp',
  ];
  
  criticalImages.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

/**
 * Lazy load images with intersection observer
 */
export const setupLazyLoading = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
};

/**
 * Monitor Core Web Vitals
 */
export const measurePerformance = () => {
  if (typeof window === 'undefined') return;
  
  // Measure LCP (Largest Contentful Paint)
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log('LCP:', entry.startTime);
    }
  });
  
  try {
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch {
    // Fallback for browsers that don't support this
    console.log('Performance monitoring not supported');
  }
};

/**
 * Optimize font loading to reduce CLS
 */
export const optimizeFontLoading = () => {
  if (typeof window === 'undefined') return;
  
  // Add font-display: swap to reduce CLS
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'OptimizedFont';
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
};

/**
 * Prefetch next page resources
 */
export const prefetchResources = (urls: string[]) => {
  if (typeof window === 'undefined') return;
  
  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
};

/**
 * Initialize all performance optimizations
 */
export const initializePerformanceOptimizations = () => {
  preloadCriticalImages();
  setupLazyLoading();
  measurePerformance();
  optimizeFontLoading();
};