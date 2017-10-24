/**
 * Bridge Discord's WebSocket to Discord.JS
 * Adapted from GusCaplan's Discord.JS bridge https://github.com/GusCaplan
 * https://github.com/GusCaplan/discord_preload/blob/master/src/DJSBridge.js
 */

const Discord = require('discord.js');

require('./DiscordMutator');

class BridgedClient extends Discord.Client {
    constructor(options) {
        super(options);
        let lastpath = window.location.pathname;
        this.setInterval(() => {
            if (lastpath === window.location.pathname) return;
            this.emit('selectedUpdate', {
                guild: this.guilds.get(lastpath.split('/')[2]),
                channel: lastpath.split('/')[3] ? this.channels.get(lastpath.split('/')[3]) : undefined
            }, {
                guild: this.guilds.get(window.location.pathname.split('/')[2]),
                channel: window.location.pathname.split('/')[3] ? this.channels.get(window.location.pathname.split('/')[3]) : undefined
            });
            lastpath = window.location.pathname;
        }, window.DI_DATA.options.selectedUpdate);
    }
}

module.exports = BridgedClient;
