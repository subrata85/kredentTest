import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {Container, Content, Item, Input, Drawer} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import ToastMessage from '../../component/toastMessage/toastMessage';
import ButtonComponent from '../../component/button/button';
import SideMenu from '../../component/sideMenu/sideMenu';
import HeaderComponent from '../../component/header/header';

import {
  storeCommentPost,
  resetPostMessage,
} from '../../reduxModules/actions/index';

class CommentPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postImage: '',
      comment: '',
    };
  }

  onOpenImagePicker = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = 'data:image/jpeg;base64,' + response.data;
        this.setState({
          postImage: source,
        });
      }
    });
  };

  onSubmitCommentAndPost = () => {
    if (this.state.postImage) {
      let data = {
        img: this.state.postImage,
        comment: this.state.comment,
      };
      this.props.storeCommentPost(data);
    }
  };

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.commentPost.message) {
      ToastMessage({
        message: newProps.commentPost.message,
        type: newProps.commentPost.messageType,
      });
      this.props.resetPostMessage();
      this.setState({
        postImage: '',
        comment: '',
      });
      this.props.navigation.navigate('showCommentPost');
    }
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    const {postImage, comment} = this.state;
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
            title="Comment Post"
            navigation={this.props.navigation}
            openDrawer={this.openDrawer}
            onClose={this.closeDrawer}
          />
          <View style={styles.headeView}>
            <Text style={styles.titleTxt}>COMMENT AND POST</Text>
          </View>
          <Content padder style={styles.container}>
            <View style={styles.imgBoxView}>
              <TouchableOpacity
                onPress={() => this.onOpenImagePicker()}
                style={{padding: 10}}>
                {postImage ? (
                  <Image
                    style={{
                      height: Dimensions.get('window').height / 3,
                      width: Dimensions.get('window').width - 30,
                      borderRadius: 20,
                    }}
                    source={{uri: postImage}}
                  />
                ) : (
                  <Text style={{color: '#000000', fontSize: 20}}>
                    Upload Image
                  </Text>
                )}
              </TouchableOpacity>
            </View>
            {postImage ? (
              <Item rounded style={styles.itemView}>
                <Input
                  placeholder="Comment"
                  value={comment}
                  onChangeText={txt => {
                    this.setState({comment: txt});
                  }}
                  onSubmitEditing={() => {
                    this.onSubmitCommentAndPost();
                  }}
                />
              </Item>
            ) : null}
            {postImage ? (
              <View style={styles.buttonView}>
                <ButtonComponent
                  text={'POST IMAGE'}
                  btnAction={this.onSubmitCommentAndPost}
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
    commentPost: state.commentPostStore,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      storeCommentPost,
      resetPostMessage,
    },
    dispatch,
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentPost);

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
