import React from 'react'
import { Skeleton } from 'antd'
import styled from 'styled-components'

const Wrapper = styled.div`
    .ske {
        background: white;
        height: 320px;
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .ant-skeleton-header {
        padding-right: unset;
    }
    .ant-skeleton-avatar {
        border-radius: unset !important;
        max-width: 220px;
        width: 100%;
        height: 222px;
        margin-bottom: 8px;
    }
    .ant-skeleton-paragraph {
        padding-right: 16px;
        padding-left: 16px;
    }
`

const SkeletonCardSearch = ({ children }) => {
    return (
        <Wrapper>
            <Skeleton className="sle">
                {children}
            </Skeleton>
        </Wrapper>
    )
}

export default SkeletonCardSearch