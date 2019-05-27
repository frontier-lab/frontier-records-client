import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Container, Grid, Row, Col, Card, CardItem, Body } from 'native-base';
import Icons from 'react-native-vector-icons/AntDesign';
import commonStyle from '../style/common';
import MusicCard from './MusicCard';

class TagSearchResultCard extends Component {

  render() {
    return (
        <Row style={[commonStyle.backgroundBlack]}>
          <MusicCard 
                avatar={this.props.image} 
                title={this.props.title} 
                artist={this.props.artist} 
                right={<Icons name={"ellipsis1"} size={20} style={{ position: "absolute", right: 0, color: "#ffffff" }} />} />
        </Row>
    )
  }
}

export class TagSearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
          title: "미안해 (Feat. Beenzino)",
          artist: "자이언티 (Zion. T)",
          img: require('../assets/img/cover.png'),
        },
        {
          title: "미안해 (Feat. Beenzino)",
          artist: "자이언티 (Zion. T)",
          img: require('../assets/img/cover.png'),
        },
        {
          title: "미안해 (Feat. Beenzino)",
          artist: "자이언티 (Zion. T)",
          img: require('../assets/img/cover.png'),
        },
      ]
    }
  }
  render() {
    return (
      <Container style={[commonStyle.backgroundBlack]}>
        <ScrollView>
            {this.state.cardData.map( (data, idx) => {
              return (<TagSearchResultCard key={idx} title={data.title} artist={data.artist} image={data.img} />)
            })
            }
        </ScrollView>
      </Container>
    )
  }
}

export default TagSearchResult
