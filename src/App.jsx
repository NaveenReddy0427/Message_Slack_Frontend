import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUpCard from "@/components/organisms/auth/SignUpCard";
import SignInCard from "@/components/organisms/auth/SignInCard";
import Auth from "@/pages/Auth/Auth";
import NotFound from "./pages/NotFound/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {

  const queryClient = new QueryClient()

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/auth/signup" element={<Auth><SignUpCard /></Auth>} />
        <Route path="/auth/signin" element={<Auth><SignInCard /></Auth>} />

        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </QueryClientProvider>
    </>
  );
}

export default App;
