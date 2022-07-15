import { Col, Row } from 'antd'
import { TextNormal } from 'Components'
import React from 'react'
import { trimPublicAddress } from 'Utils'
import { DetailWrapper } from './styled'

const Detail = ({ data, dataCollection }) => {
  const { token_id, collection_address, token_name, token_count, chain } = data

  const { collection_name, current_number_of_items, max_items } = dataCollection

  return (
    <DetailWrapper>
      <TextNormal lineHeight="24px" color="title_grey" fontSize="size_16">
        Asset Detail
      </TextNormal>
      <TextNormal lineHeihgt="40px" color="text_grey" fontSize="size_32" fontWeight="fw_700">
        {token_name}
      </TextNormal>
      <Row className="detail__content">
        <Col span={24} xl={12} className="detail__content__left">
          <TextNormal className="detail__content__left--title" color="title_grey">
            <span>{collection_name}</span>
            {token_count || 0} of {max_items}
          </TextNormal>
          <div className="detail__content__left--content">
            <div className="item">
              <TextNormal color="title_grey">Contract Address</TextNormal>
              <TextNormal color="text_blue">{trimPublicAddress(collection_address, 5)}</TextNormal>
            </div>
            <div className="item">
              <TextNormal color="title_grey">Token ID</TextNormal>
              <TextNormal color="text_grey">{token_id}</TextNormal>
            </div>
            <div className="item">
              <TextNormal color="title_grey">Blockchain</TextNormal>
              <TextNormal color="text_grey">{chain} Mainnet</TextNormal>
            </div>
            {/* Sprint 2: Hide because no have value */}
            {/* <div className="item">
              <TextNormal color="title_grey">Token Standard</TextNormal>
              <TextNormal color="text_grey">ERC721</TextNormal>
            </div>
            <div className="item">
              <TextNormal color="title_grey">Contract Creation Height</TextNormal>
              <TextNormal color="text_grey">12,287,507</TextNormal>
            </div> */}
          </div>
        </Col>
        {data.token_trait && data.token_trait.traits && (
          <Col span={24} xl={12} className="detail__content__right">
            <TextNormal
              className="detail__content__right--title"
              color="text_grey"
              fontSize="size_24"
              fontWeight="fw_700"
            >
              Attributes
            </TextNormal>
            <div className="detail__content__right--content">
              {data.token_trait.traits.map((item, index) => (
                <div className="item" key={index}>
                  <TextNormal color="title_grey">{item.trait_type}</TextNormal>
                  <TextNormal color="text_blue">{item.trait_value.str_val}</TextNormal>
                </div>
              ))}
            </div>
          </Col>
        )}
      </Row>
    </DetailWrapper>
  )
}

export default Detail
