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
})