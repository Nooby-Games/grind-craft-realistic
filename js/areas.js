// Game Info
setGameInfo({
    name: "Grindcraft Realistic Edition",                         // The name of your game!
    version: "0.1",                                     // The current version of your game!
    icon: "images/system/favicon.ico",                    // Link or path to an icon image for your game!
    ID: "grindcraftRelisticEdition",                             // Your game's ID! Should be unique for every game!
});

// Resources

addResources({                                          // Function for adding all the resources (items/tools/buildings) that are used in your game!
    dirt: {
        image: "images/dirt.png",
    },
    leaves: {
        image: "images/leaf.png"
    },
    wood: {
        image: "images/wood.png",
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
    "wood farm":{
        image: "images/woodFarm.jpeg"
    },
    "wooden hoe": {
        image: "images/woodenHoe.png"
    }
});

// Areas

addArea("c",                                            // Function for adding areas to your game
{
    name: "Overworld",
    image: "images/areas/cityState.png",
    unlocked: true,
    updateWhileUnactive: true,

    grinds: [
        {
            name: "Grab Wood",
            unlocked: true,
            auto: ["wood farm"],                         // List of items that will auto-grind this grind
            background: "images/grinds/overworld.png",
            resources: [
                
                {
                    id: "wood",
                    time: [["", 3]],
                    probability: 100,
                },
            ]
        },
        {
            name: "Grab Leaves",
            unlocked: true,
            auto: ["wood farm"],                         // List of items that will auto-grind this grind
            background: "images/grinds/overworld.png",
            resources: [
                
                {
                    id: "leaves",
                    time: [["wooden hoe", 0.05]],
                    probability: 100,
                },

            ]
        },
    ],

    crafts: [
        
        {
            name: "stick",
            desc: "Used to craft planks",
            type: "craft",
            cost: [["planks", 2]],
            amount: 4,
        },
        
        {
            name: "leaves",
            desc: "Can drop saplings or sticks. Can be used for farms.",
            type: "display",
            cost: [["leaves", 0]],
            amount: 4,
        },
        {
            name: "wood",
            desc: "Needed for most crafts.",
            type: "display",
            cost: [["wood", 0]],
        },
        {
            name: "dirt",
            desc: "Used to build a dirt hut",
            type: "display",
            cost: [["dirt", 0]],
        },
        {
            name: "planks",
            desc: "Used to make a crafting table",
            type: "craft",
            cost: [["wood", 1]],
            amount: 4,
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
            name: "wooden hoe",
            desc: "Used for farming or breaking leaves/hay bales",
            type: "craft",
            cost: [["crafting table", 1],["sticks", 2], ["wood", 2]],
    
        },
        {
            name: "wood farm",
            desc: "Required to beat the game!",
            type: "craft",
            cost: [["crafting table", 1]["dirt", 23],["door", 1]],
        },
    ],

    update(diff) {                                      // diff is the time in milliseconds since last time the update function was runned
        
    },
}
);

// Function that will be runned when the website is loaded
function onLoad(oldVersion) {
    // If the game version in the player's save is not the same as the current game version:
    if (oldVersion !== player.gameInfo.version) {
        // Write it to the console
        console.log(oldVersion);
    }
}