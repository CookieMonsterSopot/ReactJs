import { Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<RegisterFormValues>();

  interface RegisterFormValues {
    email: string;
    password: string;
    password2: string;
  }

  const registerUser = (data: RegisterFormValues) => {
    console.log(data);
  };
  const inputStyles = { display: "block", mx: "auto", my: ".5rem" };
  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(registerUser)}
    >
      <Typography
        align="center"
        variant="h2"
        sx={{ fontSize: "1.5rem", mt: "15px" }}
      >
        Register new account
      </Typography>
      <TextField
        placeholder="email"
        sx={inputStyles}
        {...register("email", { required: true })}
      />
      <TextField
        placeholder="password"
        sx={inputStyles}
        {...register("password", { required: true })}
      />
      <TextField
        placeholder="repeat password"
        sx={inputStyles}
        {...register("password2", { required: true })}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto" }}
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;

// 1. Elementem obwijającym wszystkie inne będzie zwykły htmlowy <form>, w atrybucie style ustaw mu display na flex i flexDirection na column.
// wszystko poniżej to równorzędne dzieci forma z pkt 1
// 2. Typography (MUI) z propsami: align center, variant h2, w sx'ach fontSize na 1.5. Text: Register new account
// 3. TextField (MUI) z propsami: type email, placeholder email, w sx'ach: display block, mx auto, my .5rem
// 4. TextField (MUI) z propsami: type password, placeholder password, w sx'ach: display block, mx auto, my .5rem
// 5. TextField (MUI) z propsami: type password, placeholder repeat password, w sx'ach: display block, mx auto, my .5rem
// 6. Button (MUI) z propsami: variant contained, type submit, w sx'ach: display block, mx auto. Text: Register
