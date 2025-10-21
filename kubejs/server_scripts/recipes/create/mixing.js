ServerEvents.recipes(event => {    
    // Chapter 2
    event.custom({
        type: "create:mixing",
        "ingredients": [
            {
                "item": "northstar:sodium_catalyst",
            },
            {
                "type": "fluid_stack",
                "fluid": "northstar:carbon",
                "amount": 500,
            },
            {
                "type": "fluid_stack",
                "fluid": "kubejs:kerosene",
                "amount": 500,
            },
        ],
        "results": [{
            amount: 500,
            id: "northstar:hydrocarbon"
        }],
        "heat_requirement": "superheated",
    });
    // Chapter 3
    event.custom({
        type: "create:mixing",
        "ingredients": [
            {
                "tag": "minecraft:sand",
            },
            {
                "tag": "c:dusts/quartz",
            },
        ],
        "results": [{
            count: 3,
            id: "oritech:raw_silicon"
        }],
    });
})