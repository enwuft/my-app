import Layout from "../components/Layout";
import Signup from "./auth/signup";
import {
  Button,
  Pane,
  Text,
  majorScale,
  Autocomplete,
  TextInput,
} from "evergreen-ui";
import { Navbar } from "components/widgets";

const IndexPage = () => (
  <Layout title="Home">
    <Pane display="flex" marginX={majorScale(2)}>
      <Navbar />
    </Pane>
    <Signup />
  </Layout>
);

export default IndexPage;
