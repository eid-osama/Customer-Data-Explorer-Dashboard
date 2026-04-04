import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-[1100px] mx-auto">
        <Header />
        <Main />
      </div>
    </QueryClientProvider>
  );
}

export default App;
