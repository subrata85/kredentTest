import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  BackHandler,
  Linking,
} from 'react-native';
import {
  Container,
  Content,
  Item,
  Input,
  Label,
  Card,
  CardItem,
  Body,
  Drawer,
} from 'native-base';
import SideMenu from '../../component/sideMenu/sideMenu';
import HeaderComponent from '../../component/header/header';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={
          <SideMenu
            navigation={this.props.navigation}
            onClose={this.closeDrawer}
          />
        }
        onClose={() => this.closeDrawer()}>
        <Container>
          <HeaderComponent
            title="Home"
            navigation={this.props.navigation}
            openDrawer={this.openDrawer}
          />
          <Content padder style={styles.container}>
            <View style={{marginTop: 30}}>
              <Card style={styles.cardStyle}>
                <CardItem
                  header
                  button
                  style={styles.cardStyle}
                  onPress={() =>
                    this.props.navigation.navigate('shoppingList')
                  }>
                  <Text style={styles.buttonText}>
                    To do/ To get (shop-list)
                  </Text>
                </CardItem>
              </Card>
              <Card style={styles.cardStyle}>
                <CardItem
                  header
                  button
                  onPress={() => this.props.navigation.navigate('groupList')}
                  style={styles.cardStyle}>
                  <Text style={styles.buttonText}>Size keeper</Text>
                </CardItem>
              </Card>
              <Card style={styles.cardStyle}>
                <CardItem
                  onPress={() =>
                    Linking.openURL('https://www.amazon.com/gp/goldbox')
                  }
                  header
                  button
                  style={styles.cardStyle}>
                  <Text style={styles.buttonText}>Amazon deals</Text>
                </CardItem>
              </Card>
            </View>
          </Content>
        </Container>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2fcff',
  },
  cardStyle: {
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: '#1ab2ff',
    fontSize: 18,
  },
});

export default Home;
