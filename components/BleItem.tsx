import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faWifi} from "@fortawesome/free-solid-svg-icons";
import { Device } from "react-native-ble-plx";



export type DeviceCardProps = {
    device: Device;
    handleConnect: (device: Device) => void
}

export default function BleItem({device, handleConnect} : DeviceCardProps) {

    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        device.isConnected().then(setIsConnected)
    }, [device]);



    return(
        <>
            {device.name && (
                <TouchableOpacity style={styles.bleItem} onPress={() => {handleConnect(device)}}>
                    <Text style={styles.bleItemName}>{device.name} {device.rssi}</Text>
                    <FontAwesomeIcon style={isConnected ? styles.connected : styles.disconnected} icon={faWifi} size={25} />
                </TouchableOpacity>
            )}
        </>


    )
}

let styles = StyleSheet.create({
    bleItem: {
        backgroundColor: "#222323",
        marginHorizontal: 20,
        borderRadius: 10,
        flexDirection: "row",
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "space-between"
    },
    bleItemName: {
        color: "#848585",
        padding: 10,
        marginStart: 15,
        fontWeight: "normal",
        fontSize: 15
    },
    disconnected: {
        color: "#848585",
        padding: 10,
        marginEnd: 15
    },
    connected: {
        color: "#559bff",
        padding: 10,
        marginEnd: 15
    }
})
