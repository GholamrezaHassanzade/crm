import React from "react";
import { Flex, Image, Typography } from "@/components/atoms";
import { useTheme } from "@emotion/react";
import { IMAGES } from "@/constants/contents";

export const SidebarMolecules = () => {
    const { PRIMARY, WHITE } = useTheme();

    return (
        <Flex
            direction="column"
            bgColor={PRIMARY}
            height="100vh"
            padding="16px"
            gap="35px"
        >
            <Flex align="center" justify="center" height="10%">
                <Flex
                    align="center"
                    justify="center"
                    direction="column"
                    gap="6px"
                >
                    <Image src={IMAGES.LOGO} alt="logo" width={120} />
                    <Typography variant="body1" fontSize={12} color={WHITE}>
                        {" "}
                        گروه فناوری اطلاعات
                    </Typography>
                </Flex>
            </Flex>

            <Flex height="90%" direction="column" gap="8px" bgColor="yellow">
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </Flex>
        </Flex>
    );
};
