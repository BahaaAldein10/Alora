import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex-center w-full min-h-screen">{children}</div>;
}
