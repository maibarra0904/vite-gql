import { gql, useQuery } from "@apollo/client";


const GET_COUNT =  gql`
query Query {
  getCount
}
`;

const Counter = () => {

    const {data, loading, error} = useQuery(GET_COUNT)

    error && <p>Hubo un error</p>

    loading && <p>Loading...</p>

  return (
    <div>{data?.getCount}</div>
  )
}

export default Counter