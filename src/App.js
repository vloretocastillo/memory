import React from 'react';
import './css/app.css';
import Game from './components/game'

class App extends React.Component {
    state = {
    }

    

    render () {
        return (
            <div className='main'>
                <Game />
            </div>
        )
    }
}

export default App;
