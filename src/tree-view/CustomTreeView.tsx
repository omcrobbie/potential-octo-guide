import { ThemeProvider } from "@emotion/react";
import { InsertDriveFile } from "@mui/icons-material";
import { TreeView } from "@mui/lab";
import { Box } from "@mui/material";
import { getMuiTheme } from "../styles/Styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { TreeData } from "../App";
import { renderTreeData } from "./CustomTreeViewHelper";

const classes = {
  focused: {
    bgcolor: "transparent",
    py: "1px",
    px: "7px",
    border: `1px solid ${getMuiTheme().palette.secondary.main}`
  },
  selected: {
    bgcolor: getMuiTheme().palette.primary.main,
    color: "white"
  }
};

const CustomTreeView = ({ data }: { data: TreeData[] }) => {
  return (
    <Box mt={2} ml={2} bgcolor="white" width="300px">
      <ThemeProvider theme={getMuiTheme()}>
        <TreeView
          defaultCollapseIcon={<ArrowDropDownIcon />}
          defaultExpandIcon={<ArrowRightIcon />}
          defaultEndIcon={<InsertDriveFile />}
        >
          {renderTreeData(data)}
        </TreeView>
      </ThemeProvider>
    </Box>
  );
};

export default CustomTreeView;
