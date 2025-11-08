ServerEvents.recipes(event => {
    const recipeRemove = [
        { id: "northstar:mixing/hydrocarbon_from_carbon" },
        { id: "oritech:pulverizer/pearl_enderic" },
    ]
    recipeRemove.forEach((recipe) => {
        event.remove(recipe)
    })
})