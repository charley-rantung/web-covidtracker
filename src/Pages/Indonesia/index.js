import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import NumberFormat from 'react-number-format'
import './styles.css'

const Indonesia = () => {
    const [confirmed, setConfirmed] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [deaths, setDeaths] = useState(0);
    

    useEffect(() => {
        axios
        .get("https://indonesia-covid-19.mathdro.id/api")
        .then((response) => {
            setConfirmed(response.data.jumlahKasus);
            setRecovered(response.data.sembuh);
            setDeaths(response.data.meninggal);
        });

    }, [])
    return (
        <div>
            <div className='reportIndo'>
                <div className='cards' style={{backgroundColor: '#f9d000'}}>
                    <p>Confirmed</p>
                    <p><NumberFormat value={confirmed} displayType={'text'} thousandSeparator={true}/></p>
                </div>
                <div className='cards' style={{backgroundColor: '#00f48e'}}>
                    <p>Recovered</p>
                    <p><NumberFormat value={recovered} displayType={'text'} thousandSeparator={true}/></p>
                </div>
                <div className='cards' style={{backgroundColor: '#ff5b42'}}>
                    <p>Deaths</p>
                    <p><NumberFormat value={deaths} displayType={'text'} thousandSeparator={true}/></p>
                </div>
            </div>
        </div>
    )
}

export default Indonesia;
