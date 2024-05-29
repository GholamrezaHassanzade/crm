"use client";
import { Flex, Typography } from "@/components/atoms";
import { Header, Sidebar } from "@/components/molecules";
import { useTheme } from "@emotion/react";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { WHITE } = useTheme();

    return (
        <Flex direction="row" height="100vh">
            <Flex width="15%" direction="column">
                <Sidebar />
            </Flex>
            <Flex width="85%" direction="column" gap="25px">
                <Header />
                <Flex direction="row" padding="0 30px">
                    <Typography>در خواست ها</Typography>
                </Flex>
                <Flex height="100%" padding="0 30px 20px 30px" direction="column">
                    <Flex
                        height="100%"
                        padding="30px 10px"
                        direction="column"
                        bgColor={WHITE}
                    >
                        {children}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
