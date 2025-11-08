ServerEvents.recipes(event => {
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
})