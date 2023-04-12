browser.commands.onCommand.addListener(async (command) => {
  if (command === 'duplicate-tab') {
    const currentTab = await browser.tabs.query({ active: true, currentWindow: true });
    await browser.tabs.duplicate(currentTab[0].id);
  }
});

browser.runtime.onMessage.addListener(async (message) => {
  if (message.command === 'duplicate-tab') {
    const currentTab = await browser.tabs.query({ active: true, currentWindow: true });
    await browser.tabs.duplicate(currentTab[0].id);
  }
});

