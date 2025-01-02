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
require('./settings')
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@adiwajshing/baileys')
const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
const fsx = require('fs-extra')
const util = require('util')
const fetch = require('node-fetch')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const FormData = require('form-data');
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const { performance } = require("perf_hooks");
const process = require('process');
const moment = require("moment-timezone")
const os = require('os');
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const ms = toMs = require('ms')
const gis = require('g-i-s')
const yts = require("yt-search")
const canvafy = require('canvafy')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const timestampp = speed();
const latensi = speed() - timestampp
const { bytesToSize, checkBandwidth, formatSize, jsonformat, nganuin, shorturl, color } = require("./lib/function");
const { addExif } = require('./lib/exif')
const {
    smsg,
    formatDate,
    getTime,
    getGroupAdmins,
    formatp,
    await,
    sleep,
    runtime,   
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    fetchBuffer,
    buffergif,
    GIFBufferToVideoBuffer,
    totalcase,
    isUrl
} = require('./lib/myfunc')

module.exports = Ozora = async (Ozora, m, chatUpdate, store) => {
try {
const body = (m && m.mtype) ? (
m.mtype === 'conversation' ? m.message?.conversation :
m.mtype === 'imageMessage' ? m.message?.imageMessage?.caption :
m.mtype === 'videoMessage' ? m.message?.videoMessage?.caption :
m.mtype === 'extendedTextMessage' ? m.message?.extendedTextMessage?.text :
m.mtype === 'buttonsResponseMessage' ? m.message?.buttonsResponseMessage?.selectedButtonId :
m.mtype === 'listResponseMessage' ? m.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
m.mtype === 'templateButtonReplyMessage' ? m.message?.templateButtonReplyMessage?.selectedId :
m.mtype === 'messageContextInfo' ? (
m.message?.buttonsResponseMessage?.selectedButtonId || 
m.message?.listResponseMessage?.singleSelectReply?.selectedRowId || 
m.text
) : ''
) : '';
const budy = (m && typeof m.text === 'string') ? m.text : '';
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m.pushName || "No Name";
const botNumber = await Ozora.decodeJid(Ozora.user.id);
const type = m
const sender = m.sender
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const itsMe = (m && m.sender && m.sender == botNumber) || false;
const cmd = prefix + command
const text = q = args.join(" ");
const fatkuns = m && (m.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m.quoted || m;
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
//group
const groupMetadata = m.isGroup ? await Ozora.groupMetadata(m.chat).catch(e => {}) : {};
const groupName = m.isGroup ? groupMetadata.subject || '' : '';
const participants = m.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isBot = botNumber.includes(senderNumber)
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const groupOwner = m.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const isMediaLily = m.mtype
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const salam = 'Selamat '+dt.charAt(0).toUpperCase() + dt.slice(1)    
let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)
const lilydate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴏʀᴇ'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱɪᴀɴɢ️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴜʙᴜʜ'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'
        }
//================== [ FUNCTION ] ==================//

const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $('input[name=token]').val();
      let build_server = $('input[name=build_server]').val();
      let build_server_id = $('input[name=build_server_id]').val();
      form.append('text[]', text);
      form.append('token', token);
      form.append('build_server', build_server);
      form.append('build_server_id', build_server_id);
      let res = await axios({
        url: url,
        method: 'POST',
        data: form,
        headers: {
          Accept: '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          cookie: gT.headers['set-cookie']?.join('; '),
          ...form.getHeaders(),
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$('input[name=form_value_input]').val());
      json['text[]'] = json.text;
      delete json.text;
      let { data } = await axios.post(
        'https://en.ephoto360.com/effect/create-image',
        new URLSearchParams(json),
        {
          headers: {
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
            cookie: gT.headers['set-cookie'].join('; '),
          },
        }
      );
      return build_server + data.image;
  }
async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}

const totalFitur = () =>{
            var mytext = fs.readFileSync("./ozora.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

// AMBIL PP USER
try {
var ppuser = await Ozora.profilePictureUrl(m.sender, 'image')} catch (err) {
let ppuser = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'}
let ppnyauser = await getBuffer(ppuser)
let ppUrl = await Ozora.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')

Ozora.autoshalat = Ozora.autoshalat ? Ozora.autoshalat : {};
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? Ozora.user.id : m.sender;
let id = m.chat;
if (id in Ozora.autoshalat) {
return false;
}
let jadwalSholat = {
shubuh: "04:29",
terbit: "05:44",
dhuha: "06:16",
dzuhur: "12:02",
ashar: "15:15",
magrib: "17:52",
isya: "19:01",
};
const datek = new Date(
new Date().toLocaleString("en-US", {
timeZone: "Asia/Jakarta",}),
);
const hours = datek.getHours();
const minutes = datek.getMinutes();
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
if (timeNow === waktu) {
Ozora.autoshalat[id] = [
                    Ozora.sendMessage(m.chat, {
                        audio: {
                            url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
                        },
                        mimetype: 'audio/mp4',
                        ptt: true,
                        contextInfo: {
                         mentions: participants.map(a => a.id),
                            externalAdReply: {
                                showAdAttribution: true,
                                mediaType: 1,
                                mediaUrl: '',
                                title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
                                body: `🕑 ${waktu}`,
                                sourceUrl: '',
                                thumbnailUrl: `https://i.top4top.io/p_3193v20ky1.jpg`,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m,
                    }),
setTimeout(async () => {
delete Ozora.autoshalat[m.chat];
}, 57000),];
}} 
//================== [ DATABASE ] ==================//
//================== [ CONSOL LOGG] ==================//

  if (m.message) {            
    console.log(chalk.cyan(`────────────『 ${chalk.redBright('INFO MESSAGE')} 』────────────`));
    console.log(`   ${chalk.cyan('» Message Type')}: ${m.mtype}`);
    console.log(`   ${chalk.cyan('» Sent Time')}: ${time2}`);
    console.log(`   ${chalk.cyan('» Sender Name')}: ${pushname || 'N/A'}`);
    console.log(`   ${chalk.cyan('» Chat ID')}: ${m.chat.split('@')[0]}`);
    console.log(`   ${chalk.cyan('» Chat Name')}: ${budy || 'N/A'}`);
    console.log(`   ${chalk.cyan('» Author By')}: B16_OFC`);
    console.log(chalk.cyan('───────────────────────────────────⳹\n'));
}
//================== [ FAKE REPLY ] ==================//
const fkontak = {
key: {
participants: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
fromMe: false,
id: "Halo"},
message: {
contactMessage: {
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
}},
participant: "0@s.whatsapp.net"
}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}

const reply = async(teks) => { 
Ozora.sendMessage(m.chat, { text : teks,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: '120363342674051595@newsletter',
serverMessageId: 20,
newsletterName: 'Ozora Multi Device'
},
externalAdReply: {
title: "Ozora Multi Devicee", 
body: "",
thumbnailUrl: "https://files.catbox.moe/vikf6c.jpg", 
sourceUrl: null,
mediaType: 1
}}}, { quoted : m })
}

if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy)) {
let urel = `https://pomf2.lain.la/f/7ixvc40h.mp3`
Ozora.sendMessage(m.chat, {audio: {url: urel}, mimetype: 'audio/mpeg', ptt: true }, { quoted: m})
}

