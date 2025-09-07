import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import Heading from '../components/Heading'
import './overview.css'
import data2 from '../assets/data4.json'
import data3 from '../assets/main.json'


function Overview() {

    const [data, setData] = useState(data3['Overview']['dashboard'])

    function rowCount(str, col="Country"){
        return Object.values(data2).flat().reduce((count, member)=>{
            return member[col].split(" ")[0].toLowerCase() === str.split(" ")[0].toLowerCase()
                ? count+1
                : count
        }, 0)
    }


    const [facts, setFacts] = useState(data3['Overview']['infomatics'])

  return (
    <div className='overview page'>
        <Carousel 
            data={data}
        />
        {
            Object.keys(facts).map((fact,index)=>(
                <div key={index}>
                    <Heading text={fact}/>
                    {
                        facts[fact].map((f,index)=>(
                        <Card 
                            type={1}
                            title ={f[0]}
                            tag={fact}
                            icon={f[1]}
                            text={f[2]}
                        />
                        ))
                    }
                </div>
            ))
        }
    </div>
  )
}

export default Overview