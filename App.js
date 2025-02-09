import React, { useState } from "react";
import { View } from 'react-native';
import styles from './styles';
import Switch from './Switch';

export default function TogglingOnandOff() {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);

    return (
        <View style={styles.container}>
            <Switch
                label="Disable Next Switch"
                value={first}
                disabled={second}
                onValueChange={setFirst}
            />
            <Switch
                label="Disable Previous Swtich"
                value={second}
                disabled={first}
                onValueChange={setSecond}
            />
        </View>
    );
}