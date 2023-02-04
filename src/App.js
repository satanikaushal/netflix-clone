import { useState } from "react";
import Signup from './Signup';
import Home from './Home'
function App() {
  const [currentComponent, setCurrentComponent] = useState('sign-up')
  return (
    <div>
    {currentComponent === 'sign-up' ? (
      <Signup onSignIn={() => setCurrentComponent('home')} />
    ) : null}
    {currentComponent === 'home' ? <Home /> : null}
  </div>
  );
}

export default App;
