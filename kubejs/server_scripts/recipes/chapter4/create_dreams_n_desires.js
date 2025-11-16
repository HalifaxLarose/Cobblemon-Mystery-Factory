ServerEvents.recipes(event => {

    // Note: hydraulic compacting does not support the
    // "count" field. We need to add enderdragon_treasure
    // 64 times; repeated inputs is how they do it in the actual
    // source code.
    let dragonIngredients = [];
    for (let i = 0; i < 8; ++i) {
        dragonIngredients.push({
            item: 'kubejs:enderdragon_treasure'
        });
    }
    dragonIngredients.push({
        "type": "fluid_stack",
        "fluid": "create_dragons_plus:dragon_breath",
        "amount": 1000
    })

    event.custom({
        "type": "dndesires:hydraulic_compacting",
        // "heat_requirement": "heated",
        "ingredients": dragonIngredients,
        "results": [{
            // type: "fluid_stack",
            id: "kubejs:enderdragon_essence",
            // id: 'minecraft:sand'
        }]
    })
})