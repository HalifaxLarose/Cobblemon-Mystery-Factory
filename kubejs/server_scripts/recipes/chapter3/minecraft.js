ServerEvents.recipes(event => {
    const CDG = "createdieselgenerators";
    const STEEL = "#c:ingots/steel";
    const TITANIUM = "northstar:titanium_ingot"
    const ORI_PLATING = '#oritech:plating'
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

    // Plating & Machine blocks
    event.shaped(
        Item.of('oritech:iron_plating_block', 1),
        [
            " S ",
            "SCS",
            " S "
        ],
        {
            S: STEEL,
            C: "create:andesite_casing"
        },
    );
    event.shaped(
        Item.of('oritech:iron_plating_block', 8),
        [
            " S ",
            "SCS",
            " S "
        ],
        {
            S: TITANIUM,
            C: "create:andesite_casing"
        },
    );
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
    event.shaped(
        Item.of('oritech:machine_plating_block', 8),
        [
            " S ",
            "SCS",
            "   "
        ],
        {
            S: TITANIUM,
            C: "create:copper_casing"
        },
    );
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
    event.shaped(
        Item.of('oritech:nickel_plating_block', 8),
        [
            "SCS",
        ],
        {
            S: TITANIUM,
            C: "create:brass_casing"
        },
    );
    event.shaped(
        Item.of('oritech:carbon_plating_block', 8),
        [
            "SC",
        ],
        {
            S: TITANIUM,
            C: "oritech:reinforced_carbon_sheet"
        },
    );
    event.shaped(
        'oritech:machine_extender',
        [
            ' S ',
            'SPS',
            ' S ',
        ], {
            S: 'oritech:plastic_sheet',
            P: ORI_PLATING
        }
    )



    event.shapeless(
        Item.of('dndesires:asphalt', 1), // arg 1: output
        [
            'createdieselgenerators:asphalt_block',
        ]
    )
    event.shapeless(
        Item.of('createdieselgenerators:asphalt_block', 1), // arg 1: output
        [
            'dndesires:asphalt',
        ]
    )
})