

const LanguageLocaleCode = "tr";

// genel ayarlar
const FiveMServerName = "";     //Sunucu ismi
const DiscordInviteLink = ";    // Dc invite
const FiveMServerIP = "";       // fivem ip


const DebugLogs = false;



const EnableDiscordBot = true;

// dc bot
const DiscordBotToken = "";   //token
const DiscordGuildId = "";    //dc sv id

// yetkili chat
const EnableStaffChatForwarding = false;
const DiscordStaffChannelId = "";      //kanal id
const AdditionalStaffChatRoleIds = [
    "",    //istiyorsanız ek kanal id
];

// wl
const EnableWhitelistChecking = false;         //istiyorsanız whitelist sistemi
const DiscordWhitelistRoleIds = ", ";         //discord whitelist idsi

// dc permleri ve slashlar
const EnableDiscordSlashCommands = true;
const DiscordModRoleId = "1125474759816261794";            //kullanım icin id
const DiscordAdminRoleId = "1125474759816261794";          //kullanım icin id
const DiscordGodRoleId = "1125474759816261794";              //kullanım icin id

// bot status
const EnableBotStatusMessages = true;
const BotStatusMessages = [
    "",            //durum mesajı
  
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
const LoggingWebhookName = "xayibogantr - AG LOG";             //log atacagi icin log webhook ismi
// rol basına & koy
const LoggingAlertPingId = "&";

const LoggingWebhooks = {
    "bank": "",   //ornektir
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

/**
 * @param {boolean|string|number} con
 * @param {boolean|string|number} def
 * @returns {boolean}  */
function getConBool(con, def) {
    if (typeof def == "boolean") def = def.toString();
    const ret = GetConvar(con, def);
    if (typeof ret == "boolean") return ret;
    if (typeof ret == "string") return ["true", "on", "yes", "y", "1"].includes(ret.toLocaleLowerCase().trim());
    if (typeof ret == "number") return ret > 0;
    return false;
}

/**
 * @param {string} con 
 * @param {string|Array} def
 * @returns {object}  */
function getConList(con, def) {
    const ret = GetConvar(con, def);
    if (typeof ret == "string") return ret.replace(/[^0-9,]/g, "").replace(/(,$)/g, "").split(",");
    if (Array.isArray(ret)) return ret;
    if (!ret) return [];
}
