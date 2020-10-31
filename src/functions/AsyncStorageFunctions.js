//import React from "react";
import {AsyncStorage} from "react-native";

const storeData =async(key,value)=>{
    try{
        await AsyncStorage.setItem(key,value);

        alert("Data saved");
    }catch(error){
        alert(error);
    }
};

const storeDataJSON =async(key,value)=>{
    try{
        value = JSON.stringify(value);
        await AsyncStorage.setItem(key,value);
        alert("Data saved");
    }catch(error){
        alert(error);
    }
};

const getData =async(key)=>{
    try{
        const data = await AsyncStorage.getItem(key);
        if(data!=null){
            return data;
        }
        else{
            alert("no data saved");
        }
    }catch(error){
        alert(error);
    }
};

const getDataJSON =async(key)=>{
    try{

        let data = await AsyncStorage.getItem(key);
        if(data!=null){
            data=JSON.parse(data);
            return data;
        }
        else{
            alert("no data saved");
        }
    }catch(error){
        alert(error);
    }
};

const removeData =async(key)=>{
    try{
        await AsyncStorage.removeItem(key);
        alert("data removed");
    }catch(error){
        alert(error);
    }
};

export { storeData, storeDataJSON, getData, getDataJSON, removeData };

