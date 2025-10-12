ServerEvents.recipes(event => {
    event.custom({
        type: "create:cutting",
        ingredients: [
            {
                "item": "minecraft:purpur_block"
            }
        ],
        processingTime: 200,
        results: [
            {
                "count": 2,
                "chance": 0.125,
                "id": "minecraft:shulker_shell"
            }
        ]
    })
})