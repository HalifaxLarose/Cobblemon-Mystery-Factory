ServerEvents.recipes(event => {
    const recipeRemove = [
        { id: "oritech:pulverizer/pearl_enderic" },
        { output: 'createdieselgenerators:oil_scanner'},

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