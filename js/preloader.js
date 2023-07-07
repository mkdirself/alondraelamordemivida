window.addEventListener('load', () => {
    const preloader = document.querySelector('.preload');
    setTimeout(() => {
      preloader.classList.add('finish');
    }, 2000);
  });
  