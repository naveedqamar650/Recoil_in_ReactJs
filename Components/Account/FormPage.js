import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import styled from "styled-components/native";
import { Country } from "../RecoilStore";
import { useRecoilState } from "recoil";

const FormPage = ({ navigation }) => {
  const [country, setcountry] = useRecoilState(Country);

  LoginUser = async () => {};

  return (
    <View>
      <TouchableOpacity>
        <Pressable onPress={() => navigation.navigate("List")}>
          {country === "" ? (
            <TextStyle>Select countries:*</TextStyle>
          ) : (
            <TextStyle>{country}</TextStyle>
          )}
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};

const TextStyle = styled.Text`
  font-size: 18px;
  margin-top: 60px;
  margin-horizontal: 10px;
  border-width: 1px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  border-radius: 3px;
  background-color: #ffffff;
`;

export default FormPage;
