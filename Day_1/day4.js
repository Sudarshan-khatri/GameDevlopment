const arr=[1,2,3,4,5]

arr[3]=45
console.log(arr[3])

arr.push(6)
console.log(arr)

console.log(arr.pop())
console.log(arr)


arr.shift()
console.log(arr)


const nums=[1,2,3,4,5,6,6]
let sum=0
for(let i=0;i<nums.length;i++){
    sum+=nums[i]
}
console.log(sum)

const arrMax=[5,50,15,7,1]
let max=0
for(let i=0;i<arrMax.length;i++){
    if(arrMax[i]>max){
        max=arrMax[i]
    }
}
console.log(max)

function double(duplicate){
    // let count=0
    for(let i=1;i<duplicate.length;i++){
        for(let j=0;j<duplicate.length;i++){
            if(duplicate[i]===duplicate[j+1]){
                return duplicate[i]
                break
            }
        }
    }
}
const duplicate=[5,5,2,7,1]
const dpl=[12,1,2,3,4,5,6,1,2,3,4]
console.log(`Duplicate:${double(duplicate)}`)
console.log(`Duplicate:${double(dpl)}`)


let student={
    name:"Roshan",
    age:"20",
    sem:8,
    address:{
        city:"kathmandu",
        street:"kamalpokhari"
    }

}

let student1={
    name:"rabin",
    age:34,
    sem1:45
}




student.address.city="chitwan"
console.log(student)


const game = {
    title: "Legends of Aether",
    genre: "Action RPG",
    version: "1.4.2",
    player: {
        username: "DragonSlayer",
        level: 27,
        health: 180,
        mana: 90,
        stats: {
        strength: 42,
        agility: 33,
        intelligence: 25,
        },
    inventory: {
        gold: 1250,
        items: [
            {
            id: "w001",
            name: "Flame Sword",
            type: "weapon",
            damage: 45,
            attributes: {
                fire: 12,
                ice: 0,
            },
            },
            {
            id: "a001",
            name: "Guardian Shield",
            type: "armor",
            defense: 30,
            attributes: {
                reflect: 5,
            },
            },
        ],
        },
        quests: [
        {
            id: "q010",
            name: "Rescue the Lost Prince",
            completed: false,
            rewards: {
            gold: 300,
            xp: 1200,
            },
        },
        {
            id: "q011",
            name: "Slay the Forest Dragon",
            completed: false,
            rewards: {
            gold: 800,
            xp: 3000,
            itemReward: "Dragon Scale Shield",
            },
        },
        ],
    },
    world: {
        map: "Eldoria",
        regions: [
        {
            name: "Crystal Valley",
            enemies: ["Slime", "Golem", "Crystal Wolf"],
        },
        {
            name: "Shadow Forest",
            enemies: ["Dark Elf", "Forest Dragon", "Shadow Beast"],
        },
        ],
    },
    settings: {
        difficulty: "hard",
        graphics: {
        resolution: "1920x1080",
        quality: "high",
        },
        audio: {
        music: 70,
        effects: 80,
        voice: 65,
        },
    },
    };

//resolution of game 
console.log(game.settings.graphics.resolution)

//update audio voice from 65 to 85
game.settings.audio.voice=88
console.log(game.settings.audio)


//gold
console.log(game.player.inventory.gold.toString())
console.log(game.player.inventory.items)



