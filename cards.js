let cards = [
    {
        name: 'bird',
        isOpen : false,
        foundMatch : false,
        id: 0
    },
    {
        name: 'bird',
        isOpen : false,
        foundMatch : false,
        id: 1
    },
    {
        name: 'cat',
        isOpen : false,
        foundMatch : false,
        id: 2    
    },
    {
        name: 'cat',
        isOpen : false,
        foundMatch : false,
        id: 3   
    },
    {
        name: 'blue',
        isOpen : false,
        foundMatch : false,
        id: 4   
    },
    {
        name: 'blue',
        isOpen : false,
        foundMatch : false,
        id: 5   
    },
    {
        name: 'lovely',
        isOpen : false,
        foundMatch : false,
        id: 6   
    },
    {
        name: 'lovely',
        isOpen : false,
        foundMatch : false,
        id: 7   
    },
    {
        name: 'tree',
        isOpen : false,
        foundMatch : false,
        id: 8 
    },
    {
        name: 'tree',
        isOpen : false,
        foundMatch : false,
        id: 9 
    },

    {
        name: 'home',
        isOpen : false,
        foundMatch : false,
        id: 10 
    },
    {
        name: 'home',
        isOpen : false,
        foundMatch : false,
        id: 11
    },

    
    // {
    //     name: 'cloud',
    //     isOpen : false,
    //     foundMatch : false    
    // },
    // {
    //     name: 'lovely',
    //     isOpen : false,
    //     foundMatch : false    
    // },
    // {
    //     name: 'leaf',
    //     isOpen : false,
    //     foundMatch : false    
    // },
    // {
    //     name: 'toy',
    //     isOpen : false,
    //     foundMatch : false    
    // }
]


// cards = [...cards, ...cards] 
const shuffle = (arr) => arr.sort(() => { return 0.5 - Math.random() })
cards = shuffle(cards)
// console.log(cards.length)

module.exports = { cards }