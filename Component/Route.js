import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux'
import HomeScreen from './HomeScreen'
import UserConnected from './UserConnected'
import {AsyncStorage} from 'react-native'

class Route extends React.Component {
    
  constructor(props) {
    super(props)
    this.state = {
        userToken : this.getTokenStorage(),
        userStorage : ""
    }
  }

  componentDidMount(){
    this.getTokenStorage()
  }
  componentDidUpdate(){
  }

  _initialisation(){
    console.log('on est dans la route ')
      if(this.state.userStorage == ""){
        return(
       <HomeScreen navigation={this.props.navigation}/>
        )
      }
      else{
        const action = { type: "SAVETOKEN", value: this.state.userStorage }
            this.props.dispatch(action)
        return(
          
                <UserConnected />
        )
      }
  }

  getTokenStorage = async()=>{
    let userData = await AsyncStorage.getItem('userData');
    let data = JSON.parse(userData);
    this.setState({
      userStorage : data
    }, () => {
    return data;
  })
  }

  render() {
    return (
      <View style={styles.container}>
          {this._initialisation()}

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container :{
        flex : 1
    }
  })


  const mapStateToProps = (state) => {
    return {
      userToken: state.userToken
    }
  }
  

export default connect(mapStateToProps)(Route)