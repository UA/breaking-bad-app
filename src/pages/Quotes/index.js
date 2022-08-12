import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import {
    errorSelector,
    quotesSelector,
    statusSelector,
} from '../../redux/quotesSlices'
import { fetchAllQuotes } from '../../redux/services'
import Quote from './Quote'

function Quotes() {
    const dispatch = useDispatch()
    const quotes = useSelector(quotesSelector)
    const status = useSelector(statusSelector)
    const error = useSelector(errorSelector)

    useEffect(() => {
        if (status === 'idle') dispatch(fetchAllQuotes())
    }, [dispatch, status])

    if (status === 'rejected') {
        return <Error message={error} />
    }
    return (
        <div style={{ padding: 10 }}>
            <h1>Quotes</h1>
            {status === 'loading' && <Loading />}
            {status === 'succeeded' &&
                quotes.map((item) => <Quote key={item.quote_id} item={item} />)}
            {status === 'succeeded' && (
                <div className="quetos_info">{quotes.length} quotes</div>
            )}
        </div>
    )
}

export default Quotes
