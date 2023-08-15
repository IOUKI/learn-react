import ListGroup from "./components/ListGroup"
import Button from "./components/Button"

function App() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London'
  ]

  let items2 = [
    'A',
    'B',
    'C',
    'D'
  ]

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>
      <Button context="my button" color="primary" onClick={() => {console.log('Clicked!')}} />
      <Button context="test" color="secondary" onClick={() => {}}/>
      <Button context="test" color="danger" onClick={() => {}}/>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      <ListGroup items={items2} heading="ABC" onSelectItem={handleSelectItem} />
    </div>
  )
}

export default App