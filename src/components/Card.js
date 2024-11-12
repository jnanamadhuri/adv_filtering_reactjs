import { AiFillStar } from "react-icons/ai"
import { BsFillBagHeartFill } from "react-icons/bs"

 function Card({ img, title, reviews, prevPrice, newPrice }) {
  return (
    <div>
      <section className="card">
           <img className="card-image" src={img} 
           alt=""
           />
           <div className="card--details">
             <h3 className="card-title">{title} </h3>
            <section className="card-reviews">
              <AiFillStar className="rating-star"/><AiFillStar className="rating-star"/><AiFillStar className="rating-star"/><AiFillStar className="rating-star"/>
              <span className="total-reviews">{reviews}</span>
            </section>
            <section className="card-price">
                <del>{prevPrice}</del>  {newPrice}

                <div className="bag">
                  <BsFillBagHeartFill className="bag-icon"/>
                </div>
            </section>
           </div>
        </section>
    </div>
  )
}

export default Card