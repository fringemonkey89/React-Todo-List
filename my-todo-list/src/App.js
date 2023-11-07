import { useState } from "react"


export default function App() {
  const [newItem, setNewItem] = useState("")

function handleSubmit(e) {
  e.preventDefault()
}
  return (
  <>
  <form onSubmit = {handleSubmit} className="new-item-form">
    <div className = "form-row">
        <label htmlFor="item">New Item</label>
        <input value = {newItem} onchange= {e => setNewItem(e.target.value)} type = "text" id="item"/>
    </div>
  <button className="btn">Add Item</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox"/>
        Item 1
      </label>
      <button className="btn btn-danger">delete</button>
    </li>
  </ul>
  </>
  )
}


