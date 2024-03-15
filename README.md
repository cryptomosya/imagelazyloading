# LazyImageLoader

LazyImageLoader is a lightweight JavaScript package for lazy loading images in web applications. It utilizes the Intersection Observer API to defer the loading of images until they are within the viewport, improving page load times and reducing bandwidth usage.

## Installation

You can install LazyImageLoader via npm:

```bash
npm install lazy-image-loader

Example

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lazy Image Loading Example</title>
  <style>
    img {
      width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <img data-src="image1.jpg" alt="Lazy Loaded Image">
  <img data-src="image2.jpg" alt="Lazy Loaded Image">
  <img data-src="image3.jpg" alt="Lazy Loaded Image">

  <script src="index.js"></script>
  <script>
    // Initialize LazyImageLoader
    const lazyLoader = new LazyImageLoader();
  </script>
</body>
</html>

