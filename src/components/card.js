import React from 'react';

class Card extends React.Component {
    // state = {
    // }


    handleClick = (e) => {
        // const node = document.getElementById( this.props.index )
        // node.classList.add('flipped')
        console.log('clicked', this.props.index)
        this.props.handleCardReveal( this.props.index )

        
    }

    render () {

        let classes = this.props.isOpen || this.props.foundMatch ? "flip-card-inner flipped" : "flip-card-inner"

        return (
            <div onClick={ (e)=> this.handleClick(e) }>
                <div  className="flip-card card">
                    <div id={ this.props.index } className={classes}>
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