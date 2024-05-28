import { AppConfigurations } from "@/configs/app-configurations/app.configurations";


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
