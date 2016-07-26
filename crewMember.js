class CrewMember {
  constructor(data) {
    this.position = data.position;
    this.id = data.id;
    Store.data.crewMembers.push(this)
    this.currentShip = "Looking for a Rig"
  }

  assignShip(ship) {
    this.currentShip = ship
  }



}
