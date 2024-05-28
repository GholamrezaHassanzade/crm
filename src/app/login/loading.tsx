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
        // Perform login logic here
        // Example: loginUser()
    };
    // You can add any UI inside Loading, including a Skeleton.
    /*  return (
        <Container maxWidth="sm">
            <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={12}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Login
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <LoadingSkeleton variant="text" animation="wave" />
                </Grid>
                <Grid item xs={12}>
                    <LoadingSkeleton variant="text" animation="wave" />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleLogin}
                        disabled={loading} // Disable button when loading
                    >
                        {loading ? (
                            <LoadingSkeleton
                                variant="text"
                                animation="wave"
                                width={100}
                            />
                        ) : (
                            "Login"
                        )}
                    </Button>
                </Grid>
            </Grid>
        </Container>
    ); */

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
