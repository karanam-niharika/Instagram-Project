
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import InstaPage from './InstaPage';
import LoginWithFb from './LoginWithFb';

function App() {
  return (
    <>
    {/* <h1>
    main component
    </h1> */}
    {/* <InstaPage/> */}
    {/* <LoginWithFb/> */}

    <BrowserRouter>
      {/* <li><Link to='/'>InstaPage</Link></li> */}
      
    <Routes>
      <Route path='/' element={ <InstaPage/>}></Route>
      <Route path='/LoginWithFb' element={ <LoginWithFb/> }></Route>

    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
