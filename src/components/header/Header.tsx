import { Typography } from '@mui/material';

export default function Header() {
  return (
    <div>
      <Typography variant="h1">
        To Do
      </Typography>
      <Typography sx={{letterSpacing: '3px'}} variant="button">
        Add your tasks
      </Typography>
    </div>
  );
}
