import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from '../navigation/navigation2'
import { Provider } from 'react-redux'
import Store from '../Store/configurationStore'





class Prizes extends React.Component {
    
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <Provider store={Store}>
        <Navigation/>
      </Provider>
    )
    }
}

const styles = StyleSheet.create({
  
  })

export default Prizes
