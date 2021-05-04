import React from 'react'
import { Event as EventResponse } from '@dsp-krabby/sdk'

import CoverImage from '../Events/CoverImage'
import EventCategory from './Category'

export interface Props {
    event: EventResponse
    height: number
}

const EventCover = ({ event }: Props) => {
    return (
        <CoverImage src={event.cover_img_src}>
            <EventCategory name={event.category && event.category.name} />
        </CoverImage>
    )
}

export default EventCover
