require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

const BOT_PREFIX = "!";
const ROLE_COMMAND = "role";

client.on("ready", () => {
  console.log("Bot online ✨");
});

client.on("messageDelete", (msg) => {
  msg.channel.send("Stop deleting messages");
});

client.on("message", (msg) => {
  if (msg.content == "Oi Bot") {
    msg.react("❤");
  }

  if (msg.content === `${BOT_PREFIX}${ROLE_COMMAND}`) {
    // msg.channel.send("Hello"); // reply on channel

    // msg.reply("!pong"); // reply to user

    roleUser(msg.member);
  }
});

function roleUser(member) {
  member.roles.add("770715226457768016"); // add role in a user
}

client.login(process.env.BOT_TOKEN);
