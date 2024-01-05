import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = handleSubmit((value) => {
    console.log(value);
  });
  return (
    <section id="contact">
      <h1>Contact</h1>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={onsubmit}
      >
        <div className="email">
          <TextField
            required
            label="email"
            type="email"
            variant="outlined"
            {...register("email", {
              required: {
                value: true,
                message: "Please enter your email",
              },
              maxLength: {
                value: 100,
                message: "The emaile is too long",
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && <div className="error">{errors.email.message}</div>}
        </div>
        <div className="message">
          <TextField
            required
            label="message"
            type="text"
            multiline
            variant="outlined"
            minRows={7}
            {...register("message", {
              required: {
                value: true,
                message: "Please send me a message",
              },
            })}
          />
          {errors.message && (
            <div className="error">{errors.message.message}</div>
          )}
        </div>
        <Stack>
          <Button variant="contained" type="submit">
            Send Email
          </Button>
        </Stack>
      </Box>
    </section>
  );
};

export default Contact;
