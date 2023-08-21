import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Grid, GridItem, ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <Grid templateAreas={`"header" "main" "footer"`}>
        <GridItem area={"header"}>
          <Header />
        </GridItem>
        <GridItem area={"main"}>
          <Home />
        </GridItem>
        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
