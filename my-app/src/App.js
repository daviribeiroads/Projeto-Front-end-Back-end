
import { Container } from "@mui/material";
import CategoryList from "./components/CategoryList";
import CategoryRegister from "./components/CategoryRegister";
import ProductList from "./components/ProductList";
import ProductRegister from "./components/ProductRegister";
import Menu from "./components/Menu";



function App() {
  return (
    <div>
      <Menu />
      <Container>
      <CategoryList />
      <CategoryRegister />
      <ProductList />
      <ProductRegister />
      </Container>
    </div>
  );
}

export default App;
