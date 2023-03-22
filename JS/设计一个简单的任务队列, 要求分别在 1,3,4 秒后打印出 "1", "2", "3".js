class Queue {
  _task = [];
  constructor() {}
  task(ms, cb) {
    this._task.push({ ms, cb });
    return this;
  }
  start() {
    if (this._task.length) {
      const { ms, cb } = this._task[0];
      setTimeout(() => {
        cb.apply(this);
        this._task.shift();
        if (this._task.length) {
          this.start();
        }
      }, ms);
    }
  }
}

const startTime = Date.now();

new Queue()
  .task(1000, () => console.log("1"))
  .task(2000, () => console.log("2"))
  .task(4000, () => console.log("4"))
  .start();
