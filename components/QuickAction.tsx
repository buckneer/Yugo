import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";


export type QuickActionType = {
    title: string,
    icon: IconProp
}

export default function QuickAction({quickAction} : {
    quickAction: QuickActionType
}) {
    return (
        <TouchableOpacity style={styles.quickAction}>
            <FontAwesomeIcon size={40} icon={quickAction.icon} color={"#8a8b8b"} />
            <Text style={styles.actionText}>{quickAction.title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    quickAction: {
        padding: 15,
        flexDirection: "column",
        color: "#8a8b8b",
        justifyContent: "space-between",
        alignItems: "center"
    },
    actionText: {
        color: "#8a8b8b",
        fontSize: 18,
        marginTop: 5,
        fontWeight: "bold"
    }
})
