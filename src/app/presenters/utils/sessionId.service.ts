"use client";

const sessionIdKey = "sessionId";

const getSessionId = () => {
  let sessionId = localStorage.getItem(sessionIdKey);
  if (!sessionId) {
    sessionId = Math.random().toString(36).substring(7);
    localStorage.setItem(sessionIdKey, sessionId);
  }
  return sessionId;
};

export { getSessionId };