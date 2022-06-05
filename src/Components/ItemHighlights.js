import React from 'react'

export default function ItemHighlights(props) {
    return (
            props.data &&
                <li><div>
                    <h6>{props.heading}</h6>
                    <p>{props.data}</p>
                </div></li>
    )
}
