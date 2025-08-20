import React from 'react';

// Feature flags for IP protection
export const FLAGS = {
  PUBLIC_IP_SAFE_MODE: true, // Set to true to hide 16-type list and detailed strands
};

// Helper component for IP-safe content
export const IPSafe = ({ children }) => {
  if (FLAGS.PUBLIC_IP_SAFE_MODE) {
    return null;
  }
  return <React.Fragment>{children}</React.Fragment>;
};
