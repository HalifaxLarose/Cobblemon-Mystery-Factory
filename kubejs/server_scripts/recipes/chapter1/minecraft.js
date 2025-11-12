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
})