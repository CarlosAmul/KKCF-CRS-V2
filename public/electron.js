const path = require('path')

const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    })

    win.loadURL(
        isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`
    );
    // open DevTools
    if (isDev) {
        win.webContents.openDevTools({ mode: 'detach' })
    }
};

// will be called when Electron is finished
//APIs can only be called after this event
app.whenReady().then(createWindow)

//Quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // If all no widows are open
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

