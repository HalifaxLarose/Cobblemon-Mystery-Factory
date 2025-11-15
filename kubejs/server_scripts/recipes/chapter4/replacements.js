ServerEvents.recipes(event => {
    const replacementInput = [
        { filter: {output: 'oritech:reactor_absorber_port'}, original: "minecraft:hopper", replaceWith: "create:smart_chute" },
        { filter: {output: 'oritech:reactor_fuel_port'}, original: "minecraft:hopper", replaceWith: "create:smart_chute" },
        { filter: {output: 'oritech:reactor_energy_port'}, original: "oritech:energy_pipe", replaceWith: "oritech:superconductor" },
        { filter: {output: 'oritech:reactor_energy_port'}, original: "minecraft:iron_ingot", replaceWith: "oritech:steel_ingot" },
        { filter: {output: 'oritech:reactor_controller'}, original: "oritech:processing_unit", replaceWith: "northstar:circuit" },

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