import React from 'react';
import Card from './card'
import { cards } from '../cards'

class Game extends React.Component {
    state = {
        cards: cards
    }

    generateCards = (cards) => cards.map( (el, index)=> <Card handleCardReveal={ this.handleCardReveal } id={ el.id }  key={ index } value={ el.name } isRevealed={ el.isOpen } foundMatch={ el.foundMatch }/> )
    // shuffle = (arr) => arr.sort(() => { return 0.5 - Math.random() })
    // componentDidMount() {this.setState({ cards : this.shuffle(this.state.cards) }) }

    

    handleCardReveal = (id) => {
        let { cards } = this.state
        // console.log('card reveal', index)
        // console.log('all cards', cards)
        // console.log('index and value: ', index, cards[index])
        cards = cards.map(el => {
            if (el.id === id) el.isOpen = true
            return el
        })
        // cards[index].isOpen = true
        // console.log('despues de cambiarlo a open true: ', cards[index])

        this.setState({ cards : cards }, ()=> {

            // console.log('after seeting state')
            // //now the cards are all different 

            const { cards } = this.state
            // console.log('despues de setting the state', cards)
            const revealedCards = cards.filter(el => (el.isOpen === true && el.foundMatch === false) )
            // console.log('open:', cards.filter(el => el.isOpen === true))
            // console.log('open sin match:', revealedCards)
            // // console.log(revealedCards.length, ' revealedCards.length')
            if (revealedCards.length === 2) {
                // console.log('ahora son 2')
                console.log('is it a match?', this.isAMatch(revealedCards[0], revealedCards[1]))
                // this.isAMatch(revealedCards[0], revealedCards[1]) ? this.handleMatch(revealedCards[0], revealedCards[1]) : this.closeNonMatchedOnes()
            } else {
                console.log('not 2 yet')
            }
        })
       
    }

    isAMatch = (cardA, cardB) => { return cardA.name === cardB.name ? true : false }

    handleMatch = (cardA, cardB) => {
        console.log('INSIDE HANDLEMATCH', cardA, cardB )
        const { cards } = this.state
        cards[cardA.index].foundMatch = true
        cards[cardB.index].foundMatch = true
        this.setState({ cards : cards })
        // console.log('after seeting state')
    }

    closeNonMatchedOnes = () => {
        const { cards } = this.state
        let newCards = cards.map(el => {
            if( el.isOpen === true && el.foundMatch === false) el.isOpen = false 
            return el 
        })
        this.setState({ cards : newCards })

    }

    componentDidUpdate(prevProps, prevState) {
        // const { cards } = this.state
        // const revealedCards = cards.filter(el => el.isOpen === true && el.foundMatch === false )
        // if (revealedCards.length >= 2) {
        //     this.isAMatch(revealedCards[0], revealedCards[1]) ? this.handleMatch(revealedCards[0], revealedCards[1]) : this.closeNonMatchedOnes()
        // }    
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