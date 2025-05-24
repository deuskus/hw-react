
import './App.css'

function App() {


  return (
   <>
     <ul>
       {
         coursesTitleArray.map(value => <li>{value}</li>)
       }
     </ul>
   </>
  )
}

export default App

let coursesTitleArray:string[] = [
  'JavaScript Complex',
  'Java Complex',
  'Python Complex',
  'QA Complex',
  'Fullstack',
  'Frontend'
];
