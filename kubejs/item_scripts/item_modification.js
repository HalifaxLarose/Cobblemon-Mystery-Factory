ItemEvents.modification(event => {
    const ONE_BURN_ITEM = 1600 / 8 // Coal's burn rate divided by 8

    event.modify('kubejs:butane_bucket', item => {
        item.burnTime = ONE_BURN_ITEM*120
    })

})