ServerEvents.recipes(event => {
    const replacementInput = [
        { filter: {output: "trashcans:item_trash_can"}, original: "#c:stones", replaceWith: "create:andesite_alloy" },
        { filter: {output: "trashcans:liquid_trash_can"}, original: "#c:stones", replaceWith: "create:copper_sheet" },

        // #region CCBR
        { filter: {output: "ccbr:lapis_sheet"}, original: "minecraft:lapis_block", replaceWith: "minecraft:lapis_lazuli" },
        { filter: {mod: "cccbridge"}, original: "create:rose_quartz_lamp", replaceWith: "minecraft:redstone_lamp" },
        { filter: {mod: "cccbridge"}, original: "create:precision_mechanism", replaceWith: "minecraft:comparator" },
        { filter: {mod: "cccbridge"}, original: "create:brass_hand", replaceWith: "minecraft:iron_ingot" },
        { filter: {mod: "computercraft"}, original: "create:precision_mechanism", replaceWith: "minecraft:comparator" },
        { filter: {mod: "computercraft"}, original: "create:brass_ingot", replaceWith: "minecraft:gold_ingot" },
        { filter: {mod: "computercraft"}, original: "minecraft:ender_eye", replaceWith: "minecraft:ender_pearl" },
        { filter: {mod: "computercraft"}, original: "create:electron_tube", replaceWith: "minecraft:redstone_torch" },

    ]

    const replacementOutput = [
    ]

    replacementInput.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.original, recipe.replaceWith)
    })


    replacementOutput.forEach((recipe) => {
        event.replaceOutput(recipe.filter, recipe.original, recipe.replaceWith)
    })
})