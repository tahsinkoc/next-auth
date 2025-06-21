import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SignOut from "@/components/SignOut";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <p><strong>Kullanıcı:</strong> {session?.user?.email}</p>
            <SignOut />
        </main>
    );
}
