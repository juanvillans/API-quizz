import React from  'react'

export default function LiBox(props) {
    return (
        <li onClick={(e) => props.selectBox(e, props.id, props.value, props.hold)} className={(props.hold ? "bg-green-400":"bg-white") + " shadow-md pt-1.5 w-12 h-12 rounded-md"}>{props.value}</li>
    )
}