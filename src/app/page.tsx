'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    console.log("Hello, World!");
    router.push("/dashboard");
  });
}
