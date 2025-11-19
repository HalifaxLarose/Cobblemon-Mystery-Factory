ServerEvents.recipes(event => {
    const replacementInput = [
        { filter: {output: "trashcans:item_trash_can"}, original: "#c:stones", replaceWith: "create:andesite_alloy" },
        { filter: {output: "trashcans:liquid_trash_can"}, original: "#c:stones", replaceWith: "create:copper_sheet" },
        { filter: {output: "ccbr:lapis_sheet"}, original: "minecraft:lapis_block", replaceWith: "minecraft:lapis_lazuli" },

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