ServerEvents.recipes(event => {
    const recipeRemove = [
    ]
    recipeRemove.forEach((recipe) => {
        event.remove(recipe)
    })
})