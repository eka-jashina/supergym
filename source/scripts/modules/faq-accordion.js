function openAccordion(button) {
  const panel = button.nextElementSibling;
  button.classList.add('answer--open');
  panel.style.maxHeight = `${panel.scrollHeight }px`;
}

function toggleAccordion(button) {
  const panel = button.nextElementSibling;
  const isActive = button.classList.contains('answer--open');

  if (isActive) {
    button.classList.remove('answer--open');
    panel.style.maxHeight = null;
  } else {
    openAccordion(button);
  }
}

export { toggleAccordion, openAccordion };
