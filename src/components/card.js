import React from 'react';

class Card extends React.Component {
    state = {
    }


    handleClick = (e) => {
        const node = document.getElementById(this.props.id)
        node.classList.add('flipped')
    }

    render () {
        return (
            <div onClick={ (e)=> this.handleClick(e) }>
                <div  className="flip-card card">
                    <div id={this.props.id} className="flip-card-inner">
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