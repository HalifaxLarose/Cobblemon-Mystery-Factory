ServerEvents.recipes(event => {
    // event.custom({
    //     type: "create:milling",
    //     ingredients: [
    //         {
    //             "item": "minecraft:ender_pearl"
    //         }
    //     ],
    //     processing_time: 120,
    //     results: [
    //         {
    //             "count": 8,
    //             "id": "oritech:enderic_compound"
    //         }
    //     ]
    // })
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


    // Plating
    const STEEL = 'oritech:steel_ingot';
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

    // "Brass" plating
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
})