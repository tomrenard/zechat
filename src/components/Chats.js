import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

export default function Chats() {
  const history = useHistory();
  const { user } = useAuth();
  async function handleLogout() {
    await auth.signOut();
    history.push('/');
  }
  useEffect(() => {
    if (!user) {
      history.push('/');
      return;
    }
    axios.get('htps://api.chatengine.io/users/me')
  }, [user, history])
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">
          ZeChat
        </div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="66cf1cdd-3a9e-4763-8ba7-bf2ac9939687"
        userName="."
        userSecret="."
      />
    </div>
  )
}
