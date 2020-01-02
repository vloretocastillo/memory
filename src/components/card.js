import React from 'react';

class Card extends React.Component {
   
    handleClick = (e) => {
        this.props.handleCardReveal( this.props.id )
    }


    render () {

        let classes;
        if (this.props.foundMatch || this.props.isRevealed) {
            classes = "flip-card-inner flipped"
        } else {
            classes = "flip-card-inner"
        }


        return (
            <div onClick={ (e)=> this.handleClick(e) }>
                <div  className="flip-card card">
                    <div id={ this.props.id } className={classes}>
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