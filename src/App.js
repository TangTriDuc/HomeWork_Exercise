// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App; bo

// Ex1
// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MyComponent from "./MyComponent";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<MyComponent />}> </Route>
//     </Routes>
//   </Router>
// )

// Ex3

// import './App.css';
// import * as React from "react";

// function App() {
//   const [MyComponent, setMyComponent] = React.useState(() => () => null);

//   React.useEffect(() => {
//     import("./MyComponent").then((module) => {
//       setMyComponent(() => module.default);
//     });
//   }, []);

//   return <MyComponent />;
// }

// export default App;

// Ex4

// import * as React from "react";

// function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({id: 1, name: "Adam"});
//     }, 1000);
//   });
// } 

// function App() {
//   const [id, setId] = React.useState("loading....");
//   const [name, setName] = React.useState("loading....");

//   React.useEffect(() => {
//     fetchUser(). then((user) => {
//       setId(user.id);
//       setName(user.name);
//     });
//   });

//   return (
//     <>
//       <p> ID: {id}</p>
//       <p>Name: {name}</p>
//     </>
//   )

// }

// export default App;


// Ex5

// import React from 'react'
// import { FadeLoader } from "react-spinners";
// import MyPage from "./MyPage";

// function App() {
//   return (
//     <React.Suspense fallback={<FadeLoader color={"lightblue"} size={150} />} >
//       <MyPage />
//     </React.Suspense>
//   );
// }

// export default App

// Ex 6

// import "typeface-roboto";
// import React from "react";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Typorgraphy from "@mui/material/ Typography";

// const headerFooterStyle={
//   padding: 8,
//   textAlign: "center",
// };

// const mainStyle = {
//   padding: 16,
//   textAlign: "center",
// }

// const navStyle = {marginLeft: 5};

// export default function App() {
//   return (
//     <div style={{ flexGrow: 1}} >
//       <Grid container spacing={3} >
//         <Paper style={headerFooterStyle} >
//           <Typorgraphy>Header</Typorgraphy>
//         </Paper>
//       </Grid>
//       <Grid item xs={4}>
//         <Paper>
//           <Grid container spacing={2} direction="column">
//             <Grid item xs={12}>
//               <Typorgraphy style={navStyle}>Nav Item 1</Typorgraphy>
//             </Grid>
//           </Grid>
//         </Paper>
        
//       </Grid> 
//     </div>
//   )
// }


// Ex 8
import "typeface-roboto";
import React from 'react';
import FormGroup from "@mui/material/FormGroup";
import MyTextInput from "./MyTextInput";
import MySelect from "./MySelect";

export default function App() {
  return (
    <FormGroup style={{ width: 200, margin: 10}}>
      <MyTextInput />
      <MySelect />
    </FormGroup>
  );
}





