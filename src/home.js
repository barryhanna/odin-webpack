import image from './assets/restaurant.jpg';

export default function render(rootEl) {
  const mainImage = new Image();
  mainImage.src = image;

  rootEl.innerHTML = `
			<h2>Home</h2>
			<img src=${image} alt="">
			<p>Welcome to Tasty Bytes</p>`;
}
