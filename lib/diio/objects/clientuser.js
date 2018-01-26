const User = require("./user")
const Collection = require("../collection")

module.exports = class ClientUser extends User {
  constructor(client, data) {
    super(client, data.user)

    this.merge({
      friend_suggestion_count: data.friend_suggestion_count,
      user_settings: data.user_settings
    })
  }

  openDM(uid) {
    return null
  }

  get _optionalFields() {
    return ["friend_suggestion_count", "user_settings"]
  }
}
