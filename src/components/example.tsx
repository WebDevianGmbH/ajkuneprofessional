// Server Component
export default function ExampleWrapper() {
  return (
    <div>
      <ClientComponent />
    </div>
  );
}

// Client Component in separate file
"use client";
function ClientComponent() {
  // Code der window verwendet
} 