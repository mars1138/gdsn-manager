const SetRevealSections = (trigger = 0.25) => {
  const allSections = [...document.getElementsByTagName('section')];

  const revealSection = (entries, observer) => {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('hidden');
    observer.unobserve(entry.target);
  };

  const observerParams = {
    root: null,
    threshold: trigger,
  };

  const sectionOberver = new IntersectionObserver(
    revealSection,
    observerParams
  );

  allSections.forEach((section) => {
    sectionOberver.observe(section);
    section.classList.add('hidden');
  });
};

export default SetRevealSections;
