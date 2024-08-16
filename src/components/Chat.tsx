import { useMutation } from "@apollo/client";
import { FormEvent, useState } from "react"
import { v4 as uuid } from 'uuid';
import { SEND_MESSAGE } from "../gql";

//Al sacar la constante fuera del componente no se renderiza automaticamente
const client = uuid()

const Chat = () => {

    const [message, setMessage] = useState('')    

    const [sendMessage] = useMutation(SEND_MESSAGE)

    const handleInputMessage = (e: FormEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        sendMessage({
            variables: {
                input: {
                    to: 'Remitente',
                    from: client,
                    text: message
                }
            }
        })
    }

  return (
    <>
    <h2 className="mx-5">Chat GraphQL</h2>

    <form>
        <div>
            <label className="mx-5 form-label">Client: {client}</label>
        </div>

        <div>
            <label className="mx-5 form-label">Message</label>
            <input className="mx-5 form-control w-50" type='text' onChange={handleInputMessage}/>
        </div>

        <button className="btn bg-success mx-5 my-3 fw-bold text-white"
            onClick={handleSubmit}
            type="submit"
            disabled={message===''}
        >Send</button>
    </form>
    </>
  )
}

export default Chat