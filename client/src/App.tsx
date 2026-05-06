import { useEffect, useState } from 'react'
import './App.css'
import add from '@cloneblr/shared';

function App() {
  const [ returnMessage, setReturnMessage ] = useState("Did not receive message back");

  useEffect(
    () => {
            let ignore = false;
            fetch('/api').then(async (resp) => {
              if (!ignore) {
                console.log('dorito')
                console.log(resp);
                const result = await resp.json();
                console.log(result);
                setReturnMessage(result.message); 
              }
            })

            return () => {
              ignore = true;
            }
          },
  [])

  return (
    <>
      <h1>{ returnMessage }</h1>
      <p>2 + 3 is { add(2, 3) }</p>
    </>
  )
}

export default App
