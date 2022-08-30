const database = {
    fish: [
        {
            name: "Tony",
            species: "Blue Discus (Symphysodon aequifasciatus)",
            size: 8,
            food: ["blood worms", "plankton", "aquatic insects"],
            harvested: "Amazon River, Brazil",
            image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Discus.jpg"
        },
        {
            name: "Ralph",
            species: "Blood Parrot Cichlid (Amphilophus citrinellus x Vieja melanuru)",
            size: 7,
            food: ["blood worms", "brine shrimp"],
            harvested: "Taiwan",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/BloodParrot.jpg"
        },
        {
            name: "Moe",
            species: "Dwarf Pufferfish (Carinotetraodon travancoricus)",
            size: 2.5,
            food: ["blood worms", "snails"],
            harvested: "India",
            image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Dwarf_Puffer.jpg"
        },
        {
            name: "Curly",
            species: "Zebra Pleco (Hypancistrus zebra)",
            size: 2.5,
            food: ["blood worms", "brine shrimp"],
            harvested: "Amazon River, Brazil",
            image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Zebra_Plecos.jpg"
        },
        {
            name: "Larry",
            species: "Freshwater African Butterflyfish (Pantodon buchholzi)",
            size: 5,
            food: ["brine shrimp", "aquatic insects"],
            harvested: "Lake Chad, Congo River Basin, Africa",
            image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Freshwater_African_Butterflyfish.jpg"
        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}