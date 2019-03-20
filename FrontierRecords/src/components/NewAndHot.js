import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Container, Grid, Row, Col, Card, CardItem, Body } from 'native-base';
import styles from '../style/NewAndHot';
import commonStyle from '../style/common';

const newHot = {
  width: 319,
  height: 24,
  fontFamily: "Helvetica",
  fontSize: 20,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: -0.09,
  color: "#ffffff"
};

const rectangleWrap = {
  width: 150,
  height: 300,
  // opacity: 0.12,
};

const rectangleWrap1 = {
  paddingTop: 6,
  paddingRight: 6,
  paddingLeft: 6,
  backgroundColor: "yellow",
  alignItems: 'center',
};

const rectangle = {
  width: 138,
  height: 138,
  borderRadius: 10,
  backgroundColor: "red",

};

const rectangle1 = {
  width: 138,
  backgroundColor: "blue",
  padding: 0,
  margin: 0,
};

const competition = {
  width: 130,
  height: 18,
  opacity: 0.8,
  fontSize: 14,
  fontWeight: "bold",
  fontStyle: "normal",
  lineHeight: 18,
  letterSpacing: -0.8,
  color: "#ff00ff",
  margin: 0
};


const nameCopy = {
  width: 130,
  height: 14,
  opacity: 0.5,
  fontSize: 13,
  fontWeight: "bold",
  fontStyle: "normal",
  lineHeight: 14,
  letterSpacing: 0,
  color: "#ffff00",
  margin: 0,
};

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
