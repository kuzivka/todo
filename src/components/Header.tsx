import { Typography } from '@mui/material';

export default function Header() {
  return (
    <div>
      <Typography sx={{ color: '#2b2b2b' }} variant="h1">
        To Do
      </Typography>
      <Typography
        variant="button"
        sx={{
          color: '#2b2b2b',
          textTransform: 'uppercase',
          letterSpacing: '3px',
        }}
      >
        Add your tasks
      </Typography>
    </div>
  );
}
