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

    // #region Oritech Pipes
    // (Simple conveyors might as well be an Oritech mod)
    event.shaped(
        Item.of('belts:belt', 1),
        [
            'SBS'
        ],
        {
            S: STEEL,
            B: 'create:belt_connector'
        }
    )
    event.shaped(
        Item.of('belts:belt', 1),
        [
            'SBS'
        ],
        {
            S: STEEL,
            B: 'oritech:silicon_block'
        }
    )
    event.shaped(
        Item.of('belts:chute', 2),
        [
            'E',
            'S',
            'B'
        ],
        {
            E: 'create:electron_tube',
            S: STEEL,
            B: 'oritech:silicon'
        }
    )
    event.shaped(
        Item.of('belts:conveyor_support', 4),
        [
            'SBS',
            ' S '
        ],
        {
            S: STEEL,
            B: 'oritech:silicon'
        }
    )

    event.shaped(
        Item.of('oritech:item_pipe', 8),
        [
            'PPP',
            'SBS',
            'PPP',
        ],
        {
            P: 'oritech:plastic_sheet',
            S: 'oritech:silicon',
            B: 'oritech:steel_ingot'
        }
    )
    event.shaped(
        Item.of('oritech:transparent_item_pipe', 8),
        [
            'PPP',
            'SBS',
            'PPP',
        ],
        {
            P: 'oritech:plastic_sheet',
            S: 'oritech:silicon',
            B: '#c:glass_blocks'
        }
    )
    event.shaped(
        Item.of('oritech:framed_item_pipe', 8),
        [
            'PPP',
            'SBS',
            'PPP',
        ],
        {
            P: 'oritech:plastic_sheet',
            S: 'oritech:silicon',
            B: '#oritech:plating'
        }
    )
    event.shapeless(
        Item.of('oritech:framed_item_pipe', 8),
        [
          '#oritech:plating',
         '8x oritech:item_pipe',
        ]
    )
    event.shapeless(
        Item.of('oritech:item_pipe'),
        [ 'oritech:framed_item_pipe']
    )
    event.shaped(
        Item.of('oritech:fluid_pipe', 3),
        [
            ' A ',
            'BBB',
            ' C '
        ],
        {
            A: 'oritech:plastic_sheet',
            B: 'create:fluid_pipe',
            C: 'oritech:silicon'
        }
    )
    event.shaped(
        Item.of('oritech:fluid_pipe', 3),
        [
            ' C ',
            'BBB',
            ' A '
        ],
        {
            A: 'oritech:plastic_sheet',
            B: 'create:fluid_pipe',
            C: 'oritech:silicon'
        }
    )
    event.shaped(
        Item.of('oritech:item_filter_block', 1),
        [
            ' A ',
            ' B ',
            ' C '
        ],
        {
            A: 'oritech:plastic_sheet',
            B: 'oritech:processing_unit',
            C: '#oritech:plating'
        }
    )
    event.shaped(
        Item.of('oritech:item_pipe_duct_block', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'oritech:transparent_item_pipe',
            B: 'oritech:silicon',
            C: '#oritech:plating'
        }
    )
    event.shaped(
        Item.of('oritech:item_pipe_duct_block', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'oritech:item_pipe',
            B: 'oritech:silicon',
            C: '#oritech:plating'
        }
    )


    // #region Plating & Machine blocks
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


    // #region Oil Processing
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