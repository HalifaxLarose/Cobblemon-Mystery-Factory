ServerEvents.recipes(event => {
    const recipeRemove = [
        {output: "cobblemon:healing_machine", input: "cobblemon:revive"},
    ]
    recipeRemove.forEach((recipe) => {
        event.remove(recipe)
    })

    //? ball eater :)
    //? Add balls to the list to EXCLUDE from being nuked
    const ballsToKeep = [
        "cobblemon:poke_ball",
        "cobblemon:citrine_ball",
        "cobblemon:verdant_ball",
        "cobblemon:azure_ball",
        "cobblemon:roseate_ball",
        "cobblemon:slate_ball",
        "cobblemon:premier_ball",
        "cobblemon:ancient_poke_ball",
        "cobblemon:ancient_citrine_ball",
        "cobblemon:ancient_verdant_ball",
        "cobblemon:ancient_azure_ball",
        "cobblemon:ancient_roseate_ball",
        "cobblemon:ancient_slate_ball",
        "cobblemon:ancient_ivory_ball",
        "cobblemon:safari_ball",
    ]

    const pattern = new RegExp(`^(?!(${ballsToKeep.join('|')})$)cobblemon:.*_ball$`);
    event.remove({ output: pattern, type: "minecraft:crafting_shaped"});
})