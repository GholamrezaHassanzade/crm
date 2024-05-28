"use client";

import { Flex, Form, Input, Typography } from "@/components/atoms";
import { Grid } from "@mui/material";

export default function LoginPage() {
    return (
        <Flex align="center" justify="center" width="100%" height="100%">
            <Form width="600" height="500">
                <Grid container spacing={3}>
                    <Grid item md={12} xs={12}>
                        <Typography variant="h1">user name</Typography>
                        <Input placeholder="user name" variant="outlined" />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Typography variant="h1">password</Typography>
                        <Input placeholder="password" variant="outlined" />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        1
                    </Grid>
                </Grid>
            </Form>
        </Flex>
    );
}
