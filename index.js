// project below

function Page() {
  return(
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return(
    <header>
      <nav className="navbar">
        <img className="nav-logo" src="./react-logo.png" width="40" alt="react logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return(
    <footer className="footer">
      © 2023 Laura Brooks Codes. All rights reserved.
    </footer>
  )
}

function MainContent() {
  return(
    <div className="main-content">
      <h1>Why I like React</h1>
      <ol>
        <li>React is a hireable skill</li>
        <li>React is cool</li>
        <li>It's a declarative framework</li>
        <li>It's good practise</li>
      </ol>
    </div>
  )
}

ReactDOM.render(
  <Page />,
  document.querySelector("#root")
);
