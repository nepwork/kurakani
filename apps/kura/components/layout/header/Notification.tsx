import { Avatar, Box, ButtonBase } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useRef, useState } from 'react';

const Notification: React.FC = () => {
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Box
      sx={{
        ml: 2,
        mr: 3,
      }}
    >
      <ButtonBase sx={{ borderRadius: '12px' }}>
        <Avatar
          variant="rounded"
          sx={{
            transition: 'all .2s ease-in-out',
          }}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color="inherit"
        >
          <NotificationsActiveIcon />
        </Avatar>
      </ButtonBase>
    </Box>
  );
};

export default Notification;
