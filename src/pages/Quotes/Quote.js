import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
function Quote({ item }) {
    return (
        <div className="quote_item">
            <Link to={`/quotes/${item.quote_id}`}>
                <q> {item.quote} </q>
            </Link>
            <strong>{item.author}</strong>
        </div>
    )
}

export default Quote
