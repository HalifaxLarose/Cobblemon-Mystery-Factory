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

    // Chapter 4
    event.shaped(
        Item.of("oritech:laser_arm_block", 1),
        [
            "PPE",
            "P  ",
            "AC "
        ],
        {
            P: "oritech:platinum_ingot",
            E: "oritech:enderic_lens",
            A: "create:mechanical_arm",
            C: "#oritech:plating",
        }
    )
    

})



function lizardChanges(event) {

}