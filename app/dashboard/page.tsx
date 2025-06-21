import { getServerSession } from "next-auth/next";
import { authOptions } from "@/server/auth";
import { redirect } from "next/navigation";
import SignOut from "@/components/SignOut";
import { tours } from "@/server/Trips";
import DashboardComponent from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Kullanıcı paneli',
};

export default async function page() {
    const session = await getServerSession(authOptions);
    return (
        <DashboardComponent tours={tours} session={session} />
    );
}
