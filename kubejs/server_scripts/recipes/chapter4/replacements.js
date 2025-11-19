ServerEvents.recipes(event => {
    const replacementInput = [
        { filter: {output: 'oritech:reactor_absorber_port'}, original: "minecraft:hopper", replaceWith: "create:smart_chute" },
        { filter: {output: 'oritech:reactor_fuel_port'}, original: "minecraft:hopper", replaceWith: "create:smart_chute" },
        { filter: {output: 'oritech:reactor_energy_port'}, original: "oritech:energy_pipe", replaceWith: "oritech:superconductor" },
        { filter: {output: 'oritech:reactor_energy_port'}, original: "minecraft:iron_ingot", replaceWith: "oritech:steel_ingot" },
        { filter: {output: 'oritech:reactor_controller'}, original: "oritech:processing_unit", replaceWith: "northstar:circuit" },
        { filter: {output: 'oritech:superconductor_duct_block'}, original: 'minecraft:stone', replaceWith: 'oritech:silicon'},

        { filter: {output: 'simpletms:tr_blank'}, original: 'minecraft:diamond', replaceWith: 'minecraft:redstone'},
        { filter: {output: 'simpletms:tr_blank'}, original: 'minecraft:iron_ingot', replaceWith: 'minecraft:diamond'},
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