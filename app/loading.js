"use client"

import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        {/* Main Loading Animation */}
        <div className="relative mb-8">
          {/* Outer ring */}
          <div className="w-20 h-20 mx-auto border-4 rounded-full border-muted animate-spin border-t-primary"></div>
          {/* Inner ring */}
          <div className="absolute w-16 h-16 transform -translate-x-1/2 border-4 rounded-full top-2 left-1/2 border-muted animate-spin border-b-secondary animate-reverse-spin"></div>
          {/* Center dot */}
          <div className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-primary animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Loading</h2>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <p className="mt-4 text-muted-foreground">Please wait while we prepare your content...</p>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto mt-8">
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse-width"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes reverse-spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        @keyframes pulse-width {
          0%, 100% {
            width: 0%;
          }
          50% {
            width: 100%;
          }
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 1s linear infinite;
        }
        
        .animate-pulse-width {
          animation: pulse-width 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;