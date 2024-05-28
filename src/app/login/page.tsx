"use client";

import { Flex, Form, Input, Typography, Button } from "@/components/atoms";
import { useTheme } from "@emotion/react";
import { Grid, FormLabel } from "@mui/material";

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
                <Grid container spacing={3}>
                    <Grid item md={12} xs={12}>
                        <FormLabel component="label" htmlFor="username">
                            {" "}
                            نام کاربری
                        </FormLabel>
                        <Input
                            placeholder="نام کاربری "
                            variant="outlined"
                            id="username"
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <FormLabel component="label" htmlFor="password">
                            {" "}
                            رمز عبور
                        </FormLabel>
                        <Input
                            placeholder="رمز عبور"
                            variant="outlined"
                            id="password"
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Typography>
                            فراموشی
                            <Button variant="text">رمز عبور</Button>{" "}
                        </Typography>
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
