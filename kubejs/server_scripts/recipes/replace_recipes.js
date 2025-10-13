ServerEvents.recipes(event => {
    const replacementInput = [
        {filter: {}, original: "", replaceWith:""},

        // Chapter 2
        {filter: {input: "oritech:magnetic_coil"}, original: "oritech:magnetic_coil", replaceWith:"createaddition:copper_spool"},
        {filter: {input: "oritech:electrum_ingot"}, original: "oritech:electrum_ingot", replaceWith:"createaddition:electrum_ingot"},
        {filter: {input: "oritech:electrum_block"}, original: "oritech:electrum_block", replaceWith:"createaddition:electrum_block"},
        {filter: {output: "oritech:motor"}, original: "#c:ingots/steel", replaceWith:"create:iron_sheet"},
        {filter: {output: "oritech:pulverizer_block"}, original: "#c:ingots/steel", replaceWith:"create:iron_sheet"},
        {filter: {input: "oritech:nickel_ingot", not: {output: /oritech:nickel_.*/}}, original: "oritech:nickel_ingot", replaceWith:"create:brass_ingot"},
    ]
    
    const replacementOutput = [
        {filter: {}, original: "", replaceWith:""},
        {filter: {output: "oritech:electrum_ingot"}, original: "oritech:electrum_ingot", replaceWith:"createaddition:electrum_ingot"},
        {filter: {input: "oritech:electrum_block"}, original: "oritech:electrum_block", replaceWith:"createaddition:electrum_block"},
    ]

    replacementInput.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.original, recipe.replaceWith)
    })


    replacementOutput.forEach((recipe) => {
        event.replaceOutput(recipe.filter, recipe.original, recipe.replaceWith)
    })
})
