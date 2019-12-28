import React from 'react';

class Card extends React.Component {
    state = {
    }

    render () {
        return (
            <div className='card'>
                {this.props.value}
            </div>
        )
    }
}

export default Card;