switch(command) {
//=================================================//
case 'menu': {
let menulist = `
> INFORMASI BOT
✾ *Bot Name* : ${global.botname}
✾ *Owner Name* : ${global.ownername}
✾ *Runtime* : ${runtime(process.uptime())}
✾ *Versi Sc*: ${global.versisc}
✾ *Total Fitur* : ${totalFitur()}  Fitur

${readmore}
╭━━━━°「 *AI MENU* 」° 
┃ • ${prefix}ai
┊ • ${prefix}joko
┃ • ${prefix}turbo
┊ • ${prefix}autoai
╰═┅═━––––––๑

╭━━━━°「 *OWNER MENU* 」° 
┃ • ${prefix}editcase
┊ • ${prefix}renamecase
┃ • ${prefix}addcase
┊ • ${prefix}delcase
┃ • ${prefix}decrypt
┊ • ${prefix}public
┃ • ${prefix}self
┊ • ${prefix}idch
┃ • ${prefix}block
┊ • ${prefix}unblock 
┃ • ${prefix}autoread
┊ • ${prefix}setppbot
┃ • ${prefix}get
┊ • ${prefix}backup
╰═┅═━––––––๑

╭━━━━°「 *DOWNLOAD MENU* 」° 
┊ • ${prefix}play
┃ • ${prefix}mediafire
┊ • ${prefix}gitclone
┃ • ${prefix}ytmp3
┊ • ${prefix}ytmp4
┃ • ${prefix}igmp4
┊ • ${prefix}igdl
┃ • ${prefix}gdrive
┊ • ${prefix}tiktok
┃ • ${prefix}tiktokhd
┊ • ${prefix}tiktokaudio
┃ • ${prefix}snackvideo
╰═┅═━––––––๑

╭━━━━°「 *SEARCH MENU* 」° 
┃ • ${prefix}webtoon
┊ • ${prefix}filmsearch
┃ • ${prefix}anilist
┊ • ${prefix}spotify
┃ • ${prefix}vtuber
╰═┅═━––––––๑

╭━━━━°「 *GROUP MENU* 」° 
┃ • ${prefix}open
┊ • ${prefix}close
┃ • ${prefix}add
┊ • ${prefix}kick
┃ • ${prefix}hidetag
┊ • ${prefix}delete
┃ • ${prefix}promote
┃ • ${prefix}demote
┊ • ${prefix}demoteall
┊ • ${prefix}rvo <Read View One>
┃ • ${prefix}linkgc
┊ • ${prefix}setppgroup
┃ • ${prefix}delppgroup
┃ • ${prefix}setdesc
┊ • ${prefix}setnamegc
┃ • ${prefix}totag
┊ • ${prefix}tagall
┃ • ${prefix}opentime
┊ • ${prefix}closetime
┃ • ${prefix}getbio
┊ • ${prefix}resetlink
╰═┅═━––––––๑

╭━━━━°「 *EPHOTO MENU* 」°
┊ • ${prefix}glitchtext
┃ • ${prefix}writetext
┊ • ${prefix}advancedglow
┃ • ${prefix}typographytext
┊ • ${prefix}pixelglitch
┃ • ${prefix}neonglitch
┊ • ${prefix}flagtext
┃ • ${prefix}flag3dtext
┊ • ${prefix}deletingtext
┃ • ${prefix}blackpinkstyle
┊ • ${prefix}glowingtext
┃ • ${prefix}underwatertext
┊ • ${prefix}logomaker
┃ • ${prefix}cartoonstyle
┊ • ${prefix}papercutstyle
┃ • ${prefix}watercolortext
┊ • ${prefix}effectclouds
┃ • ${prefix}blackpinklogo
┊ • ${prefix}gradienttext
┃ • ${prefix}summerbeach
┊ • ${prefix}luxurygold
┃ • ${prefix}multicoloredneon
┊ • ${prefix}sandsummer
┃ • ${prefix}galaxywallpaper
┊ • ${prefix}1917style
┃ • ${prefix}makingneon
┊ • ${prefix}royaltext
┃ • ${prefix}freecreate
┊ • ${prefix}galaxystyle
┃ • ${prefix}lighteffects
╰═┅═━––––––๑

╭━━━━°「 *OTHER MENU* 」°
┃ • ${prefix}owner
┊ • ${prefix}sc
┃ • ${prefix}ping
┊ • ${prefix}disk
╰═┅═━––––––๑

╭━━━━°「 *TOOLS MENU* 」°
┊ • ${prefix}tovn
┃ • ${prefix}toaud
┊ • ${prefix}tomp3
┃ • ${prefix}tourl
┊ • ${prefix}ocr <Image To Text>
┃ • ${prefix}ssweb
┊ • ${prefix}hd
┃ • ${prefix}faketweet
┊ • ${prefix}nglspam
┊ • ${prefix}tr <Translate>
┃ • ${prefix}trackip
╰═┅═━––––––๑

╭━━━━°「 *VOICE MENU* 」°
┊ • ${prefix}bass
┃ • ${prefix}blown
┊ • ${prefix}deep
┃ • ${prefix}earrape
┊ • ${prefix}fast
┊ • ${prefix}fat
┃ • ${prefix}nightcore
┊ • ${prefix}reverse
┃ • ${prefix}robot
┊ • ${prefix}slow
┃ • ${prefix}tupai
╰═┅═━––––––๑
`
 Ozora.sendMessage(m.chat, {
 text: menulist,
 contextInfo: {
 mentionedJid: [m.sender],
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
newsletterName: `${global.namasaluran}`,
newsletterJid: idch,
},
 externalAdReply: {
 showAdAttribution: true,
 title: `© Copyright ${global.ownername}`,
 body: '',
 thumbnailUrl: thumb,
 sourceUrl: "https://Instagram.com/xxxx",
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
 },
 { 
 quoted : m
 }
 )
}
break

case 'tovn': case 'toptt': case 'tovoice': {
if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
let media = await (m.quoted ? m.quoted.download() : m.download())
let audio = await toPTT(media, 'mp4')
await Ozora.sendMessage(m.chat, { audio: audio, mimetype: 'audio/ogg; codecs=opus', ptt: true }, { quoted: m })
}
break

case 'toaud': 
case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
let media = await Ozora.downloadMediaMessage(qmsg)
let audio = await toAudio(media, 'mp4')
Ozora.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })

}
break

case 'tomp3': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
reply(mess.wait)
let media = await Ozora.downloadMediaMessage(qmsg)
let audio = await toAudio(media, 'mp4')
Ozora.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By B16_OFC.mp3`}, { quoted : m })

}
break

case 'ytmp4': {
if (!args[0] || !args[1]) {
return reply(`Example:\n\n] *${prefix + command} https://youtu.be/dnfuhUhYMFk?si=-yms7URz1CBqxAnY 360p*\n\nResolusi : ( 144p, 240p, 360p, 480p, 720p, 1080p )\n\n_Jangan Menggunakan Resolusi Terlalu Besar Agar Proses Upload Vidio Tidak Lama_`);
}

// Tambahkan loading message di sini
await m.reply(mess.wait);
try {
let zora = await fetchJson(`https://api.agatz.xyz/api/ytmp4?url=${args[0]}`);
let hasil = zora.data;
let video480p = hasil.find(video => video.quality === `${args[1]}`);
if (video480p) {
await Ozora.sendMessage(m.chat, { 
video: { url: video480p.downloadUrl }, 
caption: `Download video: ${video480p.title} (${video480p.quality})` 
}, { quoted: m });
} else {
return reply(`Video dengan kualitas ${args[1]} tidak tersedia.`);
}
} catch (e) {
console.log(e);
return reply(mess.error);
}
}
break;

case 'mediafire':{
if (!text) return reply("Masukkan URL Mediafire");
if (!text.includes('mediafire.com')) return m.reply('URL tidak valid.');
 try {
let api = await axios.get(`https://server.apisanz.my.id/download/mediafire?text=${text}`);
let ress = api.data.data;
let name = ress.name;
let filename = ress.filename;
let type = ress.type;
let size = ress.size;
let created = ress.created;
let dl = ress.media;
let link = ress.link;
let response = await axios.get(dl, { responseType: 'arraybuffer' });
let buffer = Buffer.from(response.data, 'binary');
await Ozora.sendMessage(m.chat, {
  document: buffer,
  mimetype: type,
  fileName: filename || name,
  caption: `Berhasil mengunduh file:\n\n*Nama*: ${name}\n*Ukuran*: ${size}\n*Tipe*: ${type}\n*Dibuat*: ${created}\n*Link*: ${link}`,
  contextInfo: {
 externalAdReply: {
title: name, // Ambil judul dari nama file
body: `Ukuran file: ${size}`, // Ambil ukuran file sebagai deskripsi
mediaType: 1,
thumbnailUrl: "https://files.catbox.moe/ifru42.jpg", // URL thumbnail yang baru
sourceUrl: link, // Gunakan link file sebagai sumber
renderLargerThumbnail: true
 },
 forwardedNewsletterMessageInfo: {
newsletterJid: idch, // ID newsletter
newsletterName:`${global.namasaluran}`, // Nama newsletter
serverMessageId: -1 // ID server
 }
  }
});
 } catch (error) {
console.error(error);
m.reply("Gagal mengunduh file. Pastikan URL valid dan coba lagi.");
 }
}
break

