ServerEvents.recipes(event => {
    const recipeRemove = [
        // Replace this with a buffed recipe
        {input: "minecraft:gravel", type: "create:splashing"},

        // Degate ComputerCraft
        {id: "ccbr:mechanical_crafting/integrated_circuit"},
    ]
    recipeRemove.forEach((recipe) => {
        event.remove(recipe)
    })
})