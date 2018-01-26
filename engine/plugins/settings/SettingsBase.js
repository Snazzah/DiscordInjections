const { SettingsTitle } = require("../../../elements")

module.exports = class SettingsBase extends window.React.Component {
  render() {
    return window.React.createElement(
      "div",
      {},
      window.React.createElement(SettingsTitle, {
        text: this.props.title
      }),
      window.React.createElement(
        "div",
        { className: "flex-vertical" },
        window.React.createElement(
          "div",
          { className: "margin-bottom-40" },
          window.React.createElement(
            "div",
            { className: "di-settings-menu-wrapper" },
            window.React.createElement(this.props.component, {
              plugin: this.props.plugin
            })
          )
        )
      )
    )
  }
}
