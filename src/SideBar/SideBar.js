import Category from "./Category/Category"
import Colors from "./Colors/Colors"
import Price from "./Price/Price"
import "./Sidebar.css"
import { FaCartArrowDown } from "react-icons/fa"

function SideBar({handleChange}) {
  return (
    <>
      <section className="sidebar">
           <div className="logo-container">
              <h1 className="cart" ><FaCartArrowDown /></h1>
           </div>

           <Category handleChange={handleChange}/>
           <Price    handleChange={handleChange}/>
           <Colors   handleChange={handleChange}/>
      </section>
    </>
  )
}

export default SideBar
