import ListGroup from "./components/ListGroup";

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

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
      <ListGroup items={items2} heading="ABC" />
    </div>
  )
}

export default App