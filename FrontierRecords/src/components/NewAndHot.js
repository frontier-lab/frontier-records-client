import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Container, Grid, Row, Col, Card, CardItem, Body } from 'native-base';
import styles from '../style/NewAndHot';
import commonStyle from '../style/common';

class NewAndHotCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      textTitle: props.textTitle,
      textBody: props.textBody
    }
  }
  render() {
    return (
      <Col style={[commonStyle.backgroundBlack, styles.col]}>
        <Card transparent style={[commonStyle.backgroundBlack, styles.card]}>
          <CardItem listItemPadding={0} style={styles.cardBody}>
            <Body>

            </Body>
          </CardItem>
          <Row style={styles.cardFooter}>
            <Col>
              <Text style={styles.cardFooterTextTitle}>
                {this.state.textTitle}
              </Text>
              <Text style={styles.cardFooterTextBody}>
                {this.state.textBody}
              </Text>
            </Col>
          </Row>
        </Card>
      </Col>
    )
  }
}

export class NewAndHot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
          title: "Competition",
          body: "Name"
        },
        {
          title: "Mixtape",
          body: "새로 업로드된 음악"
        },
        {
          title: "Mixtape",
          body: "Name"
        },
        {
          title: "Competition",
          body: "Name"
        },
        {
          title: "Mixtape",
          body: "새로 업로드된 음악"
        },
        {
          title: "Mixtape",
          body: "Name"
        },
      ]
    }
  }
  render() {
    return (
      <Container style={[commonStyle.backgroundBlack, styles.container]}>
        <Text h2 style={[styles.headerText]}>
          NEW & HOT
            </Text>
        <ScrollView horizontal={true}>
          <Grid>
            <Row style={styles.row}>
              {this.state.cardData.map( (data, idx) => {
                return (<NewAndHotCard key={idx} textTitle={data.title} textBody={data.body} />)
              })
              }
            </Row>
          </Grid>
        </ScrollView>
      </Container>
    )
  }
}

export default NewAndHot
