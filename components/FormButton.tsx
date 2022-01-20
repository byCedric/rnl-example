import { MaterialIcons } from '@expo/vector-icons';
import { PropsWithChildren } from 'react';
import { ButtonProps, Text } from 'react-native';

type FormButtonProps = Omit<ButtonProps, 'title'> & PropsWithChildren<{}>;

function FormButton(props: FormButtonProps) {
  const handleSubmit = () => { };

  return null;
}

const handleSubmit = () => { };

function SignUpScreen() {
  return (
    <FormButton onPress={handleSubmit}>
      <MaterialIcons name="account-circle" size={24} />
      <Text>Sign in</Text>
    </FormButton>
  )
}
