
class LivePlayerCount {
    constructor(z) {
        // seste user sayı gosterme
        this.voiceChannelId = "000000000000000000";

        this.z = z;
        on("xayibogantr:ready", async () => {
            this.syncChannel();
            this.start();
        });
    }

    async start() {
        setInterval(() => {
            this.syncChannel();
        }, 1000 * 60 * 5);
    }

    async syncChannel() {
        try {
            const guild = this.z.bot.guilds.resolve(this.z.config.DiscordGuildId);
            const channel = guild.channels.cache.get(this.voiceChannelId);
            channel.setName(`Players Online: ${GetNumPlayerIndices()}`).catch();
        } catch {
            // Just incase something unforseen happens
        }
    }

}

module.exports = LivePlayerCount;
