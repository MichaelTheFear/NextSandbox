import { useContext } from "react";
import { ColorSchemaContext } from "./ColorSchemaContex";

export const useTheme = () => {
    const context = useContext(ColorSchemaContext);
    return context;
};