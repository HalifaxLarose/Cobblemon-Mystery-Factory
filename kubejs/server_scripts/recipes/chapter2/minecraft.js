ServerEvents.recipes(event => {
    const CDG = "createdieselgenerators";
    const STEEL = "#c:ingots/steel";

    event.shaped(
        Item.of('create:empty_blaze_burner'),
        [
            'AAA',
            'ABA',
            'CCC'
        ],
        {
            A: 'createaddition:iron_rod',
            B: 'minecraft:netherrack',
            C: 'create:iron_sheet'
        }
    )
    event.shaped(
        Item.of("createaddition:alternator", 1),
        [
            "ABA",
            "BCB",
            "ADA"
        ],
        {
            A: "create:iron_sheet",
            B: "createaddition:copper_spool",
            C: "create:shaft",
            D: "createaddition:capacitor"
        }
    )
    event.shaped(
        Item.of("createaddition:electric_motor", 1),
        [
            "ABA",
            "BCB",
            "ADA"
        ],
        {
            A: "create:brass_sheet",
            B: "createaddition:copper_spool",
            C: "create:shaft",
            D: "createaddition:capacitor"
        }
    )
    event.shaped(
        Item.of('createaddition:tesla_coil', 1),
        [
            "WWW",
            "WRW",
            "CCC"
        ],
        {
            W: "createaddition:copper_wire",
            R: "create:brass_casing",
            C: "createaddition:capacitor",
        },
    )
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
    event.shapeless(
        Item.of('create:sand_paper', 1), // arg 1: output
        [
            'minecraft:sand',
            'minecraft:sand',
            'minecraft:paper', 	       // arg 2: the array of inputs
        ]
    )
    event.shaped(
        Item.of('oritech:processing_unit', 1),
        [
            '  A',
            'BCB',
            'DDD'
        ],
        {
            A: 'create:electron_tube',
            B: 'createaddition:copper_wire',
            C: 'ccbr:lapis_sheet',
            D: 'createaddition:electrum_nugget'
        }
    )
})