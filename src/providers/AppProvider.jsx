import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/contexts/FakeAuthContext";
import { CitiesProvider } from "@/contexts/CitiesContext";
import Navigation from "@/navigation/Navigation";

export default function AppProvider() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}
