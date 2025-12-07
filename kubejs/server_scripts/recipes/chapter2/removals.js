ServerEvents.recipes(event => {
    const recipeRemove = [
        {id: 'create:crafting/kinetics/empty_blaze_burner'},
        {output: "oritech:steel_ingot", type: "create:mixing"},
        {type: "create:mechanical_crafting", output: "createaddition:alternator"},
        {type: "create:mechanical_crafting", output: "createaddition:electric_motor"},
        // {type: "create:mechanical_crafting", output: "createaddition:tesla_coil"},
        {id: "oritech:pulverizer/coal"},
        {id: "oritech:foundry/alloy/steel"},
        {id: "oritech:crafting/alloy/steel"},
        {id: "oritech:foundry/alloy/electrum"},
        {id: "oritech:crafting/alloy/electrum"},
        {input:"minecraft:iron_ingot", output:"oritech:steel_ingot"},
        {id: "oritech:crafting/electricfurnace"}, //Turning one of the earliest machines into one of the latest
        {output: 'create:rose_quartz'},


        // Ore processing
        {id: "oritech:pulverizer/recycle/iron_dust"},
        {id: "oritech:pulverizer/dust/iron"},
        {id: "oritech:pulverizer/raw/iron"},

        // Naughty Oritech recipes who won't go through global ingredient replacements
        {id: "oritech:assembler/motor"},
        {id: "oritech:foundry/alloy/adamant"},

        // Enforcing distinction between Oritech pulverizer and Create crushing wheel
        {id: "oritech:pulverizer/quartz"},
        {id: "oritech:pulverizer/recycle/4_quartz_dust"},
        {id: "oritech:pulverizer/recycle/2_quartz_dust"},
        {id: "createaddition:crushing/diamond"},
        {id: "create:crafting/materials/sand_paper"},
    ]
    recipeRemove.forEach((recipe) => {
        event.remove(recipe)
    })
})