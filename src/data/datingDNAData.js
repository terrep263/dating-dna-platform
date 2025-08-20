// Dating DNA Framework Data

export const DNA_STRANDS = {
  SOCIAL_ENERGY: {
    name: 'Social Energy',
    code: 'SE',
    options: {
      C: { name: 'Connector', description: 'Thrives on social interaction and building connections' },
      F: { name: 'Focuser', description: 'Prefers deeper, more focused interactions' }
    }
  },
  ATTRACTION_STYLE: {
    name: 'Attraction Style',
    code: 'AS',
    options: {
      P: { name: 'Present', description: 'Attracted to what is currently visible and tangible' },
      T: { name: 'Potential', description: 'Attracted to future possibilities and growth' }
    }
  },
  DECISION_FILTER: {
    name: 'Decision Filter',
    code: 'DF',
    options: {
      L: { name: 'Logical', description: 'Makes decisions based on facts and analysis' },
      E: { name: 'Emotional', description: 'Makes decisions based on feelings and intuition' }
    }
  },
  RELATIONSHIP_PACE: {
    name: 'Relationship Pace',
    code: 'RP',
    options: {
      S: { name: 'Structured', description: 'Prefers clear milestones and defined relationship stages' },
      O: { name: 'Organic', description: 'Prefers natural, fluid relationship development' }
    }
  }
};

