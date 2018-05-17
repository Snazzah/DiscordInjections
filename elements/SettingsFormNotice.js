const React = require('react')
const e = React.createElement

class SettingsFormNotice extends React.PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return e(
      'div',
      {
        className: 'formNotice-2_hHWR margin-bottom-40 cardPrimary-1Hv-to card-3Qj_Yx',
        style: { flex: '1 1 auto' }
      },
      e(
        'div',
        {
          className: 'flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignStart-H-X2h- noWrap-3jynv6',
          style: { flex: '1 1 auto' }
        },
        e(
          'img',
          {
            className: 'icon-4lJsMQ noUserDrag-5Mb43F flexChild-faoVW3',
            style: { flex: '0 0 auto' },
            height: this.props.imageHeight || 40,
            src: this.props.image || '/assets/e8b66317ab0dc9ba3bf8d41a4f3ec914.png'
          }
        ),
        e(
          'div',
          {
            className: 'flexChild-faoVW3',
            style: { flex: '1 1 auto' }
          },
          e(
            'h5',
            { className: 'h5-18_1nd title-3sZWYQ size12-3R0845 height16-2Lv3qA weightSemiBold-NJexzi formNoticeTitle-2KGjDe marginBottom4-2qk4Hy faded-3bns_w' },
            this.props.title
          ),
          e(
            'div',
            { className: 'default-3nhoK- formText-3fs7AJ formNoticeBody-M4JFHP modeDefault-3a2Ph1 primary-jw0I4K' },
            this.props.description
          )
        )
      )
    )
  }
}

module.exports = SettingsFormNotice