import { useSubscription } from "@apollo/client";
import { DECREMENT_SUBSCRIPTION, INCREMENT_SUBSCRIPTION } from "../gql";


const CounterWS = () => {


  const { loading: loadInc, error: errInc, data: dataInc } = useSubscription(INCREMENT_SUBSCRIPTION)
  const { loading: loadDec, error: errDec, data: dataDec } = useSubscription(DECREMENT_SUBSCRIPTION)
  
  if (loadInc && loadDec) return <p>Loading...</p>;
  if (errInc || errDec) return <p>Error: Hubo un problema al conectar </p>;

  return (
    <>
      <div className='btn bg-warning pe-none text-white'>
        Subscription
      </div>
      <div className="container my-3">

      </div>
      <div className="container my-3">
        <p className="btn bg-success pe-none text-white">Increment</p>
      </div>
      <div className="container my-3">
        <p className="btn bg-success p-3 border border-2 border-white rounded text-white pe-none">{dataInc?.incrementCount}</p>
      </div>

      <div className="container my-3">
        <p className="btn bg-success pe-none text-white">Decrement</p>
      </div>
      <div className="container my-3">
        <p className="btn bg-success p-3 border border-2 border-white rounded text-white pe-none">{dataDec?.decrementCount}</p>
      </div>
    </>
  )
}

export default CounterWS