export const DATING_DNA_TYPES = {
  CPLS: {
    name: 'The Strategic Connector',
    code: 'CPLS',
    description: 'A social butterfly who builds connections strategically while maintaining logical decision-making and structured relationship goals.',
    strengths: ['Excellent networking skills', 'Clear relationship vision', 'Analytical approach to dating'],
    challenges: ['May overthink relationships', 'Could miss emotional cues', 'Might rush relationship milestones'],
    compatibility: ['FTEO', 'CPES', 'CTLS'],
    datingInsights: {
      whereToMeet: ['Professional networking events', 'Business conferences', 'Strategic planning groups', 'Industry meetups'],
      howToSpotMatches: ['Look for analytical thinkers', 'Notice strategic planning', 'Observe goal-oriented behavior', 'Watch for logical decision-making'],
      conversationStarters: ['"What\'s your strategic approach to dating?"', '"How do you plan for long-term success?"', '"What are your relationship goals?"', '"How do you evaluate compatibility?"']
    },
    relationshipStrategy: {
      timeline: ['Week 1-2: Strategic assessment and goal alignment', 'Week 3-4: Logical compatibility evaluation', 'Week 5-8: Structured relationship planning', 'Month 2-3: Long-term commitment discussions'],
      redFlags: ['Lack of strategic thinking', 'Short-term mindset', 'Inconsistent planning', 'Emotional decision-making without logic']
    },
    recommendations: {
      readingList: ['"The Art of Strategy" by Lawrence Freedman', '"Strategic Relationships" by Andrea Kates', '"Goal-Oriented Dating" by John Gottman'],
      developmentAreas: ['Balance logic with emotional intelligence', 'Practice patience in relationship development', 'Develop emotional awareness', 'Learn to trust intuition'],
      actionPlan: ['Month 1: Create strategic dating plan', 'Month 2: Practice emotional vulnerability', 'Month 3: Balance planning with spontaneity']
    }
  },
  CPLO: {
    name: 'The Natural Networker',
    code: 'CPLO',
    description: 'A charismatic connector who follows their heart while letting relationships develop naturally.',
    strengths: ['Natural charisma', 'Emotional intelligence', 'Flexible relationship approach'],
    challenges: ['May lack relationship boundaries', 'Could be inconsistent', 'Might avoid commitment'],
    compatibility: ['FTES', 'CPLS', 'CTEO'],
    datingInsights: {
      whereToMeet: ['Social events and parties', 'Community gatherings', 'Casual networking', 'Friend-of-friend introductions'],
      howToSpotMatches: ['Look for emotional depth', 'Notice natural chemistry', 'Observe authentic behavior', 'Watch for flexibility'],
      conversationStarters: ['"What makes you feel most alive?"', '"How do you approach new experiences?"', '"What\'s your idea of a perfect day?"', '"How do you handle change?"']
    },
    relationshipStrategy: {
      timeline: ['Week 1-2: Natural connection and chemistry', 'Week 3-4: Emotional bonding and authenticity', 'Week 5-8: Flexible relationship development', 'Month 2-3: Organic commitment when ready'],
      redFlags: ['Rigid expectations', 'Pressure for commitment', 'Lack of emotional depth', 'Controlling behavior']
    },
    recommendations: {
      readingList: ['"The Charisma Myth" by Olivia Fox Cabane', '"Emotional Intelligence" by Daniel Goleman', '"The Art of Possibility" by Rosamund Stone Zander'],
      developmentAreas: ['Set healthy boundaries', 'Develop consistency', 'Practice commitment skills', 'Balance spontaneity with planning'],
      actionPlan: ['Month 1: Define relationship boundaries', 'Month 2: Practice consistent communication', 'Month 3: Develop commitment readiness']
    }
  },
  CPES: {
    name: 'The Heartfelt Connector',
    code: 'CPES',
    description: 'A warm, social person who makes decisions with their heart and prefers structured relationship development.',
    strengths: ['Emotional depth', 'Strong social skills', 'Clear relationship goals'],
    challenges: ['May be overly emotional', 'Could rush into relationships', 'Might ignore red flags'],
    compatibility: ['FTLS', 'CPLS', 'CTES'],
    datingInsights: {
      whereToMeet: ['Community service events', 'Charity fundraisers', 'Social clubs', 'Volunteer organizations'],
      howToSpotMatches: ['Look for caring behavior', 'Notice emotional intelligence', 'Observe social responsibility', 'Watch for structured thinking'],
      conversationStarters: ['"What causes are you passionate about?"', '"How do you help others?"', '"What\'s your vision for a meaningful relationship?"', '"How do you show care?"']
    },
    relationshipStrategy: {
      timeline: ['Week 1-2: Emotional connection and care', 'Week 3-4: Shared values and goals', 'Week 5-8: Structured relationship building', 'Month 2-3: Committed partnership'],
      redFlags: ['Lack of empathy', 'Self-centered behavior', 'Disrespect for emotions', 'Inconsistent care']
    },
    recommendations: {
      readingList: ['"The 5 Love Languages" by Gary Chapman', '"Boundaries in Marriage" by Henry Cloud', '"The Seven Principles for Making Marriage Work" by John Gottman'],
      developmentAreas: ['Balance emotion with logic', 'Practice patience', 'Develop discernment', 'Set healthy boundaries'],
      actionPlan: ['Month 1: Practice emotional balance', 'Month 2: Develop logical thinking', 'Month 3: Build healthy boundaries']
    }
  },
  CPEO: {
    name: 'The Free-Spirited Connector',
    code: 'CPEO',
    description: 'A social butterfly who follows emotions and lets relationships flow naturally.',
    strengths: ['Spontaneous and fun', 'Emotionally expressive', 'Adaptable to change'],
    challenges: ['May lack planning', 'Could be unpredictable', 'Might struggle with commitment'],
    compatibility: ['FTSO', 'CPLO', 'CTEO'],
    datingInsights: {
      whereToMeet: ['Adventure groups', 'Creative workshops', 'Spontaneous events', 'Travel meetups'],
      howToSpotMatches: ['Look for spontaneity', 'Notice creative thinking', 'Observe adaptability', 'Watch for emotional freedom'],
      conversationStarters: ['"What\'s the most spontaneous thing you\'ve done?"', '"How do you handle unexpected changes?"', '"What\'s your creative passion?"', '"How do you express yourself?"']
    },
    relationshipStrategy: {
      timeline: ['Week 1-2: Spontaneous connection and fun', 'Week 3-4: Creative exploration together', 'Week 5-8: Natural relationship flow', 'Month 2-3: Flexible commitment'],
      redFlags: ['Rigid expectations', 'Lack of spontaneity', 'Controlling behavior', 'Judgment of emotions']
    },
    recommendations: {
      readingList: ['"Big Magic" by Elizabeth Gilbert', '"The Power of Now" by Eckhart Tolle', '"Creative Confidence" by Tom Kelley'],
      developmentAreas: ['Develop planning skills', 'Practice consistency', 'Build commitment capacity', 'Balance freedom with responsibility'],
      actionPlan: ['Month 1: Practice basic planning', 'Month 2: Develop consistency', 'Month 3: Build commitment skills']
    }
  },
  CTLS: {
    name: 'The Visionary Connector',
    code: 'CTLS',
    description: 'A social person who sees potential in others and approaches relationships with logic and structure.',
    strengths: ['Future-oriented thinking', 'Analytical approach', 'Clear relationship vision'],
    challenges: ['May have unrealistic expectations', 'Could be overly idealistic', 'Might miss present opportunities'],
    compatibility: ['FPES', 'CPLS', 'FTLS'],
    datingInsights: {
      whereToMeet: ['Innovation conferences', 'Startup events', 'Visionary workshops', 'Future-focused meetups'],
      howToSpotMatches: ['Look for visionary thinking', 'Notice analytical depth', 'Observe strategic planning', 'Watch for future orientation'],
      conversationStarters: ['"What\'s your vision for the future?"', '"How do you approach innovation?"', '"What potential do you see in relationships?"', '"How do you plan for long-term success?"']
    },
    relationshipStrategy: {
      timeline: ['Week 1-2: Vision alignment and potential assessment', 'Week 3-4: Strategic relationship planning', 'Week 5-8: Future-oriented development', 'Month 2-3: Long-term vision commitment'],
      redFlags: ['Short-term thinking', 'Lack of vision', 'Resistance to change', 'Inability to see potential']
    },
    recommendations: {
      readingList: ['"The Art of Possibility" by Rosamund Stone Zander', '"Thinking, Fast and Slow" by Daniel Kahneman', '"The Innovator\'s Dilemma" by Clayton Christensen'],
      developmentAreas: ['Balance vision with present reality', 'Develop practical skills', 'Practice patience with current situations', 'Learn to appreciate present moments'],
      actionPlan: ['Month 1: Balance vision with reality', 'Month 2: Develop present-moment awareness', 'Month 3: Practice practical relationship skills']
    }
  },
  CTLO: {
    name: 'The Dreamer Connector',
    code: 'CTLO',
    description: 'A social visionary who makes logical decisions but lets relationships develop organically.',
    strengths: ['Creative thinking', 'Balanced approach', 'Natural relationship flow'],
    challenges: ['May lack focus', 'Could be inconsistent', 'Might struggle with practical details'],
    compatibility: ['FPES', 'CPLO', 'FTEO'],
    datingInsights: {
      whereToMeet: ['Creative workshops', 'Art galleries', 'Innovation labs', 'Design thinking events'],
      howToSpotMatches: ['Look for creative thinking', 'Notice balanced approach', 'Observe natural flow', 'Watch for logical creativity'],
      conversationStarters: ['"What\'s your creative process?"', '"How do you balance logic and intuition?"', '"What inspires your thinking?"', '"How do you approach new ideas?"']
    },
    relationshipStrategy: {
      timeline: ['Week 1-2: Creative connection and vision sharing', 'Week 3-4: Balanced relationship exploration', 'Week 5-8: Natural development with structure', 'Month 2-3: Organic commitment with planning'],
      redFlags: ['Rigid thinking', 'Lack of creativity', 'Overly structured approach', 'Inability to adapt']
    },
    recommendations: {
      readingList: ['"Creative Confidence" by Tom Kelley', '"The War of Art" by Steven Pressfield', '"Flow" by Mihaly Csikszentmihalyi'],
      developmentAreas: ['Develop focus and consistency', 'Practice practical planning', 'Build follow-through skills', 'Balance creativity with execution'],
      actionPlan: ['Month 1: Develop focus and consistency', 'Month 2: Practice practical planning', 'Month 3: Build execution skills']
    }
  },
  CTES: {
    name: 'The Passionate Visionary',
    code: 'CTES',
    description: 'A social dreamer who follows their heart and seeks structured relationship development.',
    strengths: ['Passionate and inspiring', 'Emotional depth', 'Clear relationship goals'],
    challenges: ['May be overly idealistic', 'Could rush into relationships', 'Might ignore reality'],
    compatibility: ['FPLS', 'CPES', 'FTES'],
    datingInsights: {
      whereToMeet: ['Passion projects', 'Social causes', 'Creative communities', 'Visionary groups'],
      howToSpotMatches: ['Look for passion and purpose', 'Notice emotional depth', 'Observe structured thinking', 'Watch for inspiring qualities'],
      conversationStarters: ['"What are you most passionate about?"', '"How do you want to change the world?"', '"What\'s your vision for love?"', '"How do you inspire others?"']
    },
    relationshipStrategy: {
      timeline: ['Week 1-2: Passionate connection and vision sharing', 'Week 3-4: Emotional bonding with structure', 'Week 5-8: Structured relationship building', 'Month 2-3: Committed partnership with vision'],
      redFlags: ['Lack of passion', 'Emotional shallowness', 'Disrespect for vision', 'Inability to commit']
    },
    recommendations: {
      readingList: ['"The Passion Test" by Janet Bray Attwood', '"Start with Why" by Simon Sinek', '"The Power of Vulnerability" by Brené Brown'],
      developmentAreas: ['Balance idealism with reality', 'Practice patience', 'Develop practical skills', 'Learn to compromise'],
      actionPlan: ['Month 1: Balance idealism with reality', 'Month 2: Practice patience and compromise', 'Month 3: Develop practical relationship skills']
    }
  },
  CTEO: {
    name: 'The Free-Spirited Dreamer',
    code: 'CTEO',
    description: 'A social visionary who follows emotions and embraces organic relationship development.',
    strengths: ['Creative and inspiring', 'Emotionally free', 'Natural relationship flow'],
    challenges: ['May lack structure', 'Could be unpredictable', 'Might avoid commitment'],
    compatibility: ['FPLO', 'CPEO', 'FTEO'],
    datingInsights: {
      whereToMeet: ['Creative communities', 'Art collectives', 'Innovation hubs', 'Visionary meetups'],
      howToSpotMatches: ['Look for creative vision', 'Notice emotional freedom', 'Observe natural flow', 'Watch for inspiring qualities'],
      conversationStarters: ['"What\'s your creative vision?"', '"How do you express yourself?"', '"What inspires your dreams?"', '"How do you handle change?"']
    },
    relationshipStrategy: {
      timeline: ['Week 1-2: Creative connection and vision sharing', 'Week 3-4: Emotional exploration and freedom', 'Week 5-8: Natural relationship development', 'Month 2-3: Organic commitment with vision'],
      redFlags: ['Rigid expectations', 'Lack of creativity', 'Controlling behavior', 'Disrespect for emotional freedom']
    },
    recommendations: {
      readingList: ['"Big Magic" by Elizabeth Gilbert', '"The Artist\'s Way" by Julia Cameron', '"Flow" by Mihaly Csikszentmihalyi'],
      developmentAreas: ['Develop structure and planning', 'Practice consistency', 'Build commitment skills', 'Balance freedom with responsibility'],
      actionPlan: ['Month 1: Develop basic structure', 'Month 2: Practice consistency', 'Month 3: Build commitment capacity']
    }
  },
  FPLS: {
    name: 'The Focused Strategist',
    code: 'FPLS',
    description: 'A selective connector who prefers focused interactions and structured relationship development.',
    strengths: ['Deep connections', 'Clear goals', 'Analytical thinking'],
    challenges: ['May be too selective', 'Could miss opportunities', 'Might be rigid'],
    compatibility: ['CTES', 'FPES', 'CPLS'],
    datingInsights: {
      whereToMeet: ['Professional development events', 'Industry conferences', 'Strategic networking', 'Focused meetups'],
      howToSpotMatches: ['Look for analytical thinking', 'Notice strategic planning', 'Observe focused behavior', 'Watch for logical decision-making'],
      conversationStarters: ['"What\'s your strategic approach to relationships?"', '"How do you evaluate compatibility?"', '"What are your relationship goals?"', '"How do you plan for success?"']
    },
    relationshipStrategy: {
      timeline: ['Week 1-2: Strategic assessment and goal alignment', 'Week 3-4: Logical compatibility evaluation', 'Week 5-8: Structured relationship planning', 'Month 2-3: Long-term commitment discussions'],
      redFlags: ['Lack of strategic thinking', 'Short-term mindset', 'Inconsistent planning', 'Emotional decision-making without logic']
    },
    recommendations: {
      readingList: ['"The Art of Strategy" by Lawrence Freedman', '"Strategic Relationships" by Andrea Kates', '"Goal-Oriented Dating" by John Gottman'],
      developmentAreas: ['Balance logic with emotional intelligence', 'Practice patience in relationship development', 'Develop emotional awareness', 'Learn to trust intuition'],
      actionPlan: ['Month 1: Create strategic dating plan', 'Month 2: Practice emotional vulnerability', 'Month 3: Balance planning with spontaneity']
    }
  },
  FPLO: {
    name: 'The Natural Focuser',
    code: 'FPLO',
    description: 'A selective connector who follows their heart and lets relationships develop naturally.',
    strengths: ['Authentic connections', 'Emotional depth', 'Natural relationship flow'],
    challenges: ['May be too selective', 'Could be inconsistent', 'Might avoid planning'],
    compatibility: ['CTEO', 'FPEO', 'CPLO'],
    datingInsights: {
      whereToMeet: ['Intimate social gatherings', 'Small group activities', 'Deep conversation meetups', 'Authentic connection events'],
      howToSpotMatches: ['Look for emotional depth', 'Notice authentic behavior', 'Observe natural chemistry', 'Watch for genuine connection'],
      conversationStarters: ['"What makes you feel most alive?"', '"How do you approach deep connections?"', '"What\'s your idea of authentic love?"', '"How do you handle vulnerability?"']
    },
    relationshipStrategy: {
      timeline: ['Week 1-2: Deep connection and authenticity', 'Week 3-4: Emotional bonding and trust', 'Week 5-8: Natural relationship development', 'Month 2-3: Organic commitment when ready'],
      redFlags: ['Superficial behavior', 'Lack of emotional depth', 'Pressure for commitment', 'Inauthentic connection']
    },
    recommendations: {
      readingList: ['"The Power of Vulnerability" by Brené Brown', '"Attached" by Amir Levine', '"The Art of Possibility" by Rosamund Stone Zander'],
      developmentAreas: ['Set healthy boundaries', 'Develop consistency', 'Practice commitment skills', 'Balance authenticity with planning'],
      actionPlan: ['Month 1: Define relationship boundaries', 'Month 2: Practice consistent communication', 'Month 3: Develop commitment readiness']
    }
  },
  FPES: {
    name: 'The Heartfelt Focuser',
    code: 'FPES',
    description: 'A selective person who makes emotional decisions and prefers structured relationships.',
    strengths: ['Deep emotional connections', 'Clear relationship vision', 'Authentic approach'],
    challenges: ['May be overly emotional', 'Could rush into relationships', 'Might be too intense'],
    compatibility: ['CTLS', 'FPLS', 'CPES'],
    datingInsights: {
      whereToMeet: ['Community service events', 'Charity fundraisers', 'Social clubs', 'Volunteer organizations'],
      howToSpotMatches: ['Look for caring behavior', 'Notice emotional intelligence', 'Observe social responsibility', 'Watch for structured thinking'],
      conversationStarters: ['"What causes are you passionate about?"', '"How do you help others?"', '"What\'s your vision for a meaningful relationship?"', '"How do you show care?"']
    },
    relationshipStrategy: {
      timeline: ['Week 1-2: Emotional connection and care', 'Week 3-4: Shared values and goals', 'Week 5-8: Structured relationship building', 'Month 2-3: Committed partnership'],
      redFlags: ['Lack of empathy', 'Self-centered behavior', 'Disrespect for emotions', 'Inconsistent care']
    },
    recommendations: {
      readingList: ['"The 5 Love Languages" by Gary Chapman', '"Boundaries in Marriage" by Henry Cloud', '"The Seven Principles for Making Marriage Work" by John Gottman'],
      developmentAreas: ['Balance emotion with logic', 'Practice patience', 'Develop discernment', 'Set healthy boundaries'],
      actionPlan: ['Month 1: Practice emotional balance', 'Month 2: Develop logical thinking', 'Month 3: Build healthy boundaries']
    }
  },
  FPEO: {
    name: 'The Free-Spirited Focuser',
    code: 'FPEO',
    description: 'A selective person who follows emotions and embraces organic relationship development.',
    strengths: ['Authentic and spontaneous', 'Emotional freedom', 'Natural relationship flow'],
    challenges: ['May lack structure', 'Could be unpredictable', 'Might avoid commitment'],
    compatibility: ['CTLO', 'FPLO', 'CPEO'],
    datingInsights: {
      whereToMeet: ['Adventure groups', 'Creative workshops', 'Spontaneous events', 'Travel meetups'],
      howToSpotMatches: ['Look for spontaneity', 'Notice creative thinking', 'Observe adaptability', 'Watch for emotional freedom'],
      conversationStarters: ['"What\'s the most spontaneous thing you\'ve done?"', '"How do you handle unexpected changes?"', '"What\'s your creative passion?"', '"How do you express yourself?"']
    },
    relationshipStrategy: {
      timeline: ['Week 1-2: Spontaneous connection and fun', 'Week 3-4: Creative exploration together', 'Week 5-8: Natural relationship flow', 'Month 2-3: Flexible commitment'],
      redFlags: ['Rigid expectations', 'Lack of spontaneity', 'Controlling behavior', 'Judgment of emotions']
    },
    recommendations: {
      readingList: ['"Big Magic" by Elizabeth Gilbert', '"The Power of Now" by Eckhart Tolle', '"Creative Confidence" by Tom Kelley'],
      developmentAreas: ['Develop planning skills', 'Practice consistency', 'Build commitment capacity', 'Balance freedom with responsibility'],
      actionPlan: ['Month 1: Practice basic planning', 'Month 2: Develop consistency', 'Month 3: Build commitment skills']
    }
  },
  FTLS: {
    name: 'The Visionary Focuser',
    code: 'FTLS',
    description: 'A selective person who sees potential and approaches relationships with logic and structure.',
    strengths: ['Future-oriented', 'Analytical thinking', 'Clear relationship vision'],
    challenges: ['May have unrealistic expectations', 'Could be too idealistic', 'Might miss present opportunities'],
    compatibility: ['CPES', 'FTES', 'FPES'],
    datingInsights: {
      whereToMeet: ['Innovation conferences', 'Startup events', 'Visionary workshops', 'Future-focused meetups'],
      howToSpotMatches: ['Look for visionary thinking', 'Notice analytical depth', 'Observe strategic planning', 'Watch for future orientation'],
      conversationStarters: ['"What\'s your vision for the future?"', '"How do you approach innovation?"', '"What potential do you see in relationships?"', '"How do you plan for long-term success?"']
    },
    relationshipStrategy: {
      timeline: ['Week 1-2: Vision alignment and potential assessment', 'Week 3-4: Strategic relationship planning', 'Week 5-8: Future-oriented development', 'Month 2-3: Long-term vision commitment'],
      redFlags: ['Short-term thinking', 'Lack of vision', 'Resistance to change', 'Inability to see potential']
    },
    recommendations: {
      readingList: ['"The Art of Possibility" by Rosamund Stone Zander', '"Thinking, Fast and Slow" by Daniel Kahneman', '"The Innovator\'s Dilemma" by Clayton Christensen'],
      developmentAreas: ['Balance vision with present reality', 'Develop practical skills', 'Practice patience with current situations', 'Learn to appreciate present moments'],
      actionPlan: ['Month 1: Balance vision with reality', 'Month 2: Develop present-moment awareness', 'Month 3: Practice practical relationship skills']
    }
  },
  FTLO: {
    name: 'The Dreamer Focuser',
    code: 'FTLO',
    description: 'A selective visionary who makes logical decisions but lets relationships develop organically.',
    strengths: ['Creative thinking', 'Balanced approach', 'Natural relationship flow'],
    challenges: ['May lack focus', 'Could be inconsistent', 'Might struggle with practical details'],
    compatibility: ['CPEO', 'FTEO', 'FPEO'],
    datingInsights: {
      whereToMeet: ['Creative workshops', 'Art galleries', 'Innovation labs', 'Design thinking events'],
      howToSpotMatches: ['Look for creative thinking', 'Notice balanced approach', 'Observe natural flow', 'Watch for logical creativity'],
      conversationStarters: ['"What\'s your creative process?"', '"How do you balance logic and intuition?"', '"What inspires your thinking?"', '"How do you approach new ideas?"']
    },
    relationshipStrategy: {
      timeline: ['Week 1-2: Creative connection and vision sharing', 'Week 3-4: Balanced relationship exploration', 'Week 5-8: Natural development with structure', 'Month 2-3: Organic commitment with planning'],
      redFlags: ['Rigid thinking', 'Lack of creativity', 'Overly structured approach', 'Inability to adapt']
    },
    recommendations: {
      readingList: ['"Creative Confidence" by Tom Kelley', '"The War of Art" by Steven Pressfield', '"Flow" by Mihaly Csikszentmihalyi'],
      developmentAreas: ['Develop focus and consistency', 'Practice practical planning', 'Build follow-through skills', 'Balance creativity with execution'],
      actionPlan: ['Month 1: Develop focus and consistency', 'Month 2: Practice practical planning', 'Month 3: Build execution skills']
    }
  },
  FTES: {
    name: 'The Passionate Focuser',
    code: 'FTES',
    description: 'A selective dreamer who follows their heart and seeks structured relationship development.',
    strengths: ['Passionate and focused', 'Emotional depth', 'Clear relationship goals'],
    challenges: ['May be overly idealistic', 'Could rush into relationships', 'Might ignore reality'],
    compatibility: ['CPLS', 'FTLS', 'FPES'],
    datingInsights: {
      whereToMeet: ['Passion projects', 'Social causes', 'Creative communities', 'Visionary groups'],
      howToSpotMatches: ['Look for passion and purpose', 'Notice emotional depth', 'Observe structured thinking', 'Watch for inspiring qualities'],
      conversationStarters: ['"What are you most passionate about?"', '"How do you want to change the world?"', '"What\'s your vision for love?"', '"How do you inspire others?"']
    },
    relationshipStrategy: {
      timeline: ['Week 1-2: Passionate connection and vision sharing', 'Week 3-4: Emotional bonding with structure', 'Week 5-8: Structured relationship building', 'Month 2-3: Committed partnership with vision'],
      redFlags: ['Lack of passion', 'Emotional shallowness', 'Disrespect for vision', 'Inability to commit']
    },
    recommendations: {
      readingList: ['"The Passion Test" by Janet Bray Attwood', '"Start with Why" by Simon Sinek', '"The Power of Vulnerability" by Brené Brown'],
      developmentAreas: ['Balance idealism with reality', 'Practice patience', 'Develop practical skills', 'Learn to compromise'],
      actionPlan: ['Month 1: Balance idealism with reality', 'Month 2: Practice patience and compromise', 'Month 3: Develop practical relationship skills']
    }
  },
  FTEO: {
    name: 'The Authentic Dreamer',
    code: 'FTEO',
    description: 'A selective visionary who follows emotions and embraces organic relationship development.',
    strengths: ['Authentic and creative', 'Emotional freedom', 'Natural relationship flow'],
    challenges: ['May lack structure', 'Could be unpredictable', 'Might avoid commitment'],
    compatibility: ['CPLO', 'FTLO', 'FPEO'],
    datingInsights: {
      whereToMeet: ['Creative communities', 'Art collectives', 'Innovation hubs', 'Visionary meetups'],
      howToSpotMatches: ['Look for creative vision', 'Notice emotional freedom', 'Observe natural flow', 'Watch for inspiring qualities'],
      conversationStarters: ['"What\'s your creative vision?"', '"How do you express yourself?"', '"What inspires your dreams?"', '"How do you handle change?"']
    },
    relationshipStrategy: {
      timeline: ['Week 1-2: Creative connection and vision sharing', 'Week 3-4: Emotional exploration and freedom', 'Week 5-8: Natural relationship development', 'Month 2-3: Organic commitment with vision'],
      redFlags: ['Rigid expectations', 'Lack of creativity', 'Controlling behavior', 'Disrespect for emotional freedom']
    },
    recommendations: {
      readingList: ['"Big Magic" by Elizabeth Gilbert', '"The Artist\'s Way" by Julia Cameron', '"Flow" by Mihaly Csikszentmihalyi'],
      developmentAreas: ['Develop structure and planning', 'Practice consistency', 'Build commitment skills', 'Balance freedom with responsibility'],
      actionPlan: ['Month 1: Develop basic structure', 'Month 2: Practice consistency', 'Month 3: Build commitment capacity']
    }
  }
};

