import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import NumberFormat from 'react-number-format'
import './styles.css'

const Provinsi = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
        .then((response) => {
            setData(response.data.data);
        });

    }, [])
    return (
        <div>
            <p>PROVINSI</p>
            {
                data.map((items) => {
                    return(
                        <div className="cardProvinsi">
                            <p>&emsp;&nbsp;{items.provinsi}</p>
                            <div className="cardChild">
                                <p>Confirmed:<br /><NumberFormat value={items.kasusPosi} displayType={'text'} thousandSeparator={true}/></p>
                                <p>Recovered:<br /><NumberFormat value={items.kasusSemb} displayType={'text'} thousandSeparator={true}/></p>
                                <p>Deaths:<br /><NumberFormat value={items.kasusMeni} displayType={'text'} thousandSeparator={true}/></p>
                            </div>
                        </div>
                )
                })
            }
        </div>
    )
}

export default Provinsi;
