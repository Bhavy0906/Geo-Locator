import React, { Component } from 'react'
import NavigateUser from './NavigateUser';
import './styles.css'

class Permission extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: ''
        }
    }
    

    errorMessage = () => {
        document.querySelector('.container').style.display = 'none'
        let p = document.createElement('p');
        p.innerHTML = 'PERMISSION DENIED';
        document.querySelector('.App').append(p);
    }

    loadPage = () => {
        document.querySelector('.container').style.display = 'none'
    this.setState({
        message : <NavigateUser/>
    })
    }

    render() {
        return (
            <>
            <div className = 'container'>
                <p id = 'text'>The site wants to use your location</p>
                <button onClick = {this.loadPage} className='button'>
                    Allow
                </button>
                <button onClick = {this.errorMessage} className = 'button'> 
                    Deny
                </button>
            </div>
            {this.state.message}
            </>
        )
    }
}

export default Permission
