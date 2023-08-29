export default class {
  constructor(callback, delay) {
    this.callback = callback
    this.delay = delay;
    this.t = null;

    this.resume()
  }
  pause() {
    this.paused = true
    clearTimeout(this.t)
    this.delay -= new Date() - this.start
  }
  resume() {
    this.paused = false
    this.start = new Date()

    clearTimeout(this.t)

    this.t = setTimeout(() => {
      clearTimeout(this.t)
      this.callback()
    }, this.delay)
  }
  toggle() {
    if (this.paused) this.resume()
    else this.pause()
  }
}
