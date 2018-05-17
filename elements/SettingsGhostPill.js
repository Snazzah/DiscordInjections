const React = require('react')
const e = React.createElement

class SettingsGhostPill extends React.Component {
  render () {
    return e(
      'h3',
      {
        className:
          'ghostPill-2-KUPM cursorDefault-331ZcI flexChild-faoVW3',
        style: {
          flex: '0 1 auto'
        }
      },
      this.props.text
    )
  }
}

module.exports = SettingsGhostPill
