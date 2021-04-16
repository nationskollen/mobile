import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
export default function RenderBackArrow({nav, screen }) {
    console.log(screen);
    return (
        <Ionicons
            name="arrow-back"
            size={28}
            color="white"
            onPress={() => nav.navigate(screen)}
            style={{ marginLeft: 15 }}
        />
    );
}
