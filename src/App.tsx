import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const INCREMENT_MUTATION = gql`
  mutation Mutation {
  increment
}
`;

function App() {

  const [count, setCount] = useState(0)

  const [increment, { loading, error, data }] = useMutation(INCREMENT_MUTATION);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: Hubo un problema al conectar </p>;
  console.log(data)

  const handleLogin = async () => {


    try {
      const { data } = await increment();

      // Manejar la respuesta de la mutación
      console.log(data);
      setCount(data?.increment)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="card">
        <button onClick={handleLogin}>
          Increment
        </button>
        <p>{count}</p>
      </div>
    </>
  )
}

export default App