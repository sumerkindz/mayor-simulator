export class Time {
  constructor() {
    this.day = 1;
    this.tick = 0;
  }

  update() {
    this.tick++;
    if (this.tick > 300) {
      this.tick = 0;
      this.day++;
    }
  }
}
