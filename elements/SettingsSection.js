const React = require('react')

const e = React.createElement

const { SettingsTitle, SettingsDescription } = require('./index')

class SettingsSection extends React.Component {
  render () {
    let comps = []
    if (this.props.title) e(SettingsTitle, { text: this.props.title })
    if (this.props.description) { comps.push(e(SettingsDescription, { text: this.props.description })) }
    if (this.props.elements && Array.isArray(this.props.elements)) { comps.push(...this.props.elements) } else if (this.props.element) comps.push(this.props.element)
    else if (this.props.component) comps.push(e(this.props.component))
    return e(
      'div',
      { className: 'ui-form-item' },
      e(SettingsTitle, { text: this.props.title }),
      ...comps
    )
  }
}

module.exports = SettingsSection
