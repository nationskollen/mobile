import React from 'react'
import { Event as EventResponse } from '@nationskollen/sdk'

import CoverImage from '../Common/CoverImage'
import EventCategories from './Category'

export interface Props {
    event: EventResponse
    height: number
}

const EventCover = ({ event }: Props) => {
    return (
        <CoverImage src={event.cover_img_src}>
            <EventCategories event={event} />
        </CoverImage>
    )
}

export default EventCover
