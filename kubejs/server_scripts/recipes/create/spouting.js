
ServerEvents.recipes(event => {
    // Chapter 2
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:quartz"
            },
            {
                "type": "fluid_stack",
                "amount": 125,
                "fluid": "kubejs:red_slurry"
            }
        ],
        "results": [
            {
                "id": "create:rose_quartz"
            }
        ]
    });
})