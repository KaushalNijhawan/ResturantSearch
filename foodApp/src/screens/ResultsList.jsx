import React from "react";
import {Text,View,FlatList,Image, TouchableOpacity} from "react-native";

class ResultsList extends React.Component{
    constructor(props){
        super(props);
        this.state={
             resultRest :[],
             name:this.props.name,
            
        }
    }
    
    componentDidMount =()=>{
        
        if(this.state.name === "Cost Effective"){
            this.setState({resultRest : this.state.resultRest.concat(this.props.onMove.filter((item) => item.price==="$"))})
        }else if(this.state.name === "Bit Pricer"){
            this.setState({resultRest : this.state.resultRest.concat(this.props.onMove.filter((item) => item.price==="$$"))})

        }else if(this.state.name === "Big Spender"){
            this.setState({resultRest : this.state.resultRest.concat(this.props.onMove.filter((item) => item.price==="$$$"))})
        }   
    }
    render(){
        const {navigation} = this.props;  
        if(this.state.resultRest.length === 0){
            return null;
        }else if (this.state.resultRest.length !== 0){
            return (
                
       
                    <View style={{marginBottom : 10}}>
                        
                        <Text style={{
                            fontSize:18,
                            marginHorizontal:15,
                            fontWeight :"bold",
                            marginBottom:5
                        }}>{this.state.name}</Text>
                       <FlatList   
                        showsHorizontalScrollIndicator ={false}
                        horizontal
                        keyExtractor ={(result)=> result.id}
                        data ={this.state.resultRest}
                        renderItem ={({item})=>{
                        return(
                            <View >
                                <TouchableOpacity onPress={()=> {
                                   console.log("clicked!")
                                     navigation.navigate("Details" , {id:item.id});
                                   //this.props.navig("Detail
                                }}>
                            <Image 
                               style={{
                                   height:150,
                                   width:250,
                                   borderRadius:3,
                                   marginHorizontal:15,
                                   marginBottom:10  
                               }}
                            source={{
                                uri:item.image_url
                            }}></Image>
                            <Text style={{
                                
                                marginHorizontal:15
                            }}>{item.name}</Text>
                            <Text
                            style={{
                                marginHorizontal:15,
                                color:"gray"
                            }}
                            >{item.rating + " Stars, " + item.review_count + " Reviews"}</Text>
                           </TouchableOpacity>
                            </View>
                        ); 
                        }}
                       />
                       
                    </View>
            );
        }
   
  
    
    }

}

export default ResultsList;