const qs = require('querystring')

exports.APIVersion = 6
exports.BaseAPI = `https://discordapp.com/api/v${exports.APIVersion}`
exports.BaseCDN = "http://cdn.discordapp.com"
exports.BaseMe = exports.BaseAPI + "/users/@me"

exports.User = uid => `${exports.BaseAPI}/users/${uid}`
exports.UserMentions = q => `${exports.BaseMe}/mentions${q ? "?" + qs.stringify(q) : ""}`
exports.UserChannels = uid => `${exports.BaseAPI}/users/${uid}/channels`

exports.Channel = cid => `${exports.BaseAPI}/channels/${cid}`
exports.Messages = (cid, mid = null) =>
  `${exports.Channel(cid)}/messages${mid ? "/" + mid : ""}`
