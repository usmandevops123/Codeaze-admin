import React, { useEffect, useState } from 'react'
import {db} from "../Firebase"
import DropdownExampleSearchSelection from './DropdownExampleSearchSelection'
import CreatableSingle from './CreatableSingle'

export default function Booker() {
    const [adminsData , getAdminsData] = useState([])

    useEffect(() => {
        db.collection("Products List").onSnapshot(snapshot =>getAdminsData(snapshot.docs.map
          (doc=> doc.data())) )
        
      } , [])  
      console.log(adminsData)
    return (
        <div>
            <h1>i Am Booker</h1>
            <DropdownExampleSearchSelection/>
            </div>
    )
}
