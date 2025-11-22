ServerEvents.recipes(event => {
    // Not for private release
    // event.shaped(
    //     Item.of("cobblemon:healing_machine", 1),
    //     [
    //         "CGC",
    //         "IWI",
    //         "IDI"
    //     ],
    //     {
    //         C:"minecraft:copper_ingot",
    //         G:"minecraft:ghast_tear",
    //         I:"minecraft:iron_ingot",
    //         W:"create_cobblemon_potion:medicinal_brew_bucket",
    //         D:"minecraft:diamond"
    //     }
    // )

    const wires = ['copper', 'gold', 'electurm'];

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

    event.stonecutting('arts_and_crafts:white_chalk', 'regions_unexplored:chalk')
})