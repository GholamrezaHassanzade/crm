"use client";

import { Flex, Form, Input, Typography, Button } from "@/components/atoms";
import { useTheme } from "@emotion/react";
import { Grid } from "@mui/material";

export default function LoginPage() {
    const { PRIMARY } = useTheme();
    return (
        <Flex
            align="center"
            justify="center"
            width="100%"
            height="100%"
            bgColor={PRIMARY}
        >
            <Form width="600px">
                <Grid container spacing={4}>
                    <Grid item md={12} xs={12}>
                        <Typography variant="body1"> نام کاربری </Typography>
                        <Input placeholder="نام کاربری " variant="outlined" />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Typography variant="h1"> رمز عبور</Typography>
                        <Input placeholder="رمز عبور" variant="outlined" />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        sdg
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Button variant="contained" fullWidth>
                            ورود
                        </Button>
                    </Grid>
                </Grid>
            </Form>
        </Flex>
    );
}
