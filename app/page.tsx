import Image from "next/image";
import { Redirect } from "next";
import { redirect } from "next/navigation";
import Redirector from "@/components/Redirector";
export default function Home() {
  return (
    <Redirector />
  );
}
