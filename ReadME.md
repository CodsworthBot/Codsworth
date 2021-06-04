# Codsworth

## to install this use npm install

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FSophiaAtkinson%2FCodsworth&count_bg=%23A53DC8&title_bg=%23555555&icon=node-dot-js.svg&icon_color=%23E7E7E7&title=Page+Views&edge_flat=true)](https://hits.seeyoufarm.com)


# guide for beginners.

You need to have [Node.js](https://nodejs.org) V 16.3.0 or v14.17.0 LTS
open codsworths folder in cmd and do npm install and it should intall all of its dependencies.

### Config.json

{
  "TOKEN": "Discord Bot Token", //Put your discord bot token
  "YOUTUBE_API_KEY": "YOUTUBE_API_KEY", // put your youtube api key from [Here](https://console.cloud.google.com/)
  "SOUNDCLOUD_CLIENT_ID": "",
  "MAX_PLAYLIST_SIZE": 100,
  "PREFIX": "PREFIX", //Pick a prefix
  "PRUNING": false, // if you want the bot to delete its own messages
  "LOCALE": "en", // Keep the same if you want english
  "STAY_TIME": 30, // how long you want it to stay in the vc for
  "DEFAULT_VOLUME": 100
}

### shard.js
if you plan on this being a big bot use shard.js

const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./index.js', { token: 'Token' }); // Put your token here.

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();


