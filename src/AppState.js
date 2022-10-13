import { reactive } from 'vue'
import { loadState } from '../app/Utils/Store.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  testNames: {
    wasteTest: "8 Wastes",
    customTest: "Custom",
    test2: "Lean Terminology"
  },
  leanTerminology: [
    {

      questionText: '6S',
      answerOptions: [
        { letter: "a", answerText: "Study, sort, shine, set in order, standardize, and sustain.", isCorrect: true },
        { letter: "a", answerText: 'Current condition of anything. How something is currently being done.' },
        { letter: "c", answerText: 'Move or process in a forward motion.' },
        { letter: "d", answerText: 'The real place the place where work occurs.' },


      ],
    },
    {
      questionText: 'Andon',
      answerOptions: [
        { letter: "a", answerText: 'A visual system that shows you to replace what has been consumed.' },
        { letter: "b", answerText: 'The real place the place where work occurs.' },
        { letter: "c", answerText: 'A visual light used to show the current status of a machine or process.', isCorrect: true },
        { letter: "d", answerText: 'First in, first out.' },
      ],
    },
    {
      questionText: 'Current State',
      answerOptions: [
        { letter: "a", answerText: 'The real place the place where work occurs.' },
        { letter: "b", answerText: 'Current condition of anything. How something is currently being done.', isCorrect: true },
        { letter: "c", answerText: 'Move or process in a forward motion.' },
        { letter: "d", answerText: 'Many small changes for the better, created by the people that do the work.' },
      ],
    },
    {
      questionText: 'Defects',
      answerOptions: [
        { letter: "a", answerText: 'The real place the place where work occurs.' },
        { letter: "b", answerText: 'Move or process in a forward motion.' },
        { letter: "c", answerText: 'Many small changes for the better, created by the people that do the work.' },
        { letter: "d", answerText: 'Waste of inspection, repair, and scrapping of material to which value has already been added.', isCorrect: true },
      ],
    },
    {
      questionText: 'FIFO',
      answerOptions: [
        { letter: "a", answerText: 'First in, first out.', isCorrect: true },
        { letter: "b", answerText: 'A visual system that shows you to replace what has been consumed.' },
        { letter: "c", answerText: ' “I accept the challenge.”' },
        { letter: "d", answerText: '“Reflection”. Reflect on what went right or what went wrong. Make changes if needed and try something else.' },
      ],
    },
    {
      questionText: 'Five Whys',
      answerOptions: [
        { letter: "a", answerText: 'A visual system that shows you to replace what has been consumed.' },
        { letter: "b", answerText: '“I accept the challenge.”' },
        { letter: "c", answerText: 'Study, sort, shine, set in order, standardize, and sustain.' },
        { letter: "d", answerText: 'Asking five why questions to get to the root cause of a problem.', isCorrect: true },
      ],
    },
    {
      questionText: 'Flow',
      answerOptions: [
        { letter: "a", answerText: 'The real place the place where work occurs.' },
        { letter: "b", answerText: '“I accept the challenge.”' },
        { letter: "c", answerText: 'A visual system that shows you to replace what has been consumed.' },
        { letter: "d", answerText: 'Move or process in a forward motion.', isCorrect: true },
      ],
    },
    {
      questionText: 'Future state',
      answerOptions: [
        { letter: "a", answerText: 'The real place the place where work occurs.' },
        { letter: "b", answerText: '“The condition we imagine something can be in once changes have taken place.”', isCorrect: true },
        { letter: "c", answerText: 'A visual system that shows you to replace what has been consumed.' },
        { letter: "d", answerText: 'Move or process in a forward motion.' },
      ],
    },
    {
      questionText: 'Gemba',
      answerOptions: [
        { letter: "a", answerText: 'The real place the place where work occurs.', isCorrect: true },
        { letter: "b", answerText: '“I accept the challenge.”' },
        { letter: "c", answerText: 'A visual system that shows you to replace what has been consumed.' },
        { letter: "d", answerText: 'Move or process in a forward motion.' },
      ],
    },
    {
      questionText: 'Hai',
      answerOptions: [
        { letter: "a", answerText: 'A visual light used to show the current status of a machine or process.' },
        { letter: "b", answerText: '“I accept the challenge.”', isCorrect: true },
        { letter: "c", answerText: 'Asking five why questions to get to the root cause of a problem.' },
        { letter: "d", answerText: 'Waste of inspection, repair, and scrapping of material to which value has already been added.' },
      ],
    },
    {
      questionText: 'Hansei',
      answerOptions: [
        { letter: "a", answerText: 'A visual system that shows you to replace what has been consumed.' },
        { letter: "b", answerText: '“I accept the challenge.”' },
        { letter: "c", answerText: 'The real place the place where work occurs.' },
        { letter: "d", answerText: '“Reflection”. Reflect on what went right or what went wrong. Make changes if needed and try something else.', isCorrect: true },
      ],
    },
    {
      questionText: 'Heijunka',
      answerOptions: [
        { letter: "a", answerText: 'Move or process in a forward motion.' },
        { letter: "b", answerText: 'A process to help manage production by leveling peaks and valleys of customer demand.”', isCorrect: true },
        { letter: "c", answerText: 'The condition we imagine something can be in once changes have taken place.' },
        { letter: "d", answerText: 'A visual system that shows you to replace what has been consumed.' },
      ],
    },
    {
      questionText: 'Kaizen',
      answerOptions: [
        { letter: "a", answerText: 'Many small changes for the better, created by the people that do the work.', isCorrect: true },
        { letter: "b", answerText: 'First in, first out.' },
        { letter: "c", answerText: 'A visual system that shows you to replace what has been consumed.' },
        { letter: "d", answerText: '“I accept the challenge.”' },
      ],
    },
    {
      questionText: 'Kanban',
      answerOptions: [
        { letter: "a", answerText: 'The real place the place where work occurs.' },
        { letter: "b", answerText: 'Move or process in a forward motion.' },
        { letter: "c", answerText: ' Current condition of anything. How something is currently being done.' },
        { letter: "d", answerText: 'A visual system that shows you to replace what has been consumed.', isCorrect: true },
      ],
    },
  ],

  wasteTest: [
    {
      questionText: 'Overproduction',
      answerOption: [
        { letter: "a", answerText: ' Unnecessary movement of people or parts between processes.' },
        { letter: "b", answerText: 'Processing beyond the standard required by the customer.' },
        { letter: "c", answerText: ' To produce sooner, faster, or in greater quantities than customer demands.', isCorrect: true },
        { letter: "d", answerText: "Under utilizing people's talents, skills, and knowledge." },
      ]

    },
    {
      questionText: 'Inventory',
      answerOption: [
        { letter: "a", answerText: ' Raw material, work in process, or finished goods which are not having value added to it.', isCorrect: true },
        { letter: "b", answerText: ' Unnecessary movement of people or parts between processes.' },
        { letter: "c", answerText: 'Processing beyond the standard required by the customer.' },
        { letter: "d", answerText: "Under utilizing people's talents, skills, and knowledge." },
      ]

    },
    {
      questionText: 'Waiting',
      answerOption: [
        { letter: "a", answerText: "Under utilizing people’s talents, skills, and knowledge." },
        { letter: "b", answerText: 'Processing beyond the standard required by the customer.' },
        { letter: "c", answerText: "Not right the first time. Repetition or correction of a process. Scrap, rework and defects." },
        { letter: "d", answerText: ' People or parts that wait for a work cycle to be completed.', isCorrect: true },
      ]

    },
    {
      questionText: 'Motion',
      answerOption: [
        { letter: "a", answerText: "Unnecessary movement of people, parts or machines within a process.", isCorrect: true },
        { letter: "b", answerText: ' People or parts that wait for a work cycle to be completed.' },
        { letter: "c", answerText: 'Processing beyond the standard required by the customer.' },
        { letter: "d", answerText: "Raw material, work in process, or finished goods which are not having value added to it." },
      ]

    },
    {
      questionText: 'Transportation',
      answerOption: [
        { letter: "a", answerText: ' People or parts that wait for a work cycle to be completed.' },
        { letter: "b", answerText: "Not right the first time. Repetition or correction of a process. Scrap, rework and defects." },
        { letter: "c", answerText: "Under utilizing people’s talents, skills, and knowledge." },
        { letter: "d", answerText: ' Unnecessary movement of people or parts between processes.', isCorrect: true },
      ]

    },
    {
      questionText: 'Defects',
      answerOption: [
        { letter: "a", answerText: ' To produce sooner, faster, or in greater quantities than customer demands.' },
        { letter: "b", answerText: "Unnecessary movement of people, parts or machines within a process." },
        { letter: "c", answerText: "Not right the first time. Repetition or correction of a process. Scrap, rework and defects.", isCorrect: true },
        { letter: "d", answerText: ' Raw material, work in process, or finished goods which are not having value added to' },
      ]

    },
    {
      questionText: 'Over Processing',
      answerOption: [
        { letter: "a", answerText: ' Processing beyond the standard required by the customer.', isCorrect: true },
        { letter: "b", answerText: "Not right the first time. Repetition or correction of a process. Scrap, rework and defects." },
        { letter: "c", answerText: " People or parts that wait for a work cycle to be completed." },
        { letter: "d", answerText: ' To produce sooner, faster, or in greater quantities than customer demands.' },
      ]

    },
    {
      questionText: 'Talent',
      answerOption: [
        { letter: "a", answerText: ' To produce sooner, faster, or in greater quantities than customer demands.' },
        { letter: "b", answerText: "Not right the first time. Repetition or correction of a process. Scrap, rework and defects." },
        { letter: "c", answerText: "Under utilizing people’s talents, skills, and knowledge.", isCorrect: true },
        { letter: "d", answerText: "Unnecessary movement of people, parts or machines within a process." },
      ]

    },
  ],
  customTest: [] = loadState('customTest')

})
