import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import SearchBox from "./Components/SearchBox";
import QuerySummary from "./Components/QuerySummary";
import ResultList from "./Components/ResultList";
import Pager from "./Components/Pager";
import Facet from "./Components/Facet";
import ResultsPerPage from "./Components/ResultsPerPage";
import FacetBreadcrumbs from "./Components/FacetBreadcrumbs";
import { SearchActions, AnalyticsActions } from "@coveo/headless";
import { headlessEngine } from "./Engine";
import CenteredTabs from "./Components/CenteredTabs";
import HeadlessTab from "./Components/Tab";
import Sort from "./Components/Sort";

export default class App extends React.Component {
  componentDidMount() {
    const { dispatch } = headlessEngine;
    dispatch(SearchActions.executeSearch(AnalyticsActions.logInterfaceLoad()));
  }

  render() {
    return (
      <Container maxWidth="md">
        <Box my={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            Coveo Headless + Material UI
          </Typography>
          <CenteredTabs>
            <HeadlessTab label="All Content" expression="" />
            <HeadlessTab
              label="Countries"
              expression='@source=="	
              Coveo Sample - ListCountries"'
            />
            <HeadlessTab
              label="BBC News Youtube"
              expression='@source=="Coveo Samples - Youtube BBC News"'
            />
          </CenteredTabs>
          <SearchBox />
          <Box my={1}>
            <FacetBreadcrumbs />
            <Grid container>
              <Grid item xs={4}>
                <Facet title="Source" field="source" />
                <Facet title="File Type" field="filetype" />
              </Grid>
              <Grid item xs={8}>
                <Grid container alignItems="flex-end">
                  <Grid item xs={8}>
                    <QuerySummary />
                  </Grid>
                  <Grid item xs={4}>
                    <Sort />
                  </Grid>
                </Grid>
                <ResultList />
              </Grid>
            </Grid>
          </Box>
          <Box my={4}>
            <Grid container>
              <Grid item xs={6}>
                <Pager />
              </Grid>
              <Grid item xs={6}>
                <ResultsPerPage />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }
}
