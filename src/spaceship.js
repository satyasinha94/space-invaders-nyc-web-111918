class Spaceship {

  constructor(name, crew = [], phasers = 5, shields = 4, cloaked = false, warpDrive = 'disengaged', docked, phasersCharge = 'uncharged') {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.phasersCharge = phasersCharge
    this.docked = crew.length === 0 ? true : false
    this.assignCrew()
  }

  assignCrew() {
    this.crew.forEach(member => {
      member.currentShip = this
    })
  }
}
