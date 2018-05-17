const React = require('react')
const e = React.createElement

const Base = require('./SettingsOptionBase')

class SettingsOptionRadio extends Base {
  constructor (props) {
    super(props)

    this.state = { value: this.getProp() }
  }

  generateItems () {
    return this.props.items.map(i => {
      const selected = this.getProp() === i
      return e(
        'div',
        {
          className: 'item-26Dhrx marginBottom8-AtZOdT horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG cardPrimaryEditable-3KtE4g card-3Qj_Yx',
          style: {
            padding: '10px',
            borderColor: selected ? 'rgb(114, 137, 218)' : '',
            backgroundColor: selected ? 'rgb(114, 137, 218)' : ''
          },
          onClick: this.click.bind(this, i)
        },
        e(
          'label',
          { className: 'checkboxWrapper-SkhIWG' },
          e(
            'input',
            {
              className: 'inputDefault-3JxKJ2 input-3ITkQf',
              type: 'checkbox',
              value: 'on'
            }
          ),
          e(
            'div',
            {
              className: `checkbox-1ix_J3 flexCenter-3_1bcw flex-1O1GKY justifyCenter-3D2jYp alignCenter-1dQNNs box-mmYMsp ${selected ? 'checked-3_4uQ9' : ''}`,
              style: selected ? { borderColor: 'rgb(114, 137, 218)' } : {}
            },
            e(
              'svg',
              {
                name: 'Checkmark',
                width: 18,
                height: 18,
                viewBox: "0 0 18 18"
              },
              e(
                'g',
                {
                  fill: 'none',
                  fillRule: 'evenodd'
                },
                e(
                  'polyline',
                  {
                    stroke: selected ? '#7289da' : 'transparent',
                    strokeWidth: 2,
                    points: '3.5 9.5 7 13 15 5'
                  }
                )
              )
            )
          )
        ),
        e(
          'div',
          { className: 'info-3LOr12' },
          e(
            'div',
            {
              className: `${selected ? 'titleChecked-2wg0pd' : ''} title-3BE6m5`,
              style: selected ? { color: 'rgb(255, 255, 255)'} : {}
            },
            i
          )
        )
      )
    })
  }

  render () {
    return e(
      'div',
      { className: 'radioGroup-1GBvlr' },
      ...this.generateItems()
    )
  }

  click (i, event) {
    this.setProp(i)
    this.setState({
      value: this.getProp()
    })
    if (this.props.onChange) this.props.onChange(event)
  }
}

module.exports = SettingsOptionRadio
