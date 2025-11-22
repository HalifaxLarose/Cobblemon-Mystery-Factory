PlayerEvents.loggedIn(e => {
    if (!e.player.stages.has('started')) {
        e.player.give('ftbquests:book')
        e.player.stages.add('started')
    }
})