//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes,
//pls give credit
//© 2022 Jiraya Bot Inc. Jiraya Bot 
//Thank you to Lord Buddha, Family and Myself
//═══════════════════════════════════════════════════════//
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const hx = require('hxz-api')
const os = require('os')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const simple = require('./lib/simple.js')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const ggs = require('google-it')
const googleImage = require('g-i-s')
const yts = require( 'yt-search')
const zee = require('api-alphabot')
const { removeBackgroundFromImageFile } = require('remove.bg')

//══════════[ Lib ]══════════//

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))
const apikey = JSON.parse(fs.readFileSync('./setting/apikey.json'))
const { lirikLagu } = require('./lib/lirik.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { pinterest } = require('./lib/pinterest')
const { uploadimg, upload } = require('./lib/uploadimg')
const { uploadImages } = require('./lib/uploadimage')
const { mediafireDl } = require('./lib/mediafire.js')

//══════════[ Leveling and Rpg ]══════════//

let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance} = require("./lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./lib/rpgfunction");
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");

//══════════[ Setting ]══════════//

self = setting.self
autoread = setting.autoread
autoketik = setting.autoketik
autovn = setting.autovn
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName
gaya1 = setting.gaya1
gaya2 = setting.gaya2
const fakeimage = fs.readFileSync ('./media/jirayapic1.jpg')
const thumb = fs.readFileSync ('./media/jirayatb.jpg')

//══════════[ Developer Number ]══════════//

developerNo = '34613110267',"34612538080"
developerName= 'العم جيرايا 💙'

//══════════[ Apikeys ]══════════//
//----credit goes to all the respected owner---//

dhakey = apikey.dhakey
KingOfBearKey = apikey.BearKey
Leyscoders = apikey.Leyscoders
Lolhuman = apikey.Lolhuman
Lolhumanbykur = apikey.Lolhuman2
porn1 = apikey.porn1
lolkey = apikey.lolkey1

//══════════[ Sticker WM ]══════════//

//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

//══════════[ Data Base ]══════════//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const _nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))

//══════════[ TIME ]══════════//

const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'مساء الخير 🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'طاب مسائك 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'طاب مسائك 🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'طاب مسائك 🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'صباح الخير 🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'مساء الخير 🏙'
}

//══════════[ Module Export ]══════════//
		
module.exports = JirayaBot = async (JirayaBot, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Kolkata').format('dddd') + ', ' + moment.tz('Asia/Kolkata').format('LL')
		const time = moment().tz('Asia/Kolkata').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Kolkata').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Kolkata').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const txt = mek.message.conversation
		const botNumber = JirayaBot.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `34613110267@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? JirayaBot.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await JirayaBot.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isBanchat = isGroup ? bancht.includes(from) : false
        const itsMe = mek.key.fromMe ? true : false
        m = simple.smsg(JirayaBot, mek)
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const conts = mek.key.fromMe ? JirayaBot.user.jid : JirayaBot.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? JirayaBot.user.name : conts.notify || conts.vname || conts.name || '-'    
    
        const isBanned = ban.includes(sender)
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await JirayaBot.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
			try {
		pporang = await JirayaBot.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)

//══════════[ Send file from url ]══════════//

const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
JirayaBot.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
JirayaBot.sendMessage(from, hasil, type, options).catch(e => {
JirayaBot.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}

//══════════[ Send message from url ]══════════//

        // sticker meme
            const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, "./stik" + names + ".png", async function () {
        console.log("finished");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            JirayaBot.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };

//══════════[ sendWebp ]══════════//

        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('Done');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        JirayaBot.sendMessage(from, media, MessageType.sticker, {quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }

//══════════[ Mess Dll ]══════════//

mess = {
wait: 'تتحمل...',
eror: 'أسف لقد حصل خطأ!!',
success: 'تم✓',
error: {
stick: 'هذا مو ستيكر يخوي !!',
Iv: 'خطا في الرابط !!'
},
only: {
nsfw: 'لم يتم تنشيط ميزة nsfw ، يرجى الاتصال بالمسؤول للتفعيل',
group: 'هذه الميزة للمجموعة فقط!!',
owner: 'هذا الامر فقط للمطور!!',
admin: 'هذا الأمر فقط للمشرف!!',
Badmin: 'شسمه حطني مشرف اول!!'
}
}

const math = (teks) => {
return Math.floor(teks)
}
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

//══════════[ BUTTON ]══════════//

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
JirayaBot.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: mek
})
}
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
JirayaBot.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await JirayaBot.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
JirayaBot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await JirayaBot.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
JirayaBot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await JirayaBot.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
JirayaBot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//══════════[ Fake ]══════════//

const listmsg = (from, title, desc, list) => {
let po = JirayaBot.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝗠𝗘𝗡𝗨","footerText": `${tanggal}`,"listType": "SINGLE_SELECT","sections": list}}, {})
return JirayaBot.relayWAMessage(po, {waitForAck: true})
}
const reply = (teks) => {
JirayaBot.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
JirayaBot.sendMessage(hehe, teks, text)
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? JirayaBot.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : JirayaBot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
}
const costum = (pesan, tipe, target, target2) => {
JirayaBot.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
const ftrol = { key : { participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 5555, status: 1, surface : 1, message: `${ucapanWaktu} ${pushname}`, orderTitle: `${ucapanWaktu} ${pushname}`, thumbnail: thumb, sellerJid: '0@s.whatsapp.net' }}}
const floc = { key : { participant : '0@s.whatsapp.net' }, message: { liveLocationMessage: { caption: `${ucapanWaktu} ${pushname}`, jpegThumbnail: thumb }}}
const fvid = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": {  "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb }}}
const fvoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99999", "ptt": "true" }}}
const fgi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": { "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'gifPlayback': 'true', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb }}}
const textImg = (teks) => { return JirayaBot.sendMessage(from, teks, text, {quoted: fgi, thumbnail: fs.readFileSync('./media/jirayatb.jpg')})}
const fakeitem = (teks) => { JirayaBot.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? { remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./media/jirayatb.jpg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `${ucapanWaktu} ${pushname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}

