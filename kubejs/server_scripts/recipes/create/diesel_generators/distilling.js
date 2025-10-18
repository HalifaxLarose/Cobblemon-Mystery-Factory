ServerEvents.recipes(event => {
  event.custom({
	"type": "createdieselgenerators:distillation",
	"ingredients": [{
        type: "fluid_stack",
        "fluid": "kubejs:industrial_crude_oil",
        "amount": 100
	}],
    "heat_requirement": "heated",
    "processingTime": 60,
	"results":  [
        { "id": "kubejs:heavy_residual_crude_oil", "amount": 30, },
        { "id": "createdieselgenerators:diesel", "amount": 20, },
        { "id": "kubejs:kerosene", "amount": 25, },
        { "id": "oritech:still_naphtha", "amount": 30, },
        { "id": "kubejs:light_petroleum_gas", "amount": 40, },
    ],
  })

  event.custom({
	"type": "createdieselgenerators:distillation",
	"ingredients": [{
        type: "fluid_stack",
      	"fluid": "kubejs:heavy_residual_crude_oil",
        "amount": 100
	}],
    "heat_requirement": "superheated",
    "processingTime": 40,
	"results":  [
        { "id": "kubejs:bitumen", "amount": 40, },
        { "id": "oritech:still_heavy_oil", "amount": 40, },
        { "id": "createdieselgenerators:diesel", "amount": 30, },
        { "id": "kubejs:kerosene", "amount": 20, },
        { "id": "oritech:still_naphtha", "amount": 10, },
        { "id": "kubejs:light_petroleum_gas", "amount": 5, },
    ],
  })
})