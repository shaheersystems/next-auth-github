import Image from "next/image";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
export default async function Home() {
  const session = await getServerSession();
  console.log(session);
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