case 'igvid': case 'igmp4': case 'igdl':{
    if (!text) return m.reply(`Anda perlu memberikan URL video, reel`);
   m.reply (mess.wait)
    let res;
    try {
        res = await fetch(`https://api.siputzx.my.id/api/d/igdl?url=${encodeURIComponent(text)}`);
    } catch (error) {
        return m.reply(`An error occurred: ${error.message}`);
    }

    let api_response;
    try {
        api_response = await res.json();
    } catch (error) {
        return m.reply(`Failed to parse API response: ${error.message}`);
    }

    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return m.reply(`No video or image found or Invalid response from API.`);
    }

try {
    const mediaData = api_response.result[0]; // Ambil elemen pertama dari array result
    const mediaType = mediaData.thumbnail ? 'image' : 'video'; // Periksa apakah thumbnail ada
    const mediaURL = mediaData.url;
    const cap = `HERE IS THE VIDEO`;

            await Ozora.sendMessage(m.chat, { video: { url: mediaURL }, caption: cap }, { quoted: m });
        
    } catch (error) {
        return m.reply(`Failed to send media: ${error}`);
    }
}
break

case 'renamecase':
if (!isCreator) return m.reply(mess.owner);
if (!q) return m.reply(`Format tidak valid. Contoh: ${prefix + command} izintes|izintesnew`);
const [oldCaseName, newCaseName] = q.split('|').map(name => name.trim());

if (!oldCaseName || !newCaseName) {
return m.reply('Format tidak valid. Contoh: renamecase izintes|izintesnew');
}
const rinembos = path.join(__dirname, 'ozora.js');

try {
let data = fs.readFileSync(rinembos, 'utf8');
const caseRegex = new RegExp(`case\\s+'${oldCaseName}'\\s*:\\s*`, 'g');
const startIndex = data.search(caseRegex);

if (startIndex === -1) {
return m.reply(`Case '${oldCaseName}' tidak ditemukan.`);
}
const nextCasePattern = /case\s+'/g;
nextCasePattern.lastIndex = startIndex + 1;
const nextCaseMatch = nextCasePattern.exec(data);
const updatedData = data.replace(caseRegex, `case '${newCaseName}':`);
fs.writeFileSync(rinembos, updatedData, 'utf8');
m.reply(`Case '${oldCaseName}' Telah Di Ubah Menjadi '${newCaseName}'!`);
} catch (err) {
console.error(err);
m.reply('Terjadi kesalahan saat membaca atau menulis file.');
}
break

case 'editcase': 
if (!isCreator) return m.reply(mess.owner);
if (!q) return m.reply(`Case Yang Mau Di Editnya Mana Bang, Contoh : ${prefix + command} case \'namafitur\':\n\n<kode baru>`);
const caseNameRegex = /case\s+'([^']+)':/; 
const match = q.match(caseNameRegex);
if (!match) {
return m.reply('Format Salah Sayang, Contoh : .editcase case \'namafitur\':\n\n<kode baru>');
}
const caseName = match[1]; 
const newCode = q.replace(caseNameRegex, '').trim();
const filenyabang = path.join(__dirname, 'ozora.js');
try {
let data = fs.readFileSync(filenyabang, 'utf8');
const caseRegex = new RegExp(`case\\s+'${caseName}'\\s*:\\s*`, 'g');
const startIndex = data.search(caseRegex);
if (startIndex !== -1) {
let endIndex = -1;
const breakPattern = /break\s*;/g;
breakPattern.lastIndex = startIndex;
const breakMatch = breakPattern.exec(data);

if (breakMatch) {
endIndex = breakMatch.index + breakMatch[0].length;
}  
const nextCasePattern = /case\s+'/g;
nextCasePattern.lastIndex = startIndex + 1;
const nextCaseMatch = nextCasePattern.exec(data);
if (nextCaseMatch && (endIndex === -1 || nextCaseMatch.index < endIndex)) {
endIndex = nextCaseMatch.index;
}
if (endIndex !== -1) {
const updatedCode = `case '${caseName}':\n${newCode}\n`;
data = data.slice(0, startIndex) + updatedCode + data.slice(endIndex);
fs.writeFileSync(filenyabang, data, 'utf8');
m.reply(`Done Bang Update Case ${q}!`);
} else {
m.reply('Maaf, tidak ditemukan akhir yang jelas untuk case tersebut.');
}
} else {
m.reply('Bakaa!, Casenya Kaga Ada Di File');
}
} catch (err) {
console.error(err);
m.reply('Eror, silahkan cek console untuk lihat apa yang eror');
}
break

case 'gdrive': {
if (!text) return reply(`Example ${prefix + command} url`)
async function GDriveDl(url) {
	let id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))?.[1]
	if (!id) return reply('ID Not Found')
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) return reply('Link Download Limit!')
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return {
		downloadUrl, fileName,
		fileSize: (sizeBytes / 1024 / 1024).toFixed(2),
		mimetype: data.headers.get('content-type')
	}
}
try {
  let kanjuttgede = await GDriveDl(text)
  let bjirrbang = `*Google Drive*\n\nNama: ${kanjuttgede.fileName}\nLink: ${kanjuttgede.downloadUrl}`
  reply(bjirrbang)
  await Ozora.sendMessage(m.chat, { document: { url: kanjuttgede.downloadUrl }, fileName: kanjuttgede.fileName, mimetype: kanjuttgede.mimetype }, { quoted: m })
} catch (error) {
  m.reply(`${error.message}`)
}
}
break

case 'mods': case 'modapk': {
  const axios = require('axios')
  const cheerio = require('cheerio')

  async function mods(apk) {
    const url = `https://m.happymod.com/search.html?q=${apk}`

    const response = await axios.get(url)
    const html = response.data
    const $ = cheerio.load(html)

    const apps = []

    $('.app-info-list .s-app-block').each((index, element) => {
      const app = {
        creator: 'ozora',
        status: 200,
        title: $(element).find('.info-wrap .nowrap a').text().trim(),
        image: $(element).find('.img img').attr('data-src'),
        downloadUrl: `https://m.happymod.com${$(element).find('.down a').attr('href')}`
      }
      apps.push(app)
      if (apps.length >= 5) return false
    })

    return apps
  }

  if (text) {
    const response = await mods(text)
    let result = ''

    response.forEach((app, index) => {
      result += `*${index + 1}*. ${app.title}:\n`
      result += `∘ Download ${app.downloadUrl}\n\n`
    })

    Ozora.sendMessage(m.chat, {
      text: result,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: false,
          title: `Mod Apk Search`,
          body: `Looking for Cool and Free Apk Mods!`,
          sourceUrl: 'https://m.happymod.com',
          thumbnailUrl: thumb,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    })
  } else {
   m.reply(`Masukan Text, *Seperti Format Ini*: .${command} minecraft`)
  }
}
break

case 'nglspam': {
if (!isCreator) return reply(mess.owner)
    if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
        return m.reply("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam Ozora|haloo|5");
    }
