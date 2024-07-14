import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PrivateContainer from "./containers/privateContainer";
import PublicContainer from "./containers/publicContainer";
import CyclistStatsPage from "./pages/CyclistStatsPage";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import RegisterCustomer from "./pages/RegisterCustomer";
import RegisterPage from "./pages/RegisterPage";
import RegisterTeamPage from "./pages/RegisterTeamPage";
import UserListPage from "./pages/UserListPage";
import LandingPage from "./pages/LandingPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="landing" />} />
            <Route element={<PublicContainer />}>
              <Route path="login" element={<LogInPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="" element={<Navigate to="home" />} />
              <Route path="landing" element={<LandingPage />} />
              <Route path="home" element={<HomePage />} />
            </Route>

            <Route element={<PrivateContainer />}>
              <Route path="" element={<Navigate to="home" />} />
              <Route path="home" element={<HomePage />} />
              <Route path="cart" element={<UserListPage />} />
              <Route path="customer/register" element={<RegisterCustomer />} />
              <Route path="team/register" element={<RegisterTeamPage />} />
              <Route path="stats" element={<CyclistStatsPage />} />
            </Route>
            <Route path="*" element={<h1> Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </Provider>
      {/* <GlobalProvider> */}
      {/* <RouterProvider router={router} />
           </GlobalProvider> */}
    </div>
  );
}

export default App;
