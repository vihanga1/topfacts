export default function Navbar() {
  return (
    <div className="navbar">
      <h1>
        TopFacts<small>.com</small>
      </h1>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </div>
  );
}
