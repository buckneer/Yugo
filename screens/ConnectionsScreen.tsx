import React, { useEffect, useReducer, useState } from "react";
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { NavigationProp } from "@react-navigation/native";
import BleItem from "../components/BleItem";
import {BleManager, Device} from 'react-native-ble-plx'

const manager = new BleManager();

const reducer = (state: Device[], action: {type: "ADD_DEVICE"; payload: Device} | {type: "CLEAR"}) : Device[] => {
    switch (action.type) {
        case "ADD_DEVICE":
            const {payload: device} = action;

            if(device && !state.find((dev) => dev.id === device.id)) {
                return [...state, device]
            }
            return state
        case "CLEAR":
            return []
        default:
            return state
    }
}





export default function ConnectionsScreen({navigation} : {navigation: NavigationProp<any>}) {

    const [scannedDevices, dispatch] = useReducer(reducer, []);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<String | null>(null);
    const [connected, setConnected] = useState(false);

    const scanDevices = () => {
        setIsLoading(true)

        manager.startDeviceScan(null, null, (error, scannedDevice) => {
            if(error) {
                console.warn(error)
                setError("Failed to scan for devices")
            }

            if(scannedDevice) {
                dispatch({type: "ADD_DEVICE", payload: scannedDevice});
                setError(null)
            }
        })

        setTimeout(() => {
            manager.stopDeviceScan()
        }, 5000)
    }

    useEffect(() => {
        scanDevices()
    }, []);




    let handleConnect = async (device: Device) => {
        const connectedDevice = device.connect().then(device => {
            setConnected(true)
        })

    }


    return(
        <SafeAreaView style={styles.appContainer}>
            <View style={styles.screenTitle}>
                <TouchableOpacity onPress={() => {navigation.navigate("HomeScreen")}}>
                    <FontAwesomeIcon style={styles.backButton} size={30} icon={faAngleLeft} />
                </TouchableOpacity>


                <Text style={styles.screenTitleText}>Connect</Text>
            </View>
            <FlatList data={scannedDevices} renderItem={(item) =>
                (<BleItem device={item.item} handleConnect={handleConnect} />)} />

        </SafeAreaView>
    )
}

let styles = StyleSheet.create({
    appContainer: {
        backgroundColor: "#161718",
        height: "100%"
    },
    screenTitle: {
        flexDirection: "row",
        color: "#f3f3f3",
        fontSize: 25,
        fontWeight: "bold",
        alignContent: "center",
        margin: 10
    },
    screenTitleText: {

        color: "#f3f3f3",
        fontSize: 25,
        fontWeight: "bold",
        marginEnd: 10,
        justifyContent: "center",
        alignSelf: "center",
        marginStart: 24

    },
    backButton: {
        flex: 1,
        color: "#f3f3f3",
    },
})
