const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('By Wenteed')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')

  
  


});
 

client.on('ready', function() {

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


setInterval(function() {
var guild = client.guilds.random()
var person = guild.members.random()
var person = guild.members.filter(m => m.presence.status === 'idle').random()
person.send(`
لكل جوآد كبّوه " .. 
نحن لآ نفشل عندمآ نتعثر ، وإنمآ نفشل عندمآ نتوقف ..
فهآ نحن عُدنآ بحب أكثر وسيرفر جديد وروح أقوى ..
عُدنآ لموآصلة السير من نقطة الإنطلآق نحو القمة 
سيرفر  **Bubbles Avatar ** وجودك سر نجاحنا  . .
https://discord.gg/PHbjBnn `)
console.log(`i've send to ${person.user.username} in server ${guild.name}`)
}, 300000)
}) 
 
 
 
 
client.login(process.env.BOT_TOKEN);
