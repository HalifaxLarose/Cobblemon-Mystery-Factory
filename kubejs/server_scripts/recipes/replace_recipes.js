ServerEvents.recipes(event => {
    const replacementInput = [
        {filter: {}, original: "", replaceWith:""},


        // Chapter 2
        {filter: {input: "oritech:magnetic_coil"}, original: "oritech:magnetic_coil", replaceWith:"createaddition:copper_spool"},
        {filter: {input: "oritech:electrum_ingot"}, original: "oritech:electrum_ingot", replaceWith:"createaddition:electrum_ingot"},
        {filter: {input: "oritech:electrum_block"}, original: "oritech:electrum_block", replaceWith:"createaddition:electrum_block"},
        {filter: {output: "oritech:motor"}, original: "#c:ingots/steel", replaceWith:"create:iron_sheet"},
        {filter: {output: "oritech:pulverizer_block"}, original: "#c:ingots/steel", replaceWith:"create:iron_sheet"},
        {filter: {input: "oritech:nickel_ingot", not: {output: /oritech:nickel_.*/}}, original: "oritech:nickel_ingot", replaceWith:"create:brass_ingot"},

        {filter: {output: "oritech:machine_fluid_addon"}, original: "oritech:fluid_pipe", replaceWith:"create:fluid_pipe"},
        {filter: {output: "oritech:steam_boiler_addon"}, original: "oritech:fluid_pipe", replaceWith:"create:fluid_pipe"},
        {filter: {output: "oritech:steam_engine_block"}, original: "oritech:basic_generator_block", replaceWith:"create:steam_engine"},
        {filter: {output: "oritech:lava_generator_block"}, original: "#oritech:plating", replaceWith: "create:copper_casing"},

        // Chapter 2B
        {filter: {output: "oritech:destroyer_block"}, original: "oritech:laser_arm_block", replaceWith:"minecraft:ender_pearl"},
        {filter: {output: "oritech:destroyer_block"}, original: "oritech:pulverizer_block", replaceWith:"createaddition:tesla_coil"},
        {filter: {output: "oritech:destroyer_block"}, original: "#oritech:plating", replaceWith:"create:copper_casing"},

        // Chapter 3
        {filter: {output: "dndesires:hydraulic_press"}, original: "minecraft:copper_block", replaceWith:"#c:storage_blocks/steel"},
        {filter: {output: "oritech:centrifuge_block"}, original: "minecraft:iron_block", replaceWith:"#c:storage_blocks/steel"},
        {filter: {output: "oritech:machine_extender"}, original: "oritech:duratium_ingot", replaceWith:"oritech:plastic_sheet"},
        {filter: {output: "oritech:machine_extender"}, original: "oritech:machine_core_2", replaceWith:"oritech:machine_core_3"},

        // Cross-chapter oritech
        {filter: {input: "oritech:machine_fluid_addon"}, original: "createaddition:electrum_ingot", replaceWith:"oritech:reinforced_carbon_sheet"},

    ]
    
    const replacementOutput = [
        {filter: {}, original: "", replaceWith:""},
        {filter: {output: "oritech:electrum_ingot"}, original: "oritech:electrum_ingot", replaceWith:"createaddition:electrum_ingot"},
        {filter: {input: "oritech:electrum_block"}, original: "oritech:electrum_block", replaceWith:"createaddition:electrum_block"},
    ]

    replacementInput.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.original, recipe.replaceWith)
    })


    replacementOutput.forEach((recipe) => {
        event.replaceOutput(recipe.filter, recipe.original, recipe.replaceWith)
    })
})
