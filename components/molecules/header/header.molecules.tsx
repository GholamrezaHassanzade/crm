import { Flex, Link } from "@/components/atoms";
import { useTheme } from "@emotion/react";

export const HeaderMolecules = () => {
    const { WHITE } = useTheme();
    return (
        <Flex
            align="center"
            justify="space-between"
            padding="20px 10px"
           // height="20%"
            bgColor={WHITE}
        >
            <Flex align="center" gap="12px">
                <Link href={"/"}> خانه </Link>
                <Link href={"/bugs"}>درخواست ها</Link>
                <Link href={"/leads"}> سرنخ ها </Link>
            </Flex>
        </Flex>
    );
};
