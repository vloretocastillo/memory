import React from 'react';
import Card from './card'
import { cards } from '../cards'

class Game extends React.Component {
    state = {
        cards: cards
        // currentFlipped : 0
    }

    componentDidMount() {
        this.setState({ cards : this.shuffle(cards) })
    }

    generateCards = (cards) => cards.map( (el, index)=> <Card handleCardReveal={ this.handleCardReveal } index={ index }  key={ index } value={ el.name } isRevealed={ el.isOpen } foundMatch={ el.foundMatch }/> )
    
    shuffle = (arr) => arr.sort(() => { return 0.5 - Math.random() })

    handleCardReveal = (index) => {
        console.log('second function')
        const { cards } = this.state
        cards[index].isOpen = true
        this.setState({ cards : cards })
    }

    isAMatch = (cardA, cardB) => { return cardA.name === cardB.name ? true : false }

    



    handleMatch = (cardA, cardB) => {
        const { cards } = this.state
        cards[cardA.index].foundMatch = true
        // cards[cardA.index].isOpen = false
        cards[cardB.index].foundMatch = true
        // cards[cardB.index].isOpen = false
        this.setState({ cards : cards })
    }

    closeNonMatchOnes = () => {
        const { cards } = this.state
        let newCards = cards.map(el => {
            if( el.isOpen === true && el.foundMatch === false) el.isOpen = false 
            return el 
        })
        this.setState({ cards : newCards })

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('did update')
        const { cards } = prevState
        const revealedCards = cards.filter(el => el.isOpen === true && el.foundMatch === false )
        if (revealedCards.length === 2) this.isAMatch(revealedCards[0], revealedCards[1]) ? this.handleMatch(revealedCards[0], revealedCards[1]) : this.closeNonMatchOnes()
    }

   
    render () {
        return (
            <div className='game'> 
                { this.generateCards(this.state.cards) }
            </div>
        )
    }
}

export default Game;