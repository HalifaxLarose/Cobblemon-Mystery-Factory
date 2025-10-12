
ServerEvents.recipes(event => {
    const recipes = [
        {input:"minecraft:iron_ingot", output:"aether:zanite_gemstone"},
        {input:"minecraft:ancient_debris", output:"deep_aether:sterling_aercloud"},
        {input: "minecraft:ender_eye", output:"minecraft:spider_eye"},
        {input: "minecraft:emerald", output:"deep_aether:skyjade"},
        {input: "minecraft:diamond", output:"aether:enchanted_gravitite"},
        {input: "minecraft:coal", output:"aether:ambrosium_shard"},

    ]
    recipes.forEach((item) => {
        event.custom({
            type: "create:haunting",
            ingredients: [{ "item": item.input }],
            results: [{ "id": item.output }]
        })
    })
})