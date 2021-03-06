import * as React from 'react';

import Button from './Button';
import Firebase from '../api/firebase';

const SignoutButton = ({ navigation, ...props }) => {
  const handleSignout = async () => {
    try {
      await Firebase.shared.signOut();
      navigation.navigate('Auth');
    } catch (error) {
      console.error(error);
    }
  };

  return <Button
    title='Signout'
    onPress={handleSignout}
    {...props}
  />;
};

export default SignoutButton;

