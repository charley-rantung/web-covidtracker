import React from 'react'
import './styles.css'
import splash from '../../../src/assets/splash.png';

const Home = () => {
    return (
        <div className='ContainerHome'>
            <div className='bgHome'>
                <img src={splash} alt="Splash"/>
            </div>
        </div>
    )
}

export default Home;
