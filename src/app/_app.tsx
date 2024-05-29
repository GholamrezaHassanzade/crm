// src/app/_app.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        // Redirect from '/' to '/admin'
        router.replace("/admin");
    }, [router]);

    return <Component {...pageProps} />;
}

export default MyApp;
