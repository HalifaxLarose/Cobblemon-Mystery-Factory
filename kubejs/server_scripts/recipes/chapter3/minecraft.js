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
    
    // Plating
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
        Item.of('oritech:nickel_plating_block', 1),
        [
            "SCS",
        ],
        {
            S: STEEL,
            C: "create:brass_casing"
        },
    );

})