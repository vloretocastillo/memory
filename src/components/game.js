import React from 'react';
import Card from './card'
import { cards } from '../cards'

class Game extends React.Component {
    state = {
        cards: cards,
        currentFlipped : 0
    }

    generateCards = (cards) => [...cards.map((el, ind)=> <Card id={ ind + 'A' } addFlipped={this.addFlipped} key={ind + '0'} value={el}/> ), cards.map((el, ind)=> <Card addFlipped={this.addFlipped} id={ ind + 'B' } key={ind} value={el}/> )]
    
    shuffle = (arr) => arr.sort(() => { return 0.5 - Math.random() })

    addFlipped = () => {
        // const flipped = document.getElementsByClassName('flipped')
        // console.log('there are: ', flipped)
        this.setState({ currentFlipped : this.state.currentFlipped + 1})
        console.log('this.state.currentFlipped', this.state.currentFlipped)
    }

    render () {
        return (
            <div className='game'> 
                {this.shuffle(this.generateCards(this.state.cards))}
            </div>
        )
    }
}

export default Game;