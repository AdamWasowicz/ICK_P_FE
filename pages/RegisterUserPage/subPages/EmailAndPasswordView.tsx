import React from 'react';
import { View, StyleSheet } from 'react-native';
import BigText from '../../../components/UI/BigText';
import Button from '../../../components/UI/Button';
import MediumText from '../../../components/UI/MediumText';
import SimpleTextInput from '../../../components/UI/SimpleTextInput';

interface EmailAndPasswordViewProps {
    onPress: () => void,
    email: string,
    password: string,
    handleEmailChange: (value: string) => void,
    handlePasswordChange: (value: string) => void
}

const EmailAndPasswordView: React.FC<EmailAndPasswordViewProps> = (props) => {
    const style = StyleSheet.create({
        root: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 16,
        },

        center: {
            textAlign: 'center',
        },

        inputContainer: {
            marginBottom: 16,
        },

        input: {
            backgroundColor: 'white',
        },
    })

    return (
        <View style={style.root}>
                <View>
                    <BigText style={style.center}>Twoje dane do rejestracji</BigText>

                    <View style={style.inputContainer}>
                        <MediumText>Email:</MediumText>

                        <SimpleTextInput
                            value={props.email}
                            placeholder={"E-mail"}
                            onChangeText={props.handleEmailChange}
                            containerStyle={style.input}
                        />
                    </View>

                    <View style={style.inputContainer}>
                        <MediumText>Hasło:</MediumText>

                        <SimpleTextInput
                            value={props.password}
                            placeholder={"Hasło"}
                            onChangeText={props.handlePasswordChange}
                            containerStyle={style.input}
                            password={true}
                        />
                    </View>
                </View>

                <Button
                    onPress={props.onPress}
                    caption={"Zaakceptuj i przejdź dalej"}
                    textStyle={{fontSize: 24}}
                />
            </View>
    )
}

export default EmailAndPasswordView;