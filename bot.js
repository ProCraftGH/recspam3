const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("541340014756495372")
setInterval(function() {
channel.send(`bilal_dz xd`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
