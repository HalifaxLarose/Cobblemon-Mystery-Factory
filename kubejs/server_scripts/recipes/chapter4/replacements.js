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
        
        { filter: {output: 'laserbridges:laser_source_block'}, original: 'minecraft:end_crystal', replaceWith: 'oritech:flux_gate'},
        { filter: {output: 'laserbridges:laser_source_block'}, original: 'minecraft:glass', replaceWith: 'oritech:enderic_lens'},
    ]

    const replacementOutput = [
    ]

    replacementInput.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.original, recipe.replaceWith)
    })


    replacementOutput.forEach((recipe) => {
        event.replaceOutput(recipe.filter, recipe.original, recipe.replaceWith)
    })

    // De-gate most eye of ender recipes
    const ENDER_EYE_DEGATES = [
        'minecraft:ender_chest',
        'ars_nouveau:scryers_crystal',
        'sophisticatedbackpacks:inception_upgrade',
        'sophisticatedbackpacks:xp_pump_upgrade',
        'wands:magic_bag_2',
        'oritech:arcane_augment_station',
        'mega_showdown:adrenalineorb',
        'storagedrawers:shroud_key',
        'minecraft:heart_of_the_sea',
        'exposure:interplanar_projector',
    ]

    for (let eye_degate of ENDER_EYE_DEGATES) {
        event.replaceInput({output: eye_degate},  'minecraft:ender_eye', 'minecraft:ender_pearl')
    }
})