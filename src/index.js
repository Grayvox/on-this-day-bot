"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var config_json_1 = require("../config.json");
var client = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.Guilds] });
client.once(discord_js_1.Events.ClientReady, function (readyClient) {
    console.log("I'm online! Logged in as ".concat(readyClient.user.tag));
});
client.login(config_json_1.token);