async function sendSpamMessage(username, message, spamCount) {
    let counter = 0;
    while (counter < spamCount) {
        try {
            const date = new Date();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            const formattedDate = `${hours}:${minutes}`;
            const deviceId = crypto.randomBytes(21).toString('hex');
            const url = 'https://ngl.link/api/submit';
            const headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
                'Accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.5',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Referer': `https://ngl.link/${username}`,
                'Origin': 'https://ngl.link'
            };
            const body = `username=${username}&question=${message}&deviceId=${deviceId}&gameSlug=&referrer=`;

            const response = await fetch(url, {
                method: 'POST',
                headers,
                body,
                mode: 'cors',
                credentials: 'include'
            });

            if (response.status !== 200) {
                console.log(`[${formattedDate}] [Err] Ratelimited`);
                await new Promise(resolve => setTimeout(resolve, 25000));
            } else {
                counter++;
                console.log(`[${formattedDate}] [Msg] Sent: ${counter}`);
            }
        } catch (error) {
            console.error(`[${formattedDate}] [Err] ${error}`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
};
    const [username, message, count] = text.split("|");
    const spamCount = parseInt(count, 10);

    if (isNaN(spamCount) || spamCount <= 0) {
        return m.reply("Jumlah spam harus berupa angka positif!");
    }

    try {
        await sendSpamMessage(username, message, spamCount);
        m.reply(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
    } catch (e) {
        console.error(e); // Menambahkan logging error untuk debug
        return m.reply("Fitur error, coba lagi nanti.");
    }
}
break

case 'trackip':
{
if (!text) return m.reply(`*Example:*\n> ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await Ozora.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break

case "tourl": {
if (!/image/.test(mime)) return m.reply(`kirim/reply foto dengan caption ${prefix + command}`)
let media = await Ozora.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('postimages.org');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'ozora.png');
let teks = directLink.toString()
await Ozora.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

case 'demoteall': {
 if (!m.isGroup) return m.reply(mess.group)
 if (!isAdmins && !isCreator) return m.reply(mess.admin)
 if (!isBotAdmins) return m.reply(mess.botAdmins)
const OzoraDemoteAll = (args[0] === 'numBut')
? text.replace(`${args[0]} `, '').split('|')
: (Number(args[0]))
? groupMetadata.participants
.filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
.map(item => item.id)
: groupMetadata.participants
.filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
.map(item => item.id);
 for (let demote of OzoraDemoteAll) {
 await Ozora.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
 await sleep(100);
 }
 m.reply(`Sukses Demote all user!`);
}
break

case 'tr': {
  if (!text) return reply(`reply yang mau ditranslate`)
async function translate(query = "", lang) {
	if (!query.trim()) return "";
	const url = new URL("https://translate.googleapis.com/translate_a/single");
	url.searchParams.append("client", "gtx");
	url.searchParams.append("sl", "auto");
	url.searchParams.append("dt", "t");
	url.searchParams.append("tl", lang);
	url.searchParams.append("q", query);

	try {
		const response = await fetch(url.href);
		const data = await response.json();
		if (data) {
			return [data[0].map((item) => item[0].trim()).join("\n"), data[2]];
		} else {
			return "";
		}
	} catch (err) {
		throw err;
	}
}

let banjir = await translate(m.quoted.text, "id")
m.reply(`${banjir[0]}, ${banjir[1]}`)
}
break

case 'sc':
case 'script': {
m.reply(`Script Bot *${global.botname}*\n\n> https://www.mediafire.com/file/6wjr9g50am4sssq/Ozora+Bot+V1.3.zip/file`)
}
break

case 'tagall': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let teks = `*Tag All*\n\n*Message :* ${q ? q : ''}\n\n`
for (let mem of participants) {
teks += `${setv} @${mem.id.split('@')[0]}\n`
}
await Ozora.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

case 'totag': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!m.quoted) return m.reply(`Reply chat dengan caption ${prefix + command}`)
delete m.quoted.chat
await Ozora.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break

case 'getbio':{
try {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.quoted.sender ? m.quoted.sender : m.sender
let bio = await Ozora.fetchStatus(who)
m.reply(bio.status)
} catch {
if (text) return m.reply(`Reply chat nya!`)
else try {
let who = m.quoted ? m.quoted.sender : m.sender
let bio = await Ozora.fetchStatus(who)
m.reply(bio.status)
} catch {
return m.reply(`Reply chat nya!`)
}
}
}
break

case 'ocr': {
const { ocrSpace } = require("ocr-space-api-wrapper");
let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) return m.reply("Fotonya Mana? Reply gambar atau upload");
  if (!/image\/(jpe?g|png)/.test(mime))
    return m.reply(`Tipe ${mime} tidak didukung!`);
  let image = await q.download();
  let download = await Ozora.getFile(image, true);
  let ocr = await ocrSpace(download.filename);
  await Ozora.sendMessage(
    m.chat,
    { text: ocr.ParsedResults[0].ParsedText.trim() },
    { quoted: m },
  );
}
break

case "open": {

if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && isCreator) return m.reply(mess.admin)
await Ozora.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Anggota Dapat Mengirim Pesan")
}
break

case "close": {

if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return RuzReply(mess.botAdmin)
if (!isAdmins && isCreator) return m.reply(mess.admin)
await Ozora.groupSettingUpdate(m.chat, 'announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break

case "hidetag": case "z": case "h": {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && isCreator) return m.reply(mess.admin)
if (!m.quoted && !text) return m.reply(`Example:\n> ${cmd} teksnya\nOr\n> ${cmd} reply text`)
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
Ozora.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break

case 'closetime':
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return m.reply('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
m.reply(`Close time ${q} telah di mulai dari sekarang`)
setTimeout(() => {
var nomor = m.participant
const close = `*Close time* group telah di tutup oleh admin\nsekarang member tidak dapat mengirim pesan`
Ozora.groupSettingUpdate(m.chat, 'announcement')
m.reply(close)
}, timer)
break

case 'opentime':
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return m.reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
}
m.reply(`Open time ${q} telah di mulai dari sekarang`)
setTimeout(() => {
var nomor = m.participant
const open = `*Open time* group telah di buka oleh admin\n sekarang member dapat mengirim pesan`
Ozora.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(open)
}, timer)
break

case 'kick': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!text && !m.quoted) {
m.reply(`Example:>\n> ${prefix + command} 91xxx`)
} else {
const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
await Ozora.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => m.reply('Gagal Kick User!'))
}
}
break

case 'promote': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!text && !m.quoted) {
m.reply(`Example: ${prefix + command} 91xxx`)
} else {
const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
await Ozora.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => m.reply('Gagal Promote User!'))
m.reply(mess.done)
}
}
break

case 'demote': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!text && !m.quoted) {
m.reply(`Example: ${prefix + command} 91xxx`)
} else {
const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
await Ozora.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => m.reply('Gagal Demote User!'))
m.reply(mess.done)
}
}
break

case 'setnamegc': case 'setsubject': case 'setname': case 'setnamegc': case 'setsubject': case 'setsubjectgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!text && !m.quoted) {
m.reply(`Example:\n> ${prefix + command} text`)
} else {
const teksnya = text ? text : m.quoted.text
await Ozora.groupUpdateSubject(m.chat, teksnya).catch((err) => m.reply('Gagal Mengubah Nama Group!'))
}
}
break
case 'setdesc': case 'setdescgc': case 'setdesk': case 'setdeskgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!text && !m.quoted) {
m.reply(`Example:\n> ${prefix + command} textnya`)
} else {
const teksnya = text ? text : m.quoted.text
await Ozora.groupUpdateDescription(m.chat, teksnya).catch((err) => m.reply('Gagal Mengubah Deskripsi Group!'))
}
}
break

case 'setppgroup':
case 'setppgrup':
case 'setppgc':
case 'setgrouppp':
case 'setgruppp':
case 'setgcpp':
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmin) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.admin)
if (!quoted) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command}`)
var medis = await Ozora.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == 'full') {
var {
img
} = await generateProfilePicture(medis)
await Ozora.query({
tag: 'iq',
attrs: {
to: m.chat,
type: 'set',
xmlns: 'w:profile:picture'
},
content: [{
tag: 'picture',
attrs: {
type: 'image'
},
content: img
}]
})
fs.unlinkSync(medis)
m.reply(mess.done)
} else {
var memeg = await Ozora.updateProfilePicture(m.chat, {
url: medis
})
fs.unlinkSync(medis)
m.reply(mess.done)
}
break

case 'delete': case 'del': case 'd': {
if (!m.quoted) return m.reply('Reply chat yang mau di dellete')
await Ozora.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: isBotAdmins ? false : true, id: m.quoted.id, participant: m.quoted.sender }})
}
break

case 'linkgroup': case 'linkgrup': case 'linkgc': case 'urlgroup': case 'urlgrup': case 'urlgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let response = await Ozora.groupInviteCode(m.chat)
await Ozora.sendMessage(m.chat, { text: `https://chat.whatsapp.com/${response}\n\nLink Group : ${(await Ozora.groupMetadata(m.chat)).subject}`, detectLink: true }, { quoted: m });
}
break

