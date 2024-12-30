//<================================================>//
/*
          [ SCRIPT OZORA BOT NEW GEN ]
 
            < SCRIPT BASE BY TANAKA >

         ┏⊱┈┈┈┈┈┈┈┈┈┈WARNING┈┈┈┈┈┈┈┈┈┈┈┈
         ╎☞ Script Ini Gratis! Bukan Untuk Di Jual 
         ╎☞ Recode/Reupload?                     
         ╎☞ Tag Me @B16_OFC                    
         ╚┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*/
//<================================================>//

const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')

//========== Nomor Pairing Code ==========\\
global.pairing = '628xxx'

//========== Owner Settings 1 ==========\\
global.owner = ['628xxx']
global.owner0 = '628xxx@s.whatsapp.net'
global.nomerowner = ["628xxx"]
global.ownername = "Zora"

//========== Owner Settings 2 ==========\\
global.ownernumber = '628xxx'  //creator number
global.ownername = 'Zora' //owner name
global.botname = 'Ozora Bot' //name of the bot

//========== Watermark Sticker==========\\
global.packname = 'Sticker Created' // ubah aja ini nama sticker
global.author = `At ${hariini}\n${time}` // ubah aja ini nama sticker

//========== Console View ==========\\
global.themeemoji = '🍁'
global.wm = "Ozora Bot"
global.urldb = ''

//========== Setting Saluran ==========\\
global.namasaluran = "Ozora Bot Multi Device V1.3"
global.idch = "120363342674051595@newsletter"

//========== Setting Foto ==========\\
global.thumb = "https://pomf2.lain.la/f/tu334px.jpg"

//========== Custom Prefix ==========\\
global.prefa = ['','/','!','.','#','&']

//========== Settings Bot ==========\\
global.versisc = "1.3"
global.welcome = true 
global.autoswview = true

//========== Message Settings ==========\\
global.mess = {
    done: 'Done!',
    prem: '[ system ] Maaf Fitur Ini Hanya Untuk Pengguna Premium!\nJika Ingin Menggunakan Fitur Ini Ketik *.owner* Untuk Berlangganan Premium',
    admin: '[ system ] Fitur Khusus Admin',
    botadmin: '[ system ] Fitur Bisa Di Gunakan Ketika Bot Menjadi Admin',
    owner: '[ system ] Fitur Ini Khusus Owner',
    group: '[ system ] Fitur Khusus Group',
    private: '[ system ] Fitur Khusus Private Chat',
    wait: 'Process . . . ',    
    error: 'Error!',
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update'${__filename}'`)
    delete require.cache[file]
    require(file)
})
