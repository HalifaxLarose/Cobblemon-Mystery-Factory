// Listen to the block tag event
ServerEvents.tags('block', event => {
  // Add tall grass to the climbable tag. This does make it climbable!
  event.add('create:non_movable', 'minecraft:bedrock')
  event.add('create:non_movable', 'minecraft:spawner')
  event.add('create:non_movable', 'minecraft:reinforced_deepslate')
  event.add('create:non_movable', /molten_vents:.*/)
})