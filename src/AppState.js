import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  testNames: {
    test1: "8 Wastes",
    customTest: "Custom",
    test2: "Lean Terminology"
  },
  questions: [
    {
      questionText: 'Which one is used for two-way binding?',
      answerOptions: [
        { answerText: 'v-on', isCorrect: false },
        { answerText: 'v-bind', isCorrect: false },
        { answerText: 'v-model', isCorrect: true },
        { answerText: 'v-if', isCorrect: false },


      ],
    },
    {
      questionText: 'Who is the creator of vueJS ?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: false },
        { answerText: 'Evan You', isCorrect: true },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'Vue is used in the backend. - True or False?',
      answerOptions: [
        { answerText: 'True', isCorrect: false },
        { answerText: 'False', isCorrect: true },
      ],
    },
    {
      questionText: 'Which version of Vue is Launched on 2020?',
      answerOptions: [
        { answerText: 'Vue 2', isCorrect: false },
        { answerText: 'Vue 1', isCorrect: false },
        { answerText: 'Vue 4', isCorrect: false },
        { answerText: 'Vue 3', isCorrect: true },
      ],
    },
    {
      questionText: 'Is vue an OpenSource Library?',
      answerOptions: [
        { answerText: 'True', isCorrect: true },
        { answerText: 'False', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following is a Full Javascript Frramework',
      answerOptions: [
        { answerText: 'Vue', isCorrect: false },
        { answerText: 'node', isCorrect: false },
        { answerText: 'react', isCorrect: false },
        { answerText: 'Angular', isCorrect: true },
      ],
    },
    {
      questionText: 'Composition API can be used on which version?',
      answerOptions: [
        { answerText: 'Vue 5', isCorrect: false },
        { answerText: 'Vue 2 Only', isCorrect: false },
        { answerText: 'Vue 3 Only', isCorrect: false },
        { answerText: 'Both Vue 2 and Vue 3', isCorrect: true },
      ],
    },
  ],

  test1: [
    {
      question: "6S",
      a: "Study, sort, shine, set in order, standardize, and sustain.",
      b: "To sleep",
      c: "To Fart",
      d: "To poop",
      correct: "Study, sort, shine, set in order, standardize, and sustain."
    },
    {
      question: "Andon",
      a: "to poop",
      b: "to sing",
      c: " A visual light used to show the current status of a machine or process.",
      d: "To code",
      correct: "A visual light used to show the current status of a machine or process."
    },
    {
      question: "Current State",
      a: "to poop",
      b: "Current condition of anything. How something is currently being done.",
      c: "to poop",
      d: "to fart",
      correct: "Current condition of anything. How something is currently being done."
    },
    {
      question: "Defects",
      a: "to poop",
      b: "Waste of inspection, repair, and scrapping of material to which value has already been added.",
      c: "to poop",
      d: "to fart",
      correct: "b"
    },
    {
      question: "FIFO",
      a: "to poop",
      b: "Current condition of anything. How something is currently being done.",
      c: "to poop",
      d: "First in, first out.",
      correct: "d"
    },
    {
      question: "Five Whys",
      a: "Asking five why questions to get to the root cause of a problem.",
      b: "Current condition of anything. How something is currently being done.",
      c: "to poop",
      d: "First in, first out.",
      correct: "a"
    },
    {
      question: "Flow",
      a: "to poop",
      b: "Current condition of anything. How something is currently being done.",
      c: "Move or process in a forward motion.",
      d: "First in, first out.",
      correct: "c"
    },
    {
      question: "Future state",
      a: "The condition we imagine something can be in once changes have taken place.",
      b: "Current condition of anything. How something is currently being done.",
      c: "Move or process in a forward motion.",
      d: "First in, first out.",
      correct: "a"
    },
    {
      question: "Gemba",
      a: "to poop",
      b: "Current condition of anything. How something is currently being done.",
      c: "Move or process in a forward motion.",
      d: "The real place” the place where work occurs.",
      correct: "d"
    },
    {
      question: "Hai",
      a: "I accept the challenge",
      b: "Current condition of anything. How something is currently being done.",
      c: "Move or process in a forward motion.",
      d: "The real place” the place where work occurs.",
      correct: "a"
    },
    {
      question: "Hansei",
      a: "'Reflection'. Reflect on what went right or what went wrong. Make changes if needed and try something else.",
      b: "Current condition of anything. How something is currently being done.",
      c: "Move or process in a forward motion.",
      d: "The real place” the place where work occurs.",
      correct: "a"
    },
    {
      question: "Heijunka",
      a: "'Reflection'. Reflect on what went right or what went wrong. Make changes if needed and try something else.",
      b: "Current condition of anything. How something is currently being done.",
      c: " A process to help manage production by leveling peaks and valleys of customer demand.",
      d: "The real place” the place where work occurs.",
      correct: "c"
    },
    {
      question: "Kaizen",
      a: "'Reflection'. Reflect on what went right or what went wrong. Make changes if needed and try something else.",
      b: "Current condition of anything. How something is currently being done.",
      c: "Move or process in a forward motion.",
      d: "Many small changes for the better, created by the people that do the work.",
      correct: "d"
    },
    {
      question: "Kanban",
      a: "'Reflection'. Reflect on what went right or what went wrong. Make changes if needed and try something else.",
      b: " A visual system that shows you to replace what has been consumed.",
      c: "Move or process in a forward motion.",
      d: "Many small changes for the better, created by the people that do the work.",
      correct: "d"
    },
  ],

})
