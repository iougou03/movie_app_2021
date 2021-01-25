
function Food({name}){
  console.log(name);
  return <h1>I Like {name}</h1>;
}
function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Food 
        name="Haesol"
      />
      <Food 
        name="Kim"
      />
    </div>
  );
}

export default App;
