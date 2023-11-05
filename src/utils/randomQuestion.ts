const randomQuestions: readonly string[] = [
  'What does Piero do to maintain his technical certifications?',
  "What are Piero's IT strengths and weaknesses?",
  "What are Piero's technical certifications?",
  'Does Piero prefer to work alone or on a team?',
  "What was Piero's specific role and responsibilities on the most recent project he worked on?"
]

const getRandomQuestion = (): string =>
  randomQuestions[Math.floor(Math.random() * randomQuestions.length)]

export default getRandomQuestion
