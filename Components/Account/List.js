//dummy
import React from "react";
import { useState, useEffect } from "react";
import { View, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Country } from "../RecoilStore";
// @ts-ignore
import Countries from "../../Countrie.json";
import { TextInput } from "react-native-gesture-handler";
import { useRecoilState } from "recoil";

const List = ({ navigation }) => {
  const product = Countries;
  const [country, setcountry] = useRecoilState(Country);
  const [countryname, setcountryname] = useState();
  const [filterData, setfilterData] = useState(product);
  const [masterData, setmasterData] = useState(product);

  const ShowName = (val) => {
    // setcountryname(val)
    // setcountryname(val);
    setcountry(val);
    navigation.navigate("Form");
    console.log(country);
  };

  const searchFilter = (Text) => {
    const filter = filterData.filter((item) => {
      const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
      const textdata = Text.toUpperCase();
      return itemData.indexOf(textdata) > -1;
    });
    setmasterData(filter);
  };

  return (
    <View>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Search here"
        underLineColorAndroid="transparent"
        onChangeText={(Text) => searchFilter(Text)}
      />
      <FlatList
        data={masterData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => ShowName(item.name)}>
            <TextStyle>{item.name}</TextStyle>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const TextStyle = styled.Text`
  font-size: 18px;
  margin-top: 8px;
  margin-horizontal: 10px;
  border-width: 1px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  border-radius: 3px;
  background-color: #ffffff;
`;

const styles = StyleSheet.create({
  textInputStyle: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 10,
    borderColor: "#00000",
    backgroundColor: "white",
  },
});

export default List;
