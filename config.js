

const LanguageLocaleCode = "tr";

// genel ayarlar
const FiveMServerName = "AG ROLEPLAY";
const DiscordInviteLink = "https://discord.gg/agroleplay";
const FiveMServerIP = "185.72.9.34:30120";


const DebugLogs = false;



const EnableDiscordBot = true;

// dc bot
const DiscordBotToken = "MTA5NjE5ODA0NTQ0MTQ2MjMyNA.GbrHEF.X5yv3FDBPEQxjFjqRNp6YWvoLzA4k2Ns6GxCkw";
const DiscordGuildId = "1031618172283015298";

// yetkili chat
const EnableStaffChatForwarding = false;
const DiscordStaffChannelId = "1125474453070037114";
const AdditionalStaffChatRoleIds = [
    "1125474759816261794",
];

// wl
const EnableWhitelistChecking = false;
const DiscordWhitelistRoleIds = ", ";

// dc permleri ve slashlar
const EnableDiscordSlashCommands = true;
const DiscordModRoleId = "1125474759816261794";
const DiscordAdminRoleId = "1125474759816261794";
const DiscordGodRoleId = "1125474759816261794";

// bot status
const EnableBotStatusMessages = true;
const BotStatusMessages = [
    "AG ROLEPLAY ❤️ xayibogantr",
  
];

// ace permler
const EnableAutoAcePermissions = false;
const AutoAcePermissions = {
    // "example": "000000000000000000",
    // "example2": [ "000000000000000000", "000000000000000000"],
};

// Other
const SaveScreenshotsToServer = false;


/** ************************
 * webhook log ayarları
**************************/

const EnableLoggingWebhooks = false;
const LoggingWebhookName = "xayibogantr - AG LOG";
// rol basına & koy
const LoggingAlertPingId = "&";

const LoggingWebhooks = {
    "bank": "https://discord.com/api/webhooks/1125473563055493192/ZOUQjqA-xrZxY3ipEvu54e7eLft2NLMVS5gr64FnyDPPqpafWHVlf0zeoEQ1x9NqASTk",
};




module.exports = {
    EnableDiscordBot: getConBool("discord_enable_bot", EnableDiscordBot),
    EnableStaffChatForwarding: getConBool("discord_enable_staff_chat", EnableStaffChatForwarding),
    EnableLoggingWebhooks: getConBool("discord_enable_logging_webhooks", EnableLoggingWebhooks),
    DebugLogs: getConBool("discord_debug", DebugLogs),
    DiscordBotToken: GetConvar("discord_token", DiscordBotToken),
    DiscordGuildId: GetConvar("discord_guild_id", DiscordGuildId),
    LanguageLocaleCode: GetConvar("discord_lang", LanguageLocaleCode),
    FiveMServerName: GetConvar("discord_server_name", FiveMServerName),
    DiscordInviteLink: GetConvar("discord_invite", DiscordInviteLink),
    FiveMServerIP: GetConvar("discord_server_ip", FiveMServerIP),
    EnableWhitelistChecking: getConBool("discord_enable_whitelist", EnableWhitelistChecking),
    DiscordWhitelistRoleIds: getConList("discord_whitelist_roles", DiscordWhitelistRoleIds),
    EnableDiscordSlashCommands: getConBool("discord_enable_commands", EnableDiscordSlashCommands),
    DiscordModRoleId: GetConvar("discord_mod_role", DiscordModRoleId),
    DiscordAdminRoleId: GetConvar("discord_admin_role", DiscordAdminRoleId),
    DiscordGodRoleId: GetConvar("discord_god_role", DiscordGodRoleId),
    EnableBotStatusMessages: getConBool("discord_enable_status", EnableBotStatusMessages),
    BotStatusMessages: BotStatusMessages,
    EnableAutoAcePermissions: getConBool("discord_enable_ace_perms", EnableAutoAcePermissions),
    AutoAcePermissions: AutoAcePermissions,
    SaveScreenshotsToServer: getConBool("discord_save_screenshots", SaveScreenshotsToServer),
    DiscordStaffChannelId: GetConvar("discord_staff_channel_id", DiscordStaffChannelId),
    LoggingWebhooks: LoggingWebhooks,
    LoggingAlertPingId: GetConvar("discord_logging_ping_id", LoggingAlertPingId),
    LoggingWebhookName: GetConvar("discord_logging_name", LoggingWebhookName),
    StaffChatRoleIds: [
        GetConvar("discord_mod_role", DiscordModRoleId),
        GetConvar("discord_admin_role", DiscordAdminRoleId),
        GetConvar("discord_god_role", DiscordGodRoleId),
        ...AdditionalStaffChatRoleIds,
    ],
};

/** Returns convar or default value fixed to a true/false boolean
 * @param {boolean|string|number} con - Convar name
 * @param {boolean|string|number} def - Default fallback value
 * @returns {boolean} - parsed bool */
function getConBool(con, def) {
    if (typeof def == "boolean") def = def.toString();
    const ret = GetConvar(con, def);
    if (typeof ret == "boolean") return ret;
    if (typeof ret == "string") return ["true", "on", "yes", "y", "1"].includes(ret.toLocaleLowerCase().trim());
    if (typeof ret == "number") return ret > 0;
    return false;
}

/** returns array of items or default array provided
 * @param {string} con - string of comma separated values
 * @param {string|Array} def - string of comma separated values
 * @returns {object} - array of discord ids */
function getConList(con, def) {
    const ret = GetConvar(con, def);
    if (typeof ret == "string") return ret.replace(/[^0-9,]/g, "").replace(/(,$)/g, "").split(",");
    if (Array.isArray(ret)) return ret;
    if (!ret) return [];
}
