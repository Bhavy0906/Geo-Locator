import React, { Component } from 'react'
import axios from 'axios'
import './styles.css'

class NavigateUser extends Component {

    constructor(props) {
        super(props)

        this.state = {
            countryName: '',
            countryCode: '',
            continentCode: '',
            city: '',
            region: '',
            timeZone: '',
            countryCapital: '',
            currency: ''
        }
    }

    componentDidMount() {
        axios.get('https://ipapi.co/json/')
            .then(response => {
                let data = response.data
                console.log(data);
                this.setState({
                    countryName: data.country_name,
                    countryCode: data.country_code_iso3,
                    continentCode: data.continent_code,
                    city: data.city,
                    region: data.region,
                    timeZone: data.timezone,
                    countryCapital: data.country_capital,
                    currency: data.currency_name
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { countryName, countryCode, continentCode, city, region, timeZone, countryCapital, currency} = this.state
        let position = ''
        if (continentCode === 'AS') {
            position = countryName
        } else if (continentCode === 'EU') {
            position = countryName
        } else if (continentCode === 'AF') {
            position = countryName
        } else if (countryCode === 'USA' || countryCode === 'CAN') {
            position = countryName
        } else position = countryName;
        return (
            <div id = 'board'>
                <div id = 'card'>
                <span><b>Country code : {countryCode}</b></span> 
                <span><b>Country name : {position}</b></span>
                <span><b>Country capital : {countryCapital}</b></span>
                <span><b>Currency : {currency}</b></span>
                <span><b>region : {region}</b></span>
                <span><b>City : {city}</b></span>
                <span><b>Timezone : {timeZone}</b></span>
            </div>
            </div>
        )
    }
}

export default NavigateUser