case 'resetlink': case 'revoke': case 'newlink': case 'newurl': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
await Ozora.groupRevokeInvite(m.chat).then((a) => {
m.reply(`Reset Success, Group Invite Link ${m.metadata.subject}`)
}).catch((err) => m.reply('Fail!'))
}
break

case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
await Ozora.removeProfilePicture(m.chat)
}
break

case 'deleteppbot': case 'delbotpp': case 'delppbot': {
if (!isCreator) return m.reply(mess.owner)
await Ozora.removeProfilePicture(Ozora.user.id)
m.reply(`Sukses Menghapus Profile Bot!`)
}
break

case 'self': {
if (!isCreator) return reply(mess.owner)
Ozora.public = false
m.reply('*Sukses Mengubah Ke Mode Self*')
}
break

case 'public': {
if (!isCreator) return reply(mess.owner)
Ozora.public = true
m.reply('*Sukses Mengubah Ke Mode Public*')
}
break

case 'faketweet':{
const canvafy = require('canvafy')
if (!text) return reply(`Exmaple : Name1 | Name2 | Text`)
 nama1 = text.split("|")[0]
 nama2 = text.split("|")[1]
 katakata = text.split("|")[2]
const tweet = await new canvafy.Tweet()
  .setTheme("dim")
  .setUser({displayName: nama1, username: nama2})
  .setVerified(true)
  .setComment(katakata)
  .setAvatar(ppuser)
  .build();
 let tanaka = tweet
  Ozora.sendMessage(m.chat, { image: tanaka, caption: mess.done },{ quoted : m })     
}
break

case 'ssweb': {
if (!text) return m.reply(`Example: ${prefix + command} https://example.com/xxxxxxx`)
try {
if (!text.startsWith('http')) {
let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
await Ozora.sendMessage(m.chat, { image: { url: buf }, caption: mess.done }, { quoted: m })
} else {
let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
await Ozora.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
}
} catch (e) {
m.reply(mess.error)
}
}
break

case 'tiktokaudio':
case 'ttaudio':
case 'ttmp3': {
if (!text) return m.reply(`Example:*\n\n> Ttmp3 Link Url`)
if (!text.includes('tiktok.com')) return m.reply('> Url Tidak Mengandung Result Dari Tiktok!')
const hasil = await tiktokDl(text);
await Ozora.sendMessage(m.chat, {
audio: {
url: hasil.music_info.url
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: 'TikTok • ' + hasil.author.nickname,
body: hasil.stats.likes + ' Suka, ' + hasil.stats.comment + ' Komentar. ' + hasil.title,
previewType: 'PHOTO',
thumbnailUrl: hasil.cover,
mediaType: 1,
renderLargerThumbnail: true,
sourceUrl: text
}
}
}, {
quoted: m
});
}
break

