import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
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

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SideMenu from '../../component/sideMenu/sideMenu';
import HeaderComponent from '../../component/header/header';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registeredUser: [],
    };
  }

  //   UNSAFE_componentWillReceiveProps(newProps) {
  //     console.log('newPros home', newProps);
  //     if (newProps.userData.createdUser.length > 0) {
  //       this.setState({
  //         registeredUser: newProps.userData.createdUser,
  //       });
  //     }
  //   }
  componentDidMount() {
    if (this.props.userData.createdUser.length > 0) {
      this.setState({
        registeredUser: this.props.userData.createdUser,
      });
    }
  }
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    const screenWidth = Dimensions.get('window').width;
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
            {this.state.registeredUser.length > 0 ? (
              <View style={{marginTop: 30}}>
                <LineChart
                  data={{
                    labels: [
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                    ],
                    datasets: [
                      {
                        data: [
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                        ],
                      },
                    ],
                  }}
                  width={Dimensions.get('window').width - 20} // from react-native
                  height={220}
                  yAxisLabel="$"
                  yAxisSuffix="k"
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      r: '6',
                      strokeWidth: '2',
                      stroke: '#ffa726',
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                  }}
                />
              </View>
            ) : null}
          </Content>
        </Container>
      </Drawer>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userStore,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

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
