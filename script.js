(function () {

  const defaultPage = 'home';

  function setPage(id, push = true) {

    document
      .querySelectorAll('.page')
      .forEach(page => {
        page.classList.remove('active');
      });

    const selectedPage =
      document.getElementById(`page-${id}`);

    if (selectedPage) {
      selectedPage.classList.add('active');
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    document.body.setAttribute('data-page', id);

    if (push) {
      history.pushState(
        { page: id },
        '',
        `#${id}`
      );
    }
  }

  function showPage(id) {
    setPage(id, true);
  }

  function toggleMenu() {

    document
      .getElementById('hamburger')
      .classList.toggle('open');

    document
      .getElementById('dropdown')
      .classList.toggle('open');
  }

  function closeMenu() {

    document
      .getElementById('hamburger')
      .classList.remove('open');

    document
      .getElementById('dropdown')
      .classList.remove('open');
  }

  document
    .getElementById('logo-btn')
    .addEventListener('click', () => {
      showPage('home');
    });

  document
    .getElementById('hamburger')
    .addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

  document
    .getElementById('nav-heal')
    .addEventListener('click', () => {
      showPage('heal');
      closeMenu();
    });

  document
    .getElementById('nav-revive')
    .addEventListener('click', () => {
      showPage('revive');
      closeMenu();
    });

  document
    .getElementById('nav-buff')
    .addEventListener('click', () => {
      showPage('buff');
      closeMenu();
    });

  document
    .getElementById('btn-heal')
    .addEventListener('click', () => {
      showPage('heal');
    });

  document
    .getElementById('btn-revive')
    .addEventListener('click', () => {
      showPage('revive');
    });

  document
    .getElementById('btn-buff')
    .addEventListener('click', () => {
      showPage('buff');
    });

  document
    .getElementById('footer-home')
    ?.addEventListener('click', (e) => {
      e.preventDefault();
      showPage('home');
    });

  document
    .getElementById('footer-heal')
    ?.addEventListener('click', (e) => {
      e.preventDefault();
      showPage('heal');
    });

  document
    .getElementById('footer-revive')
    ?.addEventListener('click', (e) => {
      e.preventDefault();
      showPage('revive');
    });

  document
    .getElementById('footer-buff')
    ?.addEventListener('click', (e) => {
      e.preventDefault();
      showPage('buff');
    });

  window.addEventListener('popstate', (e) => {

    const page =
      (e.state && e.state.page) ||
      location.hash.replace('#', '') ||
      defaultPage;

    setPage(page, false);
  });

  const initialPage =
    location.hash.replace('#', '') ||
    defaultPage;

  history.replaceState(
    { page: initialPage },
    '',
    `#${initialPage}`
  );

  setPage(initialPage, false);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  document.addEventListener('click', (e) => {

    const hamburger =
      document.getElementById('hamburger');

    const dropdown =
      document.getElementById('dropdown');

    if (!hamburger || !dropdown) return;

    const menuIsOpen =
      dropdown.classList.contains('open');

    if (!menuIsOpen) return;

    const clickedInsideMenu =
      dropdown.contains(e.target);

    const clickedHamburger =
      hamburger.contains(e.target);

    if (!clickedInsideMenu && !clickedHamburger) {
      closeMenu();
    }

  });

})();