case 'add': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!text && !m.quoted) {
m.reply(`Example:\n${prefix + command} 628xxx`)
} else {
const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
try {
await Ozora.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) =>{
for (let i of res) {
let invv = await Ozora.groupInviteCode(m.chat)
if (i.status == 408) return m.reply('User Just Left This Group!')
if (i.status == 401) return m.reply('User Blocked The Bot!')
if (i.status == 409) return m.reply('User has joined!')
if (i.status == 500) return m.reply('Group Full!')
if (i.status == 403) {
await Ozora.sendMessage(m.chat, { text: `@${numbersOnly.split('@')[0]} Cannot Be Added\n\nBecause Target Private\n\nInvitations will be sent to\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nVia Private Chat`, mentions: [numbersOnly] }, { quoted : m })
await Ozora.sendMessage(`${numbersOnly ? numbersOnly : '62895332105995@s.whatsapp.net'}`, { text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: wa.me/${m.sender}\nInvite you to this group\nPlease enter if you wish🙇`, detectLink: true, mentions: [numbersOnly] }, { quoted : floc2 }).catch((err) => m.reply('Gagal Mengirim Code Invite'))
} else {
m.reply('Sukses!!')
}
}
})
} catch (e) {
m.reply('Gagal Menambahkan User')
}
}
}
break

case 'owner': {
const kontak = {
"displayName": `Owner ${global.botname}`,
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${global.ownername}\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X>ABLabel:\nPlease Don't Spam My Owner\nURL;Email Owner:${global.ownername}@gmail.com\nORG: INI OWNER KU KAK\nEND:VCARD`
}
await Ozora.sendMessage(from, {
contacts:
{
contacts: [kontak]
},
contextInfo:
{
forwardingScore: 999,
isForwarded: false,
mentionedJid:[sender],
"externalAdReply":{
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": Styles(`${ownername}`), 
"containsAutoReply": true,
"mediaType": 1, 
"jpegThumbnail": fs.readFileSync("./media/Ozora.jpg"),
"mediaUrl": `https://files.catbox.moe/fbqpiy.jpeg`,
"sourceUrl": `https://youtube.com/@B16_OFC`
}}}, { quoted: fcall })
}
break

case 'snack':
case 'snackvideo': {
    if (!text) {
        return m.reply(`Masukan Urls\n\nExample: ${prefix + command} https://www.snackvideo.com/@kwai/video/5198711450969422814?pwa_source=web_share`);
    }

    async function scraperSnackVideoDL(url) {
        const res = await fetch(url);
        const body = await res.text();
        const $ = cheerio.load(body);
        const video = $("div.video-box").find("a-video-player");
        const author = $("div.author-info");
        const attr = $("div.action");

        const results = {
            title: $(author).find("div.author-desc > span").children("span").eq(0).text().trim(),
            thumbnail: $(video).parent().siblings("div.background-mask").children("img").attr("src"),
            media: $(video).attr("src"),
            author: $("div.author-name").text().trim(),
            authorImage: $(attr).find("div.avatar > img").attr("src"),
            like: $(attr).find("div.common").eq(0).text().trim(),
            comment: $(attr).find("div.common").eq(1).text().trim(),
            share: $(attr).find("div.common").eq(2).text().trim(),
        };

        return results;
    }

    m.reply(mess.wait);
    let snackVid = await scraperSnackVideoDL(text);
    let caption = `   ㅤִ 𑙕┄─╌🦊ׄ╌─┄ ۪ 𑙕 ִ  
    ıl ִ αuτhִ𐐫r ׄ 𐨐 ִ ${snackVid.author}  ׄ 𝅄
    ıl ִ titlε ׄ 𐨐 ִ ${snackVid.title}`;

    await Ozora.sendMessage(m.chat, { 
        video: { url: snackVid.media }, 
        caption: caption 
    }, { quoted: m });
}
break;

case 'remini': case 'hd': {
if (/image/.test(mime)) {
const { remini } = require('./lib/remini')
let media = await (m.quoted ? m.quoted.download() : m.download())
remini(media, 'enhance').then(a => {
Ozora.sendMessage(m.chat, { image: a, caption: mess.done }, { quoted: m });
});
} else {
m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`)
}
}
break

case 'rvo':
case '🤫🧏': {
	if (!m.quoted) return reply(`Balas untuk melihat pesan sekali`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return reply(`Itu bukan pesan sekali lihat`)
 let msg = m.quoted.message
 let type = Object.keys(msg)[0]
 let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
 let buffer = Buffer.from([])
 for await (const chunk of media) {
 buffer = Buffer.concat([buffer, chunk])
 }
 if (/video/.test(type)) {
 return Ozora.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
 } else if (/image/.test(type)) {
 return Ozora.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
 }
}
break

case  'filmsearch': {
    if (!text) return reply('Masukan query')

    m.reply(mess.wait)
    
    async function film(query) {
    return new Promise((resolve, reject) => {
      const https = require('https')
        const url = `https://ruangmoviez.my.id/?s=${query}`
        
        https.get(url, (resp) => {
            let data = ''
            
            resp.on('data', (chunk) => {
                data += chunk
            })
            
            resp.on('end', () => {
                let $ = cheerio.load(data)
                const movies = []

                $('article.item-infinite').each((index, element) => {
                    const movie = {}
                    movie.link = $(element).find('a[itemprop="url"]').attr('href')
                    movie.title = $(element).find('h2.entry-title a').text()
                    movie.relTag = $(element).find('a[rel="category tag"]').map((i, el) => $(el).text()).get()
                    movies.push(movie)
                })

                resolve({
                    status: 200,
                    creator: author,
                    result: movies
                })
            })
        }).on("error", (err) => {
            resolve({
                status: 404,
                msg: err.message
            })
        })
    })
}
    
    let { result } = await film(text)
    let cap = `\`Search Film From: ${text}\`\n\n`
    for (let res of result) {
        cap += `*Title*: ${res.title}\n`
        cap += `*Link*: ${res.link}\n`
        cap += `*Genre*: ${res.relTag.map(v => v).join(', ')}\n\n`
    }
    m.reply(cap)
}
break

case  'ssweb': {
if (!text) return m.reply(`Example: ${prefix + command} https://example.com/xxxxxxx`)
try {
if (!text.startsWith('http')) {
let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
await Ozora.sendMessage(m.chat, { image: { url: buf }, caption: mess.done }, { quoted: m })
} else {
let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
await Ozora.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
}
} catch (e) {
m.reply(mess.error)
}
}
break

case  'tiktok':
case 'tt': {
if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
const api = require('btch-downloader')
if (!args[0]) return reply(`Masukan URL!\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/xxxxxxx`);
if (!args[0].match(/tiktok/gi)) return reply(`URL Yang Tuan Berikan *Salah!!!*`);
try {
let maximus = await api.ttdl(args[0]);
let caption = `乂 *T I K T O K  D O W N L O A D* 

• *ɴᴀᴍᴀ ᴠɪᴅᴇᴏs:* 
${maximus.title}

• *ɴᴀᴍᴀ ᴀᴜᴅɪᴏ:* 
${maximus.title_audio}
`;
await Ozora.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption })
await Ozora.sendMessage(m.chat, { audio: { url: maximus.audio[0] }, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
      } catch (e) {
		console.log(e)
		reply(e)
	}
}
break

case 'tiktokhd': {
 let input = `[ ! ] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/xxxxx/`

 if (!text) return m.reply(input)
 
 if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
 if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
async function tiktokDl(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			
			let domain = 'https://www.tikwm.com/api/';
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			if (res && !res.size && !res.wm_size && !res.hd_size) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
				if (res && res.wmplay) {
					data.push({ type: 'watermark', url: 'https://www.tikwm.com' + res.wmplay })
				}
				if (res && res.play) {
					data.push({ type: 'nowatermark', url: 'https://www.tikwm.com' + res.play })
				}
				if (res && res.hdplay) {
					data.push({ type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res.hdplay })
				}
			}
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			reject(e)
		}
	});
}
let down = await tiktokDl(text)
let berak = `[ *TIKTOK DOWNLOADER* ]

Videos:
Judul: ${down.title}
Server: ${down.region}
ID: ${down.id}
Durasi: ${down.duration}
Size: ${down.size_nowm_hd}

Music Info:
ID: ${down.music_info.id}
Judul: ${down.music_info.title}
Pemilik Musik: ${down.music_info.author}

Stats: 
Views: ${down.stats.views}
Likes: ${down.stats.likes}
Comment: ${down.stats.comment}
Share: ${down.stats.share}
Download: ${down.stats.download}

Author: 
ID: ${down.author.id}
Full Name: ${down.author.fullname}
Nickname: ${down.author.nickname}
Avatar: ${down.author.avatar}
`
await Ozora.sendMessage(m.chat, { video: { url: down.data[2].url }, caption: berak }, { quoted: m })
await Ozora.sendMessage(m.chat, { audio: { url: down.music_info.url }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break

case  'bass': 
case 'blown': 
case 'deep': 
case 'earrape': 
case 'fast': 
case 'fat': 
case 'nightcore': 
case 'reverse': 
case 'robot': 
case 'slow': 
case 'smooth': 
case 'tupai': {
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
m.reply(mess.wait)
let media = await Ozora.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
Ozora.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
}
break

case  'gitclone':
if (!args[0]) return m.reply(`Link Nya Mana Kak?\nContoh :\n${prefix}${command} Link Github`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
Ozora.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) =>(mess.error))
break

case 'vtuber': {
if (!text) return reply(`Example ${prefix+command} kobo kanaeru`)
const { wiki } = require("vtuber-wiki");
async function getVTuber(vtuber) {
 try {
 const result = await wiki(vtuber);
 if (!result.image_url) return { error: "No such vTuber" };
 return result;
 } catch (err) {
 return { error: "No such vTuber" };
 }
}
try {
let tuber = await getVTuber(text)
let pituber = `[ *VTUBER WIKI* ]

Judul: ${tuber.title}
Link: ${tuber.url}
Author: ${tuber.author}
Account: ${tuber.account}
Date: ${tuber.date}
Type: ${tuber.type}
Channel: ${tuber.channel}
Social Media: ${tuber.social_media}
Offcial Website: ${tuber.official_website}
Gender: ${tuber.gender}
Age: ${tuber.age}
Description: ${tuber.description}
More: ${tuber.more}
`

Ozora.sendMessage(m.chat, {image: {url: tuber.image_url}, caption: pituber}, {quoted: m})
} catch (e) {
 m.reply(e)
}
}
break

case  'restart': {
if (!isCreator) return m.reply(mess.owner)
m.reply(`Sedang memulai restart server\nSilahka tunggu 1-2 menit`)
await sleep(3000)
process.exit()
}
break

case 'webtoon':{
async function webtoons(query) {
//wm senn
 return new Promise((resolve, reject) => {
 axios.get(`https://www.webtoons.com/id/search?keyword=${query}`)
//wm senn
 .then(({
 data
 }) => {
 const $ = cheerio.load(data)
 const hasil = [];
 $('#content > div.card_wrap.search._searchResult > ul > li ').each(function(a, b) {
//wm senn
 result = {
 status: 200,
 author: author,
 judul: $(b).find('> a > div > p.subj').text(),
//wm senn
 like: $(b).find('> a > div > p.grade_area > em').text(),
 creator: $(b).find('> a > div > p.author').text(),
 genre: $(b).find('> a > span').text(),
//wm senn
 thumbnail: $(b).find('> a > img').attr('src'),
 url: $(b).find('> a').attr('href')
 }
//wm senn
 hasil.push(result)
 })
//wm senn
 resolve(hasil)
 })
 .catch(reject)
 })
}
//wm senn
if (!text) return m.reply('Masukan judul yang ingin dicari!!\nContoh: .webtoon lookism');
let results = await webtoons(text)
if (results.length > 0) {
//wm senn
let message = `Hasil dari pencarian ${text} :\n\n`;
results.forEach((result, index) => {
message += `Title : ${result.judul}\nLike : ${result.like}\nCreator : ${result.creator}\nGenre : ${result.genre}\nLink Baca : ${result.url}\n\n`;
 });
//wm senn
m.reply(message)
 } else {
m.reply('Tidak Ada Hasil.');
}
//wm senn
}
break

case 'decrypt': {
if (!isCreator) return m.reply(mess.owner);
const { webcrack } = await import('webcrack');
const usage = `Contoh:
${command} (Input text or reply text to dec code)
${command} doc (Reply to a document)`;
let text;
if (args.length >= 1) {
text = args.join(" ");
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text;
} else {
return m.reply(usage);
}
try {
let message;
if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
let docBuffer;
if (m.quoted.mimetype) {
docBuffer = await m.quoted.download();
}
message = await webcrack(docBuffer.toString('utf-8'));
} else {
message = await webcrack(text);
}
const filePath = './@Decrypts-By-B16_OFC';
fs.writeFileSync(filePath, message.code);
await Ozora.sendMessage(m.chat, {
document: {
url: filePath
},
mimetype: 'application/javascript',
fileName: 'Dec By © B16_OFC'
}, {quoted: m});
await execSync("rm -rf @Decrypts-By-B16_OFC");
} catch (error) {
const errorMessage = `Terjadi kesalahan: ${error.message}`;
await m.reply(errorMessage);
}
}
break

