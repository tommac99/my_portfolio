import { FC, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { BlogItem } from "./Blog";
import { GetBlogs } from "../../../services";
import { SectionTitle } from "../../common";

export const Blog: FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    async function getBlogs() {
      const data = await GetBlogs();
      setBlogs(data);
    }

    getBlogs();
  }, []);

  // TODO: Add all projects to .json
  if (blogs.length === 1) return null;

  const renderBlog = (blog, index) => {
    return (
      <BlogItem
        md={6}
        key={index}
        xs={12}
        image={blog.image}
        title={blog.title}
        day={blog.day}
        month={blog.month}
        url={blog.url}
      />
    );
  };

  return (
    <Grid>
      <SectionTitle title="Articles" />
      <Grid
        direction="row"
        justify="space-between"
        xs={12}
        item
        spacing={0}
        container
      >
        {blogs && blogs.map(renderBlog)}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  blogItemImage: {
    transition: "opacity 1s, transform 1s",

    "&:hover": {
      boxShadow:
        "0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)",
    },
  },
  root: {
    flexGrow: 1,
  },
}));
