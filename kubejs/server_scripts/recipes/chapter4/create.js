ServerEvents.recipes(event => {

    event.recipes.create.splashing(
        [
            CreateItem.of('oritech:platinum_nugget', 0.2),
            CreateItem.of('minecraft:glowstone_dust', 0.04),
            CreateItem.of('northstar:titanium_nugget', 0.04),
            CreateItem.of('northstar:lunar_sapphire_shard', 0.01)
        ],

        'northstar:moon_sand'
    )
    event.recipes.create.crushing(
        [
            CreateItem.of('northstar:moon_sand', 0.8),
            CreateItem.of('minecraft:tuff', 0.3),
            CreateItem.of('northstar:raw_glowstone_ore', 0.05),
            CreateItem.of('northstar:raw_titanium_ore', 0.02),
            CreateItem.of('oritech:raw_platinum', 0.01),
            CreateItem.of('pizzadelight:cheese', 0.005),
        ],
        'northstar:moon_stone'
    )

    event.recipes.create.crushing(
        [
            CreateItem.of('northstar:moon_sand', 0.5),
            CreateItem.of('minecraft:basalt', 0.3),
            CreateItem.of('northstar:raw_glowstone_ore', 0.1),
            CreateItem.of('oritech:raw_platinum', 0.025),
            CreateItem.of('northstar:raw_titanium_ore', 0.02),
            CreateItem.of('cobblemon:moon_stone', 0.01),
        ],
        'northstar:moon_deep_stone'
    )
})