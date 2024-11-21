# Areas

In your game, you can have multiple different areas, each with their own resources, grinds and crafts. To add a new area, you have to use the `addArea` function:

```js
addArea("c",                                        // Function for adding a new area. The "c" is the area ID. This should be unique for all the areas in your game!
    {
        name: "City State",                         // The name of the area.
        image: "images/areas/cityState.png",        // The background image of the area.
        unlocked: true,                             // Should the area be unlocked from the beginning? The first area should always be unlocked!
        updateWhileUnactive: true,                  // Tells the area if its grinds and crafts should update while you're in another area.

        grinds: [                                   // List of all the different grinds in this area.
                                                            
        ],

        crafts: [                                   // List of all the different crafts in this area.
                                                            
        ],

        update(diff) {                              // Function that will be run every frame. Useful for more advanced games.
                                                            
        },
    }
);
```

Individual areas can have these properties:

 - name: **optional**. The name of the area.
   - If not set, no name will be shown.
 - image: **optional**. A link/path to the background image of the area. Usually `"images/areas/imageName.png"`.
   - Images should generally be either 250x45 pixels or 500x90 pixels in size (Though you can also use other sizes with the same ratio if you want).
   - If not set or set to `""` or `"blank"`, it will show a blank image.
 - unlocked: **optional**. Either true or false. If true, the area will be unlocked when you start the game. The first area should always be unlocked!
   - Will be set to true by default.
 - updateWhileUnactive: **optional**. Either true or false. If true, automatic grinds and crafts in this area will still work when you are in another area.
   - Will be set to true by default.
 - grinds: **optional**. A list of all the different grinds in this area. For more information, go to the [grinds](grinds.md) docs.
 - crafts: **optional**. A list of all the different crafts in this area. For more information, go to the [crafts](crafts.md) docs.
 - update(diff): **optional**. A function that will be run every frame. Useful for advanced games with changing variables.