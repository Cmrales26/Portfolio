import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = handleSubmit((value) => {
    console.log(value);
  });

  const { t } = useTranslation(["info"]);
  return (
    <section id="contact">
      <h1>{t("contactTitle")}</h1>

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
            label={t("contactlabel1")}
            type="email"
            variant="outlined"
            {...register("email", {
              required: {
                value: true,
                message: t("emailerrormsg1"),
              },
              maxLength: {
                value: 100,
                message: t("emailerrormsg2"),
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: t("emailerrormsg3"),
              },
            })}
          />
          {errors.email && <div className="error">{errors.email.message}</div>}
        </div>
        <div className="message">
          <TextField
            required
            label={t("contactlabel2")}
            type="text"
            multiline
            variant="outlined"
            minRows={7}
            {...register("message", {
              required: {
                value: true,
                message: t("messageerrormsg1"),
              },
            })}
          />
          {errors.message && (
            <div className="error">{errors.message.message}</div>
          )}
        </div>
        <Stack>
          <Button variant="contained" type="submit">
            {t("contactbtn")}
          </Button>
        </Stack>
      </Box>
    </section>
  );
};

export default Contact;
