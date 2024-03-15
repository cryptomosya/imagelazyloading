// index.js

// Define the LazyImageLoader class
class LazyImageLoader {
    constructor(selector = 'img[data-src]', root = null, rootMargin = '0px', threshold = 0.5) {
      this.selector = selector;
      this.root = root;
      this.rootMargin = rootMargin;
      this.threshold = threshold;
  
      this.init();
    }
  
    // Initialize the lazy loading functionality
    init() {
      // Create a new Intersection Observer
      this.observer = new IntersectionObserver(this.onIntersection.bind(this), {
        root: this.root,
        rootMargin: this.rootMargin,
        threshold: this.threshold,
      });
  
      // Find all images with data-src attribute
      const images = document.querySelectorAll(this.selector);
      
      // Observe each image
      images.forEach(image => this.observer.observe(image));
    }
  
    // Callback function for Intersection Observer
    onIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Load the image
          const image = entry.target;
          const src = image.getAttribute('data-src');
          if (src) {
            image.setAttribute('src', src);
            image.removeAttribute('data-src');
          }
          // Unobserve the image to avoid further unnecessary checks
          this.observer.unobserve(image);
        }
      });
    }
  
    // Disconnect the Intersection Observer
    disconnect() {
      this.observer.disconnect();
    }
  }
  
  // Export the LazyImageLoader class
  module.exports = LazyImageLoader;
  