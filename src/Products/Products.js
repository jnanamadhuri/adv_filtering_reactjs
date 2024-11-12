import "./Product.css"


function Product({ result }) {
  return (
    <div>
      <section className="card-container">
       {result}
      </section>
    </div>
  )
}
export default  Product