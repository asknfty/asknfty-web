import { Slider } from 'antd'
import { ICON_NFT_PRICE } from 'Assets'
import { Image, TextNormal } from 'Components'
import React from 'react'
import { BoxWrapper } from 'Themes'
import { DataRange, DesWrapper, Wrapper } from './styled'

const PRICE_ESTIMATES = [
  { label: '4 Clothes traits', total: '107' },
  { label: '7 Eyes traits', total: '806' },
  { label: '3 Background traits', total: '492' },
  { label: '+ 4 more', total: '875' }
]

const marks = {
  0: {
    label: (
      <DataRange>
        <div className="icon__crypto__price">
          <Image src={ICON_NFT_PRICE} />
        </div>
        <TextNormal color="bd_grey_dark" fontSize="size_16">
          20,650
        </TextNormal>
      </DataRange>
    )
  },
  59: {
    label: (
      <DataRange>
        <div className="icon__crypto__price">
          <Image src={ICON_NFT_PRICE} />
        </div>
        <TextNormal fontSize="size_16">20,650</TextNormal>
      </DataRange>
    )
  },
  100: {
    label: (
      <DataRange>
        <div className="icon__crypto__price">
          <Image src={ICON_NFT_PRICE} />
        </div>
        <TextNormal color="bd_grey_dark" fontSize="size_16">
          20,650
        </TextNormal>
      </DataRange>
    )
  }
  // 100: {
  //   style: {
  //     color: '#f50',
  //   },
  //   label: <strong>100°C</strong>,
  // }
}

const Description = () => {
  return (
    <DesWrapper>
      <div className="description__item">
        <BoxWrapper>
          <TextNormal fontWeight="fw_800" color="text_grey" className="description__item__title">
            Description
          </TextNormal>
          <div className="description__item__content">
            <TextNormal color="grey_low">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio a, varius cursus fames quam
              pellentesque netus nisl. Arcu blandit proin iaculis urna. Malesuada congue quis cras viverra.
            </TextNormal>
          </div>
        </BoxWrapper>
      </div>
      <div className="description__item">
        <BoxWrapper>
          <TextNormal fontWeight="fw_800" color="text_grey" className="description__item__title">
            Price Estimate
          </TextNormal>
          <div className="description__item__content range">
            <TextNormal className="estimate" fontWeight="fw_700" color="grey_text">
              Estimated Price Range
            </TextNormal>
            <Slider marks={marks} defaultValue={59} disabled />
          </div>
        </BoxWrapper>
      </div>
    </DesWrapper>
  )
}

export default Description
