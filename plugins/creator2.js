import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)


if (command == 'whmods1') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Saya Owner WHMODS;Bot;;Md\nFN:Saya Owner WH MODS Bot WhatsApp, Md\nNICKNAME:👑 Owner WH MODS Bot\nORG:WH\nTITLE:MODS\nitem1.TEL;waid=6285332039348:+62 825-3320-3948\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://youtube.com/channel/UC4KkbFZ15ILdDhLJeytnFDw\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:laxirmods@gmail.com\nitem3.X-ABLabel:💌 Mail Owner WH MODS BOT\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 KEPO LU YAH\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.sendButton(m.chat, caption, author, null, [['🎀 Sapa Owner', 'Huuu']], m, { quoted: tag_own, mentions: conn.parseMention(caption) })
}
if (command == 'whmods2') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6285332039348:+62 825-3320-3948\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
}
if (command =='whmods3')
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Saya Owner LaxirMODS;Bot;;Md\nFN:Saya Owner Laxir Bot WhatsApp, Md\nNICKNAME:👑 Owner WH Laxir Bot\nORG:WH\nTITLE:MODS\nitem1.TEL;waid=6285332039348:+62 825-3320-3948\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://youtube.com/channel/UC4KkbFZ15ILdDhLJeytnFDw\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:laxirmods@gmail.com\nitem3.X-ABLabel:💌 Mail Owner WH MODS BOT\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 KEPO LU YAH\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, itu nomor ownerku, jangan dispam  kak😊`
 //knp di enc? , biar kgk di rename deksripsi Developer nya, kalau untuk nomor nya bakal otomatis berubah pas kalian ubah di config.js
}
handler.help = ['whmods1', 'whmods2', 'whmods3']
handler.tags = ['info']

handler.command = /^(whmods1|whmods2|whmods3)$/i

export default handler
