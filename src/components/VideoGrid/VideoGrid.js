import React from 'react'
import Style from './VideoGrid.module.scss'
function VideoGrid({children}) {
    return (
        <div className={Style.container}>
            {children}
        </div>
    )
}

export default VideoGrid
