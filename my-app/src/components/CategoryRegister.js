import { Card, CardContent, Button, TextField } from "@mui/material";
import React from "react";

function CategoryRegister(props) {
  return (
    <Card>
      <CardContent>
        <div style={{ fontSize: '18px' ,fontWeight: 'bold' }}>{props.text}</div>
        <div style={{ display:'flex', flexDirection: 'column', width: '70%' }}>
            <TextField id="outlined-basic" label="Nome" variant="outlined" />
        </div>
        <Button variant="contained" style={{marginTop: '10px'}}>Salvar</Button>
      </CardContent>
    </Card>
  );
}

export default CategoryRegister;
