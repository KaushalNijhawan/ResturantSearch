import React from "react";
import {Text , View , TextInput} from "react-native";
import {Entypo} from "@expo/vector-icons";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            serachText:this.props.setSearchText,
            
        }
    }
    HandleSearchTextChange=(text)=>{
        this.setState({serachText:text});
        this.props.onChangeSearch(text);
    }
    render(){
        return(
            <View style={{flexDirection :"row" , alignItems:"center" , height:50 ,width:300 , backgroundColor:"#DCDCDC" , marginLeft:15, marginTop:20 , borderRadius:5}}>
                <Entypo name="magnifying-glass" size={40}/>
                <TextInput 
                style={{
                    height:30,
                    width:300,
                    borderColor:"black",
                    color:"black",
                    fontSize:20,
                    
                }}
                onChangeText ={(text) => this.HandleSearchTextChange(text)} placeholder="Search"
                onEndEditing ={()=>this.props.onEndSearch(this.state.serachText)}
                />
            </View>
            );
    }
}
export default SearchBar;