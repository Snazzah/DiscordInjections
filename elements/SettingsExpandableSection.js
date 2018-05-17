const React = require('react')

const e = React.createElement

const SettingsDivider = require('./SettingsDivider')

const titleDivClass =
  'flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6 header-1zEOkT foldableHeaderExpanded-1-Vrje'

function generateInnerSection (props) {
  let output = []
  if (props.state.expanded) {
    if (props.props.components) {
      for (const comp of props.props.components) {
        if (React.isValidElement(comp)) output.push(comp)
        else output.push(e(comp.component, comp))
      }
    }
  }
  return output
}

class SettingsExpandableSection extends React.Component {
  constructor (props) {
    super(props)

    this.state = { hover: false, expanded: false }
  }
  get h2Class () {
    let output =
      'h2-2gWE-o title-3sZWYQ size16-14cGz5 height20-mO2eIN weightSemiBold-NJexzi defaultColor-1_ajX0 title-3patTt flexChild-faoVW3'
    if (this.state.hover) output += ' titleHovered-3DscuN'
    else output += ' titleNormal-1HdYjr'
    return output
  }

  get iconClass () {
    let output = 'expandIconBG-3WFmuk flexChild-faoVW3'
    if (this.state.hover) output += ' expandIconBGHovered-2qIR0q'
    else output += ' expandIconBGNormal-2hJ35T'
    return output
  }

  mouseOver () {
    this.setState(() => ({
      hover: true
    }))
  }
  mouseOut () {
    this.setState(() => ({
      hover: false
    }))
  }

  click () {
    this.setState(prev => ({
      expanded: !prev.expanded
    }))
  }

  render () {
    return e(
      'div',
      {
        className:
          'ui-form-item sound-list expandableSection-1KmCga user-settings-notifications'
      },
      e(
        'div',
        {},
        e(
          'div',
          {
            className: titleDivClass,
            style: {
              flex: '1 1 auto'
            },
            onClick: this.click.bind(this),
            onMouseOver: this.mouseOver.bind(this),
            onMouseOut: this.mouseOut.bind(this)
          },
          e(
            'h2',
            {
              className: this.h2Class,
              style: {
                flex: '1 1 auto'
              }
            },
            `${this.props.title}`
          ),
          e(
            'div',
            {
              className: this.iconClass,
              style: {
                flex: '0 1 auto'
              }
            },
            e(
              'svg',
              {
                className: `expandIcon-2PwFEX transition-2IHyE9 ${this.state
                  .expanded
                  ? ''
                  : 'closed-1D6IW8'}`,
                width: '24',
                height: '24',
                viewBox: '0 0 24 24'
              },
              e('path', {
                className: 'expandIconForeground-1h4s61',
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M7 10L12 15 17 10'
              })
            )
          )
        ),
        ...generateInnerSection(this)
      ),
      e(SettingsDivider)
    )
  }
}

module.exports = SettingsExpandableSection
