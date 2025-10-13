ServerEvents.recipes(event => {
    event.custom({
        type: "oritech:pulverizer",
        ingredients: [
            {
                "item": "create:crushed_raw_iron"
            }
        ],
        processing_time: 120,
        results: [
            {"id": "oritech:iron_dust"},
            {"id": "oritech:small_iron_dust", count: 3},
        ]
    })
})