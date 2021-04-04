import React from 'react'
import Result from './components/Result'
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import './App.css'

const App = () => (
    <main className="react-calculator">
        <Result value={ '0' }/>
        <Numbers onClickNumber={ number => console.log(number) }/>
        <Functions 
            onContentClear={ clear => console.log(clear) }
            onDelete={ del => console.log(del) } />
        <MathOperations 
            onClickOperation={ operation => console.log(operation) }
            onClickEqual={ equal => console.log(equal) }/>
    </main>
)

export default App