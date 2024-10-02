import { Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

type Props = {
  markdown: string;
};

const Response = ({ markdown }: Props) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }: any) => (
          <Typography variant="h4" component="h1" {...props} />
        ),
        h2: ({ node, ...props }: any) => (
          <Typography variant="h5" component="h2" {...props} />
        ),
        p: ({ node, ...props }: any) => (
          <Typography variant="body1" component="p" {...props} />
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default Response;
