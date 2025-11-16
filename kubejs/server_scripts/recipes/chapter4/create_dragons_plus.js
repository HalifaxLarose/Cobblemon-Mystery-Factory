ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "create_dragons_plus:ending",
            "ingredients": [
                {
                    "tag": "c:dusts"
                },
            ],
            "results": [
                {
                    "count": 1,
                    "id": "dragonsurvival:elder_dragon_dust"
                }
            ],
            "time": 50
        }
    )
    event.custom(
        {
            "type": "create_dragons_plus:ending",
            "ingredients": [
                {
                    "tag": "dragonsurvival:dragon_treasures"
                },
            ],
            "results": [
                {
                    "count": 1,
                    "id": "kubejs:enderdragon_treasure"
                }
            ],
            "time": 320
        }
    )
})