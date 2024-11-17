"use client";

import React from 'react';

function ClientComponent() {
  return (
    <div>
      {/* Ihr Client-seitiger Code hier */}
    </div>
  );
}

export default function ExampleWrapper() {
  return (
    <div>
      <ClientComponent />
    </div>
  );
} 