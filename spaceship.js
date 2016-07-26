class Spaceship {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.phasers = obj.phasers
    this.shields = obj.shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasers = 5
    this.shields = 4
    this.phasersCharge = 'uncharged'
    this.docked = true

    Store.data.spaceships.push(this)
  }
}
