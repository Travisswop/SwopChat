import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { initXMTP, getClient } from '../shared/xmtpClient';

export default function Chat() {
  useEffect(() => {
    const load = async () => {
      const client = await initXMTP(userAddress, privyProvider);
      const convos = await client.conversations.list();
      console.log(convos);
    };
    load();
  }, []);

  return (
    <View>
      <Text>Mobile Chat UI Here</Text>
    </View>
  );
}
// React Native chat UI wrapper
