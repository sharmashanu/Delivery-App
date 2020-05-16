import React, {useEffect, useState} from 'react';
import axios  from 'axios'
import './index.css'
const getList  = (state ) => {
    return state.products.map(item=> {
        console.log('iete', item)
        return <div key={item.name} className={item.isAvailable? 'available': 'not-available'}>
            <span>{item.name}</span>
            <span>{item.isAvailable ? 'Available': 'Not Available' }</span>
        </div>
    })
}

const ProductsList = (props)=>{
    const [state, setState] = useState({products:[]})
    useEffect(async ()=>{
        const result  = await axios.get('http://localhost:3000/get-products')
        console.log('result,', result.data)
        setState(prevState => {
            return {
                ...prevState,
                products: result.data
            }
        })
    },[])
    return <div>
        <h1>productsList will render here</h1>
        {
            getList(state)
        }
        </div>
}



export default ProductsList;
