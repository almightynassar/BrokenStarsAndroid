export default {
  /**
   * The tags array list all the tags
   * and requisite rules.
   */
  tags: [
    {
      tag: "Agricultural",
      // All these conditions must be met
      mandatory: {
        atmosphere: ['thin', 'standard', 'thick', 'tainted'],
        hydrosphere: ['moderate', 'wet'],
        biosphere: ['compatible', 'hybrid', 'engineered'],
        temperature: ['cold', 'temperate', 'warm'],
        infrastructure: ['minimal', 'limited', 'low', 'moderate']
      },
      // If exists, at least one must be met
      optional: [
        {
          population: [1, 2, 3],
          size: ['mini', 'tiny', 'dwarf']
        },
        {
          population: [1, 2, 3, 4],
          size: ['small']
        },
        {
          population: [1, 2, 3, 4, 5, 6],
          size: ['medium', 'large']
        },
        {
          population: [1, 2, 3, 4, 5, 6, 7, 8],
          size: ['huge', 'massive']
        },
        {
          population: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          size: ['giant', 'colossal']
        }
      ]
    },
    {
      tag: "Desert",
      // All these conditions must be met
      mandatory: {
        shape: ['terrestrial'],
        atmosphere: ['corrosive', 'exotic', 'insidious', 'standard', 'tainted', 'thick', 'thin'],
        hydrosphere: ['none', 'dry']
      },
      // If exists, at least one must be met
      optional:[]
    },
    {
      tag: "Gas Giant",
      // All these conditions must be met
      mandatory: {
        shape: ['jovian'],
        size: ['giant', 'colossal']
      },
      // If exists, at least one must be met
      optional:[]
    },
    {
      tag: "High Techology",
      // All these conditions must be met
      mandatory: {
        tech: ['advanced', 'exotic']
      },
      // If exists, at least one must be met
      optional:[]
    },
    {
      tag: "Ice",
      // All these conditions must be met
      mandatory: {
        shape: ['terrestrial'],
        atmosphere: ['corrosive', 'exotic', 'insidious', 'standard', 'tainted', 'thick', 'thin'],
        temperatue: ['frozen', 'cold'],
        hydrosphere: ['moderate', 'wet', 'water']
      },
      // If exists, at least one must be met
      optional:[]
    },
    {
      tag: "Low Techology",
      // All these conditions must be met
      mandatory: {
        tech: ['primitive', 'early']
      },
      // If exists, at least one must be met
      optional:[]
    },
    {
      tag: "Mining",
      // All these conditions must be met
      mandatory: {
        resources: ['high', 'abundant'],
        infrastructure: ['minimal', 'limited', 'low', 'moderate']
      },
      // If exists, at least one must be met
      optional:[
        {
          population: [1, 2, 3],
          size: ['mini', 'tiny', 'dwarf']
        },
        {
          population: [1, 2, 3, 4],
          size: ['small']
        },
        {
          population: [1, 2, 3, 4, 5, 6],
          size: ['medium', 'large']
        },
        {
          population: [1, 2, 3, 4, 5, 6, 7, 8],
          size: ['huge', 'massive']
        },
        {
          population: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          size: ['giant', 'colossal']
        }
      ]
    },
    {
      tag: "Non-water oceans",
      // All these conditions must be met
      mandatory: {
        atmosphere: ['corrosive', 'exotic', 'insidious'],
        hydrosphere: ['arid', 'moderate', 'wet', 'water'],
        biosphere: ['incompatible']
      },
      // If exists, at least one must be met
      optional:[]
    },
    {
      tag: "Sterile",
      // All these conditions must be met
      mandatory: {
        shape: ['terrestrial'],
        atmosphere: ['vacuum'],
        biosphere: ['none']
      },
      // If exists, at least one must be met
      optional:[]
    },
    {
      tag: "Water World",
      // All these conditions must be met
      mandatory: {
        shape: ['terrestrial'],
        atmosphere: ['corrosive', 'exotic', 'insidious', 'standard', 'tainted', 'thick', 'thin'],
        hydrosphere: ['water'],
        temperature: ['temperate', 'warm']
      },
      // If exists, at least one must be met
      optional:[]
    },
  ],
  // Generate a tag
  generateTags(planet) {
    let t = _.cloneDeep(planet.tags)
    for (var tIndex = 0; tIndex < this.tags.length; tIndex++) {
      let tag = this.tags[tIndex]
      let mPartial = true
      for (var mKey in tag.mandatory) {
        if (tag.mandatory.hasOwnProperty(mKey)) {
          let test = tag.mandatory[mKey]
          mPartial = (mPartial && test.includes(planet[mKey]))
        }
      }
      let oPartial = (tag.optional.length > 0) ? false : true
      for (var oIndex = 0; oIndex < tag.optional.length; oIndex++) {
        let optional = tag.optional[oIndex]
        let fPartial = true
        for (var fKey in optional) {
          if (optional.hasOwnProperty(fKey)) {
            let test = optional[fKey]
            fPartial = (fPartial && test.includes(planet[fKey]))
          }
        }
        oPartial = (oPartial || fPartial)
      }
      if (mPartial && oPartial) {
        t.push(tag.tag)
      }
    }
    return t.sort().filter( function (value, index, self) { 
      return self.indexOf(value) === index;
    })
  }
}