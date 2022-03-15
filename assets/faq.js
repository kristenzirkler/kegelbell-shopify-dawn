for (const parent of document.querySelectorAll('.one-faq')) {
  //console.log(parent);
  parent.addEventListener('click', function(clickEvent) {
    //console.log(parent);
    const child = parent.querySelector('.faq-desc');
    //console.log(child);
    //console.log(window.getComputedStyle(child).display);

    // If the element is visible, hide it
    if (window.getComputedStyle(child).display === 'block') {
      child.style.display = 'none';
      return;
    }
    // Otherwise, show it
    child.style.display = 'block';
  })
}