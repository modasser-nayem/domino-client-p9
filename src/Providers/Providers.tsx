import { RouterProvider } from "react-router-dom";
import router from "../routes/router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "../lib/theme/theme";

const Providers = () => {
   return (
      <ThemeProvider theme={theme}>
         <Provider store={store}>
            <PersistGate
               loading={null}
               persistor={persistor}
            >
               <RouterProvider router={router} />
            </PersistGate>
         </Provider>
      </ThemeProvider>
   );
};

export default Providers;
