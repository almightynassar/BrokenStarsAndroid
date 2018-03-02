export default {
  /**
   * List of available weapons
   */
  list: [
    {
      id: "AUTOC",
      name: "Auto-cannon",
      storage: -1,
      power: -3,
      cost: 100000,
      damage: "3d6",
      range: 50,
      rof: 3,
      hardpoints: -2,
      description: "Shaves off a projectile from a metal alloy block and accelerates it to a high speed. Each block of alloy costs $500 and provides 500 shots."
    },
    {
      id: "BLAST",
      name: "Blaster",
      storage: -1,
      power: -4,
      cost: 75000,
      damage: "3d6",
      range: 30,
      rof: 1,
      hardpoints: -1,
      description: "Fires a modulated and focused laser beam at a target. This weapon does not need to be reloaded as long as it is Powered. Powering up and down the weapon takes 1 round."
    },
    {
      id: "MASSD",
      name: "Mass Driver",
      storage: -2,
      power: -4,
      cost: 150000,
      damage: "4d6",
      range: 75,
      rof: 1,
      hardpoints: -4,
      description: "Similar to an auto-cannon but fires larger projectiles at higher speeds. Each block of alloy costs $1000 and provides 500 shots."
    },
    {
      id: "MISSA",
      name: "Missiles (Armour Piercer)",
      storage: -4,
      power: -4,
      cost: 500000,
      damage: "7d8",
      range: 150,
      rof: 1,
      hardpoints: -4,
      description: "A Medium Burst area effect weapon. A Missile moves 150 spaces per round, and can retarget itself. Each missile costs 1500 credits, and the launcher stores up to 3 missiles (it takes 1 round to reload)."
    },
    {
      id: "MISSL",
      name: "Missiles (Light)",
      storage: -2,
      power: -4,
      cost: 150000,
      damage: "4d8",
      range: 150,
      rof: 2,
      hardpoints: -2,
      description: "A Medium Burst area effect weapon. A Missile moves 150 spaces per round, and can retarget itself. Each missile costs 500 credits, and the launcher stores up to 4 missiles (it takes 1 round to reload)."
    },
    {
      id: "MISSH",
      name: "Missiles (Heavy)",
      storage: -3,
      power: -4,
      cost: 250000,
      damage: "5d8",
      range: 150,
      rof: 2,
      hardpoints: -3,
      description: "A Medium Burst area effect weapon. A Missile moves 150 spaces per round, and can retarget itself. Each missile costs 750 credits, and the launcher stores up to 4 missiles (it takes 1 round to reload)."
    },
    {
      id: "MLASR",
      name: "Multi-focal Laser",
      storage: 0,
      power: -1,
      cost: 25000,
      damage: "2d4",
      range: 40,
      rof: 1,
      hardpoints: -1,
      description: "Twinned assay and penetration lasers modulate the frequency of this beam. As long as it is powered it does not need to reload (1 round to power up and down)."
    },
    {
      id: "PLSMA",
      name: "Plasma Cannon",
      storage: -2,
      power: -5,
      cost: 350000,
      damage: "3d10",
      range: 40,
      rof: 1,
      hardpoints: -3,
      description: "Superheats a hydrogen pellet until it reaches it’s plasma state, and then accelerates the plasma to it’s target by magnetic coils. Stores up to 100 ammunition (costs $1000)"
    },
    {
      id: "SNDTH",
      name: "Sand Thrower",
      storage: -1,
      power: -1,
      cost: 50000,
      damage: "4d4/3d4/2d4",
      range: 30,
      rof: 1,
      hardpoints: -1,
      description: "+2 to your Shooting or Weapons roll. Projects a spray of tiny, dense particulate matter. Sandthrowers are highly effective against lightly armored fighters. Stores up to 100 shots (costs $100)"
    },
  ],
  /**
   * The selected weapons
   */
  selected: [],
  /**
   * Sort the selected weapons list
   */
  sort() {
    this.selected.sort(function(a,b) {
      return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)
    });
  },
  /**
   * Search for a specific weapon element in available list
   */
  searchList(id) {
    return this.list.find(function(weapon) { return weapon.id === this.id; } , {'id': id});
  },
  /**
   * Search for the specific weapon id in available list
   */
  searchListForIndex(id) {
    return this.list.findIndex(function(weapon) { return weapon.id === this.id; } , {'id': id});
  },
  /**
   * Search for a specific weapon element in selected list
   */
  searchSelected(id) {
    return this.selected.find(function(weapon) { return weapon.id === this.id; } , {'id': id});
  },
  /**
   * Search for the specific weapon id in selected list
   */
  searchSelectedForIndex(id) {
    return this.selected.findIndex(function(weapon) { return weapon.id === this.id; } , {'id': id});
  },
  /**
   * Update the selected list
   */
  update(id, total) {
    // Search if the weapon exists
    let index = this.searchSelectedForIndex(id)
    let weapon = this.searchSelected(id)
    // Make sure the total is an integer
    total = parseInt(total)
    if ( (typeof weapon !== "undefined") && index >= 0) {
      // Add to existing weapon entry (deleting and adding it so that it triggers Vue)
      weapon.active = this.selected[index].active + total
      weapon.total = this.selected[index].total + total
      this.selected.splice(index, 1)
    } else {
      // Create new weapon entry if it exists in the list
      weapon = this.searchList(id)
      if (typeof weapon !== "undefined") {
        weapon.active = total
        weapon.total = total
      } else { 
        weapon = {
          total: -1
        }
      }
    }
    // Make sure we have a postive non-zero total
    if (weapon.total > 0) {
      // Bound our active number of weapons
      if (weapon.active >= weapon.total) {
        weapon.active = weapon.total
      } else if (weapon.active < 0) {
        weapon.active = 0
      }
      this.selected.push(weapon)
    }
    this.sort()
    return weapon
  },
  /**
   * Activate a weapon
   */
  activate(id, total) {
    // Search if the weapon exists
    let index = this.searchSelectedForIndex(id)
    let weapon = this.searchSelected(id)
    // Make sure the total is an integer
    total = parseInt(total)
    if ( (typeof weapon !== "undefined") && index >= 0) {
      let active = weapon.active + total
      weapon.active = (active >= weapon.total) ? weapon.total : ( (active <= 0) ? 0 : active )
      // Update existing weapon entry (deleting and adding it so that it triggers Vue)
      this.selected.splice(index, 1)
      this.selected.push(weapon)
      this.sort()
    }
  },
  /**
   * Clears the selected list
   */
  clear() {
    this.selected = []
  }
}