//══════════[ Storage ]══════════//

const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
JirayaBot.sendMessage(to, media, type, { quoted: fgi, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}  

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//══════════[ Grup ]══════════//

const hideTag = async function(from, text){
let anugroupsend = await JirayaBot.groupMetadata(from)
let members = anugroupsend.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
JirayaBot.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/jirayapic1.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}
const hideTagKontak = async function(from, nomor, nama){
let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
let anuvcardoke = await JirayaBot.groupMetadata(from)
let members = anuvcardoke.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
JirayaBot.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
const sendKontak = (from, nomor, nama) => {
const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${botname}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
JirayaBot.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
}

//══════════[ Automatic Reply ]══════════//

for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					JirayaBot.sendMessage(from, result, sticker, { quoted: mek})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					JirayaBot.sendMessage(from, result, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					JirayaBot.sendMessage(from, result, image, { quoted: mek})
					}
				  }

//══════════[ Antilink & Antivirtex ]══════════//

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 تم اكتشاف رابط خارجي 🐧 !!! 」*\nيخوي قلنا بدون روابط🗿.`)
setTimeout(() => {
JirayaBot.groupRemove(from, [kic]).catch((e) => { reply(`يجب على البوت ان يكون مشرفا`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('ضع إشارة مقروء\n'.repeat(300))
reply(`「 *تم اكتشاف فيروس 🐧 !!!* 」\n\nترقب رقمك 😍.`)
console.log(color('[KICK]', 'red'), color('Received a text virus!', 'yellow'))
JirayaBot.groupRemove(from, [sender])
}     

//══════════[ Dll ]══════════//

if (autoread){
JirayaBot.chatRead(from, "read")
} else if (autoketik) {
JirayaBot.updatePresence(from, Presence.composing)
} else if (autovn) {
JirayaBot.updatePresence(from, Presence.recording)
}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIVATE \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
         if (isCmd && isBanned) {
            return console.log(color('[ USUÁRIO BANEADO ] Ignorando Comando', 'blue'), color(moment.tz('Asia/Kolkata').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
            if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]))
            if (isCmd && isGroup) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]), 'En', color(groupName))
    
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	if (!mek.key.fromMe && !isOwner && self === true) return
switch (command) {

//══════════[ MENU FEATURES ]══════════//


//----> akida <----//
            

              case 'روابط': // by jiraya
        sendButMessage(from, `سلام عليكم ${pushname} `, `اختر اي مجموعه`, [
          {
            buttonText: {
              displayText: `⇇إعلان دخـ🎐ـول عضو⇉`,
            },
            type: 1,
          },
          {
            buttonId: `aakida2`,
            buttonText: {
              displayText: `⇇ترحيب☘️ دخول⇉`,
            },
            type: 1,
          },
          {
            buttonId: `aakida3`,
            buttonText: {
              displayText: `⇇إعلان 💢 إنذار⇉`,
            },
            type: 1,
          },
          {
            buttonId: `aakida4`,
            buttonText: {
              displayText: `⇇إعلان طــ⛔رد مؤقت⇉`,
            },
            type: 1,
          },
          {
            buttonId: `aakida5`,
            buttonText: {
              displayText: `⇇إعلان طــ⛔رد مؤبد⇉`,
            },
            type: 1,
          },
          {
            buttonId: `aakida6`,
            buttonText: {
              displayText: `⇇إعلان خر🚪وج مؤقت⇉`,
            },
            type: 1,
          },
        ]);
        break;
        case 'akida1':
reply('')
break
case 'lah':
reply('https://chat.whatsapp.com/BSOfsSGjwzs0bXMPsOKQoz')
break
case 'awokkk':
reply('https://chat.whatsapp.com/HnXTfqMVVf1KKdCJEgClQa')
break
case 'h':
reply('he/she is gone bro.. may he/she go to hell too 😏')
break
case 'okeyx':
reply('💐🌺🌻I WELCOME THE NEW MEMBER WITH SOME FLOWERS🌻🌺💐')
break
case 'مضاد':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`اختر تفعيل ام تعطيل`)
if (args[0].toLowerCase() === 'تفعيل'){
if (isAntiLink) return reply(`مفعل مسبقا`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`تم, تفعيل مضاد الروابط فالمجموعة\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'تعطيل'){
let anuantilink = _antilink.indexOf(from)
_antilink.splice(anuantilink, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`تم, تعطيل مضاد الروابط\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_اختر تفعيل او تعطيل_`)
}
break
case 'فرتكس':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`اختر تفعيل ام تعطيل`)
if (args[0].toLowerCase() === 'تفعيل'){
if (isAntiVirtex) return reply(`مفعل مسبقا`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`تم, تفعيل مضاد الفيروسات\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'تعطيل'){
let anuantivtex = _antivirtex.indexOf(from)
_antivirtex.splice(anuantivtex, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`تم, تعطيل مضاد الفيروسات\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_اختر تفعيل او تعطيل_`)
}
break
case "طرد":

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return reply("منشن الشخص الي بدك تطرده!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
JirayaBot.groupRemove(from, mentioned);
reply(mess.success);
} else if (mentioned.length < 1) {
anukick = mek.message.extendedTextMessage.contextInfo.participant;
JirayaBot.groupRemove(from, [anukick]);
reply(mess.success);
} else {
JirayaBot.groupRemove(from, mentioned);
reply(mess.success);
}
break;
case 'منشن':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `💠⇉ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions('══🌑〘 *المنشن الجماعي* 〙🌑══\n'+teks+'〘 _*اسفين عالازعاج*_ 〙', members_id, true)
break
case 'فعالية':
    case 'مسابقة':

        if (!isGroup) return reply(mess.only.group)
        if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
        try {
        quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
        hideTag(from, `${quotedText}`)
        } catch {
        hideTag(from, `${q}`)
        }
        break
//━━━━━━━━━━━━━━━[ THE END OF ALL FEATURES ]━━━━━━━━━━━━━━━━━//
				
default:
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
if (budy.includes(`⇇إعلان دخـ🎐ـول عضو⇉`)) {
    reply(`❋・───━•⊰🌑⊱•━───・❋
    ⇇إعلان دخـ🎐ـول عضو⇉
    ┏━──━═✠◦✤◦✠═━──━┓
    ֎ اللقب 🧸 : ╏╏
    
    ֎ الانمي 🎎 : ╏╏
    
    ֎ المنشن 📧 : ╏╏
    
    ֎ من طرف 🗣️ : ╏╏
    ┗━──━═✠◦✤◦✠═━──━┛
    〖𝐍𝐈𝐆𝐇𝐓⥤🌑⥢𝐌𝐎𝐎𝐍〗
    ❋・───━•⊰🌑⊱•━───・❋`)
    }

if (budy.includes(`⇇ترحيب☘️ دخول⇉`)) {
    reply(`❋・───━•⊰🌑⊱•━───・❋
    ⇇اهلا و سهلا بك☘️ في نقابتنا⇉
    ┏━──━═✠◦✤◦✠═━──━┓
    ֎ اللقب + المنشن 🥀 : ╏╏
    
    ֎ الانمي 🍁 : ╏╏
    
    ֎ أهلا ووطئت سهلا مرحبا بك الى نقابتنا ونرجو لكـ أن تسعد معنا 🖤🌹💎
    ┗━──━═✠◦✤◦✠═━──━┛
    تـــحـــيــات إدارة ⚔️ :
    【𝑵𝑰𝑮𝑯𝑻 𓆩🌑𓆪 𝑴𝑶𝑶𝑵】
    ❋・───━•⊰🌑⊱•━───・❋`)
    }

if (budy.includes(`⇇إعلان 💢 إنذار⇉`)) {
    reply(`❋・───━•⊰🌑⊱•━───・❋
    ⇇إعلان 💢 إنذار⇉
    ┏━──━═✠◦✤◦✠═━──━┓
    ֎ العضو 🍁 : ╏╏
    
    ֎ السبب 🚫 :╏╏
    
    ֎ عدد الانذارات 🔢 : ╏╏
    
    ֎ مـلاحـظـات ‼️
    ֎ تحدث قائمة الإنذارات يوميا.
    ֎ 4 إنذارات = طرد مؤقت 15 يوم
    ֎ 8 إنذارات = طرد  مؤبد
    ֎ يحذف انذار بعد كل 20 يوم
    ┗━──━═✠◦✤◦✠═━──━┛
    【𝑵𝑰𝑮𝑯𝑻 𓆩🌑𓆪 𝑴𝑶𝑶𝑵】
    ❋・───━•⊰🌑⊱•━───・❋`)
    }
      
if (budy.includes(`⇇إعلان طــ⛔رد مؤقت⇉`)) {
    reply(`❋・───━•⊰🌑⊱•━───・❋
    ⇇إعلان طــ⛔رد مؤقت⇉
    ┏━──━═✠◦✤◦✠═━──━┓
    ֎ العضو 🎴 : ╏╏
    
    ֎ السبب 🍁 : ╏╏
    
    ֎ المدة ⏳ : ╏╏
    ┗━──━═✠◦✤◦✠═━──━┛
    【𝑵𝑰𝑮𝑯𝑻 𓆩🌑𓆪 𝑴𝑶𝑶𝑵】
    ❋・───━•⊰🌑⊱•━───・❋`)
    }
        
if (budy.includes(`⇇إعلان طــ⛔رد مؤبد⇉`)) {
    reply(`❋・───━•⊰🌑⊱•━───・❋
    ⇇إعلان طــ⛔رد مؤبد⇉
    ┏━──━═✠◦✤◦✠═━──━┓
    ֎ العضو 🎴 : ╏╏
    
    ֎ السبب 🍁 : ╏╏
    
    ֎ القوانين 📜 :
    ╏https://q9r.us/lMCCz╏
    ┗━──━═✠◦✤◦✠═━──━┛
    【𝑵𝑰𝑮𝑯𝑻 𓆩🌑𓆪 𝑴𝑶𝑶𝑵】
    ❋・───━•⊰🌑⊱•━───・❋`)
    }
    if (budy.includes(`⇇إعلان خر🚪وج مؤقت⇉`)) {
    reply(`❋・───━•⊰🌑⊱•━───・❋
    ⇇إعلان خر🚪وج مؤقت⇉
    ┏━──━═✠◦✤◦✠═━──━┓
    ֎ العضو 🎴 : ╏ @_╏
    
    ֎ المدة ⏳ : ╏╏
    ┗━──━═✠◦✤◦✠═━──━┛
    【𝑵𝑰𝑮𝑯𝑻 𓆩🌑𓆪 𝑴𝑶𝑶𝑵】
    ❋・───━•⊰🌑⊱•━───・❋`)
    }

if (budy.includes(`تصبحون على خير`)) {
    reply(`وانت من اهله`)
    }
   
if (budy.includes(`صباح الخير`)) {
    reply(`صباح النور والسرور`)
    }
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
	JirayaBot.sendMessage(`${owner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "جيرايا",body:"Dont forget to subscribe Jiraya",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/jirayapic1.jpg'),sourceUrl:"https://wa.me/34613110267"}}})
        }
	// console.log(e)
	}
}


	
    
