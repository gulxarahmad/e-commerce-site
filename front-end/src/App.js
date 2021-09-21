import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'

function App() {
  return (
   <>
   <Header/>
   <Container>
   <main className='py-3'>
   <h1>Hello g, This is Gulzar Ahmad</h1>
   </main>
   </Container>
   <Footer/>
   </>
  );
}

export default App;
