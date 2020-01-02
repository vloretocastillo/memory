import React from 'react';
import Card from './card'
import { cards } from '../cards'

class Game extends React.Component {
    state = {
        cards: cards
    }

    generateCards = (cards) => cards.map( (el, index)=> <Card handleCardReveal={ this.handleCardReveal } id={ el.id }  key={ index } value={ el.name } isRevealed={ el.isOpen } foundMatch={ el.foundMatch }/> )

    flipCardsBack = () => {
        let { cards } = this.state
        const revealedCards = cards.filter(el => (el.isOpen === true && el.foundMatch === false) )
        if (revealedCards.length === 2) { 
            let newCards = cards.map(el => {
                if( el.isOpen === true && el.foundMatch === false) el.isOpen = false 
                return el 
            })
            this.setState({ cards : newCards })
        }

    }

    openMe = (id) => {
        let { cards } = this.state
        cards = cards.map(el => {
            if (el.id === id) el.isOpen = true
            return el
        })
        this.setState({ cards : cards })
    }

    checkForMatch = () => {
        let { cards } = this.state
        const revealedCards = cards.filter(el => (el.isOpen === true && el.foundMatch === false) )
        if (revealedCards.length === 2) { 
           
            if ( this.isAMatch(revealedCards[0], revealedCards[1]) ) {
                this.handleMatch(revealedCards[0], revealedCards[1])
            } 
        }
    }

    handleCardReveal = (id) => {

        this.flipCardsBack()
        this.openMe(id)
        this.checkForMatch()
    }

    isAMatch = (cardA, cardB) => { return cardA.name === cardB.name ? true : false }

    handleMatch = (cardA, cardB) => {

        const { cards } = this.state
        cards[cards.indexOf(cardA)].foundMatch = true 
        cards[cards.indexOf(cardB)].foundMatch = true 

        this.setState({ cards : cards })
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