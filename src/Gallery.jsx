import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useGlobalContext } from './context'

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;


const Gallery = () => {
    const { searchTerm } = useGlobalContext()
    const response = useQuery({
        queryKey: ['images', searchTerm],
        queryFn: async () => {
            const result = await axios.get(`${url}&query=${searchTerm}`)

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
                const url = item?.urls?.small
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
