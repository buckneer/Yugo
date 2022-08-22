
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCarRear, faFan, faLinkSlash, faLock, faVolumeHigh, faKey } from "@fortawesome/free-solid-svg-icons";
import QuickAction from "../components/QuickAction";
import React, { useEffect } from "react";
import { NavigationProp } from "@react-navigation/native";

export default function HomeScreen({navigation} : {navigation: NavigationProp<any>}) {

    useEffect(() => {

    }, []);


    return(
        <SafeAreaView style={styles.appContainer}>
            <View style={styles.screenTitle}>
                <View>
                    <Text style={styles.screenTitleText}>Yugo</Text>
                    <Text style={styles.screenSubtitle}>Not Connected</Text>
                </View>
                {/*<TouchableOpacity onPress={() => {navigation.navigate("Connection")}}>*/}
                {/*    <FontAwesomeIcon style={styles.bluetoothLink} size={25} icon={faLinkSlash} />*/}
                {/*</TouchableOpacity>*/}

            </View>

            <Image style={styles.model} source={require("../assets/img/model.png")} />

            {/* Quick Actions */}
            <View style={styles.quickActions}>
                <QuickAction quickAction={{
                    title: "Locked",
                    icon: faLock
                }} />

                <QuickAction quickAction={{
                    title: "Honk",
                    icon: faVolumeHigh
                }} />

                <QuickAction quickAction={{
                    title: "Trunk",
                    icon: faCarRear
                }} />

                <QuickAction quickAction={{
                    title: "Fans",
                    icon: faFan
                }} />
            </View>

            <View style={styles.listActions}>
                <TouchableOpacity style={styles.listAction}>
                    <FontAwesomeIcon size={30} style={styles.listActionIcon} icon={faKey} />
                    <Text style={styles.listActionText}>Phone key</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: "#161718",
        height: "100%"
    },
    screenTitle: {
        flexDirection: "row",
        color: "#f3f3f3",
        fontSize: 25,
        justifyContent: "center",
        fontWeight: "bold",
        alignContent: "center",
        margin: 10
    },
    screenSubtitle: {
        fontWeight: "normal",
        color: "#8a8b8b"
    },
    screenTitleText: {
        color: "#f3f3f3",
        fontSize: 25,
        fontWeight: "bold",
        marginEnd: 10,
        alignSelf: "center"
    },
    bluetoothLink: {
        color: "#8a8b8b",
    },
    model: {
        marginVertical: 20,
        width: 350,
        justifyContent: 'center',
        marginStart: 20,
        height: 240,
        opacity: .7
    },

    quickActions: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    listActions: {
        flexDirection: "column",
        justifyContent: "center",
        marginHorizontal: 40,
        marginVertical: 20
    },

    listAction: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    listActionText: {
        color: "#8a8b8b",
        fontSize: 20,
        fontWeight: "bold",
        marginStart: 20
    },
    listActionIcon: {
        color: "#8a8b8b"
    }



});
