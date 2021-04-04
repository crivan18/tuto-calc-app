import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/'

const operations = ['+', '-', '*', '/', '=']

const renderOperations = (onClickOperation, onClickEqual) => (
    operations.map(operation => {
        if (operation === '=') {
            return <Button key={operation} text={operation} clickHandler={ onClickEqual } />
        }
        return <Button key={operation} text={operation} clickHandler={ onClickOperation } />
    })
)

const MathOperations = ({onClickOperation, onClickEqual}) => (
    <section className="math-operations">
        { renderOperations(onClickOperation, onClickEqual) }
    </section>
)

MathOperations.propTypes ={
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperations