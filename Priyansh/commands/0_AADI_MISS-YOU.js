const fs = require("fs");
module.exports.config = {
	name: "MISS-YOU",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "AADI BABU",
	description: "THIS BOT IS MR AADI BABU",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("MISS YOU") ||
     react.includes("miss you") || react.includes("Miss you") || react.includes("I miss") ||
react.includes("i miss") ||
react.includes("I MISS")) {
		var msg = {
				body: `‌=𒁍 ⃝𝐎𝐖𝐍𝐄𝐑 ⸙𓆩𝐇𝐀𝐍𝐙𝐔𓆪 𓆣 »❯ \n__________________________________\n\n𝐌𝐄𝐑 𝐁𝐀𝐁𝐘 𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐉𝐀𝐀𝐍𝐔 🥺\n__________________________________`,attachment: fs.createReadStream(__dirname + `/noprefix/received_1587941655479660.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤩", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }