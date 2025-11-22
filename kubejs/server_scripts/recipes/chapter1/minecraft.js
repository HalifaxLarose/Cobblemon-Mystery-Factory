ServerEvents.recipes(event => {
    event.shaped(
        Item.of("ccbr:integrated_circuit", 1),
        [
            " L ",
            "RCR",
            "GGG"
        ],
        {
            L:"ccbr:lapis_sheet",
            R:"createaddition:copper_wire",
            C:"ccbr:basic_integrated_circuit",
            G:"minecraft:gold_nugget"
        }
    )

    // Global replace won't fix these recipes :/
    event.shaped(
        Item.of("computercraft:turtle_advanced", 1),
        [
            "ABA",
            "ACA",
            " D "
        ],
        {
            A: "minecraft:gold_ingot",
            B: "minecraft:gold_block",
            C: "computercraft:turtle_normal",
            D: "ccbr:integrated_circuit"
        }
    )
    event.shaped(
        Item.of("computercraft:turtle_advanced", 1),
        [
            "AAA",
            "ABA",
            "ACA"
        ],
        {
            A: "minecraft:gold_ingot",
            B: "computercraft:computer_advanced",
            C: "#c:chests/wooden"
        }
    )
})