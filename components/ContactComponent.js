import React, { Component } from "react";
import { Card } from "react-native-elements";
import { ScrollView, Text } from "react-native";
import { CAMPSITES } from "../shared/campsites";

class ContactUs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			campsites: CAMPSITES,
		};
	}

	static navigationOptions = {
		title: "Contact Us",
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<ScrollView>
				<Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
					<Text>1 Nucamp Way</Text>
					<Text>Seattle, WA 98001</Text>
					<Text>U.S.A.</Text>
					<Text></Text>
					<Text>Phone: 1-206-555-1234</Text>
					<Text style={{ marginBottom: 10 }}>
						Email: campsites@nucamp.co
					</Text>
				</Card>
			</ScrollView>
		);
	}
}

export default ContactUs;
