const React = require('react')

const e = React.createElement

const { dialog } = require('electron').remote

const Base = require('./SettingsOptionBase')

const SettingsOptionTitle = require('./SettingsOptionTitle')
const SettingsOptionDescription = require('./SettingsOptionDescription')
const SettingsOptionButton = require('./SettingsOptionButton')

class SettingsOptionFilebox extends Base {
  constructor (props) {
    super(props)

    this.state = { value: this.getProp() }
  }

  render () {
    let titles = []

    if (this.props.title) {
      titles.push(
        e(
          'div',
          {
            className:
              'flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6',
            style: {
              flex: '1 1 auto'
            }
          },
          e(SettingsOptionTitle, { text: this.props.title })
        )
      )
    }

    if (this.props.description) {
      titles.push(
        e(SettingsOptionDescription, { text: this.props.description })
      )
    }

    let icon =
      this.props.buttonIcon || 'https://cdn.bowser65.tk/i/icon-folder.png'

    return e(
      'div',
      {},
      e(
        'div',
        {
          className:
            'flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6 switchItem-2hKKKK',
          style: {
            flex: '1 1 auto'
          }
        },
        ...titles
      ),
      e(
        'div',
        {
          className:
            'flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6 margin-bottom-20'
        },
        e(
          'div',
          {
            className: 'ui-key-recorder ui-input-button default has-value',
            style: {
              width: '90%'
            }
          },
          e(
            'div',
            {
              className:
                'flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6 layout',
              style: {
                flex: '1 1 auto',
                background: 'none'
              }
            },
            e('input', {
              className:
                'inputDefault-_djjkz input-cIJ7To size16-14cGz5 flexChild-faoVW3',
              type: this.props.password ? 'password' : 'text',
              placeholder:
                this.props.defaultValue || this.props.placeholder || undefined,
              name: this.props.name || undefined,
              maxLength: this.props.maxlength || undefined,
              value: this.state.value,
              onChange: this.change.bind(this),
              style: {
                flex: '1 1 auto',
                background: 'none',
                border: 'none'
              }
            }),
            e(
              'div',
              {
                className:
                  'flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6',
                style: {
                  flex: '0 1 auto',
                  margin: '0px'
                }
              },
              e(
                'button',
                {
                  type: 'button',
                  className:
                    'buttonGreyGhostDefault-2h5dqi buttonGhostDefault-2NFSwJ buttonDefault-2OLW-v button-38aScr buttonGhost-2Y7zWJ buttonGreyGhost-SfY7zU minGrow-1W9N45 min-K7DTfI ui-input-button-ui-button key-recorder-button',
                  onClick: this.fileSelector.bind(this)
                },
                e(
                  'div',
                  {
                    className:
                      'contentsDefault-nt2Ym5 contents-18-Yxp contentsGhost-2Yp1r8'
                  },
                  e(
                    'span',
                    {
                      className: 'key-recorder-button-text'
                    },
                    this.props.buttonName || 'Choose a file...'
                  ),
                  e('span', {
                    className: 'key-recorder-edit-icon',
                    style: {
                      backgroundImage: 'url(' + icon + ')'
                    }
                  })
                )
              )
            )
          )
        ),
        this.props.apply
          ? e(SettingsOptionButton, {
            outline: false,
            text: 'Apply',
            onClick: this.apply.bind(this)
          })
          : undefined,
        this.props.reset
          ? e(SettingsOptionButton, {
            outline: true,
            text: 'Reset',
            onClick: this.reset.bind(this)
          })
          : undefined
      )
    )
  }

  apply (event) {
    let value = this.state.value || this.props.defaultValue
    this.setProp(value)

    if (this.props.onApply) this.props.onApply(event)
  }

  change (event) {
    this.setState({ value: event.target.value })
    if (!this.props.apply) {
      this.setProp(event.target.value || this.props.defaultValue)
    }
  }

  reset (event) {
    this.setState({ value: '' })
    this.apply(event)
  }

  static get fileDialogDefaults () {
    return {
      title: 'Select a file',
      filters: [{ name: 'All Files', extentions: ['*'] }],
      properties: ['openFile'],
      required: false
    }
  }

  fileSelector () {
    let defaultDialogOptions = Object.assign(
      {},
      this.fileDialogDefaults,
      this.props.dialog
    )
    dialog.showOpenDialog(defaultDialogOptions, filePath => {
      if (!filePath || !filePath.length) {
        if (this.props.dialog.required) {
          dialog.showMessageBox({
            type: 'warning',
            message: 'You need to select a file.'
          })
          this.fileSelector()
        }
        return
      }
      this.setState({ value: filePath[0], values: filePath })
    })
  }
}

module.exports = SettingsOptionFilebox
