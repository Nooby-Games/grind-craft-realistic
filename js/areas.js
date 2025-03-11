// Game Info
setGameInfo({
    name: "Grindcraft Realistic Edition",                         // The name of your game!
    version: "0.1",                                     // The current version of your game!
    icon: "images/system/favicon.ico",                    // Link or path to an icon image for your game!
    ID: "grindcraftRelisticEdition",                             // Your game's ID! Should be unique for every game!
});


addResources({                                          // Function for adding all the resources (items/tools/buildings) that are used in your game!
    dirt: {
        image: "images/dirt.png",
    },
    apple: {
        image: "images/apple.jpeg"
    },
    "wooden hoe":{
        image: "images/woodenHoe.png"
    },
    "give nothing": {
        image: "images/brfyb.jpeg"
    },
    sapling: {
        image: "images/sapling.jpeg"
    },
    leaf: {
        image: "images/leaf.png"
    },
    wood: {
        image: "images/wood.png"
    },
    stick: {
        image: "images/stick.png",
    },
    planks: {
        image: "images/planks.png",
    },
    door: {
        image: "images/door.png",
    },
    "crafting table": {
        image: "images/craftingTable.png",
    },
    "dirt hut": {
        image: "images/dirtHut.png",
    },
    nothing: {
        image: "images/hib"
    }
});

// Areas

addArea("c",                                            // Function for adding areas to your game
{
    name: "Forest",
    image: "images/areas/forest.jpeg",
    unlocked: true,
    updateWhileUnactive: true,

    grinds: [
        {
            name: "Get Wood",
            unlocked: true,
            auto: ["dirt hut"],                         // List of items that will auto-grind this grind
            background: "images/grinds/overworld.png",
            resources: [
                {
                    id: "wood",
                    time: [["", 3]],
                    probability: 100,
                },
    ],
    
      
            
    },
    {
        name: "Mine Leaves",
        unlocked: true,
        auto: ["dirt hut"],
        background: "images/grinds/overworld.png",
        resources: [
            {
                id: "leaf",
                time: [["wooden hoe", 0.05],["", 0.45]],
                image: "images/leaf.png",
                probability: 100,
                customResources: {
                    random: [
                        {
                            name: "apple",
                            amount: 1,
                            probability: 0.5,
                        },
                        {
                            name: "sapling",
                            amount: 1,
                            probability: 5,
                        },
                        {
                            name: "stick",
                            amount: [1, 2],
                            probability: 2
                        },
                        {
                            name: "nothing",
                            amount: 1,
                            probability: 92.5,
                        }
                    ],
                    randomRolls: 1,
                }
            }
        ]
    },
   /* {
        name: "Collect Leaf",
        unlocked: false,
        background: "images/leaf.png",
        resources: [
            {
                id: "leaf",
                time: [["wooden hoe", 0.05]],
                probability: 100,
                amount: 1,
            }
        ]
    }
    */
    ],
    crafts: [
        {
            name: "wood",
            desc: "Used to craft most things",
            type: "display",
            cost: [["wood", 0]],
        },
        {
            name: "planks",
            desc: "Used to make a crafting table",
            type: "craft",
            cost: [["wood", 1]],
            amount: 4
        },
        {
            name: "stick",
            desc: "Used to craft planks",
            type: "craft",
            cost: [["planks", 2]],
            amount: 4
        },
        {
            name: "dirt",
            desc: "Used to build a dirt hut",
            type: "display",
            cost: [["dirt", 1]],
        },
        {
            name: "sapling",
            desc: "Grows into tree",
            type: "display",
            cost: [["sapling", 1]],
        },
        
        {
            name: "wooden hoe",
            desc: "Required for farming and to get leaves",
            type: "craft",
            cost: [["crafting table", 0], ["stick", 2], ["planks", 2]],
        },
        {
            name: "crafting table",
            desc: "Required to build a dirt hut",
            type: "craft",
            cost: [["planks", 4]],
        },
        
        {
            name: "door",
            desc: "Required to build a dirt hut",
            type: "craft",
            amount: 3,
            cost: [["planks", 6]],
        },
        {
            name: "leaf",
            desc: "Decoration or used for farms",
            type: "display",
            amount: 3,
            cost: [["planks", 6]],
        },
        {
            name: "dirt hut",
            desc: "Required to beat the game!",
            type: "craft",
            cost: [["dirt", 23], ["crafting table", 1], ["door", 1]],
            message: "You have beaten the game!",
        },
        {
            name: "apple",
            desc: "You can eat this or make golden apples",
            type: "display",
            cost: [["apple", 1]]

        }
    ],

    update(diff) {                                      // diff is the time in milliseconds since last time the update function was runned
        
    },
},
{
    name: "Spawn",
    background: "images/areas/spawn.jpeg",
    unlocked: true,
    updateWhileUnactive: true,
    grinds: [
        
    ]
},

);

// Function that will be runned when the website is loaded
function onLoad(oldVersion) {
    // If the game version in the player's save is not the same as the current game version:
    if (oldVersion !== player.gameInfo.version) {
        // Write it to the console
        console.log(oldVersion);
    }
}