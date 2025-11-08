ServerEvents.recipes(event => {
    const CDG = "createdieselgenerators";
    const STEEL = "#c:ingots/steel";

    event.shaped(
        Item.of('oritech:assembler_block', 1),
        [
            "ABA",
            "CDC",
            "EFE"
        ],
        {
            A: "oritech:carbon_fibre_strands",
            B: "create:mechanical_arm",
            C: "create:mechanical_crafter",
            D: "oritech:adamant_ingot",
            E: "oritech:motor",
            F: "#oritech:plating"
        },
    );

    event.shaped(
        Item.of('createdieselgenerators:oil_scanner', 1),
        [
            "ABA",
            "CDC",
            " D "
        ],
        {
            A: "oritech:carbon_fibre_strands",
            B: "minecraft:compass",
            C: "oritech:processing_unit",
            D: "oritech:steel_ingot",
        },
    );

    event.shaped(
        Item.of(`${CDG}:distillation_controller`, 1),
        [
            'BBB',
            'ADA',
            'BBB'
        ],
        {
            A: 'oritech:processing_unit',
            D: 'minecraft:clock',
            B: STEEL
        }
    )

    oritechPlating(event);
    oilProcessing(event);

    recipeReplacements(event);
    recipeRemovals(event);
});

function oritechPlating(event) {
    // const STEEL = "#c:ingots/steel";
    // Sequenced assembly seems bugged; a tag makes it think its taking a fluid.)
    const STEEL = 'oritech:steel_ingot';

    // Sequenced Assembly examples.
        //     event.recipes.create.pressing(transitional, transitional),
        // event.recipes.create.deploying(transitional, [transitional, 'minecraft:hanging_roots']),
        // event.recipes.create.filling(transitional, [transitional, Fluid.of('minecraft:water', 420)]),
        // event.recipes.create.deploying(transitional, [transitional, 'minecraft:moss_carpet']),
        // event.recipes.create.cutting(transitional, transitional)
    


    // Iron plates
    const ironPlatingTransitional = 'kubejs:example_item';
    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('oritech:iron_plating_block')
        ],
        'create:andesite_casing',
        [
            event.recipes.create.deploying(ironPlatingTransitional, [ironPlatingTransitional, 'create:iron_sheet']),
            event.recipes.create.deploying(ironPlatingTransitional, [ironPlatingTransitional, STEEL]),
            event.recipes.create.pressing(ironPlatingTransitional, ironPlatingTransitional),
        ]
    )
    .transitionalItem(ironPlatingTransitional)
    .loops(2)
    // Note: there is no manual crafting for this item on purpose, unless I change my mind

    // Copper Plating
    const copperPlatingTransitional = 'kubejs:example_item'
    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('oritech:machine_plating_block')
        ],
        'create:copper_casing',
        [
            event.recipes.create.deploying(copperPlatingTransitional, [copperPlatingTransitional, STEEL]),
            event.recipes.create.pressing(copperPlatingTransitional, copperPlatingTransitional),
        ]
    )
    .transitionalItem(copperPlatingTransitional)
    .loops(3)
    // Manual
    event.shaped(
        Item.of('oritech:machine_plating_block', 1),
        [
            " S ",
            "SCS",
            "   "
        ],
        {
            S: STEEL,
            C: "create:copper_casing"
        },
    );


    // "Nickel" Plating Block
    const nickelPlatingTransitional = 'kubejs:example_item';
    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('oritech:nickel_plating_block')
        ],
        'create:brass_casing',
        [
            event.recipes.create.deploying(nickelPlatingTransitional, [nickelPlatingTransitional, STEEL]),
            event.recipes.create.deploying(nickelPlatingTransitional, [nickelPlatingTransitional, STEEL]),
            event.recipes.create.pressing(nickelPlatingTransitional, nickelPlatingTransitional),
        ]
    )
    .transitionalItem(nickelPlatingTransitional)
    .loops(1)
    // Manual
    event.shaped(
        Item.of('oritech:nickel_plating_block', 1),
        [
            "SCS",
        ],
        {
            S: STEEL,
            C: "create:brass_casing"
        },
    );


    // Carbon Plating Block - Shaped only
    event.shaped(
        Item.of('oritech:carbon_plating_block', 1),
        [
            "SC",
        ],
        {
            S: STEEL,
            C: "oritech:reinforced_carbon_sheet"
        },
    );
}   


