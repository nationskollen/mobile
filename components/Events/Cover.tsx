import React from 'react'
import { Event as EventResponse } from '@nationskollen/sdk'

import CoverImage from '../Common/CoverImage'
import EventCategories from './Category'

export interface Props {
    event: EventResponse
    height: number
}

const EventCover = ({ event }: Props) => {
    const categories = [event.category.name]

    if (!event.only_members && !event.only_students) {
        categories.push('Everyone')
    } else {
        if (event.only_members) {
            categories.push('Members')
        }

        if (event.only_students) {
            categories.push('Nation card')
        }
    }

    return (
        <CoverImage src={event.cover_img_src}>
            <EventCategories names={categories} />
        </CoverImage>
    )
}

export default EventCover
