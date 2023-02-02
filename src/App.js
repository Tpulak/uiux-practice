import './App.css';

function MyButton() {
  function handleClick(){
    alert("button was clicked");
  }
  return (
    <button onClick={handleClick}>
      I'm a button
    </button>
  );
}


function App() {
  const user = {
    name: 'Raymond',
    imageUrl: 'https://www.preemptive.com/wp-content/uploads/2020/10/hacker-1200x639.png',
    imageSize: 90,
  };

  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  return (
    <div className='App'>
    <h1>Hello, <p style={ {backgroundColor: "red"} }>{user.name}</p>!</h1>
    <h1>Hello {user.name}</h1>
    <MyButton></MyButton>
    <h2>peepee</h2>
    <img src= {user.imageUrl} />
    </div>
  );
}

export default App;
