import Header from './components/Header';
import Counter from './components/Counter';
import CounterWS from './components/CounterWS';
import Chat from './components/Chat';
import ChatArea from './components/ChatArea';

function App() {


  return (
    <>
      <Header />

      <Chat />
      <hr />
      <ChatArea />
      <hr/>
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