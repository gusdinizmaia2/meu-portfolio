import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header";
import { ProviderUser } from "./Contexts/ContextUser";
import { MainRoutes } from "./Routes";

export function App() {
  return (
    <BrowserRouter basename="/meu-portfolio/" >
      <ProviderUser>
        <Header />
        <MainRoutes />
      </ProviderUser>
    </BrowserRouter>
  );
}
