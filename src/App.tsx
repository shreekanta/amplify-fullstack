import React from 'react';
import './App.css';
import {Button, Card, Heading, View, withAuthenticator} from "@aws-amplify/ui-react";

// @ts-ignore
function App({signOut}) {
  return (
    <View className="App">
        <Card>
            <Heading level={1}>We now have auth</Heading>
        </Card>
        <Button onClick={signOut}>Sign out</Button>
    </View>
  );
}

export default withAuthenticator(App);
