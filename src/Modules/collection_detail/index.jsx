import { Tabs } from 'antd'
import HomeLayout from 'Modules/layouts/home'
import React from 'react'
import CollectionList from './collection_list'
import Description from './description'
import MainInfo from './main_info'
import { Wrapper, Container, MainContent } from './styled'

const { TabPane } = Tabs

const CollectionDetailScreen = () => {
  return (
    <HomeLayout>
      <Wrapper>
        <Container>
          <MainInfo />
          <Description />
          <CollectionList />
          {/* <DesWrapper>
            <div className="description__item">
              <BoxWrapper>
                <TextNormal fontWeight="fw_800" color="text_grey" className="description__item__title">
                  Description
                </TextNormal>
                <div className="description__item__content">
                  <TextNormal color="grey_low">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio a, varius cursus fames quam
                    pellentesque netus nisl. Arcu blandit proin iaculis urna. Malesuada congue quis cras
                    viverra.
                  </TextNormal>
                </div>
              </BoxWrapper>
            </div>
            <div className="description__item">
              <BoxWrapper>
                <TextNormal fontWeight="fw_800" color="text_grey" className="description__item__title">
                  Price Estimate
                </TextNormal>
                <div className="description__item__content">
                  <TextNormal color="grey_low">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio a, varius cursus fames quam
                    pellentesque netus nisl. Arcu blandit proin iaculis urna. Malesuada congue quis cras
                    viverra.
                  </TextNormal>
                </div>
              </BoxWrapper>
            </div>
          </DesWrapper> */}
          <MainContent>
            {/* <CollectionWrapper>
              <Description />
            </CollectionWrapper> */}
            {/* <Tabs defaultActiveKey="1">
              <TabPane tab="Collection Info" key="1">
                <CollectionWrapper>
                  <Description />
                </CollectionWrapper>
              </TabPane>
              <TabPane tab="NFT Items (32)" key="2">
                NFT Items (32)
              </TabPane>
            </Tabs> */}
          </MainContent>
        </Container>
      </Wrapper>
    </HomeLayout>
  )
}

export default CollectionDetailScreen
