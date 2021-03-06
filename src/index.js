import Noty from 'noty'
import './styles.less'

const defaults = {
  layout: 'topRight',
  theme: 'mint',
  timeout: 5000,
  progressBar: true,
  closeWith: ['click'],
}

const VueNoty = {
  options: {},

  setOptions (opts) {
    this.options = Object.assign({}, defaults, opts)
    return this
  },

  create (params) {
    return new Noty(params)
  },

  show (text, type = 'alert', opts = {}) {
    const params = Object.assign({}, this.options, opts, {
      type,
      text
    })

    const noty = this.create(params)
    noty.show()
    return noty
  },

  success (text, opts = {}) {
    return this.show(text, 'success', opts)
  },

  error (text, opts = {}) {
    return this.show(text, 'error', opts)
  },

  warning (text, opts = {}) {
    return this.show(text, 'warning', opts)
  },

  info (text, opts = {}) {
    return this.show(text, 'info', opts)
  }
}

export default {
  install: function (Vue, opts) {
    const noty = VueNoty.setOptions(opts)
    Vue.prototype.$noty = noty
    Vue.noty = noty
  }
}
