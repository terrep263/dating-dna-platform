export interface Option {
  text: string;
  value: string;
  strand: string;
}

export interface Question {
  id: number;
  strand: 'SOCIAL_ENERGY' | 'ATTRACTION_STYLE' | 'DECISION_FILTER' | 'RELATIONSHIP_PACE';
  question: string;
  options: Option[];
}

const questions: Question[] = [
  // Social Energy Questions (C vs F)
  {
    id: 1,
    strand: 'SOCIAL_ENERGY',
    question: "When you're single and looking to meet someone, you typically:",
    options: [
      { text: "Go to parties, events, or use multiple dating apps to meet lots of people", value: 'C', strand: 'SOCIAL_ENERGY' },
      { text: "Prefer meeting through close friends or in smaller, intimate settings", value: 'F', strand: 'SOCIAL_ENERGY' }
    ]
  },
  {
    id: 2,
    strand: 'SOCIAL_ENERGY',
    question: "In the early stages of dating, you feel most energized when:",
    options: [
      { text: "You're dating multiple people and exploring different connections", value: 'C', strand: 'SOCIAL_ENERGY' },
      { text: "You're focusing deeply on one person you feel a special connection with", value: 'F', strand: 'SOCIAL_ENERGY' }
    ]
  },
  {
    id: 3,
    strand: 'SOCIAL_ENERGY',
    question: "At social gatherings, you're more likely to:",
    options: [
      { text: "Meet and chat with many different people throughout the evening", value: 'C', strand: 'SOCIAL_ENERGY' },
      { text: "Have a few meaningful conversations with people you already know", value: 'F', strand: 'SOCIAL_ENERGY' }
    ]
  },
  {
    id: 4,
    strand: 'SOCIAL_ENERGY',
    question: "When it comes to your dating network, you prefer:",
    options: [
      { text: "Having a wide circle of dating prospects and options", value: 'C', strand: 'SOCIAL_ENERGY' },
      { text: "Building deep connections with a select few people", value: 'F', strand: 'SOCIAL_ENERGY' }
    ]
  },
  {
    id: 5,
    strand: 'SOCIAL_ENERGY',
    question: "In dating apps, your approach is typically:",
    options: [
      { text: "Swiping through many profiles and starting multiple conversations", value: 'C', strand: 'SOCIAL_ENERGY' },
      { text: "Being selective and focusing on a few promising matches", value: 'F', strand: 'SOCIAL_ENERGY' }
    ]
  },
  {
    id: 6,
    strand: 'SOCIAL_ENERGY',
    question: "When meeting someone new, you're more comfortable:",
    options: [
      { text: "Quickly establishing rapport and finding common ground", value: 'C', strand: 'SOCIAL_ENERGY' },
      { text: "Taking time to build trust and understanding", value: 'F', strand: 'SOCIAL_ENERGY' }
    ]
  },
  {
    id: 7,
    strand: 'SOCIAL_ENERGY',
    question: "Your ideal dating life involves:",
    options: [
      { text: "Meeting new people regularly and having diverse experiences", value: 'C', strand: 'SOCIAL_ENERGY' },
      { text: "Developing meaningful relationships with people you truly connect with", value: 'F', strand: 'SOCIAL_ENERGY' }
    ]
  },
  {
    id: 8,
    strand: 'SOCIAL_ENERGY',
    question: "When someone shows interest in you, you typically:",
    options: [
      { text: "Engage enthusiastically and explore the potential connection", value: 'C', strand: 'SOCIAL_ENERGY' },
      { text: "Take time to assess if there's genuine compatibility", value: 'F', strand: 'SOCIAL_ENERGY' }
    ]
  },

  // Attraction Style Questions (P vs T)
  {
    id: 9,
    strand: 'ATTRACTION_STYLE',
    question: "What initially draws you to someone romantically?",
    options: [
      { text: "Their current lifestyle, values, and how they live their life", value: 'P', strand: 'ATTRACTION_STYLE' },
      { text: "Their potential, dreams, and who they could become", value: 'T', strand: 'ATTRACTION_STYLE' }
    ]
  },
  {
    id: 10,
    strand: 'ATTRACTION_STYLE',
    question: "When evaluating a potential partner, you focus more on:",
    options: [
      { text: "Their present circumstances and practical compatibility", value: 'P', strand: 'ATTRACTION_STYLE' },
      { text: "Their future goals and the possibilities they represent", value: 'T', strand: 'ATTRACTION_STYLE' }
    ]
  },
  {
    id: 11,
    strand: 'ATTRACTION_STYLE',
    question: "You're more attracted to someone who:",
    options: [
      { text: "Has their life together and shows stability", value: 'P', strand: 'ATTRACTION_STYLE' },
      { text: "Is passionate about their dreams and working toward them", value: 'T', strand: 'ATTRACTION_STYLE' }
    ]
  },
  {
    id: 12,
    strand: 'ATTRACTION_STYLE',
    question: "In dating profiles, you're more drawn to:",
    options: [
      { text: "Photos and descriptions that show their current lifestyle", value: 'P', strand: 'ATTRACTION_STYLE' },
      { text: "Profiles that reveal their aspirations and interests", value: 'T', strand: 'ATTRACTION_STYLE' }
    ]
  },
  {
    id: 13,
    strand: 'ATTRACTION_STYLE',
    question: "When someone shares their dreams with you, you think:",
    options: [
      { text: "That's nice, but I want to see what they've actually accomplished", value: 'P', strand: 'ATTRACTION_STYLE' },
      { text: "I love their vision and want to support their journey", value: 'T', strand: 'ATTRACTION_STYLE' }
    ]
  },
  {
    id: 14,
    strand: 'ATTRACTION_STYLE',
    question: "You prefer partners who:",
    options: [
      { text: "Have proven themselves through their current achievements", value: 'P', strand: 'ATTRACTION_STYLE' },
      { text: "Show promise and are actively working toward their goals", value: 'T', strand: 'ATTRACTION_STYLE' }
    ]
  },
  {
    id: 15,
    strand: 'ATTRACTION_STYLE',
    question: "When considering compatibility, you value:",
    options: [
      { text: "How well your current lifestyles and values align", value: 'P', strand: 'ATTRACTION_STYLE' },
      { text: "How well your future visions and growth trajectories match", value: 'T', strand: 'ATTRACTION_STYLE' }
    ]
  },
  {
    id: 16,
    strand: 'ATTRACTION_STYLE',
    question: "You're more impressed by someone who:",
    options: [
      { text: "Has built a solid foundation in their life and career", value: 'P', strand: 'ATTRACTION_STYLE' },
      { text: "Is constantly evolving and pushing their boundaries", value: 'T', strand: 'ATTRACTION_STYLE' }
    ]
  },

  // Decision Filter Questions (L vs E)
  {
    id: 17,
    strand: 'DECISION_FILTER',
    question: "When deciding if someone is right for you, you rely more on:",
    options: [
      { text: "Logical analysis of compatibility factors and long-term potential", value: 'L', strand: 'DECISION_FILTER' },
      { text: "Your gut feeling and emotional connection with them", value: 'E', strand: 'DECISION_FILTER' }
    ]
  },
  {
    id: 18,
    strand: 'DECISION_FILTER',
    question: "In relationships, you make important decisions based on:",
    options: [
      { text: "Careful consideration of facts, pros, and cons", value: 'L', strand: 'DECISION_FILTER' },
      { text: "How you feel and what your heart is telling you", value: 'E', strand: 'DECISION_FILTER' }
    ]
  },
  {
    id: 19,
    strand: 'DECISION_FILTER',
    question: "When evaluating a potential partner, you prioritize:",
    options: [
      { text: "Objective criteria like values, goals, and lifestyle compatibility", value: 'L', strand: 'DECISION_FILTER' },
      { text: "The emotional chemistry and connection you feel with them", value: 'E', strand: 'DECISION_FILTER' }
    ]
  },
  {
    id: 20,
    strand: 'DECISION_FILTER',
    question: "You trust your decisions more when they're based on:",
    options: [
      { text: "Thorough analysis and rational thinking", value: 'L', strand: 'DECISION_FILTER' },
      { text: "Intuition and emotional intelligence", value: 'E', strand: 'DECISION_FILTER' }
    ]
  },
  {
    id: 21,
    strand: 'DECISION_FILTER',
    question: "When someone asks for relationship advice, you tend to:",
    options: [
      { text: "Help them analyze the situation logically and consider all factors", value: 'L', strand: 'DECISION_FILTER' },
      { text: "Encourage them to listen to their feelings and trust their instincts", value: 'E', strand: 'DECISION_FILTER' }
    ]
  },
  {
    id: 22,
    strand: 'DECISION_FILTER',
    question: "In dating, you're more likely to:",
    options: [
      { text: "Create a mental checklist of what you're looking for", value: 'L', strand: 'DECISION_FILTER' },
      { text: "Go with the flow and see how you feel about each person", value: 'E', strand: 'DECISION_FILTER' }
    ]
  },
  {
    id: 23,
    strand: 'DECISION_FILTER',
    question: "When conflicts arise, you prefer to resolve them by:",
    options: [
      { text: "Discussing the facts and finding logical solutions", value: 'L', strand: 'DECISION_FILTER' },
      { text: "Addressing the emotional needs and feelings involved", value: 'E', strand: 'DECISION_FILTER' }
    ]
  },
  {
    id: 24,
    strand: 'DECISION_FILTER',
    question: "You know someone is right for you when:",
    options: [
      { text: "All the practical aspects of your lives align well", value: 'L', strand: 'DECISION_FILTER' },
      { text: "You feel a deep emotional connection and understanding", value: 'E', strand: 'DECISION_FILTER' }
    ]
  },

  // Relationship Pace Questions (S vs O)
  {
    id: 25,
    strand: 'RELATIONSHIP_PACE',
    question: "In relationships, you prefer:",
    options: [
      { text: "Clear milestones and progression toward commitment", value: 'S', strand: 'RELATIONSHIP_PACE' },
      { text: "Letting the relationship develop naturally without pressure", value: 'O', strand: 'RELATIONSHIP_PACE' }
    ]
  },
  {
    id: 26,
    strand: 'RELATIONSHIP_PACE',
    question: "You feel most comfortable when:",
    options: [
      { text: "You know where the relationship is headed and what to expect", value: 'S', strand: 'RELATIONSHIP_PACE' },
      { text: "The relationship unfolds organically without rigid timelines", value: 'O', strand: 'RELATIONSHIP_PACE' }
    ]
  },
  {
    id: 27,
    strand: 'RELATIONSHIP_PACE',
    question: "When dating someone new, you like to:",
    options: [
      { text: "Discuss expectations and what you're both looking for early on", value: 'S', strand: 'RELATIONSHIP_PACE' },
      { text: "Take things day by day and see how the connection develops", value: 'O', strand: 'RELATIONSHIP_PACE' }
    ]
  },
  {
    id: 28,
    strand: 'RELATIONSHIP_PACE',
    question: "You prefer relationships that:",
    options: [
      { text: "Follow a predictable path toward deeper commitment", value: 'S', strand: 'RELATIONSHIP_PACE' },
      { text: "Evolve naturally based on mutual feelings and circumstances", value: 'O', strand: 'RELATIONSHIP_PACE' }
    ]
  },
  {
    id: 29,
    strand: 'RELATIONSHIP_PACE',
    question: "When it comes to relationship labels and definitions:",
    options: [
      { text: "You appreciate clarity about where you stand with someone", value: 'S', strand: 'RELATIONSHIP_PACE' },
      { text: "You're comfortable with ambiguity and letting things develop", value: 'O', strand: 'RELATIONSHIP_PACE' }
    ]
  },
  {
    id: 30,
    strand: 'RELATIONSHIP_PACE',
    question: "In the early stages of dating, you're more likely to:",
    options: [
      { text: "Have conversations about exclusivity and future plans", value: 'S', strand: 'RELATIONSHIP_PACE' },
      { text: "Focus on enjoying the present moment and connection", value: 'O', strand: 'RELATIONSHIP_PACE' }
    ]
  },
  {
    id: 31,
    strand: 'RELATIONSHIP_PACE',
    question: "You feel most secure in relationships when:",
    options: [
      { text: "There are clear expectations and defined stages of commitment", value: 'S', strand: 'RELATIONSHIP_PACE' },
      { text: "Both people are free to grow and change together naturally", value: 'O', strand: 'RELATIONSHIP_PACE' }
    ]
  },
  {
    id: 32,
    strand: 'RELATIONSHIP_PACE',
    question: "When someone wants to 'take things slow,' you think:",
    options: [
      { text: "I need to know what that means and what the timeline looks like", value: 'S', strand: 'RELATIONSHIP_PACE' },
      { text: "That's fine, we'll figure it out as we go along", value: 'O', strand: 'RELATIONSHIP_PACE' }
    ]
  }
];

export default questions; 