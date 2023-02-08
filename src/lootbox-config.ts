export type LootboxConfig = {
    outfits: Outfit[]
}

export type Outfit = {
    name: string;
    imageUrl: string;
    hubUrl: string;
    rarity: string;
    weight: number;
};

export const getConfig = () => {
    return {
        "outfits": [
            {
                "name": "Test 1",
                "imageUrl": "Mask1.png",
                "hubUrl": "Back in hub with the mask 1.png",
                "rarity": "legendary",
                "weight": 1
            },
            {
                "name": "Test 2",
                "imageUrl": "Mask 2.png",
                "hubUrl": "Back in hub with the mask 2.png",
                "rarity": "common",
                "weight": 3
            },
            {
                "name": "Test 3",
                "imageUrl": "Mask 3.png",
                "hubUrl": "Back in hub with the mask 3.png",
                "rarity": "common",
                "weight": 3
            },
            {
                "name": "Test 4",
                "imageUrl": "Mask 4.png",
                "hubUrl": "Back in hub with the mask 4.png",
                "rarity": "common",
                "weight": 3
            },
            {
                "name": "Test 5",
                "imageUrl": "Mask 5.png",
                "hubUrl": "Back in hub with the mask 5.png",
                "rarity": "common",
                "weight": 4
            }
        ]
    }
}