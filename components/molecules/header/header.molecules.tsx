import { Flex } from "@/components/atoms";
import Link from "next/link";

export const HeaderMolecules = () => {
    return (
        <Flex align="center" justify="space-between" padding="32px 8px">
            <Flex align="center" gap="12px">
                <Link href={"/bugs"}>درخواست ها</Link>
                <Link href={"/leads"}> سرنخ ها </Link>
            </Flex>
            <div>Header</div>
        </Flex>
    );
};