const game1= {
  title: "Legends of Aether: Eternal Paradox",
  version: "9.8.14",
  engine: "AetherCore Quantum 3",
  difficulty: "Transcendent (100x)",
  metaModifiers: {
    globalScaling: 4.75,
    enemyAdaptiveAI: true,
    permadeathOnMythic: true,
    chaosFactor: 0.82,
  },

  // ---------------- PLAYER ---------------- //
  player: {
    username: "DragonSlayer",
    level: 143,
    class: "Aetherborne Chrono-Knight",
    ancestry: {
      race: "Half-Celestial",
      lineageTraits: ["Aether Vision", "Soulbound Resilience", "Void Affinity"],
      corruption: 27, // increases powerful abilities but risks transformation
    },

    resources: {
      health: 3120,
      mana: 1450,
      stamina: 920,
      lifeforce: 240, // used for ultimate abilities
      voidEnergy: 60, // used for dark skills
      overload: 12, // if reaches 100 → character explodes
    },

    stats: {
      strength: 215,
      agility: 180,
      intelligence: 205,
      vitality: 260,
      spirit: 188,
      critRate: 22.5,
      critDamage: 245,
      armorPen: 18,
      magicPen: 22,
      blockChance: 14,
      evasion: 11,
      aetherEfficiency: 32, // reduces mana/lifeforce usage
      resistances: {
        fire: 65,
        ice: 55,
        lightning: 48,
        poison: 33,
        shadow: 42,
        holy: 28,
        chaos: 15,
      },
    },

    combatStyle: {
      stance: "Aetherflow Focus",
      bonuses: ["+12% spell damage", "+5% lifeforce regen"],
      unlockedStances: ["Berserker Rage", "Void Invocation", "Guardian Wall"],
    },

    statusEffects: [
      { name: "Aether Shield", type: "buff", duration: 45, effect: "+120 defense" },
      { name: "Void Burn", type: "debuff", stacks: 3, effect: "-12 HP/sec" },
      { name: "Temporal Echo", type: "unique", duration: 20, effect: "Repeat last ability every 5 sec" },
    ],

    // ---------------- INVENTORY ---------------- //
    inventory: {
      gold: 48200,
      platinum: 32,
      backpackLimit: 120,
      craftingMaterials: {
        aetherShard: 54,
        voidCrystal: 12,
        dragonBone: 21,
        celestialCore: 3,
      },
      items: [
        {
          id: "w099",
          name: "Chrono-Edge of Eternal Paradox",
          type: "weapon",
          rarity: "mythic",
          damage: { min: 240, max: 355 },
          durability: 140,
          attackSpeed: 1.4,
          attributes: {
            timeRiftChance: 8,
            voidDamage: 55,
            aetherDamage: 40,
            penetration: 12,
          },
          enchantments: [
            { name: "Temporal Rupture IV", effect: "20% chance to freeze time for 1s" },
            { name: "Void Devourer III", lifestealVoid: 15 },
          ],
          sockets: ["Aether Gem", "Obsidian Core", null],
          awakened: {
            stage: 2,
            effects: ["+50% damage to bosses", "Create after-image clones on crit"],
          },
        },

        {
          id: "a204",
          name: "Aetherforged Celestial Plate",
          type: "armor",
          rarity: "legendary",
          defense: 310,
          attributes: {
            reflect: 14,
            holyResistance: 25,
            damageReductionPercent: 8,
          },
          synergy: {
            setName: "Celestial Warden",
            piecesOwned: 2,
            setBonus: "+18% damage in daylight regions",
          },
        },
      ],
    },

    // ---------------- SKILL TREE ---------------- //
    skillTree: {
      branches: {
        offense: {
          skills: [
            { name: "Aether Strike", level: 5, maxLevel: 10, scaling: 1.4 },
            { name: "Void Rend", level: 3, maxLevel: 10, corruptionGain: 2 },
            { name: "Temporal Cleave", level: 2, maxLevel: 5, cooldownReduction: 8 },
          ],
        },
        defense: {
          skills: [
            { name: "Guardian Form", level: 4, shieldBoost: 220 },
            { name: "Soul Anchor", level: 1, reviveChance: 8 },
          ],
        },
        chronoMagic: {
          skills: [
            { name: "Time Warp", level: 3, slowEffect: 45 },
            { name: "Aether Storm", level: 2, aoeDamage: 180 },
          ],
        },
      },
      synergyMultipliers: {
        offenseDefenseCombo: 1.15,
        chronoOffenseCombo: 1.25,
        fullTriadBonus: 1.40,
      },
    },

    // ---------------- QUESTS ---------------- //
    quests: [
      {
        id: "q500",
        name: "Eternal Paradox Cycle",
        tier: "Mythic",
        chainLength: 7,
        branchingPaths: {
          lightEnding: "Restore Aether Balance",
          darkEnding: "Collapse the Time Weave",
          chaosEnding: "Break the Cycle",
        },
        stages: [
          { step: 1, desc: "Locate the 3 Time Fractures", completed: true },
          { step: 2, desc: "Defeat the Rift Guardians", completed: false },
          { step: 3, desc: "Stabilize the Aether Core", completed: false },
        ],
        rewards: {
          xp: 25000,
          gold: 5500,
          uniqueItem: "Paradox Sigil",
          factionBoost: { "Order of Eternity": 40 },
        },
      },
    ],
  },

  // ---------------- WORLD ---------------- //
  world: {
    universe: "Aetherium Nexus",
    dimensions: [
      {
        name: "Prime Eldoria",
        timeFlow: "normal",
        regions: [
          {
            name: "Crystal Valley",
            biome: "frozen",
            threatLevel: "high",
            enemies: ["Frost Wraith", "Crystal Colossus", "Eternal Wolf"],
            worldBoss: {
              name: "Titan of the Glacial Heart",
              level: 120,
              phases: [
                {
                  phase: 1,
                  moves: ["Frost Slam", "Ice Breath"],
                  ai: "Aggressive",
                },
                {
                  phase: 2,
                  moves: ["Crystal Explosion", "Freeze Lock"],
                  ai: "Strategic",
                },
              ],
              loot: ["Heart of Winter", "Frozen Titan Plate"],
            },
          },
        ],
      },

      {
        name: "Umbra Void Realm",
        timeFlow: "distorted",
        corruptionLevel: 87,
        enemies: ["Abyssal Serpent", "Void Spawn", "Corrupted Knight"],
        worldBoss: {
          name: "The Nameless Devourer",
          level: 160,
          mechanic: "Consumes player abilities temporarily",
          loot: ["Void Soul", "Devourer's Fang", "Corrupted Relic"],
        },
      },

      {
        name: "Aether Ascendant Plane",
        timeFlow: "accelerated",
        anomalies: [
          { type: "Gravity Shift", effect: "-50% jump height" },
          { type: "Mana Surge", effect: "+40% spell power" },
        ],
      },
    ],

    factions: {
      "Order of Eternity": { reputation: 50, status: "ally" },
      "Shadow Dominion": { reputation: -40, status: "hostile" },
      "Celestial Sovereigns": { reputation: 12, status: "neutral" },
    },

    economy: {
      inflationRate: 3.1,
      tradeGoods: ["Aether Crystal", "Dragon Silk", "Void Essence"],
      blackMarketActive: true,
    },
  },

  // ---------------- SETTINGS ---------------- //
  settings: {
    graphics: {
      resolution: "3840x2160",
      rayTracing: true,
      frameCap: 240,
      textureQuality: "ultra",
      shadowQuality: "extreme",
    },
    audio: {
      music: 90,
      effects: 95,
      voice: 80,
      spatialAudio: true,
    },
    gameplay: {
      autoLoot: false,
      manualParryTimingWindow: 80, // ms
      permadeath: true,
    },
  },

  events: [
    {
      name: "Celestial Convergence",
      effect: "All healing reduced by 25%",
      durationMinutes: 60,
    },
    {
      name: "Void Invasion",
      effect: "Void portals spawn across all regions",
      durationMinutes: 90,
      enemyScaling: "+40%",
    },
  ],
};

console.log(game1)