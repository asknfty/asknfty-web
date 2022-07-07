import React from 'react'
import { Skeleton } from 'antd'

const SkeletonCardSearch = ({ children }) => {
    return (
        <Skeleton>
            {children}
        </Skeleton>
    )
}

export default SkeletonCardSearch