const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "588385070822326306"; // ايدي السررفر
var channel = "588385070822326310";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi,hi, **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
  }
 });

 
client.login(process.env.BOT_TOKEN);
