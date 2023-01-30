// ReactDOM.render(<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat nulla reprehenderit maiores, aut magnam modi, quos laudantium nam ducimus eum et numquam repudiandae, delectus perspiciatis harum assumenda labore corporis.</p>, document.querySelector(".my-class"))

// ReactDOM.render(
//   <ul>
//     <li>Jedi</li>
//     <li>Sith</li>
//     <li>Padawan</li>
//   </ul>,
//   document.querySelector("#star-wars-list")

// created function named for the component
// function MainContent() {
//   return(
//     <h1>Hey</h1>
//   )
// }

// ReactDOM.render(
//   <div>
//     <MainContent />
//   </div>,
//   document.querySelector(".main")

// vanilla js. this is what react does
// const h1 = document.createElement("h1");
// h1.textContent("hello");
// h1.className = "header";
// document.querySelector(".root2").append(h1);


// project below

const page =(
  <div>
    <nav>
      <img src="./react-logo.png" width="40" alt="react logo" />
      <h1>ReactFacts</h1>
      <h3>React Course - Project 1</h3>
    </nav>
    <div>
      <h1>Fun Facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  </div>

)

ReactDOM.render(
  page,
  document.querySelector("#root")
)
