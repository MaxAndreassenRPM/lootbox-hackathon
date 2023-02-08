export type LootboxConfig = {
    outfits: Outfit[]
}

export type Outfit = {
    name: string;
    imageUrl: string;
    rarity: string;
    weight: number;
};

export const getConfig = () => {
    return {
        "outfits": [
            {
                "name": "Test 1",
                "imageUrl": "/max.png",
                "rarity": "legendary",
                "weight": 1
            },
            {
                "name": "Test 2",
                "imageUrl": "/test-2.png",
                "rarity": "common",
                "weight": 3
            },
            {
                "name": "Test 3",
                "imageUrl": "/max.png",
                "rarity": "common",
                "weight": 3
            },
            {
                "name": "Test 4",
                "imageUrl": "/max.png",
                "rarity": "common",
                "weight": 3
            },
            {
                "name": "Test 5",
                "imageUrl": "/max.png",
                "rarity": "common",
                "weight": 4
            }
        ]
    }
}