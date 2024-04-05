import { StyleSheet } from "react-native";
import { appColors } from "../constants/appColor";
import { appInfos } from "../constants/appInfos";

export const globalStyle =  StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:appColors.white,
    },
    smallcard: {
        marginHorizontal:appInfos.size.WIDTH*0.125,
        alignItems: 'center',
        width: appInfos.size.WIDTH*0.75,
        resizeMode: 'contain'
    },
    onboardswipe: {
        height: appInfos.size.HEIGHT*0.4,
        backgroundColor: appColors.primary,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    }
})