ServerEvents.recipes(event => {
    
    const replacementInput = [
        // Replace
        {filter: {id:"create:crushing/copper_ore"}, original: "#minecraft:copper_ore", replaceWith: "minecraft:copper_ore"},
        {filter: {id:"create:crushing/deepslate_copper_ore"}, original: "#minecraft:copper_ore", replaceWith: "minecraft:deepslate_copper_ore"},
    ]

    const replacementOutput = [
        {filter: {}, original: "", replaceWith:""},
    ]

    replacementInput.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.original, recipe.replaceWith)
    })


    replacementOutput.forEach((recipe) => {
        event.replaceOutput(recipe.filter, recipe.original, recipe.replaceWith)
    })
})