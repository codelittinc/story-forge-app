import { Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

type Props = {
  markdown: string;
};

const components = {
  p: ({ node, ...props }) => <Typography paragraph {...props} />,
};

const Response = ({ markdown }: Props) => {
  return (
    <Box textAlign="left">
      <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
    </Box>
  );
};

export default Response;
