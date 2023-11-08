import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { validate } from "uuid";
import * as Yup from "yup";
import { ACCOUNTS } from "./../../assets/ACCOUNTS/ACCOUNTS";

export const Validationschema = Yup.object().shape({
  username: Yup.string()
    .required("Username is require!!!")
    .min(8, "your username must be at least 8 character"),
  password: Yup.string()
    .required("password is required!!!")
    .min(5, "your password must be at least 8 character")
    .max(16, "your password must be lower than 32 character"),
});
function Login() {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const [vaLidate, setValidate] = useState({
    username: false,
    password: false,
  });
  const handleLogin = async () => {
    try {
      await Validationschema.validate(inputValues, { abortEarly: false });
      const checkUser = ACCOUNTS.find(
        (user) =>
          user.username === inputValues.username &&
          user.password === inputValues.password
      );
      if (checkUser) {
        toast.success("login success");
        navigate("/home");
      } else {
        toast.error("invalid username or password");
        setValidate({
          username: false,
          password: false,
        });
      }
    } catch (error) {
      console.log({ error });
      console.log(error.inner);

      let newValidate = {
        username: false,
        password: false,
      };
      for (let err of error.inner) {
        newValidate = {
          ...newValidate,
          [err.path]: true,
        };
        break;
      }
      console.log("newValidate");
      setValidate(newValidate);
      toast.error(error.errors[0]);
    }
  };
  console.log(vaLidate);

  return (
    <Box
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
        padding: 10,
      }}
    >
      <Card sx={{ minWidth: 600 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" textAlign={"center"} marginBottom={2}>
            Login
          </Typography>
          <TextField
            fullWidth
            required
            error={vaLidate.username}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            sx={{ flex: 3 }}
            onChange={(e) =>
              setInputValues({
                ...inputValues,
                username: e.target.value,
              })
            }
          />
          <TextField
            fullWidth
            required
            error={vaLidate.password}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ flex: 3, marginTop: 2 }}
            onChange={(e) =>
              setInputValues({
                ...inputValues,
                password: e.target.value,
              })
            }
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ my: 2 }}
            onClick={() => handleLogin()}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
//làm thêm cơ chế lưu tk, mk vào localstorage , khi reload lại trang, xét xem dữ liệu localstorage có trong hệ thống hay k