ServerEvents.recipes(event => {
    const replacementInput = [
        {filter: {}, original: "", replaceWith:""}
    ]

    const replacementOutput = [
        {filter: {}, original: "", replaceWith:""}
    ]

    replacementInput.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.original, recipe.replaceWith)
    })


    replacementOutput.forEach((recipe) => {
        event.replaceOutput(recipe.filter, recipe.original, recipe.replaceWith)
    })
})
