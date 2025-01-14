import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
} from 'react-native';


const items = [
    { id: 1, title: "Leave", color: "#FF4500", image: "https://img.icons8.com/fluency/48/000000/leave.png" },
    { id: 2, title: "Travel", color: "#FFD32D", image: "https://img.icons8.com/office/16/000000/airplane-take-off.png" },
    { id: 3, title: "Tickets", color: "#4682B4", image: "https://img.icons8.com/color/48/000000/pnr-code.png" },
    { id: 4, title: "Payslip", color: "#6A5ACD", image: "https://img.icons8.com/fluency/48/000000/purchase-order.png" },
    { id: 5, title: "Award", color: "#FF69B4", image: "https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-award-online-learning-vitaliy-gorbachev-flat-vitaly-gorbachev.png" },
    { id: 6, title: "Anouncement", color: "#00BFFF", image: "https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/65/000000/external-announcement-education-smashingstocks-circular-smashing-stocks.png" },
    { id: 7, title: "Upcomping Holiday", color: "#008E89", image: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-holiday-comfort-flaticons-lineal-color-flat-icons-2.png" },

]
const Dashboard = () => {
    return (
        <View style={styles.container}>
            <FlatList style={styles.list}
                contentContainerStyle={styles.listContainer}
                data={items}
                horizontal={false}
                numColumns={2}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]} onPress={() => { console.log("first") }}>
                                <Image style={styles.cardImage} source={{ uri: item.image }} />

                            </TouchableOpacity>

                            <View style={styles.cardHeader}>
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Text style={[styles.title, { color: item.color }]}>{item.title}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 40,
        backgroundColor: '#fff',
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: "#fff",
    },
    listContainer: {
        alignItems: 'center'
    },
    /******** card **************/
    card: {
        shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginVertical: 20,
        marginHorizontal: 40,
        backgroundColor: "#e2e2e2",
        //flexBasis: '42%',
        width: 120,
        height: 120,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        height: 50,
        width: 50,
        alignSelf: 'center'
    },
    title: {
        fontSize: 20,
        flex: 1,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
});

export default Dashboard