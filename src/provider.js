import { resolve } from 'path'
import { Provider } from 'kratos'
import log4js from 'log4js'

export default class Log4JsProvider extends Provider {
  register () {
    const config = this.config('logs')
    log4js.configure(config)
    this.bind('log', () => {
      const logger = log4js.getLogger()
      return logger
    });
  }
}