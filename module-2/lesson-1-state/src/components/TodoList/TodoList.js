import React from "react";

import { Card, Checkbox, FormControlLabel } from "@mui/material";
import { Box } from "@mui/system";

class TodoList extends React.Component {
  render() {
    return (
      <>
        {this.props.todos.map((todo) => (
          <Box width="100%" marginTop="5px" marginBottom="5px">
            <Card variant="outlined" style={{ paddingLeft: "20px" }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={todo.text}
              />
            </Card>
          </Box>
        ))}
      </>
    );
  }
}

export default TodoList;
