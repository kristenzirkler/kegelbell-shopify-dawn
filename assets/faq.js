console.log('4');
const faqtog = document.querySelector('.one-faq');
const handleToggle = () => faqtog.classList.toggle('active');

faqtog.onclick = () => handleToggle();
faqtog.addEventListener('keyup', (event) => {
  if(event.keyCode === 13 || event.keyCode === 32) {
    handleToggle();
    console.log('toggle');
  }
});