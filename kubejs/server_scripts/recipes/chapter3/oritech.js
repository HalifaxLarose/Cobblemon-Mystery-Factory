ServerEvents.recipes(event => {
    assembler_recipes(event);

    // Further oil refining
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

    // Redstone automation
    event.custom({

        "type": "oritech:centrifuge_fluid",
        "fluidInput": {
            "amount": 500,
            "fluid": "kubejs:red_slurry"
        },
        "fluidOutputs": [{
            'amount': 500,
            fluid: 'minecraft:water',
        }],
        "ingredients": [
            {
                "tag": "minecraft:sand"
            }
        ],
        "results": [
            {
                "count": 20,
                "id": "minecraft:redstone"
            }
        ],
        "time": 60

    })
    event.custom({
        "type": "oritech:refinery",
        "fluidInput": {
            "amount": 80,
            "fluid": "oritech:still_sulfuric_acid"
        },
        "ingredients": [
            {
                "item": "oritech:iron_dust",
            }
        ],
        "time": 15,
        "fluidOutputs": [
            { "fluid": "kubejs:red_slurry", "amount": 100, },
        ],
        "results": []
    })
})

function assembler_recipes(event) {
    // A LOT of assembler re
    const CREATE_ASSEMBLY_TIME = 32;
    const CREATE_ASSEMBLY_BONUS_RATIO = 3;

    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            {
                "item": "create:brass_ingot"
            },
            {
                "item": "create:iron_sheet"
            },
            {
                "item": "createaddition:copper_spool"
            },
            {
                "item": "createaddition:copper_spool"
            }
        ],
        "results": [
            {
                "count": 2,
                "id": "oritech:motor"
            }
        ],
        "time": 48
    })

    // Create Integration
    // These three I realized would be better as sequenced assembly

    // event.custom({
    //     "type": "oritech:assembler",
    //     "ingredients": [
    //         { "item": "create:andesite_alloy" },
    //     ],
    //     "results": [
    //         {
    //             "count": 12,
    //             "id": "create:shaft"
    //         }
    //     ],
    //     "time": CREATE_ASSEMBLY_TIME
    // })
    // event.custom({
    //     "type": "oritech:assembler",
    //     "ingredients": [
    //         { "item": "create:shaft" },
    //         { "tag": "minecraft:planks" },
    //     ],
    //     "results": [
    //         {
    //             "count": CREATE_ASSEMBLY_BONUS_RATIO,
    //             "id": "create:cogwheel"
    //         }
    //     ],
    //     "time": CREATE_ASSEMBLY_TIME
    // })
    // event.custom({
    //     "type": "oritech:assembler",
    //     "ingredients": [
    //         { "item": "create:cogwheel" },
    //         { "tag": "minecraft:planks" },
    //     ],
    //     "results": [
    //         {
    //             "count": CREATE_ASSEMBLY_BONUS_RATIO,
    //             "id": "create:large_cogwheel"
    //         }
    //     ],
    //     "time": CREATE_ASSEMBLY_TIME
    // })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:andesite_casing" },
            { "item": "create:cogwheel" },
            { "item": "create:cogwheel" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:gearbox"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:andesite_casing" },
            { "item": "minecraft:iron_nugget" },
            { "item": "minecraft:iron_nugget" },
            { "item": "minecraft:iron_nugget" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:encased_chain_drive"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })

    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:shaft" },
            { "item": "create:andesite_casing" },
            { "item": "create:propeller" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:encased_fan"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:shaft" },
            { "item": "create:andesite_casing" },
            { "tag": "c:stone" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:millstone"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:cogwheel" },
            { "item": "create:andesite_casing" },
            { "item": "create:whisk" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:mechanical_mixer"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "createaddition:iron_rod" },
            { "item": "createaddition:iron_rod" },
            { "item": "minecraft:netherrack" },
            { "item": "create:iron_sheet" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:empty_blaze_burner"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:iron_sheet" },
            { "item": "minecraft:iron_ingot" },
            { "item": "create:iron_sheet" },
        ],
        "results": [
            {
                // I'm keeping this one specifically hard coded
                "count": 8,
                "id": "create:chute"
            }
        ],
        "time": 48
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:brass_sheet" },
            { "item": "create:chute" },
            { "item": "create:electron_tube" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:smart_chute"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "minecraft:compass" },
            { "item": "create:andesite_casing" },
        ],
        "results": [
            {
                "count": 2 * CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "dndesires:multimeter"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:copper_sheet" },
            { "item": "minecraft:copper_ingot" },
            { "item": "create:copper_sheet" },
        ],
        "results": [
            {
                "count": 12,
                "id": "create:fluid_pipe"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:cogwheel" },
            { "item": "create:fluid_pipe" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:mechanical_pump"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:brass_sheet" },
            { "item": "create:fluid_pipe" },
            { "item": "create:electron_tube" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:smart_fluid_pipe"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:copper_sheet" },
            { "item": "minecraft:barrel" },
            { "item": "create:copper_sheet" },
        ],
        "results": [
            {
                "count": 2 * CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:fluid_tank"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "minecraft:iron_bars" },
            { "item": "create:copper_casing" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:item_drain"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:copper_casing" },
            { "item": "minecraft:dried_kelp" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:spout"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:andesite_casing" },
            { "item": "minecraft:iron_ingot" },
            { "item": "create:andesite_alloy" },
            { "item": "create:andesite_alloy" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:mechanical_drill"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:andesite_casing" },
            { "item": "create:iron_sheet" },
            { "item": "create:iron_sheet" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:mechanical_saw"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:andesite_casing" },
            { "item": "create:electron_tube" },
            { "item": "create:brass_hand" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:deployer"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:andesite_casing" },
            { "item": "create:chute" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:portable_storage_interface"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:copper_casing" },
            { "item": "create:chute" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:portable_fluid_interface"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:andesite_casing" },
            { "item": "create:iron_sheet" },
            { "item": "create:andesite_alloy" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:mechanical_harvester"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:electron_tube" },
            { "item": "create:andesite_casing" },
            { "item": "create:crushing_wheel" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:mechanical_roller"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "minecraft:stick" },
            { "tag": "minecraft:wool" },
            { "item": "create:andesite_alloy" },
        ],
        "results": [
            {
                "count": 2 * CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:white_sail"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:precision_mechanism" },
            { "item": "create:brass_casing" },
            { "item": "create:shaft" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:rotation_speed_controller"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:precision_mechanism" },
            { "item": "create:brass_casing" },
            { "item": "create:brass_sheet" },
            { "item": "create:andesite_alloy" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:mechanical_arm"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:andesite_alloy" },
            { "item": "minecraft:dried_kelp" },
        ],
        "results": [
            {
                "count": 2 * CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:andesite_funnel"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:electron_tube" },
            { "item": "minecraft:dried_kelp" },
            { "item": "create:brass_ingot" },
        ],
        "results": [
            {
                "count": 2 * CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:brass_funnel"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:iron_sheet" },
            { "item": "minecraft:barrel" },
            { "item": "create:iron_sheet" },
        ],
        "results": [
            {
                "count": 2 * CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:item_vault"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:item_vault" },
            { "item": "minecraft:slime_ball" },
            { "item": "create:andesite_alloy" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:package_frogport"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:item_vault" },
            { "item": "minecraft:slime_ball" },
            { "item": "create:andesite_alloy" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "create:package_frogport"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })

    // Addons
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:brass_sheet" },
            { "tag": "c:glass_pane" },
        ],
        "results": [
            {
                "count": 32,
                "id": "create_hypertube:hypertube"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:smart_chute" },
            { "item": "minecraft:dried_kelp" },
            { "item": "create:cogwheel" },
        ],
        "results": [
            {
                "count": 2,
                "id": "create_hypertube:hypertube_entrance"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:precision_mechanism" },
            { "item": "create_hypertube:hypertube_entrance" },
            { "item": "create:cogwheel" },
        ],
        "results": [
            {
                "count": 4,
                "id": "create_hypertube:hypertube_accelerator"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
    event.custom({
        "type": "oritech:assembler",
        "ingredients": [
            { "item": "create:fluid_tank" },
            { "item": "create:mechanical_press" },
            { "tag": "c:storage_blocks/steel" },
        ],
        "results": [
            {
                "count": CREATE_ASSEMBLY_BONUS_RATIO,
                "id": "dndesires:hydraulic_press"
            }
        ],
        "time": CREATE_ASSEMBLY_TIME
    })
}