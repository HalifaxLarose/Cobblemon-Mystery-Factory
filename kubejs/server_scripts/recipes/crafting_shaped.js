ServerEvents.recipes(event => {
    event.shaped(
        Item.of("cobblemon:healing_machine", 1),
        [
            "CGC",
            "IWI",
            "IDI"
        ],
        {
            C:"minecraft:copper_ingot",
            G:"minecraft:ghast_tear",
            I:"minecraft:iron_ingot",
            W:"create_cobblemon_potion:medicinal_brew_bucket",
            D:"minecraft:diamond"
        }
    )


    // Chapter 2
    event.shaped(
        Item.of('create:empty_blaze_burner'),
        [
            'AAA',
            'ABA',
            'CCC'
        ],
        {
            A: 'createaddition:iron_rod',
            B: 'minecraft:bricks',
            C: 'create:iron_sheet'
        }
    )
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
        Item.of("createaddition:tesla_coil", 1),
        [
            "ATA",
            "SBS",
            "CCC"
        ],
        {
            A: "create:brass_sheet",
            T: "create:electron_tube",
            S: "createaddition:copper_spool",
            B: "create:brass_casing",
            C: "createaddition:capacitor"
        }
    )
    
})



function lizardChanges(event) {

}