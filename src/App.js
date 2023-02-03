import './App.css';

function MyButton() {
  function handleClick(){
    alert("WOOOOOO 20 YEARS OF GOOD LUCK OTW!!!");
  }
  return (
    <button onClick={handleClick}>
      Press this button!
    </button>
  );
}


function App() {
  const user = {
    name: 'Viewer',
    imageUrl: 'https://www.preemptive.com/wp-content/uploads/2020/10/hacker-1200x639.png',
    imageSize: 90,
  };

  const products = [
    { title: 'Potato', isFruit: false, id: 1 },
    { title: 'Mushroom', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <div className='App'>
    <h1>Hello <p style={ {backgroundColor: 'lightslategrey'} }>{user.name}</p>:)</h1>
    <h2>Hope {user.name} is doing well today!</h2>
    <h3>These statements were all made with different headings</h3>
    <h4>The following is a short unordered list of either fruits or vegetables: </h4>
    <h5>green = vegetable </h5>
    <h5>pink = fruit</h5>
    <ul>{listItems}</ul>

    <h6> The following is a button: </h6>
    <MyButton></MyButton>
    <h1></h1>
    <h6>Last but not least, a picture: </h6>
    <img src= {user.imageUrl} />
    </div>
  );
}

export default App;