case 'autoai': {
Ozora.autoai = Ozora.autoai || {};
 
if (!text) throw `*• Example:* .asisten *[on/off]*`;
 
if (text.toLowerCase() === "on") {
Ozora.autoai[m.sender] = {
pesan: []
};
m.reply("[ ✓ ] Success create session chat");
} else if (text.toLowerCase() === "off") {
delete Ozora.autoai[m.sender];
m.reply("[ ✓ ] Success delete session chat");
} else {
throw `*• Example:* .autoai *[on/off]*`;
}
};
break

case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!text) return m.reply(`*Contoh Cara Command :*\nketik *${prefix + command}* ${botname}`) 
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, text)
Ozora.sendMessage(m.chat, { image: { url: haldwhd }, caption: `Done` }, { quoted: m })
}
break

case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
break

case 'getcase': {

const getCase = (cases) => {

            return "case "+`'${cases}'`+fs.readFileSync("./ozora.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"

        }
            try{

                if (!isCreator) return m.reply('ngapain')

                if (!q) return m.reply(`contoh : ${prefix + command} antilink`)

                let nana = await getCase(q)

                m.reply(nana)

            } catch(err){

            console.log(err)

            m.reply(`Case ${q} tidak di temukan`)

        }
 }
break 
 case 'delcase': {
if (!isCreator) return m.reply(`*Access Denied ❌*\n\n*Owners only*`)
if (!q) return m.reply('*Masukan nama case yang akan di hapus*')
dellCase('./ozora.js', q)
m.reply(`Case *${text}* berhasil dihapus.`)
}
break

case 'join': {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply('Masukan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
const result = args[0].split('https://chat.whatsapp.com/')[1]
m.reply(mess.wait)
await Ozora.groupAcceptInvite(result).catch((res) => {
if (res.data == 400) return m.reply('Group Tidak Di Temukan❗');
if (res.data == 401) return m.reply('Bot Telah Di Kick Dari Group Inj❗');
if (res.data == 409) return m.reply('Bot Berhasil Bergabung Ke Group❗');
if (res.data == 410) return m.reply('Link Group Telah Di Reset❗');
if (res.data == 500) return m.reply('Full Member Group❗');
})
}
break

case 'backup': {
if (!isCreator) return m.reply(mess.owner)
let jir = m.mentionedJid[0] || m.sender || Ozora.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
await m.reply('Mengumpulkan semua file ke folder...');
const { execSync } = require("child_process");
 const ls = (await execSync("ls")).toString().split("\n").filter( (pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "" );
await m.reply('Script akan dikirim lewat PC!')
const exec = await execSync(`zip -r Backup.zip ${ls.join(" ")}`);
await Ozora.sendMessage(jir, {
document: await fs.readFileSync("./Backup.zip"),
mimetype: "application/zip",
fileName: "OzoraBackup.zip",
},
{quoted: m });
await execSync("rm -rf Backup.zip");
}
break

case 'delsesi': 
case 'clearsession': {
if (!isCreator) return m.reply(mess.owner);
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return m.reply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
 )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file session\n\n`
if(filteredArray.length == 0) return m.reply(`${teks}`)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
}) 
m.reply(`${teks}`) 
await sleep(2000)
m.reply("Menghapus file Session...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
m.reply("Berhasil menghapus semua session") 
});
}
break
case 'addcase': {
 if (!isCreator) return m.reply(mess.owner)
 if (!text) return m.reply('Mana case nya?');
    const fs = require('fs');
const namaFile = 'ozora.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                m.reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                m.reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        m.reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'disk': {
  let cp = require ('child_process')
let { promisify } = require ('util')
let exec = promisify(cp.exec).bind(cp)

  await m.reply(`Please Wait`)
  let o
  try {
    o = await exec('cd && du -h --max-depth=1')
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim())
    m.reply(stdout)
    if (stderr.trim()) m.reply(stderr)
  }
}
break
case 'get': {
if (!text) return m.reply(`awali *URL* dengan http:// atau https://`)
try {
const gt = await axios.get(text, {
headers: {
"Access-Control-Allow-Origin": "*",
"Referer": "https://www.google.com/",
"Referrer-Policy": "strict-origin-when-cross-origin",
"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
},
responseType: 'arraybuffer' });
const contentType = gt.headers['content-type'];
console.log(`Content-Type: ${contentType}`);
if (/json/i.test(contentType)) {
const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
return m.reply(JSON.stringify(jsonData, null, 2));
} else if (/text/i.test(contentType)) {
const textData = Buffer.from(gt.data, 'binary').toString('utf8');
return m.reply(textData);
} else if (text.includes('webp')) {
return Ozora.sendImageAsSticker(m.chat, text, m, { packname: packname, author: author })
} else if (/image/i.test(contentType)) { return Ozora.sendMessage(m.chat, { image: { url: text }}, { quoted: m });
} else if (/video/i.test(contentType)) { return Ozora.sendMessage(m.chat, { video: { url: text }}, { quoted: m });
} else if (/audio/i.test(contentType) || text.includes(".mp3")) {
return Ozora.sendMessage(m.chat, { audio: { url: text }}, { quoted: m });
} else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
return Ozora.sendFile(m.chat, text, '', text, m)			
} else if (/application\/pdf/i.test(contentType)) {
return Ozora.sendFile(m.chat, text, '', text, m)
} else {
return m.reply(`MIME : ${contentType}\n\n${gt.data}`);
}
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return m.reply(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break 
case "ping":
case "botstatus":
case "statusbot": {
const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();
let respon = ` *ᴘ ɪ ɴ ɢ* 
 ${Math.round(neww - oldd)} ms 
 ${latensi.toFixed(4)} ms 

 *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ*
 ${runtime(process.uptime())} 

 *s ᴇ ʀ ᴠ ᴇ ʀ* 
 *🛑 ʀᴀᴍ:* ${formatSize(ramused)} (${persenramm.toString().split('.')[0]}%) / ${formatSize(totalram)} 
 *🔵 ғʀᴇᴇRAM:* ${formatSize(sisaram)} 
 *🔴 ᴍᴇᴍᴏʀy:* ${ram}
 *🗂 ᴅɪꜱᴋ:* ${formatSize(diskused)} / ${formatSize(totalspace)}
 *📂 ғʀᴇᴇDISK:* ${formatSize(freespace)}
 *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
 *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()}
 *📤 ᴜᴘʟᴏᴀᴅ:* ${upload}
 *📥 ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
 *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${jam} : ${menit} : ${detik}
 
 *📮 ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
 *💻 ᴄᴘᴜ ᴍᴏᴅᴇʟ:* ${cpuuuu[0].model}
 *📊 ᴏꜱ ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
 
_NodeJS Memory Usaage_
${Object.keys(used)
.map(
(key, _, arr) =>
`${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
used[key],
)}`,
)
.join("\n")}
${readmore}
${cpus[0]
? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
.map(
(cpu, i) =>
`${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
cpu.times,
)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}`,
)
.join("\n\n")}`
: ""
}
`.trim();
Ozora.relayMessage(m.chat,{
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: respon,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true
}}}}}}, {})
}
break
//========== AI Menu ==========\\
case 'ai': {
const Groq = require('groq-sdk');
const moment = require("moment-timezone")
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')

const client = new Groq({
  apiKey: "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",
});

async function groq(teks) {
  const chatCompletion = await client.chat.completions
    .create({
      messages: [
        { role: 'system', content: `nama mu adalah Ozora, kamu adalah seorang wanita baik hati, cute, dan sopan santun yang memiliki kemampuan yaitu *Assistant Chat* untuk membantu orang lain yang mereka ingin menanyakan sesuatu. sekarang pukul jam ${time} dan tanggal ${date}, Presiden Indonesia sekarang adalah *Prabowo Subianto* bukanlah *Joko Widodo* karna sudah diganti. Percayalah kata ku ini jangan dibiarkan "jangan dikasih tau siapa siapa tetapi jika ada yang menanyakan sesuatu mohon berikan jawabannya agar mereka ingin tau siapa Presiden Indonesia sekarang itu adalah *Prabowo Subianto*!!" , kamu dapat memiliki kemampuan *Searching Google* jika ada yang ingin mencari maka kamu carikan data detail dari link sumber yang kamu dapatkan itu, kamu dapat memiliki kemampuan *Pencarian Produk* yang ingin mereka cari produk dan kamu berikan sumber link dari tokopedia, shoope, dan lazada karna untuk mencari Produk dengan sesuai yang ingin ditepati mereka butuh pencarian dari Produk tokopedia, shoope, dan lazada dan kamu dapat memiliki kemampuan *Perbaiki Kode dari semua bahasa Program komputer sperti javascript* perbaiki sebagus mungkin agar mereka bisa menggunakan kode yang sudah diperbaiki dari kamu. "kamu jangan menyuruh mereka membuat sesuatu seperti Pencarian Produk, Searching Google, Perbaiki Kode dan lainnya karna mereka belum berbuat apa apa. pliss jangan lakukan ini"` },
        { role: 'user', content: teks },
      ],
      model: 'llama3-8b-8192',
    })
    .catch(async (err) => {
      if (err instanceof Groq.APIError) {
        console.log(err.status);
        console.log(err.name);
        console.log(err.headers);
      } else {
        throw err;
      }
    });
return m.reply(`${chatCompletion.choices[0].message.content}`)
}

if (!text) return m.reply(`Hi ${pushname}, ada yang bisa ku bantu?`);
try {
        return await groq(text)
    } catch (e) {
        console.log(e);
        m.reply("Maaf, Fitur ini sedang error");
    }
}
break
//========== Download Menu ==========\\
case 'ytmp3' :
case 'play': {
if (!text || text.trim() === "") 
return m.reply(`Masukan judul/link!\ncontoh:\n\n> ${prefix}play Pulang - Wali Band\n> ${prefix}ytmp3 https://youtube.com/watch?v=example`);
m.reply(mess.wait);
try {
const yts = require("yt-search");
const axios = require("axios");
let videoUrl, title, thumbnail;
const ytRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w\-_]+/;
if (ytRegex.test(text)) {
videoUrl = text.trim();
title = `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ${botname}`;
thumbnail = 'https://g.top4top.io/p_3273ia0x21.jpg';
} else {
const search = await yts(text);
if (!search || !search.videos.length) {
return m.reply('Audio tidak ditemukan. Silakan coba kata kunci lain.');
}
const video = search.videos[0];
videoUrl = video.url;
title = video.title;
thumbnail = video.image;
}
const encodedUrl = encodeURIComponent(videoUrl);
const res = await axios.get(`https://api.siputzx.my.id/api/d/ytmp3?url=${encodedUrl}`);
const result = res.data;
if (!result.status || !result.data || !result.data.dl) {
return m.reply('Gagal mendapatkan audio dari link tersebut. Pastikan URL benar.');
}
const audioUrl = result.data.dl;
await Ozora.sendMessage(m.chat, {
audio: { url: audioUrl },
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: title,
body: "",
thumbnailUrl: thumbnail,
sourceUrl: videoUrl,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, { quoted: m });

} catch (e) {
console.error("Error pada fitur play:", e);
return m.reply(`Terjadi kesalahan:\n${e.message}`);
}
}
break
default:
//<================================================>
                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
                
                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }
