class Spaceship {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.phasers = obj.phasers
    this.shields = obj.shields
    Store.data.spaceships.push(this)
  }
}
