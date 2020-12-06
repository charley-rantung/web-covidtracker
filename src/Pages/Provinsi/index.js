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
        <div className="ContainerProvinsi">
            {
                data.map((items) => {
                    return(
                        <div className="cardProvinsi">
                            <p style={{fontSize: 15, fontWeight: 'bold'}}>&emsp;&nbsp;{items.provinsi}</p>
                            <div className="cardContainer">
                                <div className="cardChild" style={{backgroundColor: '#fccd14'}}>
                                    <p>Confirmed<br /><NumberFormat value={items.kasusPosi} displayType={'text'} thousandSeparator={true}/></p>
                                </div>
                                <div className="cardChild" style={{backgroundColor: '#04704c'}}>
                                    <p>Recovered<br /><NumberFormat value={items.kasusSemb} displayType={'text'} thousandSeparator={true}/></p>
                                </div>
                                <div className="cardChild" style={{backgroundColor: '#5e0007'}}>
                                    <p>Deaths<br /><NumberFormat value={items.kasusMeni} displayType={'text'} thousandSeparator={true}/></p>
                                </div>
                            </div>
                        </div>
                )
                })
            }
        </div>
    )
}

export default Provinsi;
