
fx_version "cerulean"
games { "gta5" }

author "zfbx"
description "fivem yönetim"
repository "https://github.com/zfbx/zdiscord"
version "7.3.0"
license "CC-BY-NC-SA-4.0"
lua54 'yes'

server_script "server/server.js"
client_script "client/client.lua"

dependencies {
    '/server:4890', -- Node16+
    'yarn',
}
