import React,{useState} from "react";
import { View } from "react-native";
import { Card, Button, Text, Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

const PostCard = (props) => {
  let[Counter,setCounter] = useState(0); 
  console.log(props);
  return (
    <Card>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar
          containerStyle={{ backgroundColor: "#ffab91" }}
          rounded
          icon={{ name: "user", type: "font-awesome", color: "black" }}
          activeOpacity={1}
        />
        <Text h4Style={{ padding: 10 }} h4>
          {props.author}
        </Text>
      </View>
      <Text style={{ fontStyle: "italic" }}> {props.title}</Text>
      <Text
        style={{
          paddingVertical: 10,
        }}
      >
        {props.body}
      </Text>
      <Card.Divider />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button
          type="outline"
          
          title={Counter}
          icon={<AntDesign name="like2" size={24} color="dodgerblue" />}
          onPress={
            function(){
                setCounter(Counter+1);
               
            }}
        />
        <Button 
        type="solid" 
        title="Comment" 
        icon={<AntDesign name="" size={24} color="white" />}
        onPress={
          function(){
              props.navigation.navigate("Post");

          }
      }
        />
      </View>
    </Card>
  );
};

export default PostCard;