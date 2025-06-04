// theme.js - handles dark/light mode toggling and persistence
(function() {
  const storageKey = 'theme';
  const classNameDark = 'dark';
  const classNameLight = 'light';

  function applyTheme(theme) {
    document.documentElement.classList.remove(classNameDark, classNameLight);
    document.documentElement.classList.add(theme);
  }

  function currentTheme() {
    return document.documentElement.classList.contains(classNameDark) ? classNameDark : classNameLight;
  }

  window.toggleTheme = function() {
    const newTheme = currentTheme() === classNameDark ? classNameLight : classNameDark;
    applyTheme(newTheme);
    localStorage.setItem(storageKey, newTheme);
  };

  const stored = localStorage.getItem(storageKey);
  if (stored) {
    applyTheme(stored);
  } else {
    // default to dark
    applyTheme(classNameDark);
  }
})();
