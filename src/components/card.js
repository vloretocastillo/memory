import React from 'react';

class Card extends React.Component {
    // state = {
    // }


    handleClick = (e) => {
        this.props.handleCardReveal( this.props.id )
    }

    // componentDidUpdate() {console.log('updated')}

    render () {

        // let classes = this.props.foundMatch || this.props.isRevealed ? "flip-card-inner flipped" : "flip-card-inner"
        let classes;
        if (this.props.foundMatch || this.props.isRevealed) {
            classes = "flip-card-inner flipped"
        } else {
            classes = "flip-card-inner"
        }
        // console.log(classes)
        // console.log(this.props.isRevealed )
        // console.log('from card:', this.props.index, this.props.value)

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