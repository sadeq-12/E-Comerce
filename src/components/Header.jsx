function Header(){
    return <div className="  bg-primaryColor p-5 flex font-primaryFont justify-between text-thirdColor" >
        <h1 className="text-3xl font-bold mr-5 sm:ml-10 "><span className="text-secondaryColor">Dayniile</span>Store</h1>

        <ul className="  sm:flex  gap-8 pt-2 hidden">
            <li  className="hover:underline cursor-pointer">Home</li>
            <li  className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Contect</li>
        </ul>
        <form action="">
            <   input type="text" className=" hidden sm:block sm:pr-[150px] pl-2 mt-2 rounded "  placeholder="search by name"/>

        </form>

        <i class="fa-solid fa-cart-shopping sm:mr-10    text-3xl  pt-2 ">  </i>

    </div>
}
export default Header