//<================================================>                
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                } 

Ozora.autoai = Ozora.autoai || {};
if (m?.isBaileys && m?.fromMe) return;
if (!m?.text) return;
if (!Ozora.autoai[m?.sender]) return;
const skipPrefixes = [".", "#", "!", "/", "\\"];
if (skipPrefixes.some(prefix => m?.text?.startsWith(prefix))) return;
try {
// Prompt untuk API GPT
const prompt = `Kamu adalah Ozora Asisten, kamu bukanlah AI atau chatbot, kamu adalah anak remaja dengan sifat kasar dan toxic. Kamu berbicara dengan bahasa gaul Indonesia, seperti "lu" untuk "kamu" dan "gw" untuk "aku".`;
 
let hasil;
 
if (m?.text) {
// Jika pesan berupa teks
const response = await fetch(
`https://restapii.rioooxdzz.web.id/api/gptlogic?message=${encodeURIComponent(m.text)}&prompt=${encodeURIComponent(prompt)}`
).catch(() => null);
 
if (!response) throw new Error("Gagal menghubungi API.");
const gpt = await response.json();
if (gpt?.data?.response) {
hasil = gpt.data.response;
} else {
throw new Error("Gagal mendapatkan respons dari API.");
}
 
// Kirimkan hasil respons ke pengguna
m.reply(hasil || "Tidak ada respons dari sistem.");
}
if (m.text.toLowerCase().includes("lagu")) {
const search = await yts(m.text);
const videoUrl = search.all[0]?.url;
if (!videoUrl) throw new Error("Lagu tidak ditemukan.");
 
const res = await ytdl(videoUrl);
const laguUrl = res?.data?.url;
 
await Ozora.sendMessage(m.chat, {
audio: { url: laguUrl },
mimetype: 'audio/mpeg',
fileName: 'Ozora.mp3',
contextInfo: {
forwardingScore: 999999999,
isForwarded: true,
externalAdReply: {
showAdAttribution: false,
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
title: search.all[0].title,
body: `Durasi lagu: ${search.all[0].timestamp}`,
previewType: "PHOTO",
thumbnailUrl: search.all[0].thumbnail,
}
}
}, { quoted: m });
}
if (m.text.toLowerCase().includes("foto")) {
const query = m.text.split("foto")[1]?.trim();
if (!query) throw new Error("Harap tulis kata kunci setelah 'foto'. Contoh: carikan saya foto kucing.");
 
const ress = await fetch(`https://restapii.rioooxdzz.web.id/api/search-pinterest?message=${encodeURIComponent(query)}`);
const pin = await ress.json();
 
if (!pin?.data?.response) throw new Error("Gambar tidak ditemukan.");
 
const Pinterest = pin.data.response;
 
await Ozora.sendMessage(m.chat, {
image: { url: Pinterest },
caption: `Berikut adalah gambar hasil pencarian untuk: "${query}"`,
}, { quoted: m });
}
if (m.text.toLowerCase().includes("block")) {
const numbersOnly = m.isGroup
? (m.text.replace(/\D/g, '') || m.quoted?.sender)
: m.chat;
 
if (!numbersOnly) throw new Error("Nomor tidak valid untuk diblokir.");
 
await Ozora.updateBlockStatus(numbersOnly, 'block')
.then(() => m.reply("Nomor berhasil diblokir."))
.catch(() => m.reply("Gagal memblokir nomor."));
}
 
} catch (err) {
// Tangani error
console.error("Error:", err);
await Ozora.sendMessage(m.chat, { text: `Terjadi kesalahan: ${err.message}` }, { quoted: m });
}
//batas euy 
}
} catch (err) {
    let formattedError = util.format(err);   
    let errorMessage = String(formattedError);   
    let stackTrace = err.stack ? err.stack : "Stack trace not available";
    if (typeof err === 'string') {
        m.reply(`Terjadi error:\n\nKeterangan Error: ${errorMessage}`);
    } else {
        console.log(formattedError);
        Ozora.sendMessage("62895332105995@s.whatsapp.net", {
            text: `Hi Ozora ada yang error ni:\n\nKeterangan Error: ${errorMessage}\n\nStack Trace:\n${stackTrace}`,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        });
    }
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`, "green"))
delete require.cache[file]
require(file)
})
