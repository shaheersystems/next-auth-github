"use client";
import { useSession } from "next-auth/react";

const DashboardNavigation = () => {
  const { data: session } = useSession();
  return (
    <nav className="flex items-center justify-between p-4 border">
      <div className="text-2xl font-semibold">Converse.</div>
      <div className="flex items-center gap-4">
        <a href="/dashboard" className="text-gray-600 hover:text-gray-800">
          Dashboard
        </a>
        <a
          href="/dashboard/settings"
          className="text-gray-600 hover:text-gray-800"
        >
          Settings
        </a>
      </div>
      <div className="flex flex-row-reverse items-center gap-2">
        <h2 className="text-lg font-semibold">{session?.user?.name}</h2>
        <img
          src={session?.user?.image}
          className="object-cover w-12 h-12 rounded-full cursor-pointer"
          alt=""
        />
      </div>
    </nav>
  );
};

export default DashboardNavigation;
