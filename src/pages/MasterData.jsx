import React, { useEffect, useState } from 'react'
import './masterdata.css'
import data from '../assets/data4.json'

function MasterData() {
        const date = new Date()
        const [monthName, setMonthName] = useState(date.toLocaleDateString('default', {month: 'long'}))
        const [count, setCount] = useState(0);
        const increaseCount = () =>{
            setCount(count + 1)
        }

    return (
        <div className='masterdata page'>
            <div id="master" className="sheet-content">
            <div className="table-container">
                <table id="masterTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Destination</th>
                            <th>Travel Type</th>
                            <th>Dates</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody id="masterBody">
                        {
                            Object.keys(data).map((month, index)=>    
                                data[month].map((client, index) => {
                                    const gloabalIndex = Object.values(data)
                                        .flat()
                                        .indexOf(client)

                                return (
                                    <tr key={`${month}-${index}`}>
                                        <td>{gloabalIndex + 1}</td>
                                        <td>{client['Full Name']}</td>
                                        <td>{client['Country']}</td>
                                        <td>{client['Destination']}</td>
                                        <td>{client['Type of Traveler']}</td>
                                        <td>{client['Travelling Date']}</td>
                                        <td>{client['Phone Number']}</td>
                                        <td>{client['Email address']}</td>
                                    </tr>
                                    )
                                })
                            )}
                    </tbody>
                </table>
            </div>
        </div>

        </div>
  )
}

export default MasterData