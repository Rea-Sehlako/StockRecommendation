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
        "Choose the option that best describes your current investment experience and goals.",
    },
    {
      id: "q2",
      question: "Which industries are you most interested in investing in?",
      type: "multiple_choice",
      options: [
        { id: "q2_o1", text: "Technology" },
        { id: "q2_o2", text: "Finance" },
        { id: "q2_o3", text: "Healthcare" },
        { id: "q2_o4", text: "Real Estate" },
        { id: "q2_o5", text: "Energy" },
      ],
      max_selections: 3,
      optional: false,
      help_text:
        "Select up to 3 industries you are most interested in investing in.",
    },
    {
      id: "q3",
      question: "What is your preferred investment strategy?",
      type: "multiple_choice",
      options: [
        { id: "q3_o1", text: "Long-term growth" },
        { id: "q3_o2", text: "Short-term gains" },
        { id: "q3_o3", text: "Income-focused (e.g., dividends)" },
      ],
      max_selections: 1,
      optional: true,
      help_text:
        "Choose the strategy that aligns best with your financial goals.",
    },
  ];
  
  export default questions;