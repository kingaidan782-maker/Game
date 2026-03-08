// cards.js

// Card definitions
const cards = [
    {
        id: 1,
        name: 'Card A',
        stats: {
            attack: 50,
            defense: 30,
            speed: 20
        },
        level: 1,
        evolution: {
            evolvesTo: 'Card B',
            levelRequired: 10
        },
        progression: {
            experience: 0,
            maxLevel: 20,
            levelUpRewards: ['gold', 'newAbility']
        }
    },
    {
        id: 2,
        name: 'Card B',
        stats: {
            attack: 70,
            defense: 50,
            speed: 30
        },
        level: 10,
        evolution: {
            evolvesTo: 'Card C',
            levelRequired: 20
        },
        progression: {
            experience: 100,
            maxLevel: 30,
            levelUpRewards: ['gold', 'newAbility']
        }
    }
    // Add more cards as needed
];

export default cards;