import React, { useEffect } from 'react';
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
    <div>
      <h2>Web Chat UI Here</h2>
    </div>
  );
}
// Web chat UI wrapper
