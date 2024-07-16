

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}






const App = () => {
  console.log('Hello from App Component')
  const name = 'Foe'
  const age= 11
  return (
    <div>
        <p>Greetings</p>
        <Hello name='Friend' age={2+5}/>
        <Hello name={name} age={age}/>
    </div>
  )
}
export default App