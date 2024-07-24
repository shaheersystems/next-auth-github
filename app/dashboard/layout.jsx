"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Use the useRouter hook for client-side navigation
import DashboardNavigation from "../../components/DashboardNavigation";

const DashboardLayout = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Check session status
  if (status === "loading") {
    return <div>Loading...</div>; // Render a loading state while session is being fetched
  }

  // If session exists, render children
  if (session) {
    return (
      <>
        <DashboardNavigation />
        <main>{children}</main>
      </>
    );
  }

  // If no session, redirect to login
  if (!session) {
    router.push("/api/auth/signin");
    return null; // Return null to avoid rendering the rest of the component
  }

  return null; // Fallback return
};

export default DashboardLayout;
