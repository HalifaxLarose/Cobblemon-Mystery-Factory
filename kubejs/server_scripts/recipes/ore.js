// I'm sorry Trash Panda but we launch in 24 hours and I just need this in one place
ServerEvents.recipes(event => {
    const ORE_PAIRS = [
        { source: 'iron', bonus: 'redstone', smod: 'minecraft', bmod: 'minecraft', special: true },
        { source: 'copper', bonus: 'gold', smod: 'minecraft', bmod: 'minecraft', special: false },
        { source: 'nickel', bonus: 'platinum', smod: 'oritech', bmod: 'oritech', special: false },
        { source: 'platinum', bonus: 'fluxite', smod: 'oritech', bmod: 'oritech', special: true },
        { source: 'gold', bonus: 'copper', smod: 'minecraft', bmod: 'minecraft', special: false },
        // {source: 'zinc', bonus: 'lapis_lazuli', smod: 'create', bmod: 'minecraft', special: true},
    ]


    for (let ore_pair of ORE_PAIRS) {
        event.remove({ id: `create:crushing/raw_${ore_pair.source}` })
        event.remove({ id: `oritech:foundry/alloy/gem/${ore_pair.source}` })
        event.remove({ id: `oritech:crushing/compat/create/${ore_pair.source}ingot` })
        event.recipes.create.crushing([
            `create:crushed_raw_${ore_pair.source}`,
            CreateItem.of('create:experience_nugget', 0.75),
            CreateItem.of(`oritech:small_${ore_pair.source}_clump`, 0.33)
        ],
            `${ore_pair.smod}:raw_${ore_pair.source}`
        )

        event.custom(
            {
                "type": "oritech:grinder",
                "fluidInput": {
                    "amount": 0,
                    "fluid": "minecraft:empty"
                },
                "fluidOutputs": [],
                "ingredients": [
                    {
                        "item": `create:crushed_raw_${ore_pair.source}`
                    }
                ],
                "results": [
                    {
                        "count": 1,
                        "id": `oritech:${ore_pair.source}_clump`
                    },
                    {
                        "count": 3,
                        "id": `oritech:small_${ore_pair.source}_clump`
                    },
                    {
                        "count": ore_pair.special ? 1 : 3,
                        "id": ore_pair.special ?
                            `${ore_pair.bmod}:${ore_pair.bonus}` :
                            `oritech:small_${ore_pair.bonus}_clump`
                    }
                ],
                "time": 140
            }
        )

        event.custom({
            "type": "oritech:pulverizer",
            "fluidInput": {
                "amount": 0,
                "fluid": "minecraft:empty"
            },
            "fluidOutputs": [],
            "ingredients": [
                {
                    "item": `create:crushed_raw_${ore_pair.source}`
                }
            ],
            "results": [
                {
                    "count": 1,
                    "id": `oritech:${ore_pair.source}_dust`
                },
                {
                    'count': 3,
                    'id': `oritech:small_${ore_pair.source}_dust`
                }
            ],
            "time": 120
        })


        event.custom(
            {
                "type": "oritech:refinery",
                "fluidInput": {
                    "amount": 250,
                    "fluid": "oritech:still_sheol_fire"
                },
                "fluidOutputs": [
                    {
                        "amount": 100,
                        "fluid": "minecraft:lava"
                    }
                ],
                "ingredients": [
                    {
                        "item": `create:crushed_raw_${ore_pair.source}`
                    }
                ],
                "results": [
                    {
                        "count": 2,
                        "id": `oritech:${ore_pair.source}_clump`
                    }
                ],
                "time": 80
            }
        )
    }

    event.remove({ id: 'oritech:grinder/ore/iron' })
    event.custom(
        {
            "type": "oritech:grinder",
            "fluidInput": {
                "amount": 0,
                "fluid": "minecraft:empty"
            },
            "fluidOutputs": [],
            "ingredients": [
                {
                    "tag": "minecraft:iron_ores"
                }
            ],
            "results": [
                {
                    "count": 2,
                    "id": "minecraft:raw_iron"
                },
                {
                    "count": 3,
                    "id": "minecraft:redstone"
                }
            ],
            "time": 140
        }
    )

    event.remove({ id: 'oritech:grinder/raw/iron' })
    /*
    event.custom({
        "type": "oritech:grinder",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "tag": "c:raw_materials/iron"
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "oritech:iron_clump"
            },
            {
                "count": 3,
                "id": "oritech:small_iron_clump"
            },
            {
                "count": 3,
                "id": "minecraft:redstone"
            }
        ],
        "time": 140
    })
    */
    event.remove({ id: 'oritech:centrifuge/clump/iron' })
    event.custom({
        "type": "oritech:centrifuge",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "tag": "c:clumps/iron"
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "oritech:iron_gem"
            },
            {
                "count": 1,
                "id": "minecraft:redstone"
            }
        ],
        "time": 100
    })

    // Sorry pandaaaa
    event.remove({ id: 'oritech:foundry/alloy/gem/iron' })
    event.recipes.create.milling(
        [
            'create_aquatic_ambitions:calcium_rich_powder', 
            CreateItem.of('create_aquatic_ambitions:calcium_rich_powder', 0.5),
            CreateItem.of('dndesires:lapis_lazuli_shard', 0.25)
        ],
         'minecraft:pointed_dripstone'
    )

})