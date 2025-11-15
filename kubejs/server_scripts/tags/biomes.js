ServerEvents.tags('biome', event => {
    const REGIONS_UNEXPLORED_OIL_BIOMES = [
        "regions_unexplored:arid_mountains",
        "regions_unexplored:baobob_savanna",
        "regions_unexplored:barely_fields",
        "regions_unexplored:clover_plains",
        "regions_unexplored:grassland",
        "regions_unexplored:highland_fields",
        "regions_unexplored:hyacinth_deeps",
        "regions_unexplored:joshua_desert",
        "regions_unexplored:outback",
        "regions_unexplored:prairie",
        "regions_unexplored:pumpkin_fields",
        "regions_unexplored:rocky_meadow",
        "regions_unexplored:rocky_reef",
        "regions_unexplored:saguaro_desert"
    ];

    for (let oil_biome of REGIONS_UNEXPLORED_OIL_BIOMES) {
        event.add('createdieselgenerators:oil_biomes', oil_biome)
    }
    // All planets bonus oil!!
    event.add('createdieselgenerators:oil_biomes', /regions_unexplored:martian_.*/)
    event.add('createdieselgenerators:oil_biomes', /regions_unexplored:venus_.*/)
    event.add('createdieselgenerators:oil_biomes', /regions_unexplored:mercury_.*/)

    // Oil denials
    event.add('createdieselgenerators:deny_oil_biome', 'regions_unexplored:poppy_fields')
    event.add('createdieselgenerators:deny_oil_biome', /northstar:lunar_.*/)
    event.add('createdieselgenerators:deny_oil_biome', 'northstar:void')

})