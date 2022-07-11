import React from 'react'
import { Wrapper } from './styled'
import { TextNormal, Image } from 'Components'
import { IMG_DEFAULT } from 'Assets'
import { useHistories } from 'Hooks'
import { useHistory } from 'react-router-dom'

const CardSearch = ({ url, name, title, id }) => {
    const history = useHistory()

    const goToDetail = () => {
        history.push(`/collection-detail/${id}`)
    }

    return (
        <Wrapper>
            <div className="wrap-content">
                <a onClick={goToDetail}>
                    <div className="card">
                        {url ?
                            <div className="card-img" style={{ backgroundImage: `url(${url})` }}></div>
                            :
                            <Image src={IMG_DEFAULT} className="card-img-default" alt="default" />}
                        <TextNormal fontWeight='fw_700' fontSize='size_18' lineHeight="24px" color="text_grey" className="card-name">{name || ''}</TextNormal>
                        <div className="card-title">
                            <TextNormal fontSize='size_16' color="title_grey" lineHeight="24px">{title || ''}</TextNormal>
                        </div>
                    </div>
                </a>
            </div>
        </Wrapper>
    )
}

export default CardSearch