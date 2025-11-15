ClientEvents.lang('en_us', event => {
  event.renameItem('northstar:iron_cogwheel', 'Steel Cogwheel') 
  event.renameBlock('northstar:iron_cogwheel', 'Steel Cogwheel') 
  event.renameItem('northstar:iron_large_cogwheel', 'Large Steel Cogwheel') 
  event.renameBlock('northstar:iron_large_cogwheel', 'Large Steel Cogwheel')
  event.renameBlock('dndesires:asphalt', 'Dyeable Asphalt')

  // Oil
  const CDG = 'createdieselgenerators'
  event.renameItem(`${CDG}:crude_oil`, "Dirty Crude Oil")
  event.renameItem(`${CDG}:crude_oil_bucket`, "Dirty Crude Oil Bucket")
  event.renameItem('oritech:still_heavy_oil', "Refined Heavy Oil")
  event.renameItem('oritech:still_heavy_oil_bucket', "Refined Heavy Oil Bucket")
})