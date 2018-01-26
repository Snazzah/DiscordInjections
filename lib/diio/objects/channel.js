const Base = require("./base")
const Collection = require("../collection")

module.exports = class Channel extends Base {
  constructor(client, channel) {
    super(client, channel)

    if(this.type == 3) {
      this.recipients = new Collection(
        this.client,
        require("./user"),
        channel.recipients,
        {
          onFound: u => this.client.users.add(u)
        }
      )
    }
  }

  get guild() {
    return this.type == 0 || this.type == 2 ? this.client.guilds.get(this.guildId) : null
  }

  get owner() {
    return this.type == 3 ? this.client.users.get(this.ownerId) : null
  }

  send(message, embed) {
    if (typeof message !== "string") {
      embed = message
      message = null
    }

    const msg = {
      content: message,
      nonce: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      embed
    }

    return this.client.request("post", EP.Messages(this.id), msg)
  }
}
