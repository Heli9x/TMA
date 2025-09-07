import React, { useState } from 'react'
import Heading from '../components/Heading'
import Collar from '../components/Collar'
import Carousel from '../components/Carousel'
import data2 from '../assets/data4.json'

function Countries() {

    function toTitleCase(str){
        return str
            .toLowerCase()
            .replace(/\b\w/g, char => char.toUpperCase());
    }
    const allTravelers = Object.values(data2).flat();
    const uniqueCountries = [...new Set(allTravelers.map (t => t.Country.trim()))]
    const countriesCleaned = [...new Set(uniqueCountries.map(toTitleCase))]

    function countryCount(str, col="Country"){
        return Object.values(data2).flat().reduce((count, member)=>{
            return member[col].split(" ")[0].toLowerCase() === str.split(" ")[0].toLowerCase()
                ? count+1
                : count
        }, 0)
    }

    function countryMapping(){
        return Object.fromEntries(countriesCleaned.map(country => [country, [countryCount(country), '', 'ri-flag-fill']]))
    }

    const [countryMap, setCountryMap] = useState(countryMapping())

    const [data, setData] = useState(countryMap)

    return (
        <div className='countries page'>
            <Heading text={"Countries attending this event"}/>
            <div className="group">
                <Carousel 
                    data ={data}
                />
            </div>
        </div>
    )
}

export default Countries