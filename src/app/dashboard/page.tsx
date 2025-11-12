"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function DashboardPage() {
  const [data, setData] = useState("");
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    fetch("/api/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch(() => router.push("/login"));
  }, [router]);
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-xl">{data || "Loading..."}</h1>
    </div>
  );
}
