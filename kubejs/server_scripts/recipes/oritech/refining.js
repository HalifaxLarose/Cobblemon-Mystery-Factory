ServerEvents.recipes(event => {
  // event.custom({
  //   "type": "oritech:refinery",
  //   "fluidInput": {
  //     "amount": 1000,
  //     "fluid": "createdieselgenerators:crude_oil"
  //   },
  //   "time": 60,
  //   "fluidOutputs": [
  //     { "fluid": "kubejs:industrial_crude_oil", "amount": 750, },
  //     { "fluid": "oritech:still_sulfuric_acid", "amount": 250, },
  //   ],
  //   "ingredients": [],
  //   "results": []
  // })

  event.custom({
    "type": "oritech:refinery",
    "fluidInput": {
      "amount": 80,
      "fluid": "oritech:still_sulfuric_acid"
    },
    "ingredients": [
      {
        "item": "oritech:iron_dust",
      }
    ],
    "time": 15,
    "fluidOutputs": [
      { "fluid": "kubejs:red_slurry", "amount": 100, },
    ],
    "results": []
  })

})