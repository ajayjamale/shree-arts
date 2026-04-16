export const scrollToSection = (sectionId) => {
  const target = document.getElementById(sectionId);

  if (!target) {
    return;
  }

  const navbarOffset = 86;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarOffset;

  window.scrollTo({
    top: targetTop,
    behavior: 'smooth',
  });
};
