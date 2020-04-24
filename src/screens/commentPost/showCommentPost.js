import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {Container, Content, Item, Input, Drawer} from 'native-base';
import ButtonComponent from '../../component/button/button';
import SideMenu from '../../component/sideMenu/sideMenu';
import HeaderComponent from '../../component/header/header';

class ShowCommentPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCommentPost: [],
    };
  }

  componentDidMount() {
    if (this.props.commentPost.commentPost) {
      this.setState({
        showCommentPost: this.props.commentPost.commentPost,
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
    const {showCommentPost} = this.state;
    console.log('showCommentPost', showCommentPost);
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
        <Container style={{backgroundColor: '#f2fcff'}}>
          <HeaderComponent
            title=""
            navigation={this.props.navigation}
            openDrawer={this.openDrawer}
            onClose={this.closeDrawer}
          />
          <View style={styles.headeView}>
            <Text style={styles.titleTxt}>SHOW COMMENT AND POST</Text>
          </View>
          <Content padder style={styles.container}>
            {showCommentPost.length > 0
              ? showCommentPost.map(post => {
                  console.log('post', post);
                  return (
                    <View style={styles.imgBoxView}>
                      <Image
                        style={{
                          height: Dimensions.get('window').height / 4,
                          width: Dimensions.get('window').width - 30,
                          borderRadius: 20,
                          marginBottom: 10,
                        }}
                        source={{uri: post.img}}
                      />
                      <Text style={{fontWeight: 'bold', fontSize: 16}}>
                        {post.comment}
                      </Text>
                    </View>
                  );
                })
              : null}
          </Content>
          <View style={styles.buttonView}>
            <ButtonComponent
              text={'Back'}
              btnAction={() => this.props.navigation.goBack()}
            />
          </View>
        </Container>
      </Drawer>
    );
  }
}

const mapStateToProps = state => {
  return {
    commentPost: state.commentPostStore,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowCommentPost);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2fcff',
  },
  headeView: {alignItems: 'center', margin: 20},
  titleTxt: {fontSize: 20, fontWeight: 'bold'},
  itemView: {
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  buttonView: {
    marginTop: 20,
  },
  imgBoxView: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width - 30,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
});
