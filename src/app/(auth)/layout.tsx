"use client";
import { Flex, Form, Input, Typography, Button } from "@/components/atoms";
import { useTheme } from "@emotion/react";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { PRIMARY } = useTheme();

    return (
        <Flex
            align="center"
            justify="center"
            width="100%"
            height="100%"
            bgColor={PRIMARY}
        >
            {children}
        </Flex>
    );
}
