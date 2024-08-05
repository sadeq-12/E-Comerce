function Dayniile({item}){
    return <div className="border-4 w-[270px] rounded mt-10  ml-10 ">

    <img src={item.image} alt="" />
    <h1>{item.id}</h1>
    
    <h1 className="  ml-2 ">{item.title}</h1>
    <h1 className= " ml-2 ">${item.price}</h1>
    <h1>{item.category}</h1>
    <h1>{item.rating.rate}</h1>
    <h1>{item.rating.count}</h1>

    <div className=" flex justify-between items-center">

    
     <button className=" bg-primaryColor rounded-full text-thirdColor py-1 px-3 m-3 text-3xl ">+</button>
    </div>

 
    </div>
}
export default Dayniile