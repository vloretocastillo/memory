import React from 'react';

class Card extends React.Component {
    state = {

    }

    handleClick = (e) => {
        console.log('reveal', e.target.className)
    }

     /* .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    } */

    render () {
        return (
            <div className='test' onClick={ (e)=> this.handleClick(e) }>
                <div  className="flip-card card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        </div>
                        <div className="flip-card-back">
                            {this.props.value}
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Card;