"use client";
import Reactfrom from "react";

import { Flex, Form, Input } from "@/components/atoms";
import { Grid, FormControl, FormLabel } from "@mui/material";

export default function LoginPage() {
    return (
        <Flex align="center" justify="center" width="100%" height="100%">
            <Form width="700px" height="450px">
                <Grid container spacing={4}>
                    <Grid item md={12} xs={12}>
                        <FormControl>
                            <FormLabel>user name</FormLabel>
                            <Input placeholder="user name" variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        1
                    </Grid>
                    <Grid item md={12} xs={12}>
                        1
                    </Grid>
                </Grid>
            </Form>
        </Flex>
    );
}
