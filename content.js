document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.shiftKey && event.key === 'D') {
    event.preventDefault();
    browser.runtime.sendMessage({command: 'duplicate-tab'});
  }
});

