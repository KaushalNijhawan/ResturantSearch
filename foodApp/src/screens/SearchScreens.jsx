import React from "react";
import { Text, View, ScrollView } from "react-native";
import SearchBar from "./SearchBar";
import Axios from "axios";
import ResultsList from "./ResultsList";

class SearchScreen extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
            Parenttext: "",
            results: [],
            errorMessage: ""

        }
    }
    handlePriceFiltering = (category) => {
        console.log("this is the length" + this.state.results.length);

        return this.state.results.filter((item) => {
            return item.price === category;
        });
    }
    HandleTheYelpApi =  (searchTerm) => {
     Axios.get("https://api.yelp.com/v3/businesses/search", {
            headers: {
                Authorization:
                    'Bearer XzuAlu1i46_TtvSr90q3VcdCuWlJLx69Ey9y2xEBwSoRWt_dFpGcRuSwJ9AyJpHINtD8XT8vF6bYmdKGetG8Bw9tz1hxP9mfea0hsSJpLH65fj7jWpsoltlNzDapXnYx'
            },
            params: {
                limit: 50,
                term: searchTerm,
                location: "san jose"
            }
        })
            .then(res => {
                this.setState({ results: res.data.businesses })
            })
            .catch(err => {
                this.setState({ errorMessage: "Something Went Wrong" })
            });
        console.log("reached in axios func");

    }
    componentDidMount = () => {
        console.log("i am here!");
        this.HandleTheYelpApi("pasta");

    }

    render() {
        const {navigation} = this.props;
        console.log(this.props);
        return (
            <View style={{flex:1}}>
                <SearchBar setSearchText={this.state.Parenttext}
                            onChangeSearch={(term)=>this.setState({Parenttext : term})}
                    onEndSearch={(term) => {
                        console.log("End Writing");
                        this.HandleTheYelpApi(term);
                    }

                    }
                />
               
                {this.state.errorMessage.length === 0 ? null : <Text>{this.state.errorMessage}</Text>}
                <ScrollView>
                    <ResultsList onMove={this.state.results} name="Cost Effective" navigation = {navigation}/>
                    <ResultsList onMove={this.state.results} name="Bit Pricer"   navigation = {navigation}/>
                    <ResultsList onMove={this.state.results} name="Big Spender"  navigation = {navigation}/>
                </ScrollView>
            </View>
        );
    }
}
export default SearchScreen;