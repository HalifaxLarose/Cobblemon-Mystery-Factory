ServerEvents.recipes(event => {
    const recipeRemove = [
        {output: "oritech:laser_arm_block"},
        {output: "minecraft:ender_eye", input: "minecraft:blaze_rod"},
    ]
    recipeRemove.forEach((recipe) => {
        event.remove(recipe)
    })
})