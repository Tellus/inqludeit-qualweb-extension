console.debug('Adding chrome devtools panel');

chrome.devtools.panels.create('InqludeIT', '', '/src/devtools/index.html', (panel) => {
  console.debug('Devtools panel is up!');
});