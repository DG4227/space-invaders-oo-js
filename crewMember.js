class CrewMember {
  constructor(obj) {
    this.position = obj.position;
    this.id = obj.id;
    Store.data.crewMembers.push(this)
    this.currentShip = "Looking for a Rig"
    this.spaceshipId = null
  }
  assignShip(ship) {
    this.currentShip = ship
    this.spaceshipId = ship.id
    ship.docked = false
  }
  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig" || this.position != "Pilot" ){
      return "had no effect"
    } else {
      this.currentShip.warpDrive = 'engaged!'
    }
  }
  setsInvisibility() {
    if (this.currentShip === "Looking for a Rig" || this.position != "Defender"){
      return "had no effect"
    } else {
      this.currentShip.cloaked = true
    }
  }
  chargePhasers() {
    if (this.currentShip === "Looking for a Rig" || this.position != "Gunner"){
      return "had no effect"
    } else {
      this.currentShip.phasersCharge = 'charged!'
    }
  }
}
