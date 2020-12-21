const {ipcMain} = require('electron')

ipcMain.on('comunicate',(event,arg)=>{
    console.log(arg)

    event.reply('comunicate','pong')
    
})