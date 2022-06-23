import { TextInput, View, Button } from 'react-native'
import React, { Component } from 'react'

//eventually chane old states to useState
export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password: '',
            name: '',
        }
        this.onSignUp = this.onSignUp.bind(this)
    }
    onSignUp() {

    }

    render() {
    return (
      <View>
        <TextInput 
            placeholder='name'
            onChangeText={(name) => this.setState({ name })}
        />
        <TextInput 
            placeholder='email'
            onChangeText={(email) => this.setState({ email })}
        />
        <TextInput 
            placeholder='password'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
        />
        <Button 
            onPress={() => this.onSignUp()}
            title='Sign Up'
        />
      </View>
    )
  }
}

export default Register