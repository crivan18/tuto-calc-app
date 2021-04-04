import React from 'react'
import PropTypes from 'prop-types'

// Utilizando destructuración de objetos
// en el parametro recibido
const Result = ({ value }) => (
    <section className="result">
        { value }
    </section>
)

Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value: '0'
}

export default Result