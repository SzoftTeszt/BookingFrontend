const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow() {
    win = new BrowserWindow({width: 800, height: 800});
    win.setMenuBarVisibility(false)
    win.loadFile(path.join(__dirname, 'dist/Hostels-Booking/browser/index.html'));
  }
  app.whenReady().then(() => {
    createWindow()
  })