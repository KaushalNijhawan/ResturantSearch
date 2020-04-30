import React from "react";
import {Text,View,Image,FlatList} from "react-native";
import Axios from "axios";

class DetailsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            result:null
        }
    }
    componentDidMount=()=>{
        const {navigation} = this.props;
        console.log(navigation.getParam('id'));
        Axios.get("https://api.yelp.com/v3/businesses/"+ navigation.getParam('id') ,{
            headers: {
                Authorization:
                    'Bearer XzuAlu1i46_TtvSr90q3VcdCuWlJLx69Ey9y2xEBwSoRWt_dFpGcRuSwJ9AyJpHINtD8XT8vF6bYmdKGetG8Bw9tz1hxP9mfea0hsSJpLH65fj7jWpsoltlNzDapXnYx'
            }
        }).then(res=>{
            this.setState({result : res.data});
        })

    }
    render(){
        console.log(this.state.result);
        if(this.state.result !== null){
            return(
                <View>
                    <Text style={{marginLeft:10,marginTop:10}}>{this.state.result.name}</Text>
                    <FlatList
                    data ={this.state.result.photos}
                    keyExtractor = {(item)=> item.id}
                    renderItem ={({item})=>{
                        return(
                            <Image 
                            style={{
                                height:150,
                                width:250,
                                borderRadius:4,
                                marginTop:10,
                                marginLeft:10
                            }}
                            source={{
                                uri: item
                            }}/>
                        );
                    }}
                    />
                </View>
            );
        }
        else if(this.state.result === null){
            return(
                <Text>Fetching!!</Text>
            )
        }
        
    }
}
export default DetailsComponent;