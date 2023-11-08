import {
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  FormControlLabel,
  FormControl,
  Radio,
  FormLabel,
  RadioGroup,
  Chip,
  IconButton,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
// import React from "react";
import { getColor } from "../../assets/ChangeColor/changeColor";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { QUESTIONS } from "../../assets/QUESTIONS/QUESTIONS";

function Lag() {
  const [easyQuestion, setEasyQuestion] = useState(0);
  const [mediumQuestion, setMediumQuestion] = useState(0);
  const [hardQuestion, setHardQuestion] = useState(0);
  const [validate, setValidate] = useState(false);
  const [cardQuestion, setCardQuestion] = useState([]);
  const [isVisible, setVisible] = useState(true);

  const handleQuestion = (total) => {
    console.log("total inside handleQuestion", total);
    const easyNumber = parseInt(easyQuestion);
    const mediumNumber = parseInt(mediumQuestion);
    const hardNumber = parseInt(hardQuestion);
    let Ecount = 0;
    const filterEasyQuestion = QUESTIONS.filter((question) => {
      if (question.difficulty === "easy" && Ecount < easyNumber) {
        Ecount++;
        return true;
      }
      return false;
    });
    // console.log("easy", filterEasyQuestion);

    let Mcount = 0;
    const filterMediumQuestion = QUESTIONS.filter((question) => {
      if (question.difficulty === "medium" && Mcount < mediumNumber) {
        Mcount++;
        return true;
      }
      return false;
    });
    // console.log("medium", filterMediumQuestion);

    let Hcount = 0;
    const filterHardQuestion = QUESTIONS.filter((question) => {
      if (question.difficulty === "hard" && Hcount < hardNumber) {
        Hcount++;
        return true;
      }
      return false;
    });
    // console.log("hard", filterHardQuestion);

    const mixedQuestion = [
      ...filterEasyQuestion,
      ...filterMediumQuestion,
      ...filterHardQuestion,
    ];

    console.log("mix", mixedQuestion);

    // if (total < 3) {
    //   toast.error("invalid");
    //   console.log("invalid");
    // } else {
    let reduceQuest = [...mixedQuestion];
    const randomQuestionArr = [];
    for (let i = 0; i < total; i++) {
      const randomIndex = Math.floor(Math.random() * reduceQuest.length);
      const randomQuestion = reduceQuest[randomIndex];
      reduceQuest.splice(randomIndex, 1);
      //random Answer
      randomQuestionArr.push(randomQuestion);
      setCardQuestion(randomQuestionArr);
    }
    // }
  };

  const handleValue = () => {
    const parsedEasy = parseInt(easyQuestion);
    const parsedMedium = parseInt(mediumQuestion);
    const parsedHard = parseInt(hardQuestion);

    if (
      isNaN(parsedEasy) ||
      isNaN(parsedMedium) ||
      isNaN(parsedHard) ||
      parsedEasy <= 0 ||
      parsedMedium <= 0 ||
      parsedHard <= 0
    ) {
      toast.error("Invalid number of questions");
      setValidate(true);
    } else {
      const sum = parsedEasy + parsedMedium + parsedHard;

      if (sum > 50) {
        toast.error(" invalid number of question");
        setValidate(true);
        return;
      } else {
        toast.success("success");
        setValidate(false);
        console.log("all question", sum);
        handleQuestion(sum);
        setVisible(true);
      }
    }
  };
  const handleDeletedCard = () => {
    setVisible(false);
    setEasyQuestion(0);
    setMediumQuestion(0);
    setHardQuestion(0);
    toast.error("DELETED ALL QUESTION");
  };
  return (
    <>
      <Box
        sx={{
          minWidth: "100%",
          minHeight: "60vh",
          backgroundColor: "#eee",
          padding: 0,
          gap: 10,
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <Card
          sx={{
            width: "600px",
            height: "230px",
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            top: 50,
            borderRadius: "20px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign={"center"}
              marginBottom={2}
              fontWeight={600}
            >
              Add Your Question
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
              }}
            >
              <TextField
                error={validate}
                id="outlined-basic"
                label="Easy"
                variant="outlined"
                value={easyQuestion}
                size="normal"
                type="number"
                onChange={(e) => setEasyQuestion(e.target.value)}
              />
              <TextField
                error={validate}
                id="outlined-basic"
                label="Medium"
                variant="outlined"
                value={mediumQuestion}
                size="normal"
                type="number"
                onChange={(e) => setMediumQuestion(e.target.value)}
              />
              <TextField
                error={validate}
                id="outlined-basic"
                label="Hard"
                variant="outlined"
                value={hardQuestion}
                size="normal"
                type="number"
                onChange={(e) => setHardQuestion(e.target.value)}
              />
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{ my: -1, marginTop: "40px", width: "auto" }}
              onClick={() => handleValue()}
            >
              GENERATE
            </Button>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: "100%",
          backgroundColor: "#eee",
          padding: 0,
          gap: "30px",
          marginTop: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cardQuestion.map((Quest, index) =>
          isVisible === true ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  position: "relative",
                  top: "20px",
                  left: "0%",
                  margin: "0 auto",
                  alignItems: "center",
                }}
              >
                {/* {console.log(cardQuestion, index)} */}

                <Card
                  key={index}
                  sx={{
                    margin: 1,
                    boxShadow: "0px 2px #DAD9D8",
                    display: "flex",
                    flexDirection: "row",
                    boxSizing: "border-box",
                    width: "70%",
                    height: "30%",
                  }}
                >
                  <Chip
                    sx={{
                      width: 8,
                      height: "auto",
                    }}
                    color={getColor(Quest.difficulty)}
                  ></Chip>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        marginBottom={0}
                      >
                        {index + 1}. {Quest.question.text}
                      </Typography>
                      <FormControl
                        sx={{
                          paddingTop: "30px",
                        }}
                      >
                        <FormLabel id="demo-column-radio-buttons-group-label">
                          Your answer
                        </FormLabel>
                        <RadioGroup
                          column
                          aria-labelledby="demo-column-radio-buttons-group-label"
                          name="column-radio-buttons-group"
                        >
                          <FormControlLabel
                            value={Quest.incorrectAnswers[0]}
                            control={<Radio />}
                            label={Quest.incorrectAnswers[0]}
                          />
                          <FormControlLabel
                            value={Quest.correctAnswer}
                            control={<Radio />}
                            label={Quest.correctAnswer}
                          />
                          <FormControlLabel
                            value={Quest.incorrectAnswers[1]}
                            control={<Radio />}
                            label={Quest.incorrectAnswers[1]}
                          />
                          <FormControlLabel
                            value={Quest.incorrectAnswers[2]}
                            control={<Radio />}
                            label={Quest.incorrectAnswers[2]}
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </CardContent>
                </Card>

                {/* kiểm tra xem đã đến cuối mảng chưa */}
                {index === cardQuestion.length - 1 && (
                  <Stack
                    spacing={6}
                    direction="row"
                    position={"relative"}
                    marginTop={"50px"}
                    paddingBottom={"30px"}
                    width={"400px"}
                    boxSizing={"border-box"}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        fontSize: "14px",
                        fontWeight: "550",
                        fontFamily: "revert-layer",
                        flex: 1,
                        justifyContent: "space-evenly",
                        boxSizing: "border-box",
                      }}
                      onClick={() => handleDeletedCard()}
                    >
                      deleted all
                      <IconButton aria-label="delete" size="normal">
                        <DeleteIcon
                          fontSize="inherit"
                          sx={{ color: "white" }}
                        />
                      </IconButton>
                    </Button>

                    <Button
                      variant="outlined"
                      sx={{
                        fontSize: "14px",
                        fontWeight: "550",
                        fontFamily: "revert-layer",
                        flex: 1,
                        justifyContent: "space-evenly",
                        boxSizing: "border-box",
                      }}
                    >
                      submit
                      <IconButton aria-label="submit" size="normal">
                        <SendIcon
                          fontSize="inherit"
                          sx={{ color: "#CECECC" }}
                        />
                      </IconButton>
                    </Button>
                  </Stack>
                )}
              </Box>
            </>
          ) : (
            <></>
          )
        )}
      </Box>
    </>
  );
}

export default Lag;
