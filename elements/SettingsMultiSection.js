const React = require('react')
const e = React.createElement

class SettingsMultiSection extends React.PureComponent {
  constructor (props) {
    super(props)
  }

  generateSections () {
    return this.props.sections.map(s => {
      return e(
        'div',
        {
          className: 'flexChild-faoVW3',
          style: { flex: '1 1 auto' }
        },
        s
      )
    })
  }

  render () {
    return e(
      'div',
      {
        className: 'flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6 margin-bottom-20',
          style: { flex: '1 1 auto' }
      },
      ...this.generateSections()
    )
  }
}

module.exports = SettingsMultiSection