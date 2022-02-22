import logo from './logo.svg';
import './App.css';

let name = "Aman"
function App() {
  return (
    <> 
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className='container'>
      <h1>welcome to react With {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio harum quidem dolores nisi atque tenetur! Molestiae, vitae reiciendis sed doloremque blanditiis tempora deserunt vel laudantium odit commodi repellat, repellendus voluptate?</p>
    </div>
    </>
   
  ); 
}

export default App;
