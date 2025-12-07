ServerEvents.tags('item', event => {
    event.add('c:dusts', 'oritech:iron_dust')
    event.add('c:dusts', 'oritech:copper_dust')
    event.add('c:dusts', 'oritech:gold_dust')
    event.add('c:dusts', 'oritech:quartz_dust')

    // #region Ball Lids
    const TIER_1_BALL_LIDS = [
        'cobblemore_lib:red_ball_lid',
        'cobblemore_lib:azure_ball_lid',
        'cobblemore_lib:verdant_ball_lid',
        'cobblemore_lib:roseate_ball_lid',
        'cobblemore_lib:white_ball_lid',
        'cobblemore_lib:citrine_ball_lid',
    ];
    for (let tier_1_ball of TIER_1_BALL_LIDS) {
        event.add('kubejs:tier_1_ball_lid', tier_1_ball)
    }

})