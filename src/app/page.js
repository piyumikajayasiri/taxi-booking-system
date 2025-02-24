"use client";
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation";

export default function Home() {
  return <Button variant="outline" className="object-center m-52 bg-black text-white" onClick={() => {redirect("/SIgn-In")}}>Sign In</Button>;
}
