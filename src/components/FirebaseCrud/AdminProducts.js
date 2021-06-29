import React, { useState } from 'react'
import { db } from '../Firebase';

function AdminProducts() {
    const [products, addProducts] = useState('');
    const [rate, addRate] = useState('');
const handleSubmit = async (e) => {

    e.preventDefault()
    
    try {
       db.collection("Products List").add({
            Products:products,
            Rate :rate, 
            role:"Products",
            Quantity : 0,
                    
        
        })

        window.M.toast({ html: `product has been added`, classes: "green" })
     


    } catch (err) {
        window.M.toast({ html: err.message, classes: "red" })
    }
}
    return (
        <div>
            <div className="center container" style={{ maxWidth: "500px" }}>
            <h3>Please Add Porducts</h3>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div class="input-field ">
                    <input type="text" placeholder="Add Products" onChange={(e) => addProducts(e.target.value)} />
                    <input type="number" placeholder="Add Rate" onChange={(e) => addRate(e.target.value)} />
                </div>
                <button type="submit" className="btn blue"> Add </button>
            </form>
        </div>



        </div>
    )
}

export default AdminProducts
