ServerEvents.recipes(event => {
    event.custom({
        "type":"createaddition:rolling",
        "ingredients": [{
            "item": "minecraft:dried_kelp_block"
        }],
        "results": [{
            "id": "create:belt_connector",
            "count": 2
        }]
    })
})