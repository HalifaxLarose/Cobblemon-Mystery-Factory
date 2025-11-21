ClientEvents.lang('en_us', event => {
  event.renameItem('northstar:iron_cogwheel', 'Steel Cogwheel') 
  event.renameBlock('northstar:iron_cogwheel', 'Steel Cogwheel') 
  event.renameItem('northstar:iron_large_cogwheel', 'Large Steel Cogwheel') 
  event.renameBlock('northstar:iron_large_cogwheel', 'Large Steel Cogwheel')
  event.renameBlock('dndesires:asphalt', 'Dyeable Asphalt')

  // Oil
  // KubeJS won't recognize crude_oil when renaming as an item, and renameFluid doesn't seem to exist.
  // const CDG = 'createdieselgenerators'
  // event.renameFluid(`createdieselgenerators:crude_oil`, "Dirty Crude Oil")
  // event.renameItem(`createdieselgenerators:crude_oil_bucket`, "Dirty Crude Oil Bucket")
  // event.renameItem('oritech:still_heavy_oil', "Refined Heavy Oil")
  // event.renameItem('oritech:still_heavy_oil_bucket', "Refined Heavy Oil Bucket")
  event.renameItem('rctmod:trainer_card', 'Guild Directory')
  event.renameItem('cobblemon:poke_ball', 'Friend Ball');
  event.renameItem('cobblemon:friend_ball', 'Friendly Ball');
  event.renameItem('belts:chute', 'Steel Funnel')
  event.renameItem('belts:belt', 'Steel Conveyor Belt')
})