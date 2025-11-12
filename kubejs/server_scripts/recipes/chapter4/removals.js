ServerEvents.recipes(event => {
    const recipeRemove = [
        {output: "oritech:laser_arm_block"},
        {output: "minecraft:ender_eye", input: "minecraft:blaze_rod"},
        {id: "oritech:foundry/alloy/duratium",},
        {id: "oritech:atomicforge/duratium",},
    ]
    recipeRemove.forEach((recipe) => {
        event.remove(recipe)
    })
})