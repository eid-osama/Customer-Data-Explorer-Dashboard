import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="w-[1100px] mx-auto">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
