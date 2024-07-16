
const App = () => {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using Props to Pass Data'
  const exercises2 = 7
  const part3 = 'State of a Component'
  const exercises3 = 14
  const parts = [part1, part2, part3]
  const exercises = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises}/>
      <Total exercises={exercises} />
    </div>
  )
}


const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return (
    <div>
      <p>
        {props.parts[0]}  {props.exercises[0]}
      </p>
      <p>
        {props.parts[1]}  {props.exercises[1]}
      </p>
      <p>
        {props.parts[2]}  {props.exercises[2]}
      </p>
    </div>
  )
}


const Total = (props) => {
  return (
      <p>Total Number of Exercises: {props.exercises[0] + props.exercises[1] +props.exercises[2]}</p>
  )
}
  
export default App