function oilProcessing(event) {
    // Main distillation
    event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [{
            type: "fluid_stack",
            "fluid": "kubejs:industrial_crude_oil",
            "amount": 100
        }],
        "heat_requirement": "heated",
        "processingTime": 60,
        "results": [
            { "id": "kubejs:heavy_residual_crude_oil", "amount": 30, },
            { "id": "createdieselgenerators:diesel", "amount": 20, },
            { "id": "kubejs:kerosene", "amount": 25, },
            { "id": "oritech:still_naphtha", "amount": 30, },
            { "id": "kubejs:light_petroleum_gas", "amount": 40, },
        ],
    })

    event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [{
            type: "fluid_stack",
            "fluid": "kubejs:heavy_residual_crude_oil",
            "amount": 100
        }],
        "heat_requirement": "superheated",
        "processingTime": 40,
        "results": [
            { "id": "kubejs:bitumen", "amount": 40, },
            { "id": "oritech:still_heavy_oil", "amount": 40, },
            { "id": "createdieselgenerators:diesel", "amount": 30, },
            { "id": "kubejs:kerosene", "amount": 20, },
            { "id": "oritech:still_naphtha", "amount": 10, },
            { "id": "kubejs:light_petroleum_gas", "amount": 5, },
        ],
    })

    // Further refining
    event.custom({
        "type": "oritech:refinery",
        "fluidInput": {
            "amount": 1000,
            "fluid": "createdieselgenerators:crude_oil"
        },
        "time": 60,
        "fluidOutputs": [
            { "fluid": "kubejs:industrial_crude_oil", "amount": 750, },
            { "fluid": "oritech:still_sulfuric_acid", "amount": 250, },
        ],
        "ingredients": [],
        "results": []
    })


    // Carbon Gas
    event.custom({
        "type": "dndesires:hydraulic_compacting",
        "heat_requirement": "heated",
        "ingredients": [{
            "item": "minecraft:coal",
            "amount": 3
        }],
        "results": [{
            // type: "fluid_stack",
            id: "northstar:carbon",
            amount: 1000
        }]
    })
    event.custom({
        "type": "dndesires:hydraulic_compacting",
        "heat_requirement": "heated",
        "ingredients": [{
            "item": "northstar:moon_sand",
        }],
        "results": [{
            // type: "fluid_stack",
            id: "northstar:carbon",
            amount: 100
        }]
    })
    event.custom({
        "type": "dndesires:hydraulic_compacting",
        "heat_requirement": "heated",
        "ingredients": [{
            "item": "northstar:venus_gravel",
        }],
        "results": [{
            // type: "fluid_stack",
            id: "northstar:carbon",
            amount: 100
        }]
    })
    event.custom({
        "type": "dndesires:hydraulic_compacting",
        "heat_requirement": "superheated",
        "ingredients": [{
            "type": "fluid_tag",
            "fluid_tag": "c:biofuel",
            amount: 1000
        }],
        "results": [{
            // type: "fluid_stack",
            id: "northstar:carbon",
            amount: 500
        }]
    })
    event.custom({
        "type": "dndesires:hydraulic_compacting",
        "heat_requirement": "superheated",
        "ingredients": [{
            "type": "fluid_tag",
            "fluid_tag": "c:biodiesel",
            amount: 1000
        }],
        "results": [{
            // type: "fluid_stack",
            id: "northstar:carbon",
            amount: 500
        }]
    })

    // Cracking recipes
    event.custom({
        "type": "dndesires:hydraulic_compacting",
        "heat_requirement": "superheated",
        "ingredients": [
            {
                "type": "fluid_stack",
                "fluid": "oritech:still_heavy_oil",
                "amount": 100
            },
            {
                "tag": "minecraft:sand",
                count: 1
            }
        ],
        "results": [{
            id: "oritech:polymer_resin",
            count: 3
        }]
    })

    // Rocket Fuel
    event.custom({
        type: "create:mixing",
        "ingredients": [
            {
                "item": "northstar:sodium_catalyst",
            },
            {
                "type": "fluid_stack",
                "fluid": "northstar:carbon",
                "amount": 500,
            },
            {
                "type": "fluid_stack",
                "fluid": "kubejs:kerosene",
                "amount": 500,
            },
        ],
        "results": [{
            amount: 500,
            id: "northstar:hydrocarbon"
        }],
        "heat_requirement": "superheated",
    });
}

function recipeReplacements(event) {
    const CDG = "createdieselgenerators";
    const STEEL = "#c:ingots/steel";
    // #oritech:plating

    const replacementInput = [
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

    replacementInput.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.original, recipe.replaceWith)
    })

}

function recipeRemovals(event) {
    const recipeRemove = [
        { id: "northstar:mixing/hydrocarbon_from_carbon" },
        { id: "oritech:pulverizer/pearl_enderic" },
    ]

    recipeRemove.forEach((recipe) => {
        event.remove(recipe)
    })
}