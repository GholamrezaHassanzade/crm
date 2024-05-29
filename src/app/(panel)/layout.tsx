"use client";
import { Flex } from "@/components/atoms";
import { Sidebar } from "@/components/molecules";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Flex direction="row" height="100vh">
            <Flex width="15%" direction="column">
                <Sidebar />
            </Flex>
            <Flex width="85%" direction="column">
                <header>
                    <nav>Header</nav>
                </header>
                <main>{children}</main>
            </Flex>
        </Flex>
    );
}
