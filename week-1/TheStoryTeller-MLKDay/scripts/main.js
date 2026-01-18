// Find elements
const image = document.querySelector('.story-image img');
const caption = document.querySelector('#story-caption');

// story content
const captions = [
  "Click the image to begin...",
  "Segregation was once enforced by law — deciding who was worthy of dignity and who was not.",
  "Dr. Martin Luther King Jr. spoke against injustice, calling for equality, humanity, and moral courage.",
  "African Americans organized, marched, and risked everything to end racial discrimination.",
  "The fight for justice did not end — it evolved, as new generations continue to demand accountability.",
  "True acceptance means embracing people, not just their culture — the struggle for belonging continues."];

// Track current step
let currentStep = 0;

// Listen for clicks
image.addEventListener('click', function () {
  currentStep++;

  if (currentStep < captions.length) {
    // Update caption
    caption.textContent = captions[currentStep];

    // Update image 
    image.src = `assets/images/image-${currentStep + 1}.png`;

    // Update progress dots
    updateProgress(currentStep -1);
  } else {
    currentStep = 0;
    caption.textContent = captions[currentStep];
    image.src = `assets/images/image-1.png`;
    updateProgress(currentStep);
  }
});

function updateProgress(step) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === 0 && step === 0) {
      dot.classList.add('active');
    } else if (index <= step && step !== 0) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}
