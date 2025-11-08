ServerEvents.recipes(event => {
    const CDG = "createdieselgenerators";
    const STEEL = "#c:ingots/steel";

    const replacementInput = [
        { filter: {}, original: "", replaceWith: "" },
        // Chapter 3
        {filter: {output: "dndesires:hydraulic_press"}, original: "minecraft:copper_block", replaceWith:"#c:storage_blocks/steel"},
        {filter: {output: "oritech:centrifuge_block"}, original: "minecraft:iron_block", replaceWith:"#c:storage_blocks/steel"},
        {filter: {output: "oritech:machine_extender"}, original: "oritech:duratium_ingot", replaceWith:"oritech:plastic_sheet"},
        {filter: {output: "oritech:machine_extender"}, original: "oritech:machine_core_2", replaceWith:"oritech:machine_core_3"},
        {filter: {input: "oritech:machine_fluid_addon"}, original: "createaddition:electrum_ingot", replaceWith:"oritech:reinforced_carbon_sheet"},

        // Pre-distillation
        { filter: { output: "dndesires:hydraulic_press" }, original: "minecraft:copper_block", replaceWith: "#c:storage_blocks/steel" },
        { filter: { output: "oritech:centrifuge_block" }, original: "minecraft:iron_block", replaceWith: "#c:storage_blocks/steel" },
        { filter: { output: "oritech:machine_extender" }, original: "oritech:duratium_ingot", replaceWith: "oritech:plastic_sheet" },
        { filter: { output: "oritech:machine_extender" }, original: "oritech:machine_core_2", replaceWith: "oritech:machine_core_3" },
        { filter: { output: "oritech:refinery_module_block"}, original: "oritech:small_tank_block", replaceWith: "create:fluid_tank"},
        { filter: { output: "oritech:refinery_module_block"}, original: "minecraft:copper_ingot", replaceWith: STEEL},
        
        // Post-Distillation
        { filter: { output: "oritech:machine_fluid_addon"}, original: "createaddition:electrum_ingot", replaceWith: "oritech:reinforced_carbon_sheet"},


        // Pumpjack recipes
        { filter: { output: `${CDG}:pumpjack_hole`}, original: "create:copper_casing", replaceWith: "#oritech:plating"},
        { filter: { output: `${CDG}:pumpjack_bearing`}, original: "create:zinc_ingot", replaceWith: STEEL},
        { filter: { output: `${CDG}:pumpjack_crank`}, original: "create:zinc_ingot", replaceWith: STEEL},
        { filter: { output: `${CDG}:pumpjack_crank`}, original: "create:iron_sheet", replaceWith: "create:sturdy_sheet"},
        { filter: { output: `${CDG}:pumpjack_head`}, original: "create:zinc_ingot", replaceWith: STEEL},
        { filter: { output: `${CDG}:pumpjack_head`}, original: "minecraft:dried_kelp", replaceWith: 'oritech:silicon'},
    ]

    const replacementOutput = [
    ]

    replacementInput.forEach((recipe) => {
    })


    replacementOutput.forEach((recipe) => {
    })
})