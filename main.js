const { app, BrowserWindow } = require('electron');
const path = require('path');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 500,
    height: 800,
    resizable: false,
    title: 'Dildo Clicker',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  win.loadFile('index.html');
  win.setMenuBarVisibility(false);
});

app.on('window-all-closed', () => {
  app.quit();
});
