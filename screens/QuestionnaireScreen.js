
import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const questions = [
    {
		id: "q1",
		question: "What type of investor are you?",
		type: "multiple_choice",
		options: [
			{ id: "q1_o1", text: "Student (Beginner)" },
			{ id: "q1_o2", text: "Young Adult (Starting to invest and work)" },
			{ id: "q1_o3", text: "Expert (Retired, full-time investor)" },
		],
		max_selections: 1,
		optional: false,
		help_text:
			"Choose the category that best describes your current status as an investor.",
		tags: ["profile", "investor type"],
		weight: 1,
		order: 1,
	},
	{
		id: "q2",
		question: "How would you describe your investment knowledge?",
		type: "multiple_choice",
		options: [
			{ id: "q2_o1", text: "Beginner" },
			{ id: "q2_o2", text: "Intermediate" },
			{ id: "q2_o3", text: "Advanced" },
		],
		max_selections: 1,
		optional: false,
		help_text:
			"Assess your familiarity with investment concepts and strategies.",
		tags: ["profile", "knowledge level"],
		weight: 2,
		order: 2,
	},
	{
		id: "q3",
		question: "What is your primary financial goal?",
		type: "multiple_choice",
		options: [
			{ id: "q3_o1", text: "Save for retirement" },
			{ id: "q3_o2", text: "Buy a house" },
			{ id: "q3_o3", text: "Save for education" },
			{ id: "q3_o4", text: "Travel" },
			{ id: "q3_o5", text: "Build wealth" },
			{ id: "q3_o6", text: "Other" },
		],
		max_selections: 1,
		optional: false,
		help_text: "Identify your main reason for investing.",
		tags: ["profile", "financial goals"],
		weight: 3,
		order: 3,
	},
	{
		id: "q4",
		question:
			"How much risk are you willing to take with your investments?",
		type: "multiple_choice",
		options: [
			{ id: "q4_o1", text: "Low risk (Stable returns, minimal loss)" },
			{ id: "q4_o2", text: "Moderate risk (Balanced approach)" },
			{
				id: "q4_o3",
				text: "High risk (High returns, higher risk)",
			},
		],
		max_selections: 1,
		optional: false,
		help_text: "Select the level of risk you are comfortable with.",
		tags: ["profile", "risk tolerance"],
		weight: 4,
		order: 4,
	},
	{
		id: "q5",
		question: "What is your preferred investment duration?",
		type: "multiple_choice",
		options: [
			{ id: "q5_o1", text: "Short-term (1-3 years)" },
			{ id: "q5_o2", text: "Medium-term (3-7 years)" },
			{ id: "q5_o3", text: "Long-term (7+ years)" },
		],
		max_selections: 1,
		optional: false,
		help_text: "Indicate your preferred investment timeframe.",
		tags: ["profile", "investment duration"],
		weight: 5,
		order: 5,
	},
	{
		id: "q6",
		question: "How often do you plan to review your portfolio?",
		type: "multiple_choice",
		options: [
			{ id: "q6_o1", text: "Daily" },
			{ id: "q6_o2", text: "Weekly" },
			{ id: "q6_o3", text: "Monthly" },
			{ id: "q6_o4", text: "Quarterly" },
			{ id: "q6_o5", text: "Annually" },
		],
		max_selections: 3,
		optional: false,
		help_text:
			"Choose how frequently you intend to review your investment portfolio.",
		tags: ["profile", "review frequency"],
		weight: 6,
		order: 6,
	},
	{
		id: "q7",
		question: "Which industries are you most interested in investing in?",
		type: "multiple_choice",
		options: [
			{ id: "q7_o1", text: "Technology" },
			{ id: "q7_o2", text: "Healthcare" },
			{ id: "q7_o3", text: "Finance" },
			{ id: "q7_o4", text: "Energy" },
			{ id: "q7_o5", text: "Consumer Goods" },
			{ id: "q7_o6", text: "Real Estate" },
			{ id: "q7_o7", text: "Other" },
		],
		max_selections: 3,
		optional: true,
		help_text: "Select up to three industries you are interested in.",
		tags: ["profile", "investment interests"],
		weight: 7,
		order: 7,
	},
	{
		id: "q8",
		question:
			"Do you have any ethical or environmental considerations for your investments?",
		type: "multiple_choice",
		options: [
			{ id: "q8_o1", text: "Yes, I prefer sustainable investments" },
			{ id: "q8_o2", text: "No, I prioritize returns over ethics" },
			{
				id: "q8_o3",
				text: "I have some preferences (not strict)",
			},
		],
		max_selections: 1,
		optional: true,
		help_text:
			"Indicate if you have any ethical or environmental preferences for your investments.",
		tags: ["profile", "ethical considerations"],
		weight: 8,
		order: 8,
	},
	{
		id: "q9",
		question: "What is your preferred investment vehicle?",
		type: "multiple_choice",
		options: [
			{ id: "q9_o1", text: "Stocks" },
			{ id: "q9_o2", text: "Bonds" },
			{ id: "q9_o3", text: "Mutual Funds" },
			{ id: "q9_o4", text: "ETFs" },
			{ id: "q9_o5", text: "Cryptocurrency" },
			{ id: "q9_o6", text: "Real Estate" },
			{ id: "q9_o7", text: "Commodities" },
		],
		max_selections: 2,
		optional: true,
		help_text: "Select up to two preferred investment vehicles.",
		tags: ["profile", "investment vehicles"],
		weight: 9,
		order: 9,
	},
	{
		id: "q10",
		question:
			"Would you like to receive AI-driven investment tips and news?",
		type: "multiple_choice",
		options: [
			{ id: "q10_o1", text: "Yes" },
			{ id: "q10_o2", text: "No" },
			{ id: "q10_o3", text: "Maybe" },
		],
		max_selections: 1,
		optional: true,
		help_text:
			"Indicate if you would like to receive AI-driven investment tips and news.",
		tags: ["preferences", "notifications"],
		weight: 10,
		order: 10,
	},
	{
		id: "q11",
		question: "How do you usually stay updated with financial news?",
		type: "multiple_choice",
		options: [
			{ id: "q11_o1", text: "News websites" },
			{ id: "q11_o2", text: "Social media" },
			{ id: "q11_o3", text: "Financial TV channels" },
			{ id: "q11_o4", text: "Podcasts" },
			{ id: "q11_o5", text: "Newsletters" },
			{ id: "q11_o6", text: "Other" },
		],
		max_selections: 2,
		optional: true,
		help_text:
			"Select up to two methods you use to stay updated with financial news.",
		tags: ["profile", "news sources"],
		weight: 11,
		order: 11,
	},
	{
		id: "q12",
		question: "What kind of investment content do you prefer?",
		type: "multiple_choice",
		options: [
			{ id: "q12_o1", text: "Articles" },
			{ id: "q12_o2", text: "Videos" },
			{ id: "q12_o3", text: "Infographics" },
			{ id: "q12_o4", text: "Podcasts" },
			{ id: "q12_o5", text: "Interactive tools" },
		],
		max_selections: 2,
		optional: true,
		help_text: "Select up to two types of investment content you prefer.",
		tags: ["preferences", "content type"],
		weight: 12,
		order: 12,
	},
	{
		id: "q13",
		question: "How confident are you in making investment decisions?",
		type: "multiple_choice",
		options: [
			{ id: "q13_o1", text: "Not confident at all" },
			{ id: "q13_o2", text: "Somewhat confident" },
			{ id: "q13_o3", text: "Very confident" },
		],
		max_selections: 1,
		optional: false,
		help_text: "Rate your confidence level in making investment decisions.",
		tags: ["profile", "confidence"],
		weight: 13,
		order: 13,
	},
];
export default function QuestionnaireScreen() {
	const navigation = useNavigation();
	const [responses, setResponses] = useState({});
  
	const handleOptionSelect = (questionId, optionId) => {
	  setResponses(prev => ({ ...prev, [questionId]: optionId }));
	};
  
	const handleSubmit = () => {
	  navigation.navigate('StockSuggestions', { responses });
	};
  
	return (
	  <ScrollView style={{ padding: 20 }}>
		{questions.map((q) => (
		  <View key={q.id} style={{ marginBottom: 20 }}>
			<Text style={{ fontSize: 18, fontWeight: 'bold' }}>{q.question}</Text>
			{q.options.map((option) => (
			  <TouchableOpacity
				key={option.id}
				onPress={() => handleOptionSelect(q.id, option.id)}
				style={{
				  padding: 10,
				  backgroundColor: responses[q.id] === option.id ? '#007bff' : '#e0e0e0',
				  marginTop: 5,
				}}
			  >
				<Text>{option.text}</Text>
			  </TouchableOpacity>
			))}
		  </View>
		))}
		<Button title="Submit" onPress={handleSubmit} />
	  </ScrollView>
	);
  }