import { Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import React from "react";

type Props = {
  markdown: string;
};

const components: React.ComponentProps<typeof ReactMarkdown>["components"] = {
  p: ({ node, ...props }) => {
    const { ref, ...rest } = props;
    return (
      <Typography component="p" {...rest}>
        {props.children}
      </Typography>
    );
  },
};

const Response = ({ markdown }: Props) => {
  return (
    <Box>
      <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
    </Box>
  );
};

export default Response;
