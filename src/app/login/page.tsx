"use client";

import { Flex, Form, Input, Typography } from "@/components/atoms";
import { useTheme } from "@emotion/react";
import { Button, Grid } from "@mui/material";

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
                        <Typography variant="h1">user name</Typography>
                        <Input placeholder="user name" variant="outlined" />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Typography variant="h1">password</Typography>
                        <Input placeholder="password" variant="outlined" />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Button variant="contained" fullWidth>
                            submit
                        </Button>
                    </Grid>
                </Grid>
            </Form>
        </Flex>
    );
}