export const ASSESSMENT_QUESTIONS = [
  // Social Energy Questions (8 questions)
  {
    id: 1,
    strand: 'SOCIAL_ENERGY',
    question: 'At a party, I prefer to:',
    options: [
      { text: 'Meet as many new people as possible', value: 'C' },
      { text: 'Have deep conversations with a few people', value: 'F' }
    ]
  },
  {
    id: 2,
    strand: 'SOCIAL_ENERGY',
    question: 'When dating, I enjoy:',
    options: [
      { text: 'Group activities and double dates', value: 'C' },
      { text: 'One-on-one intimate conversations', value: 'F' }
    ]
  },
  {
    id: 3,
    strand: 'SOCIAL_ENERGY',
    question: 'I feel most energized when:',
    options: [
      { text: 'Surrounded by friends and socializing', value: 'C' },
      { text: 'Spending quality time with one person', value: 'F' }
    ]
  },
  {
    id: 4,
    strand: 'SOCIAL_ENERGY',
    question: 'My ideal weekend involves:',
    options: [
      { text: 'Meeting new people and expanding my network', value: 'C' },
      { text: 'Deepening existing relationships', value: 'F' }
    ]
  },
  {
    id: 5,
    strand: 'SOCIAL_ENERGY',
    question: 'When I meet someone new, I:',
    options: [
      { text: 'Immediately think of other people they should meet', value: 'C' },
      { text: 'Focus on getting to know them personally', value: 'F' }
    ]
  },
  {
    id: 6,
    strand: 'SOCIAL_ENERGY',
    question: 'I prefer dating someone who:',
    options: [
      { text: 'Has a wide social circle and enjoys networking', value: 'C' },
      { text: 'Values deep, meaningful connections', value: 'F' }
    ]
  },
  {
    id: 7,
    strand: 'SOCIAL_ENERGY',
    question: 'In relationships, I tend to:',
    options: [
      { text: 'Introduce my partner to many friends and acquaintances', value: 'C' },
      { text: 'Keep our relationship more private and intimate', value: 'F' }
    ]
  },
  {
    id: 8,
    strand: 'SOCIAL_ENERGY',
    question: 'I feel most comfortable when:',
    options: [
      { text: 'I\'m the center of social attention', value: 'C' },
      { text: 'I\'m in a quiet, intimate setting', value: 'F' }
    ]
  },

  // Attraction Style Questions (8 questions)
  {
    id: 9,
    strand: 'ATTRACTION_STYLE',
    question: 'I\'m most attracted to someone who:',
    options: [
      { text: 'Has achieved their current goals and is stable', value: 'P' },
      { text: 'Shows potential for future growth and success', value: 'T' }
    ]
  },
  {
    id: 10,
    strand: 'ATTRACTION_STYLE',
    question: 'When choosing a partner, I focus on:',
    options: [
      { text: 'What they have accomplished so far', value: 'P' },
      { text: 'What they could become in the future', value: 'T' }
    ]
  },
  {
    id: 11,
    strand: 'ATTRACTION_STYLE',
    question: 'I prefer someone who:',
    options: [
      { text: 'Has a proven track record of success', value: 'P' },
      { text: 'Has ambitious dreams and plans', value: 'T' }
    ]
  },
  {
    id: 12,
    strand: 'ATTRACTION_STYLE',
    question: 'I\'m drawn to people who:',
    options: [
      { text: 'Are already where they want to be in life', value: 'P' },
      { text: 'Are on a journey of self-improvement', value: 'T' }
    ]
  },
  {
    id: 13,
    strand: 'ATTRACTION_STYLE',
    question: 'When dating, I value:',
    options: [
      { text: 'Current stability and security', value: 'P' },
      { text: 'Future possibilities and growth', value: 'T' }
    ]
  },
  {
    id: 14,
    strand: 'ATTRACTION_STYLE',
    question: 'I prefer partners who:',
    options: [
      { text: 'Have established careers and lifestyles', value: 'P' },
      { text: 'Are building their careers and exploring options', value: 'T' }
    ]
  },
  {
    id: 15,
    strand: 'ATTRACTION_STYLE',
    question: 'I\'m most impressed by:',
    options: [
      { text: 'What someone has already accomplished', value: 'P' },
      { text: 'What someone is working toward', value: 'T' }
    ]
  },
  {
    id: 16,
    strand: 'ATTRACTION_STYLE',
    question: 'In relationships, I look for:',
    options: [
      { text: 'Someone who has their life together now', value: 'P' },
      { text: 'Someone who is growing and evolving', value: 'T' }
    ]
  },

  // Decision Filter Questions (8 questions)
  {
    id: 17,
    strand: 'DECISION_FILTER',
    question: 'When making important decisions, I:',
    options: [
      { text: 'Analyze facts and weigh pros and cons', value: 'L' },
      { text: 'Go with my gut feeling and intuition', value: 'E' }
    ]
  },
  {
    id: 18,
    strand: 'DECISION_FILTER',
    question: 'I trust my decisions when they\'re based on:',
    options: [
      { text: 'Logical reasoning and evidence', value: 'L' },
      { text: 'How I feel about the situation', value: 'E' }
    ]
  },
  {
    id: 19,
    strand: 'DECISION_FILTER',
    question: 'When choosing a partner, I rely on:',
    options: [
      { text: 'Compatibility factors and shared values', value: 'L' },
      { text: 'Chemistry and emotional connection', value: 'E' }
    ]
  },
  {
    id: 20,
    strand: 'DECISION_FILTER',
    question: 'I prefer to make decisions by:',
    options: [
      { text: 'Researching and gathering information', value: 'L' },
      { text: 'Following my heart and instincts', value: 'E' }
    ]
  },
  {
    id: 21,
    strand: 'DECISION_FILTER',
    question: 'When I\'m unsure about something, I:',
    options: [
      { text: 'Seek out more facts and data', value: 'L' },
      { text: 'Take time to reflect on my feelings', value: 'E' }
    ]
  },
  {
    id: 22,
    strand: 'DECISION_FILTER',
    question: 'I believe the best decisions come from:',
    options: [
      { text: 'Careful analysis and planning', value: 'L' },
      { text: 'Intuition and emotional intelligence', value: 'E' }
    ]
  },
  {
    id: 23,
    strand: 'DECISION_FILTER',
    question: 'When dating, I evaluate potential partners by:',
    options: [
      { text: 'Checking compatibility on multiple levels', value: 'L' },
      { text: 'How I feel when I\'m with them', value: 'E' }
    ]
  },
  {
    id: 24,
    strand: 'DECISION_FILTER',
    question: 'I feel most confident when I:',
    options: [
      { text: 'Have all the facts and information', value: 'L' },
      { text: 'Trust my instincts and feelings', value: 'E' }
    ]
  },

  // Relationship Pace Questions (8 questions)
  {
    id: 25,
    strand: 'RELATIONSHIP_PACE',
    question: 'I prefer relationships that:',
    options: [
      { text: 'Follow clear stages and milestones', value: 'S' },
      { text: 'Develop naturally without pressure', value: 'O' }
    ]
  },
  {
    id: 26,
    strand: 'RELATIONSHIP_PACE',
    question: 'I feel most comfortable when:',
    options: [
      { text: 'I know where the relationship is heading', value: 'S' },
      { text: 'I can let the relationship unfold naturally', value: 'O' }
    ]
  },
  {
    id: 27,
    strand: 'RELATIONSHIP_PACE',
    question: 'I prefer to:',
    options: [
      { text: 'Set relationship goals and timelines', value: 'S' },
      { text: 'Take things day by day', value: 'O' }
    ]
  },
  {
    id: 28,
    strand: 'RELATIONSHIP_PACE',
    question: 'When dating, I like to:',
    options: [
      { text: 'Have clear expectations and boundaries', value: 'S' },
      { text: 'Keep things flexible and open', value: 'O' }
    ]
  },
  {
    id: 29,
    strand: 'RELATIONSHIP_PACE',
    question: 'I feel most secure when:',
    options: [
      { text: 'I know the next steps in the relationship', value: 'S' },
      { text: 'I can be spontaneous and go with the flow', value: 'O' }
    ]
  },
  {
    id: 30,
    strand: 'RELATIONSHIP_PACE',
    question: 'I prefer partners who:',
    options: [
      { text: 'Want to plan and structure our future together', value: 'S' },
      { text: 'Are comfortable with uncertainty and change', value: 'O' }
    ]
  },
  {
    id: 31,
    strand: 'RELATIONSHIP_PACE',
    question: 'When it comes to commitment, I:',
    options: [
      { text: 'Prefer to discuss timelines and expectations', value: 'S' },
      { text: 'Let it happen when it feels right', value: 'O' }
    ]
  },
  {
    id: 32,
    strand: 'RELATIONSHIP_PACE',
    question: 'I believe relationships work best when:',
    options: [
      { text: 'Both partners have clear goals and plans', value: 'S' },
      { text: 'Both partners can adapt and grow together', value: 'O' }
    ]
  }
];

export const calculateDNAType = (answers) => {
  const strandScores = {
    SOCIAL_ENERGY: { C: 0, F: 0 },
    ATTRACTION_STYLE: { P: 0, T: 0 },
    DECISION_FILTER: { L: 0, E: 0 },
    RELATIONSHIP_PACE: { S: 0, O: 0 }
  };

  // Calculate scores for each strand
  answers.forEach(answer => {
    const question = ASSESSMENT_QUESTIONS.find(q => q.id === answer.questionId);
    if (question) {
      strandScores[question.strand][answer.value]++;
    }
  });

  // Determine dominant trait for each strand
  const dnaCode = Object.keys(strandScores).map(strand => {
    const scores = strandScores[strand];
    const options = Object.keys(scores);
    return scores[options[0]] >= scores[options[1]] ? options[0] : options[1];
  }).join('');

  return {
    dnaCode,
    strandScores,
    percentages: Object.keys(strandScores).map(strand => {
      const scores = strandScores[strand];
      const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
      const dominant = Object.keys(scores).find(key => 
        scores[key] === Math.max(...Object.values(scores))
      );
      return {
        strand,
        dominant,
        percentage: Math.round((scores[dominant] / total) * 100)
      };
    })
  };
}; 