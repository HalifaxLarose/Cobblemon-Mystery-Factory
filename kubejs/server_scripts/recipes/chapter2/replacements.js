ServerEvents.recipes(event => {
    const replacementInput = [
        { filter: {}, original: "", replaceWith: "" },
        // Chapter 2
        {filter: {input: "oritech:magnetic_coil"}, original: "oritech:magnetic_coil", replaceWith:"createaddition:copper_wire"},
        {filter: {input: "oritech:electrum_ingot"}, original: "oritech:electrum_ingot", replaceWith:"createaddition:electrum_ingot"},
        {filter: {input: "oritech:electrum_block"}, original: "oritech:electrum_block", replaceWith:"createaddition:electrum_block"},
        {filter: {output: "oritech:motor"}, original: "#c:ingots/steel", replaceWith:"create:iron_sheet"},
        {filter: {output: "oritech:pulverizer_block"}, original: "#c:ingots/steel", replaceWith:"create:iron_sheet"},
        {filter: {input: "oritech:nickel_ingot", not: {output: /oritech:nickel_.*/}}, original: "oritech:nickel_ingot", replaceWith:"create:brass_ingot"},

        {filter: {output: "oritech:machine_fluid_addon"}, original: "oritech:fluid_pipe", replaceWith:"create:fluid_pipe"},
        {filter: {output: "oritech:steam_boiler_addon"}, original: "oritech:fluid_pipe", replaceWith:"create:fluid_pipe"},
        {filter: {output: "oritech:steam_engine_block"}, original: "oritech:basic_generator_block", replaceWith:"create:steam_engine"},
        {filter: {output: "oritech:lava_generator_block"}, original: "#oritech:plating", replaceWith: "create:copper_casing"},


        { filter: {output: "trashcans:energy_trash_can"}, original: "#c:stones", replaceWith: "create:brass_sheet" },


        // Chapter 2B
        {filter: {output: "oritech:destroyer_block"}, original: "oritech:laser_arm_block", replaceWith:"minecraft:ender_pearl"},
        {filter: {output: "oritech:destroyer_block"}, original: "oritech:pulverizer_block", replaceWith:"createaddition:tesla_coil"},
        {filter: {output: "oritech:destroyer_block"}, original: "#oritech:plating", replaceWith:"create:copper_casing"},

        {filter: {mod: "extra_gauges"}, original: "create:precision_mechanism", replaceWith: "oritech:processing_unit"},
        {filter: {output: "create:factory_gauge"}, original: "create:precision_mechanism", replaceWith: "oritech:processing_unit"},
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