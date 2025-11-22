ServerEvents.recipes(event => {
    const recipeRemove = [
        {output: "oritech:laser_arm_block"},
        {output: "minecraft:ender_eye"},
        {id: "oritech:foundry/alloy/duratium",},
        {id: "oritech:foundry/alloy/energite",},
        {id: "oritech:atomicforge/duratium",},
        {id: 'oritech:assembler/reactorplatingalt'},
        {id: 'oritech:assembler/reactorplatingalt'},
        {id: 'oritech:mixing/compat/create/duratium'},
        {id: 'dndesires:seething/diamond_shard_from_coal_block'},

        {id: 'ars_elemental:glyph_homing_projectile'},
        {id: 'ars_nouveau:glyph_orbit'},
        {id: 'ars_nouveau:scryers_oculus'},
    ]
    recipeRemove.forEach((recipe) => {
        event.remove(recipe)
    })
})