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
    // {
    //     name: 'blue',
    //     isOpen : false,
    //     foundMatch : false    
    // },
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