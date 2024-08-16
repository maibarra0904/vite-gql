import Header from './components/Header';
import Counter from './components/Counter';
import CounterWS from './components/CounterWS';

function App() {


  return (
    <>
      <Header />
      <div className='container my-3'>
        <Counter />
      </div>
      <div className='container my-3'>
        <CounterWS />
      </div>
    </>
  )
}

export default App