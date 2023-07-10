import { CssBaseline, ThemeProvider } from "@mui/material";
import { getMuiTheme } from "./styles/Styles";
import CustomTreeView from "./tree-view/CustomTreeView";

export type CustomPropsType = {
  subtitle: string;
  hasChildren?: boolean;
};

export type TreeData = {
  id: string;
  name: string;
  disabledButton: boolean;
  children?: TreeData[];
  customProps?: CustomPropsType;
};

const data: TreeData[] = [
  {
    id: "1",
    name: "My Web Site",
    disabledButton: false,
    children: [
      {
        id: "2",
        name: "images",
        disabledButton: false,
        children: [
          {
            id: "3",
            name: "logo.png",
            disabledButton: false,
            customProps: {
              subtitle: "subtitle is here"
            }
          },
          { id: "4", name: "body-back.png", disabledButton: false },
          { id: "5", name: "my-photo.jpg", disabledButton: true }
        ]
      },
      {
        id: "6",
        name: "resources",
        disabledButton: false,
        children: [
          {
            id: "7",
            name: "pdf",
            disabledButton: false,
            children: [
              { id: "8", name: "brochure.pdf", disabledButton: false },
              { id: "9", name: "prices.pdf", disabledButton: false }
            ]
          },
          {
            id: "10",
            name: "zip",
            disabledButton: true,
            children: [{ id: "11", name: "test.zip", disabledButton: false }]
          }
        ]
      }
    ]
  }
];

export default function App() {
  return (
    <ThemeProvider theme={getMuiTheme()}>
      <CssBaseline />
      <CustomTreeView data={data} />
    </ThemeProvider>
  );
}
