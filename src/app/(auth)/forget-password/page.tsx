"use client";
import { Form, Input, Typography, Button } from "@/components/atoms";

import { Grid, FormLabel } from "@mui/material";

export default function ForgetPasswordPage() {
    return (
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
                    <FormLabel component="label" htmlFor="password">
                        {" "}
                        تکرار رمز عبور
                    </FormLabel>
                    <Input
                        placeholder="تکرار رمز عبور "
                        variant="outlined"
                        id="password"
                    />
                </Grid>

                <Grid item md={12} xs={12}>
                    <Button variant="contained" fullWidth>
                        تغییر رمز عبور
                    </Button>
                </Grid>
            </Grid>
        </Form>
    );
}
