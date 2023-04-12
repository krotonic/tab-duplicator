browser.commands.onCommand.addListener(async (command) => {
  if (command === 'duplicate-tab') {
    // Disable default bookmarking behavior
    browser.bookmarks.onCreated.addListener((id, bookmark) => {
      browser.bookmarks.remove(id);
    });

    const currentTab = await browser.tabs.query({ active: true, currentWindow: true });
    await browser.tabs.duplicate(currentTab[0].id);
  }
});

