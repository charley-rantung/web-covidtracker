import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import NumberFormat from 'react-number-format'
import './styles.css'


const Global = () => {

    const [confirmed, setConfirmed] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [deaths, setDeaths] = useState(0);
    

    useEffect(() => {
        axios
        .get("https://covid19.mathdro.id/api")
        .then((response) => {
            setConfirmed(response.data.confirmed.value);
            setRecovered(response.data.recovered.value);
            setDeaths(response.data.deaths.value);
        });

    }, [])

    return (
        <div>
            <div className='report'>
                <div className='cards'>
                    <p>Confirmed</p>
                    <p><NumberFormat value={confirmed} displayType={'text'} thousandSeparator={true}/></p>
                </div>
                <div className='cards'>
                    <p>Recovered</p>
                    <p><NumberFormat value={recovered} displayType={'text'} thousandSeparator={true}/></p>
                </div>
                <div className='cards'>
                    <p>Deaths</p>
                    <p><NumberFormat value={deaths} displayType={'text'} thousandSeparator={true}/></p>
                </div>
            </div>
            <p>GLOBAL</p>
        </div>
    )
}

export default Global;
