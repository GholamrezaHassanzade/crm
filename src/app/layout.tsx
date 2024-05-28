import type { Metadata } from "next";
import localFont from "next/font/local";
import { AppConfigurations } from "@/configs/app-configurations/app.configurations";

const IRANSans = localFont({
    src: "../../public/fonts/IRANSansXV.woff",
});
export const metadata: Metadata = {
    title: "CRM",
    description: "Customer relationship management",
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
            <body className={IRANSans.className}>
                <AppConfigurations>{children}</AppConfigurations>{" "}
            </body>
        </html>
    );
}
