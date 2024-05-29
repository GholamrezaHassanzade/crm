"use client";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import LoadingSkeleton from "@mui/material/Skeleton";

import { Flex, Form } from "@/components/atoms";
import { Grid } from "@mui/material";

export default function LoadingPage() {
    const [loading, setLoading] = useState(false);
    const { PRIMARY } = useTheme();
    const handleLogin = () => {
        setLoading(true);

    };


    return (
        <Flex
            align="center"
            justify="center"
            width="100%"
            height="100%"
            bgColor={PRIMARY}
        >
            <Form width="600px">
                <Grid container spacing={3}>
                    <Grid item md={12} xs={12}>
                        <LoadingSkeleton
                            variant="rounded"
                            animation="wave"
                            height={45}
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <LoadingSkeleton
                            variant="rounded"
                            animation="wave"
                            height={45}
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <LoadingSkeleton
                            variant="rounded"
                            animation="wave"
                            height={45}
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <LoadingSkeleton
                            variant="rounded"
                            animation="wave"
                            height={45}
                        />
                    </Grid>
                </Grid>
            </Form>
        </Flex>
    );
}
