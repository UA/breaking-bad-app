import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../../redux/services'
import Masonry from 'react-masonry-css'
import { Link } from 'react-router-dom'

import Loading from '../../components/Loading'
import Error from '../../components/Error'
import './styles.css'

function Home() {
    const dispatch = useDispatch()
    const firstRenderRef = useRef(true)
    const characters = useSelector((state) => state.characters.items)
    const nextPage = useSelector((state) => state.characters.page)
    const hasNextPage = useSelector((state) => state.characters.hasNextPage)
    const status = useSelector((state) => state.characters.status)
    const error = useSelector((state) => state.characters.error)

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false
            return
        }

        if (status === 'idle') {
            dispatch(fetchCharacters(0))
        }
    }, [dispatch, status])

    if (status === 'failed') return <Error message={error} />

    return (
        <div>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {characters.map((character) => (
                    <div key={`${character.char_id}`}>
                        <Link to={`detail/${character.char_id}`}>
                            <img
                                src={character.img}
                                alt={character.name}
                                className="character"
                            />
                            <label className="char_name">
                                {character.name}
                            </label>
                        </Link>
                    </div>
                ))}
            </Masonry>

            <div style={{ padding: '20px 0 40px 0', textAlign: 'center' }}>
                {status === 'loading' ? (
                    <Loading />
                ) : hasNextPage ? (
                    <button onClick={() => dispatch(fetchCharacters(nextPage))}>
                        Load More ({nextPage})
                    </button>
                ) : (
                    <label className="char_name">
                        There is nothing to be shown
                    </label>
                )}
            </div>
        </div>
    )
}

export default Home
