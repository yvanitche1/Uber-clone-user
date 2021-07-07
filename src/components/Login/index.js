import React, { Component } from "react";
import { View, Text, TextInput, Button, Alert, state, TouchableOpacity } from "react-native";
import style from "./style";
import firebase from "firebase";

class Login extends Component {
    state = {
        email: '',
        password: '',
        username: '',
        error: "",
        loading: false
    }

    signUp = async () => {
        try {
            const reponse = await (await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password));


        } catch (err) {
            setError(err.message)
        }
    }

    // onBottonPress = () => {
    //     firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    //         .then(this.onLoginsucces)
    //         .catch(err => {
    //             this.setState({
    //                 error: err.message,
    //             })
    //         })

    // }

    onLoginsucces = () => {
        this.setState({
            error: '',
            loading: false
        })
    }

    render() {
        return (
            <View style={style.container}>
                <Text>emailandpassjkjkjkjfhgjhjhjhkjkkjkjjhkjkkkkj</Text>
                <Text style={style.textLabel}>Email</Text>
                <TextInput
                    placeholder="your email"
                    style={style.textInput}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />

                <Text style={style.textLabel}>Password</Text>
                <TextInput
                    placeholder="your password"
                    style={style.textInput}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />

                <Text style={style.textLabel}>Username</Text>
                <TextInput
                    placeholder="your Username"
                    style={style.textInput}
                    value={this.state.username}
                    onChangeText={username => this.setState({ username })}
                />

                <TouchableOpacity style={style.buttonContainer} onPress={this.signUp}>
                    <Text style={style.buttonText}>Connecter</Text>
                </TouchableOpacity>
                <Text style={style.errorText}>
                    {this.state.error}
                </Text>
            </View>
        );
    }
}
export default Login;

// const Login = (props) => {
//     return (
//         <View style={style.container}>
//             <Text>emailandpassjkjkjkjfhgjhjhjhkjkkjkjjhkjkkkkj</Text>
//             <View>
//                 <Text>Email</Text>
//                 <TextInput placeholder="your email" />
//                 <Text>Password</Text>
//                 <TextInput placeholder="your password" />
//                 <Text>Username</Text>
//                 <TextInput placeholder="your Username" />
//             </View>
//             <View>
//                 <Button title="Connecter" />
//             </View>
//             <View>
//                 <Button title="S'inscrire" />
//             </View>
//         </View>

//     );
// };

// export default Login;