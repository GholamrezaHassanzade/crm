import { FC } from "react";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

// * import interface
import { IMaterialUIConfigRTL } from "@/configs/app-configurations/mui/material-ui.config.interface";

export const MaterialUIConfigRTL: FC<IMaterialUIConfigRTL> = ({ children }) => {
    // Create rtl cache
    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
    });

    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};
