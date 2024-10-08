import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Title() {
    return (
        <View style={styles.container}>
            <View style={styles.boxTitle}>
                <Text style={styles.texTitle}>Trabalho DDM</Text>
                <View>
                    <Text style={styles.nomes}>Murilo</Text>
                    <Text style={styles.nomes}>Kauã Rego</Text>
                    <Text style={styles.nomes}>Kauan Guilherme</Text>
                    <Text style={styles.nomes}>Pedro Santos</Text>
                    <Text style={styles.nomes}>Vinicius</Text>
                </View>
            </View>
        </View>

    );
}
