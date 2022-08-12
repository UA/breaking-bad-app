import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { quotesSelector } from '../../redux/quotesSlices'
import { useNavigate } from 'react-router-dom'
function QuoteDetail() {
    const { quote_id } = useParams()

    const navigate = useNavigate()
    const quotes = useSelector(quotesSelector)
    const quote = quotes.find((item) => item.quote_id === Number(quote_id))

    useEffect(() => {
        if (!quote) navigate('/quotes')
    }, [navigate, quote])

    return (
        <div>
            <h1>Quote Detail</h1>
            <pre>{JSON.stringify(quote, null, 2)}</pre>
        </div>
    )
}

export default QuoteDetail
