import Input from "../../components/Input"
import "./Category.css"

function Category({handleChange}) {
  return (
    <div>
      <h1 className="sidebar-title">Category</h1>
      <div className="sidebar-items">
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkbox"></span>All
        </label>
       <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  )
}

export default Category
