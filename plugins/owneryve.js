let handler = function (m) {
	this.sendContact(m.chat, '6285742344873', 'Owner Miku-Bot :)', m)
}

handler.customPrefix = ['🍭Owner Mike'] 
handler.command = new RegExp

module.exports = handler