import React, { Component } from "react";
import { Card, Button, Icon } from "react-native-elements";
import { ScrollView, Text } from "react-native";
import { CAMPSITES } from "../shared/campsites";
import * as Animatable from "react-native-animatable";
import * as MailComposer from "expo-mail-composer";

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

	sendMail() {
		MailComposer.composeAsync({
			recipients: ["campsites@nucamp.co"],
			subject: "Inquiry",
			body: "To whom it may concern:",
		});
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<Animatable.View
				animation="fadeInDown"
				duration={2000}
				delay={1000}
			>
				<ScrollView>
					<Card
						title="Contact Information"
						wrapperStyle={{ margin: 20 }}
					>
						<Text>1 Nucamp Way</Text>
						<Text>Seattle, WA 98001</Text>
						<Text style={{ marginBottom: 10 }}>U.S.A.</Text>
						<Text>Phone: 1-206-555-1234</Text>
						<Text>Email: campsites@nucamp.co</Text>
						<Button
							title="Send Email"
							buttonStyle={{
								backgroundColor: "#5637DD",
								margin: 40,
							}}
							icon={
								<Icon
									name="envelope-o"
									type="font-awesome"
									color="#fff"
									iconStyle={{ marginRight: 10 }}
								/>
							}
							onPress={() => this.sendMail()}
						/>
					</Card>
				</ScrollView>
			</Animatable.View>
		);
	}
}

export default ContactUs;
