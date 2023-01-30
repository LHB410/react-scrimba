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

function Page() {
  return(
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" width="40" alt="react logo" />
        </nav>
      </header>
      <h1>Why I like React</h1>
      <ol>
        <li>React is a hireable skill</li>
        <li>React is cool</li>
        <li>It's a declarative framework</li>
        <li>It's good practise</li>
      </ol>
      <footer>
        © 2023 Laura Brooks Codes. All rights reserved.
      </footer>
    </div>
  );
}

ReactDOM.render(
  <Page />,
  document.querySelector("#root")
)
