import { Box, Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useContact } from "../context/ContactContex";
import toast, { Toaster } from "react-hot-toast";

const Contact = (props) => {
  const { SendEmail } = useContact();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const backgroundColor = props.theme === "light" ? "#272733" : "#fafafa";
  const textColor = props.theme === "light" ? "#fafafa" : "#272733";

  const onsubmit = handleSubmit((value) => {
    const MyPromise = new Promise(async (resolve, reject) => {
      try {
        const res = await SendEmail(JSON.stringify(value));
        if (res.status === 200) {
          resolve(t("toastSucces"));
        } else {
          reject(new Error(t("toastError")));
        }
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(MyPromise, {
      loading: t("toastLoading"),
      success: t("toastSucces"),
      error: t("toastError"),
    });
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
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: backgroundColor,
            color: textColor,
          },
        }}
      />
    </section>
  );
};

export default Contact;
