// Listen to item registry event
StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('cog_teeth')
  event.create('example_item')

  event.create('enderdragon_treasure')
  event.create('small_enderdragon_essence')
  event.create('enderdragon_essence')
  event.create('powerful_enderdragon_essence')
  event.create('dormant_eye_of_ender')
})