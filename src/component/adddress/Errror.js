import React from 'react'
import {useRouteError} from 'react-router-dom'

export default function Error() {
    const err  = useRouteError()
    console.log(err)
  return (
    <div>
        <h4>
            {err.statusText}:{err.status}
        </h4>
        <h4>
            connection error
        </h4>
    </div>
    
  )
}
