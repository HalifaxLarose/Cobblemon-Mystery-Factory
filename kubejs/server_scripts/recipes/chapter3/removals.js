ServerEvents.recipes(event => {
    const recipeRemove = [
        { id: "oritech:pulverizer/pearl_enderic" },
        { output: 'createdieselgenerators:oil_scanner'},
        { output: 'createdieselgenerators:distillation_controller'},

        // Oritech stuff
        { output: 'oritech:machine_extender' },
        { output: 'oritech:assembler_block' },
        { output: /oritech:.*item_pipe$/},
        { output: /oritech:.*energy_pipe/},
        { output: 'oritech:fluid_pipe'},
        { output: 'oritech:item_filter_block'},
        { output: 'oritech:item_pipe_duct_block'},

        // Assembling stuff
        { id: 'oritech:assembler/plating'},
        { id: 'oritech:assembler/platingiron'},
        { id: 'oritech:assembler/platingnickel'},
        { id: 'oritech:assembler/magnet'},


        // Oil processing
        { id: "northstar:mixing/hydrocarbon_from_carbon" },
        { id: 'create:filling/blaze_cake'}, // Technically oil-related
        
        // platings
        { id: "oritech:crafting/plating" },
        { id: "oritech:crafting/iron" },
        { id: "oritech:crafting/nickel" },
        { id: "oritech:crafting/carbon" },

        // Circuitry
        { id: "northstar:sequenced_assembly/circuit" },
        { id: "oritech:assembler/processingunit" },
        { output: "dndesires:asphalt" },
        { type: 'create:mixing', output: 'createdieselgenerators:asphalt_block'}
    ]
    recipeRemove.forEach((recipe) => {
        event.remove(recipe)
    })
})