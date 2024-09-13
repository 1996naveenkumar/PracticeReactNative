import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, ImageBackground, StatusBar, useColorScheme, ScrollView } from 'react-native';


const backgroundImg = require("./assets/backgroundFood.png")
const vegImg = require("./assets/veg.png")
const nonvegImg = require("./assets/nonveg.png")
const foodImg = require("./assets/foodimg.png")
const starratingImg = require("./assets/group_rating.png")
const materialRatingImg = require("./assets/materialStarRate.png")
const dropDownImg = require("./assets/dropDown.png")
const cycleImg = require("./assets/cycle.png")

const FoodScreen = () => {

    return (

        <View style={styles.UI}>
            <ImageBackground borderBottomLeftRadius={12} borderBottomRightRadius={12} source={backgroundImg} style={styles.backgroundImage} blurRadius={0} >
                <StatusBar translucent backgroundColor='transparent' />

                <View style={styles.mainContainer}>
                    <View style={styles.container1}>
                        <View style={styles.box1}>
                            <Text style={styles.titleText}>Brown Sugar</Text>
                            <View style={styles.ratingBox}>
                                <Text style={{color: 'black'}}>4.5</Text>
                                <Image source={materialRatingImg} style={styles.materialRate} />
                            </View>
                        </View>
                        <View style={styles.box2}>
                            <Text style={styles.subText}>Bakery, Desserts, Chinese</Text>
                            <Text style={styles.subText}>Malviya Nagar, Jaipur</Text>
                        </View>
                        <View style={styles.box3}>
                            <Image source={cycleImg} style={styles.cycleImg} />
                            <Text style={styles.bottomText}>3 kms | Rs 30 Delivery fee will apply</Text>
                        </View>
                    </View>

                    <View style={styles.container2}>
                        <View style={styles.container2box}>
                            <Image source={vegImg} style={styles.vegBox} />
                            <Text style={styles.textColor}>Veg</Text>
                        </View>
                        <View style={styles.container2box}>
                            <Image source={nonvegImg} style={styles.vegBox} />
                            <Text style={styles.textColor}>Non-Veg</Text>
                        </View>
                        <View style={styles.container2box}>
                            <Text style={styles.textColor}>Bestseller</Text>
                        </View>
                        <View style={styles.container2box}>
                            <Text style={styles.textColor}>Rating 4.0+</Text>
                        </View>
                    </View>

                    <View style={styles.container3}>
                        <View style={styles.topBox}>
                            <Text style={styles.cakesText}>Cakes</Text>
                            <Image source={dropDownImg} style={styles.dropDown} />
                        </View>

                        <ScrollView>
                            <View style={styles.container3box1}>
                                <View>
                                    <Image source={vegImg} style={styles.vegBox} />
                                    <Text style={styles.cakesText}>Hazelnut</Text>
                                    <Text style={styles.rupeesText}>Rs 600.50</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={starratingImg} style={styles.vegBox} />
                                        <Image source={starratingImg} style={styles.vegBox} />
                                        <Image source={starratingImg} style={styles.vegBox} />
                                        <Image source={starratingImg} style={styles.vegBox} />
                                        <Image source={starratingImg} style={styles.vegBox} />
                                        <Text style={{ color: 'white', fontFamily: 'Oswald' }}>{'  (50)'}</Text>
                                    </View>
                                    <Text style={styles.subText}>A small description goes here.</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={foodImg} style={styles.foodImg} />
                                    <TouchableOpacity style={styles.btnAdd}>
                                        <Text style={{ color: 'tomato', fontSize: 15 }}>{"+ ADD"}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.container3box1}>
                                <View>
                                    <Image source={vegImg} style={styles.vegBox} />
                                    <Text style={styles.cakesText}>Hazelnut</Text>
                                    <Text style={styles.rupeesText}>Rs 600.50</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={starratingImg} style={styles.vegBox} />
                                        <Image source={starratingImg} style={styles.vegBox} />
                                        <Image source={starratingImg} style={styles.vegBox} />
                                        <Image source={starratingImg} style={styles.vegBox} />
                                        <Image source={starratingImg} style={styles.vegBox} />
                                        <Text style={{ color: 'white' }}>{'  (50)'}</Text>
                                    </View>
                                    <Text style={styles.subText}>A small description goes here.</Text>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <Image source={foodImg} style={styles.foodImg} />
                                    <TouchableOpacity style={styles.btnAdd}>
                                        <Text style={{ color: 'tomato', fontSize: 15 }}>{"+ ADD"}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.container3box1}>
                                <View>
                                    <Image source={vegImg} style={styles.vegBox} />
                                    <Text style={styles.cakesText}>Hazelnut</Text>
                                    <Text style={styles.rupeesText}>Rs 600.50</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={starratingImg} style={styles.vegBox} />
                                        <Image source={starratingImg} style={styles.vegBox} />
                                        <Image source={starratingImg} style={styles.vegBox} />
                                        <Image source={starratingImg} style={styles.vegBox} />
                                        <Image source={starratingImg} style={styles.vegBox} />
                                        <Text style={{ color: 'white' }}>{'  (50)'}</Text>
                                    </View>
                                    <Text style={styles.subText}>A small description goes here.</Text>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <Image source={foodImg} style={styles.foodImg} />
                                    <TouchableOpacity style={styles.btnAdd}>
                                        <Text style={{ color: 'tomato', fontSize: 15 }}>{"+ ADD"}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </ScrollView>

                    </View>

                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    UI: {
        flex: 1,
        backgroundColor: '#585858',
        // marginTop:120

    },

    mainContainer: {
        // flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        // backgroundColor: 'gray',
    },

    backgroundImage: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: 253,
        // borderBottomLeftRadius: 12,
        // borderBottomRightRadius: 12,
        // marginTop:200,
        // resizeMode:"cover"
    },

    container1: {
        marginTop: 150,
        paddingHorizontal: 10,
        paddingTop: 7,
        // paddingBottom: 5,
        // justifyContent: 'space-between',
        marginHorizontal: 15,
        // width: 328,
        height: 142,
        borderRadius: 12,
        backgroundColor: '#808080',
        // alignItems: 'center',
    },

    box1: {
        flexDirection: 'row',
        width: '100%',
        height: 34,
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center',
    },

    titleText: {
        fontFamily: 'Oswald',
        alignItems: 'center',
        lineHeight: 35,
        // width: 150,
        height: 34,
        fontSize: 27,
        // fontWeight: '700',
        color: '#FFFFFF'
    },

    ratingBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        height: 35,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 7,
        gap: 5,
        marginRight: 5,
    },

    materialRate: {
        width: 20,
        height: 20,
        marginBottom: 2,
    },

    box2: {
        width: 200,
        // height: 30,
        // gap: 2,
        marginTop: 2,
        marginBottom: 2,
        // backgroundColor: 'lightgreen'
    },

    subText: {
        fontFamily: 'Oswald',
        // alignItems: 'flex-start',
        // width: 200,
        // height: 34,
        fontSize: 14,
        color: '#FFFFFF',
    },

    box3: {
        flexDirection: 'row',
        width: 360,
        height: 30,
        gap: 15,
        borderTopColor: 'lightgray',
        borderTopWidth: 2,
        marginTop: 8,
        paddingTop: 6,
        paddingBottom: 4,
        alignItems: 'center'
    },

    cycleImg: {
        width: 20,
        height: 20,
    },

    bottomText: {
        fontFamily: 'Oswald',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 20,
        // backgroundColor: 'red'
    },

    container2: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        paddingHorizontal: 15,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    container2box: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        width: 'auto',
        lineHeight: 37,
        height: 37,
        borderRadius: 8,
        paddingHorizontal: 10,
        // paddingBottom: 3,
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    vegBox: {
        width: 18,
        height: 18,
    },

    textColor: {
        fontFamily: 'Oswald',
        color: '#585858',
        fontSize: 14,
        marginBottom: 4,
        // fontWeight: '500'
    },

    container3: {
        marginTop: 15,
        paddingHorizontal: 15,
        paddingTop: 7,
        height: 598,
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#808080',
        // alignItems: 'center',

    },

    topBox: {
        flexDirection: 'row',
        height: 35,
        justifyContent: 'space-between',
        marginRight: 20,
        marginTop: 5,
        // backgroundColor: 'red'
    },

    cakesText: {
        fontFamily: 'Oswald',
        alignItems: 'center',
        // width: 150,
        height: 34,
        fontSize: 20,
        // fontWeight: '700',
        color: '#FFFFFF'
    },

    rupeesText: {
        fontFamily: 'Oswald',
        alignItems: 'center',
        height: 34,
        fontSize: 15,
        color: '#FFFFFF'
    },

    dropDown: {
        width: 18,
        height: 18,
    },

    container3box1: {
        // backgroundColor: 'red',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 8,
        gap: 10,
        paddingBottom: 50,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        padding: 5,
    },

    textDes: {
        color: '#FFFFFF',

    },

    foodImg: {
        width: 141,
        height: 125,
        borderRadius: 12,
    },

    btnAdd: {
        padding: 4,
        backgroundColor: 'white',
        width: 84,
        height: 36,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: -10
    }


});

export default FoodScreen;