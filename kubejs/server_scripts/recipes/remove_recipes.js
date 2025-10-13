ServerEvents.recipes(event => {
    const recipeRemove = [
        {output: "cobblemon:healing_machine", input: "cobblemon:revive"},

        // Chapter 2
        {output: "oritech:steel_ingot", type: "create:mixing"},
        {type: "create:mechanical_crafting", output: "createaddition:alternator"},
        {type: "create:mechanical_crafting", output: "createaddition:electric_motor"},
        {type: "create:mechanical_crafting", output: "createaddition:tesla_coil"},
        {id: "oritech:pulverizer/coal"},
        {id: "oritech:foundry/alloy/steel"},
        {id: "oritech:crafting/alloy/steel"},
        {id: "oritech:foundry/alloy/electrum"},
        {id: "oritech:crafting/alloy/electrum"},
        {input:"minecraft:iron_ingot", output:"oritech:steel_ingot"},


        // Ore processing
        {id: "oritech:pulverizer/recycle/iron_dust"},
        {id: "oritech:pulverizer/dust/iron"},
        {id: "oritech:pulverizer/raw/iron"},

        // Naughty Oritech recipes who won't go through global ingredient replacements
        {id: "oritech:assembler/motor"},

    ]
    recipeRemove.forEach((recipe) => {
        event.remove(recipe)
    })


    //? ball eater :)
    //? Add balls to the list to EXCLUDE from being nuked
    const ballsToKeep = [
        "cobblemon:poke_ball",
        "cobblemon:citrine_ball",
        "cobblemon:verdant_ball",
        "cobblemon:azure_ball",
        "cobblemon:roseate_ball",
        "cobblemon:slate_ball",
        "cobblemon:premier_ball",
        "cobblemon:ancient_poke_ball",
        "cobblemon:ancient_citrine_ball",
        "cobblemon:ancient_verdant_ball",
        "cobblemon:ancient_azure_ball",
        "cobblemon:ancient_roseate_ball",
        "cobblemon:ancient_slate_ball",
        "cobblemon:ancient_ivory_ball",
        "cobblemon:safari_ball",
    ]

    const pattern = new RegExp(`^(?!(${ballsToKeep.join('|')})$)cobblemon:.*_ball$`);
    event.remove({ output: pattern, type: "minecraft:crafting_shaped"});
})