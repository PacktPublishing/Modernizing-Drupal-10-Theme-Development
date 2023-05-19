export default function injectSwiper(story) {
  const top = `
<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css">`;

  const bottom = `
<script src="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"></script>`;

  return `${top}${story()}${bottom}`;
}
