ServerEvents.recipes(event => {
    const CDG = "createdieselgenerators";
    const STEEL = "#c:ingots/steel";

    const replacementInput = [
        { filter: {}, original: "", replaceWith: "" },
        // Pre-distillation
        { filter: { output: "dndesires:hydraulic_press" }, original: "minecraft:copper_block", replaceWith: "#c:storage_blocks/steel" },
        { filter: { output: "oritech:centrifuge_block" }, original: "minecraft:iron_block", replaceWith: "#c:storage_blocks/steel" },
        { filter: { output: "oritech:machine_extender" }, original: "oritech:duratium_ingot", replaceWith: "oritech:plastic_sheet" },
        { filter: { output: "oritech:machine_extender" }, original: "oritech:machine_core_2", replaceWith: "oritech:machine_core_3" },
        { filter: { output: "oritech:refinery_module_block"}, original: "oritech:small_tank_block", replaceWith: "create:fluid_tank"},
        { filter: { output: "oritech:refinery_module_block"}, original: "minecraft:copper_ingot", replaceWith: STEEL},
        
        // Oil processing
        { filter: { mod: "createdieselgenerators"}, original: 'createdieselgenerators:crude_oil_bucket', replaceWith: "kubejs:bitumen_bucket"},
        { filter: { mod: "createdieselgenerators"}, original: "create:andesite_alloy", replaceWith: "oritech:steel_ingot" },
        
        // Post-Distillation
        { filter: { output: "oritech:machine_fluid_addon"}, original: "createaddition:electrum_ingot", replaceWith: "oritech:reinforced_carbon_sheet"},
        { filter: { output: "oritech:drone_port_block"}, original: "oritech:super_ai_chip", replaceWith: "northstar:circuit"},
        { filter: { output: "oritech:drone_port_block"}, original: "oritech:superconductor", replaceWith: "oritech:basic_battery"},
        { filter: { output: "oritech:drone_port_block"}, original: "oritech:advanced_computing_engine", replaceWith: "create:propeller"},
        { filter: { output: "northstar:titanium_ingot"}, original: "create:sturdy_sheet", replaceWith: "oritech:steel_ingot"},
        { filter: { mod: "northstar"}, original: 'create:industrial_iron_block', replaceWith: "oritech:steel_ingot"},

        // Circuitry
        { filter: { output: "northstar:targeting_computer"}, original: "create:iron_sheet", replaceWith: "oritech:plastic_sheet"},

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
        event.replaceInput(recipe.filter, recipe.original, recipe.replaceWith)
    })


    replacementOutput.forEach((recipe) => {
        event.replaceOutput(recipe.filter, recipe.original, recipe.replaceWith)
    })
})