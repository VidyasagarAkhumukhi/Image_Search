import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const url = 'https://api.unsplash.com/search/photos?client_id=3y1kjn3zpms6-OhXj_MPkKx9mAj97b_-7TajoG5kXoU&query=SF90'

const Gallery = () => {
    const response = useQuery({
        queryKey: ['images'],
        queryFn: async () => {
            const result = await axios.get(url)

            return result.data
        }
    })

    return (
        <h2>
            Gallery
        </h2>
    )
}

export default Gallery
