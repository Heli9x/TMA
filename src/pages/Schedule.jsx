import React, { useEffect, useState } from 'react'
import './schedule.css'
import Card from '../components/Card'
import Heading from '../components/Heading'
import data from '../assets/data4.json'
import Collar from '../components/Collar'
import mainData from '../assets/main.json'

function Schedule() {

    const [current, setCurrent] = useState("")
    const [count, setCount] = useState(0)
    const date = new Date()
    const [monthName, setMonthName] = useState("")
    useEffect(()=>{
        setMonthName(date.toLocaleDateString('default', {month: 'long'}))
    })

    const monthData = mainData["MonthData"]


  return (
    <div className='schedule page'>
        <Heading text={"Travel Schedule Overview"}/>
        <div className="group">
            {
                Object.keys(data).map((key, index)=>{ 
                    if(key==monthName){
                    return(
                    <div className="group" key={index}>
                        <Collar 
                            text={key}
                            icon={monthData[key]? monthData[key][1]:"ri-sunny-line"}
                            subtitle={monthData[key]? monthData[key][0]:key}
                        />
                        <div className="group flex-row">
                            {
                                data[key].map((travel,index)=>{
                                    if(travel["Travelling Date"==current]){
                                        setCount(count + 1);
                                    }
                                    else if(key == "September"){
                                        return(
                                            <Card
                                                type={2}
                                                imgURL={"https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg"}
                                                date={travel["Travelling Date"].slice(-8)}
                                                icon={"ri-car-line"}
                                                title={travel["Full Name"]}
                                                tag = {[[travel["Type of Traveler"], "ri-car-line"], [travel["Destination"], "ri-map-pin-fill"]]}
                                                key={index}
                                            />
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                )}})
            }
        </div>

    </div>
  )
}

export default Schedule