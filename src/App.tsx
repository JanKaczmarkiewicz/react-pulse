import { useState } from 'react'

const App = () => {
    const [state, setState] = useState(0)

    return (
        <div style={{ color: 'red' }} onClick={() => setState((p) => p + 1)}>
            {state}
        </div>
    )
}

export default App
