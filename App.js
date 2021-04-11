import React from "react";
import "react-native-gesture-handler";
import { ThemeProvider } from "./components/ThemeContexts";

import Footer from "./components/Footer";

/// Creates a navigation container in which every screen is "positioned"
function App() {
    return (
        <ThemeProvider>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
