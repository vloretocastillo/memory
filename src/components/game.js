import React from 'react';
import Card from './card'
import { cards } from '../cards'

class Game extends React.Component {
    state = {
        cards: cards
    }

    generateCards = (cards) => [...cards.map((el, ind)=> <Card key={ind + '0'} value={el}/> ), cards.map((el, ind)=> <Card key={ind} value={el}/> )]
    
    shuffle = (arr) => arr.sort(() => { return 0.5 - Math.random() })

    render () {
        return (
            <div className='game'> 
                {this.shuffle(this.generateCards(this.state.cards))}
            </div>
        )
    }
}

export default Game;