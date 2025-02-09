import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const index = () => {
    return (
        <ScrollView>
            <LinearGradient colors={["white", "#E9E4F0"]} style={{ flex: 1 }}>
                <View style={{ padding: 12 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <AntDesign name="barchart" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}
                        >Employee Management System</Text>
                        <FontAwesome name="lock" size={24} color="black" />
                    </View>
                    <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", gap: 20 }}>
                        <Pressable
                            style={{ backgroundColor: "#D3CCE3", padding: 12, borderRadius: 6, alignItems: "center", justifyContent: "center", flex: 1, }}>
                            <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <FontAwesome6 name="people-line" size={24} color="black" />
                            </View>
                            <Text style={{ marginTop: 7, fontWeight: 800 }}>Employee List</Text>
                        </Pressable>
                        <Pressable
                            style={{ backgroundColor: "#D3CCE3", padding: 12, borderRadius: 6, alignItems: "center", justifyContent: "center", flex: 1, }}>
                            <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <FontAwesome6 name="people-line" size={24} color="black" />
                            </View>
                            <Text style={{ marginTop: 7, fontWeight: 800 }}>Mark Attendance</Text>
                        </Pressable>

                        
                    </View>
                    <View style={{ marginTop: 20, backgroundColor: "white", paddingHorizontal: 10, paddingVertical: 10, borderRadius: 8 }}>
                        <Pressable style={{ backgroundColor: "#D3CCE3", borderRadius: 6, padding: 10, flexDirection: 'row', alignItems: "center", marginVertical: 10 }}>
                            <View style={{ padding: 8, width: 45, height: 45, borderRadius: 7, backgroundColor: "white", alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome6 name="newspaper" size={24} color="black" />
                            </View>
                            <Text style={{ marginLeft: 10, fontSize: 13, fontWeight: "600", flex: 1 }}>
                                Attendance Report
                            </Text>
                            <View style={{ width: 35, height: 35, borderRadius: 7, backgroundColor: "white", alignItems: 'center', justifyContent: 'center', }}>
                                <Entypo name="chevron-right" size={24} color="black" />
                            </View>
                        </Pressable>
                        <Pressable style={{ backgroundColor: "#D3CCE3", borderRadius: 6, padding: 10, flexDirection: 'row', alignItems: "center", marginVertical: 10 }}>
                            <View style={{ padding: 8, width: 45, height: 45, borderRadius: 7, backgroundColor: "white", alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialIcons name="summarize" size={24} color="black" />                            </View>
                            <Text style={{ marginLeft: 10, fontSize: 13, fontWeight: "600", flex: 1 }}>
                                Summary Report
                            </Text>
                            <View style={{ width: 35, height: 35, borderRadius: 7, backgroundColor: "white", alignItems: 'center', justifyContent: 'center', }}>
                                <Entypo name="chevron-right" size={24} color="black" />
                            </View>
                        </Pressable>
                        <Pressable style={{ backgroundColor: "#D3CCE3", borderRadius: 6, padding: 10, flexDirection: 'row', alignItems: "center", marginVertical: 10 }}>
                            <View style={{ padding: 8, width: 45, height: 45, borderRadius: 7, backgroundColor: "white", alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesome name="file-text" size={24} color="black" />
                            </View>
                            <Text style={{ marginLeft: 10, fontSize: 13, fontWeight: "600", flex: 1 }}>
                                All Reports
                            </Text>
                            <View style={{ width: 35, height: 35, borderRadius: 7, backgroundColor: "white", alignItems: 'center', justifyContent: 'center', }}>
                                <Entypo name="chevron-right" size={24} color="black" />
                            </View>
                        </Pressable>
                        <Pressable style={{ backgroundColor: "#D3CCE3", borderRadius: 6, padding: 10, flexDirection: 'row', alignItems: "center", marginVertical: 10 }}>
                            <View style={{ padding: 8, width: 45, height: 45, borderRadius: 7, backgroundColor: "white", alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesome5 name="people-carry" size={24} color="black" />
                            </View>
                            <Text style={{ marginLeft: 10, fontSize: 13, fontWeight: "600", flex: 1 }}>
                               OverTime Employee
                            </Text>
                            <View style={{ width: 35, height: 35, borderRadius: 7, backgroundColor: "white", alignItems: 'center', justifyContent: 'center', }}>
                                <Entypo name="chevron-right" size={24} color="black" />
                            </View>
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

export default index

const styles = StyleSheet.create({})