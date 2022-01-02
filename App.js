import logo from './logo.svg';
import './App.css';
import ReactTable from "react-table";


// Example of a data array that
// you might receive from an API
const data = [
{ ID: 19, Name: "Faizan", Marks: 85 },
{ ID: 25, Name: "Umair", Marks: 75 },
{ ID: 35, Name: "Shaheer", Marks: 78},
]
const Teacher = [
  {
    TeacherID: "001",
    Name: "Faizan",
    Age: 35,
    Salary: 59000,
    Gender: "M",
    Contact: "03254167",
    email: "faizan@comsats.edu.pk"
},
{
  TeacherID: "002",
  Name: "Ali",
  Age: 25,
  Salary: 69000,
  Gender: "M",
  Contact: "032541657",
  email: "ali@comsats.edu.pk",
},
{
  TeacherID: "003",
  Name: "Umair",
  Age: 50,
  Salary: 99000,
  Gender: "M",
  Contact: "03521654",
  email: "umair@comsats.edu.pk",
}
  ]
function App() {
return (
	<>
  
  <h1>Teacher Route</h1>
  <div className="App">
	<table >
		<tr>
    <th>TeacherID</th>
		<th>Name</th>
		<th>Age</th>
    <th>Salary</th>
		<th>Gender</th>
    <th>Contact</th>
    <th>Email</th>
		</tr>
		{Teacher.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.TeacherID}</td>
			<td>{val.Name}</td>
			<td>{val.Age}</td>
      <td>{val.Salary}</td>
      <td>{val.Gender}</td>
      <td>{val.Contact}</td>
      <td>{val.email}</td>
			</tr>
		)
		})}
	</table>
	</div>
  <h1>Add Student Marks</h1>
  <center>
  <form>
      <label><h4>Enter Student ID:</h4>
        <input type="text" />
      </label>
      <label><h4>Enter Student Marks:</h4>
        <input type="number" />
      </label>
    </form>
  </center>
  </>
);
}
export default App;