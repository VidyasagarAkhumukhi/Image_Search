import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const url = 'https://api.unsplash.com/search/photos?client_id=3y1kjn3zpms6-OhXj_MPkKx9mAj97b_-7TajoG5kXoU&query=Sf90'

const Gallery = () => {
    const response = useQuery({
        queryKey: ['images'],
        queryFn: async () => {
            const result = await axios.get(url)

            return result.data
        }
    })
    if (response.isLoading) {
        return (
            <section className='image-container'>
                <h4>Loading..</h4>
            </section>
        )
    }
    if (response.isError) {
        return (
            <section className='image-container'>
                <h4>There was an Error..</h4>
            </section>
        )
    }

    const results = response.data.results
    if (results.length < 1) {
        return (
            <section className='image-container'>
                <h4>No results found</h4>
            </section>
        )
    }

    return (
        <section className='image-container'>
            {results.map((item) => {
                const url = item?.urls?.regular
                return <img
                    src={url}
                    alt={item.description}
                    key={item.id}
                    className='img' />
            })}
        </section>
    )
}

export default Gallery
