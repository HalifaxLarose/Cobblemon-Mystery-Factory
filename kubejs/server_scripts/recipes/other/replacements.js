ServerEvents.recipes(event => {
    const replacementInput = [
        { filter: {}, original: "", replaceWith: "" },

        // I think this is unification?
        {filter: {id:"create:crushing/copper_ore"}, original: "#minecraft:copper_ore", replaceWith: "minecraft:copper_ore"},
        {filter: {id:"create:crushing/deepslate_copper_ore"}, original: "#minecraft:copper_ore", replaceWith: "minecraft:deepslate_copper_ore"},

        // Electrum unification
        {filter: {output: "oritech:electrum_ingot"}, original: "oritech:electrum_ingot", replaceWith:"createaddition:electrum_ingot"},
        {filter: {input: "oritech:electrum_block"}, original: "oritech:electrum_block", replaceWith:"createaddition:electrum_block"},
        
        // Degating fun elytra upgrades, since otherwise its post game
        {filter: {input: "minecraft:elytra"}, original: "minecraft:elytra", replaceWith:"createcardboardthings:cardboard_elytra"},
        
    ]
    
    const replacementOutput = [
        {filter: {input: "createornithopterglider:elytra_piece"}, original: "minecraft:elytra", replaceWith:"createcardboardthings:cardboard_elytra"},
    ]

    replacementInput.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.original, recipe.replaceWith)
    })


    replacementOutput.forEach((recipe) => {
        event.replaceOutput(recipe.filter, recipe.original, recipe.replaceWith)
    })
})