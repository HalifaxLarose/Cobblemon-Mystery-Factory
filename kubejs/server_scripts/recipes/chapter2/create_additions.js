ServerEvents.recipes(event => {
    event.custom({
        "type": "createaddition:charging",
        "ingredients": [{
            "item": "minecraft:gold_ingot",
        }],
        "results": [{
            "id": "createaddition:electrum_ingot",
            "amount": 1,
        }],
        "energy": 1000,
        "max_charge_rate": 1000
    })
})