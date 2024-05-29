"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        if (!token) {
            router.push("/login");
            return;
        }

        // Fetch or set your protected data here
        console.log("This is protected admin data.");
    }, [router]);
    return <div>Chart</div>;
}
