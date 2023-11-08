// import { QUESTIONS } from "../QUESTIONS/QUESTIONS";
// export default function randomQuesiton(
//   easyQuestion,
//   mediumQuestion,
//   hardQuestion
// ) {
//   const easyNumber = parseInt(easyQuestion);
//   const mediumNumber = parseInt(mediumQuestion);
//   const hardNumber = parseInt(hardQuestion);
//   const total = easyNumber + mediumNumber + hardNumber;

//   console.log(total);
//   let Ecount = 0;
//   const filterEasyQuestion = QUESTIONS.filter((question) => {
//     if (question.difficulty === "easy" && Ecount < easyNumber) {
//       Ecount++;
//       return true;
//     }
//     return false;
//   });
//   console.log("easy", filterEasyQuestion);

//   let Mcount = 0;
//   const filterMediumQuestion = QUESTIONS.filter((question) => {
//     if (question.difficulty === "medium" && Mcount < mediumNumber) {
//       Mcount++;
//       return true;
//     }
//     return false;
//   });
//   console.log("medium", filterMediumQuestion);

//   let Hcount = 0;
//   const filterHardQuestion = QUESTIONS.filter((question) => {
//     if (question.difficulty === "hard" && Hcount < hardNumber) {
//       Hcount++;
//       return true;
//     }
//     return false;
//   });
//   console.log("hard", filterHardQuestion);

//   const mixedQuestion = [
//     ...filterEasyQuestion,
//     ...filterMediumQuestion,
//     ...filterHardQuestion,
//   ];

//   console.log("mix", mixedQuestion);
//   if (total === 3) {
//     for (let i = 0; i < total; i++) {
//       console.log("question", i, mixedQuestion[i]);
//     }
//   } else {
//     let reduceQuest = [...mixedQuestion];
//     // const questionCards = [];
//     for (let i = 0; i < total; i++) {
//       const randomIndex = Math.floor(Math.random() * reduceQuest.length);
//       const randomQuestion = reduceQuest[randomIndex];
//       reduceQuest.splice(randomIndex, 1);
//       console.log(i, "Random Question", randomQuestion);
//       // const card = (
//       //   <Card width="100px" height="100px" backgroundColor="aqua" key={i}>
//       //     <CardContent>
//       //       <Typography
//       //         sx={{ fontSize: 14 }}
//       //         color="text.secondary"
//       //         gutterBottom
//       //       >
//       //         {randomQuestion.question}
//       //       </Typography>
//       //       <Typography variant="h5" component="div"></Typography>
//       //       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//       //         adjective
//       //       </Typography>
//       //       <Typography variant="body2">
//       //         well meaning and kindly.
//       //         <br />
//       //         {'"a benevolent smile"'}
//       //       </Typography>
//       //     </CardContent>
//       //   </Card>
//       // );
//       // questionCards.push(card);
//     }
//     // return questionCards;
//   }
// }
