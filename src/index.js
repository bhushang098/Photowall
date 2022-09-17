import React from "react"
import ReactDOM from "react-dom"
import "./Styles/stylesheet.css"
import {BrowserRouter} from "react-router-dom"
import { legacy_createStore as createStore , applyMiddleware} from "redux"
import rootReducer from "./Redux/reducer"
import { Provider } from "react-redux"
import App from "./Components/App"
import thunk from "redux-thunk"
import { database } from "./database/config"


// let tasks = ["Hii", "Guyyy.","Buyyyy...","Seyeee.."]

// Using JSX v1
// let ele = <ol>
//     <li>{tasks[0]}</li>
//     <li>{tasks[1]}</li>
//     <li>{tasks[2]}</li>
// </ol>

// Using JSX V2
// let ele = <ol>
//     {tasks.map((task) => <li>{task}</li>)}
// </ol>

// Using React Element
// const ele = React.createElement("ol",null,tasks.map((task,index) => React.createElement("li",{key:index},task)))


// Using Components

// class Title extends Component {
//     render()
//     {
//         return <h1>{this.props.text}</h1>
//     }
// }

// class List extends Component {
//     render()
//     {
//         return <div>
//             <ol>
//                 {this.props.tasks.map((task,index) => <li key={index}>{task}</li> )}
//             </ol>
//         </div>
//     }
// }

// class Main extends Component{
//     render(){
//         return <div>
//             <Title text="ToDo"/>
//             <List tasks={["bhushan","coder","achiver"]}/>
//         </div>
//     }
// }

// ReactDOM.render(ele,document.getElementById("root"))

const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById("root"))