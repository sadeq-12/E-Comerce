import axios from "axios"
import { useEffect, useState } from "react"
import Dayniile from "./Dayniile"

// import  ClockLoader, {ClockLoader}  from "react-spinners/ClockLoader"



function DayniileApi(){
  const [products, setProducts] = useState([])


  const handleGetProduct= ( )=>{

    axios.get("https://fakestoreapi.com/products").then((response) =>{
          setProducts(response.data)

    }).catch((error) =>{
        console.log(error)
    })

  }


  useEffect(() =>{
    handleGetProduct()
  })

  // return loading == true ?  <ClockLoader loading= {loading} /> : <div>






    return <div className=" sm:grid gap-y-10 gap-x-5 grid-cols-[300px_300px_300px]  justify-center">
        {
        products.map((data)=>{
            return<Dayniile   item={data}/>

        })
    }
</div>


    // </div>


  
}
export default DayniileApi