export default {
  starter: [
    'ambassador',
    'artificial intelligence',
    'celebrity',
    'clergyman',
    'companion',
    'corporation',
    'criminal',
    'current news story',
    'diplomat',
    'distress beacon',
    'foriegner',
    'free-trader',
    'friend',
    'government official',
    'information broker',
    'intelligence report',
    'law enforcement officer',
    'local comms chatter',
    'local community',
    'local rumour',
    'mercenaries',
    'middleman',
    'military officer',
    'naval officer',
    'overheard conversation',
    'politician',
    'powerbroker',
    'relation',
    'rival',
    'scholar',
    'scientist',
    'sensor reading',
    'soldier',
    'trade union',
  ],
  type: [
    'collection',
    'courier',
    'discovery',
    'elimination',
    'elude',
    'escort',
    'exploration',
    'insertion',
    'interaction',
    'investigation',
    'liberate',
    'prevention',
    'protection',
    'reconnaissance',
    'rescue',
    'retrieval',
    'survival',
    'track',
  ],
  modifier: [
    'alien',
    'ambush',
    'barely legal',
    'betrayal',
    'blackmail',
    'deadly environment',
    'deception',
    'disguise',
    'dishonesty',
    'extremely profitable',
    'feud',
    'great distance',
    'highly profitable',
    'illegal',
    'lack of supplies / resources',
    'limited time',
    'lost',
    'medical / biological',
    'misleading information',
    'more than one faction',
    'mysterious',
    'natural disaster',
    'personal',
    'religious / spiritual',
    'revenge',
    'righteous',
    'scientific / technical',
    'secret',
    'standard',
    'stolen',
    'unethical',
  ],
  allies: [
    'artificial intelligence',
    'artist',
    'astronomer',
    'civilian',
    'entertainer',
    'escaped prisoner',
    'escaped slave',
    'explorers',
    'free-trader',
    'honourable mercenaries',
    'law enforcement',
    'naive youth',
    'pilot',
    'redeemed criminal',
    'refugees',
    'rogue adventurer',
    'scavengers',
    'scholar',
    'scientist',
    'streetwise urchins',
    'technician',
    'victim who wants revenge',
  ],
  antagonists: [
    'assassins',
    'bandits',
    'bounty hunter',
    'corporation',
    'corrupt official',
    'criminals',
    'cultists',
    'greedy free-trader',
    'law enforcement',
    'madman',
    'mercenaries',
    'military officer',
    'naval officer',
    'obsessed scientist',
    'pirates',
    'rebels',
    'rich entreprenuer',
    'rival',
    'rogue artificial intelligence',
    'slaver',
    'theives',
    'trade guild',
    'warlord',
  ],
  locations: [
    'abandoned space craft/station',
    'academy',
    'apartment block',
    'bandit territory',
    'brothel',
    'casino',
    'catacombs',
    'caves',
    'corporate office',
    'damaged space craft/station',
    'deserted outpost',
    'dive bar',
    'gambling den',
    'garden or park',
    'industrial factory',
    'luxury residence',
    'marketplace',
    'medical facility',
    'military outpost',
    'military space craft/station',
    'mines',
    'night club',
    'prison',
    'religious site',
    'remote wilderness',
    'sanctuary',
    'scientific facility',
    'space station',
    'strip club',
    'warehouse',
  ],
  getRandomStarter() {
    return this.starter[Math.round(Math.random() * (this.starter.length - 1))]
  },
  getRandomType() {
    return this.type[Math.round(Math.random() * (this.type.length - 1))]
  },
  getRandomModifier() {
    return this.modifier[Math.round(Math.random() * (this.modifier.length - 1))]
  },
  getRandomAlly() {
    return this.allies[Math.round(Math.random() * (this.allies.length - 1))]
  },
  getRandomAntagonist() {
    return this.antagonists[Math.round(Math.random() * (this.antagonists.length - 1))]
  },
  getRandomLocation() {
    return this.locations[Math.round(Math.random() * (this.locations.length - 1))]
  }
}