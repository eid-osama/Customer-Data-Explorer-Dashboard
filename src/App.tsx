import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="max-w-7xl px-4 md:px-6 lg:px-8 lg:mx-auto h-screen">
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
