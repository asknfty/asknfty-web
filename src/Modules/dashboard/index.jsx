import React, { useState } from 'react'

export const DashboardScreen = () => {
    const [isAvailable, setIsAvailable] = useState(false)

    const onClick = () => {
        console.log('res')
    }

    return (
        <div>
            <p>Homepage</p>
            <button onClick={() => onClick()}>
                test
            </button>
        </div>
    )
}