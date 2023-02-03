import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./index.css";
import { Helmet } from "react-helmet";

const NewBlog = () => {
  // Yup
  const validationSchema = yup.object({
    title: yup
      .string("Enter your title")
      .min(3, "Title should be of minimum 3 characters length")
      .max(20, "Title should be of maximum 20 characters length")
      .required("Title is required"),

    body: yup.string("Enter your body").required("Body is required"),
    author: yup
      .string("Enter your author")
      .min(50, "Author should be of minimum 50 characters length")
      .max(100, "Author should be of maximum 100 characters length")
      .required("Author is required"),
  });
  // Formik
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      author: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // Fetch
  const handleAddBlog = () => {
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formik.values),
    }).then(() => {
      console.log("New blog added");
    });
  };

  return (
    <div className="addNewBlog">
      <Helmet>
        <title>New Blog</title>
      </Helmet>
      <form>
        <h3>Add a New Blog</h3>
        <div className="form">
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Blog Title:"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <br />
          <TextField
            fullWidth
            id="body"
            name="body"
            label="Blog body:"
            value={formik.values.body}
            onChange={formik.handleChange}
            error={formik.touched.body && Boolean(formik.errors.body)}
            helperText={formik.touched.body && formik.errors.body}
          />
          <br />
          <FormControl fullWidth>
            <InputLabel id="author">Blog author:</InputLabel>
            <Select
              labelId="author"
              id="author"
              name="author"
              value={formik.values.author}
              onChange={formik.handleChange}
              error={formik.touched.author && Boolean(formik.errors.author)}
              helperText={formik.touched.author && formik.errors.author}
            >
              <MenuItem key="1" value="Alex">
                Alex
              </MenuItem>
              <MenuItem key="2" value="John">
                John
              </MenuItem>
              <MenuItem key="3" value="Mike">
                Mike
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button
          fullWidth
          color="warning"
          variant="containeds"
          type="submit"
          onClick={() => handleAddBlog()}
        >
          Add Blog
        </Button>
      </form>
    </div>
  );
};

export default NewBlog;
