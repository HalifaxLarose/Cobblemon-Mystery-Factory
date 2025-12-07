ServerEvents.recipes(event => {
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