import { AppConfigurations } from "@/configs/app-configurations/app.configurations";

import "../globals.css"; // اضافه کردن فایل CSS عمومی

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
            <body>
                <AppConfigurations>{children}</AppConfigurations>{" "}
            </body>
        </html>
    );
}
