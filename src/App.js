import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { TransactionContextProvider } from "./context/TransactionContext";
import Home from "./components/pages/Home";
import TransactionAction from "./components/pages/TransectionAction";

function App() {
  return (
    <TransactionContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="new" element={<TransactionAction />} />
          <Route
            path="transaction/:transactionId"
            element={<TransactionAction />}
          />
          <Route index element={<Navigate to="/home" />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </TransactionContextProvider>
  );
}

export default App;
