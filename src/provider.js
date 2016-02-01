import { Provider } from 'kratos'
import log4js from 'log4js'

const defaultConfig = {
  appenders: [
    { type: 'console' }
  ]
}

export default class Log4JsProvider extends Provider {
  register () {
    const config = this.config('logs', defaultConfig)
    log4js.configure(config)
    this.bind('log', () => {
      const logger = log4js.getLogger()
      return logger
    })
  }
}