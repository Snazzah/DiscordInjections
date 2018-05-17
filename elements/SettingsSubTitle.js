const React = require('react')

const e = React.createElement

class SettingsSubTitle extends React.Component {
  render () {
    return e(
      'h5',
      {
        className:
          'h5-18_1nd title-3sZWYQ size12-3R0845 height16-2Lv3qA weightSemiBold-NJexzi defaultMarginh5-2mL-bP marginBottom8-AtZOdT'
      },
      this.props.text
    )
  }
}

module.exports = SettingsSubTitle
