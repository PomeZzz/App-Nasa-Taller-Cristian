import { TouchableOpacity } from "react-native";
import Textwhite from "./textWhite";

export default Boton = ({ onPress }) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Textwhite texto="Detalles"></Textwhite>
        </TouchableOpacity>
    )
};    