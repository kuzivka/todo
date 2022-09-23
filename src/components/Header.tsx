import { Typography } from '@mui/material';

export default function Header() {
  return (
    <div>
      <Typography className="header-title" variant="h1">
        To Do
      </Typography>
      <Typography className="header-subtitle" variant="button">
        Add your tasks
      </Typography>
    </div>
  );
}
