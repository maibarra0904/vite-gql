import { useSubscription } from "@apollo/client"
import { NEW_MESSAGE } from "../gql"

interface Message {
    from: string,
    text: string,
    createdAt: Date

}

const messages:Array<Message> = []

const ChatArea = () => {

    

    const { loading, error, data } = useSubscription(NEW_MESSAGE)

    console.log(data)

    error && <p>Hubo un error...</p>
    
    messages.push({
        from: data?.newMessage.from,
        text: data?.newMessage.text,
        createdAt: new Date(Date.now())
    })

    loading && <p>Cargando...</p>
    
  return (
    <>

    <h2 className="mx-5">Messages</h2>
    {
        messages.map((message, index) => (
            <div key={messages.length - 1 - index} className="card mx-5">
                <div className="card-body">
              <div className="card-title"><span className="fw-bold">De:</span> {message.from}</div>
              <div className="card-subtitle"><span className="fw-bold">Mensaje:</span> {message.text}</div>
              <div className="card-text"> {message.createdAt.toLocaleString()}</div>
              </div>
            </div>
          ))
    }
    </>
  )
}

export default ChatArea