import React from "react";
import { Flex, Image, Typography, Link } from "@/components/atoms";
import { useTheme } from "@emotion/react";
import { IMAGES } from "@/constants/contents";

export const SidebarMolecules = () => {
    const { PRIMARY, WHITE } = useTheme();

    return (
        <Flex direction="column" bgColor={PRIMARY} height="100vh" gap="35px">
            <Flex align="center" justify="center" height="10%" padding="16px">
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

            <Flex height="90%" direction="column">
                <Link href="/bugs/add">
                    <Flex
                        direction="row"
                        align="center"
                        bgColor="#1c5cf885"
                        width="100%"
                        justify="space-between"
                        padding="12px 0"
                    >
                        <Flex align="center" gap="8px" padding="0px 0 0  16px">
                            <Image src={IMAGES.PLUS} alt="plus" width={25} />
                            <Typography color={WHITE} fontSize={10}>
                                ایجاد سرنخ{" "}
                            </Typography>
                        </Flex>
                    </Flex>
                </Link>
                <Link href="/bugs">
                    <Flex
                        direction="row"
                        align="center"
                        //bgColor="#1c5cf885"
                        width="100%"
                        justify="space-between"
                        padding="12px 0"
                    >
                        <Flex align="center" gap="8px" padding="0px 0 0  16px">
                            <Image src={IMAGES.PLUS} alt="plus" width={25} />
                            <Typography color={WHITE} fontSize={10}>
                                مشاهده سرنخ ها{" "}
                            </Typography>
                        </Flex>
                    </Flex>
                </Link>
                <Link href="/bugs/import">
                    <Flex
                        direction="row"
                        align="center"
                        //bgColor="#1c5cf885"
                        width="100%"
                        justify="space-between"
                        padding="12px 0"
                    >
                        <Flex align="center" gap="8px" padding="0px 0 0  16px">
                            <Image src={IMAGES.PLUS} alt="plus" width={25} />
                            <Typography color={WHITE} fontSize={10}>
                                درون ریزی سرخ{" "}
                            </Typography>
                        </Flex>
                    </Flex>
                </Link>
            </Flex>
        </Flex>
    );
};
