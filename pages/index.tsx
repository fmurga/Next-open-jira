import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";
import { NewEntry } from "../components/ui";
import { EntryList } from "../components/ui";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - Open Jira">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={4} xl={4}>
          <Card sx={{ height: "calc(100vh -100px)" }}>
            <CardHeader title="Pendientes" />
            <NewEntry />
            <EntryList status="pending" />
          </Card>
        </Grid>
        <Grid item xs={12} md={12} lg={4} xl={4}>
          <Card sx={{ height: "calc(100vh -100px)" }}>
            <CardHeader title="En Curso" />
            <EntryList status="in-progress" />
          </Card>
        </Grid>
        <Grid item xs={12} md={12} lg={4} xl={4}>
          <Card sx={{ height: "calc(100vh -100px)" }}>
            <CardHeader title="Terminados" />
            <EntryList status="complete" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
