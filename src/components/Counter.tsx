import { useMutation, useQuery } from "@apollo/client";
import { DECREMENT_MUTATION, GET_COUNT, INCREMENT_MUTATION } from "../gql";


const Counter = () => {

  const { data, loading, error, refetch } = useQuery(GET_COUNT)

  const [increment, { loading: loadInc, error: errInc }] = useMutation(INCREMENT_MUTATION);
  const [decrement, { loading: loadDec, error: errDec }] = useMutation(DECREMENT_MUTATION);
  if (loadInc || loadDec) return <p>Loading...</p>;
  if (errInc || errDec) return <p>Error: Hubo un problema al conectar </p>;

  const handleClickIncrement = async () => {

    await increment();
    await refetch();
  }

  const handleClickDecrement = async () => {
    await decrement();
    await refetch();

  }

  error && <p>Hubo un error</p>

  loading && <p>Loading...</p>

  return (
    <>
      <div className='btn bg-warning pe-none text-white'>
        Query + Mutation
      </div>
      <div className="container my-3">
        <button className='btn btn-primary me-2' onClick={handleClickIncrement}>
          Increment
        </button>
        <button className='btn btn-secondary' onClick={handleClickDecrement}>
          Decrement
        </button>

      </div>
      <div className="container my-3">
        <p className="btn bg-success p-3 border border-2 border-white rounded text-white pe-none">{data?.getCount}</p>
      </div>
      <hr/>
    </>
  )
}

export default Counter