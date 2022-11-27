import Diversity2Icon from '@mui/icons-material/Diversity2';
import Typography from '@mui/material/Typography';

const Logo: React.FC = () => (
  <>
    <Diversity2Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      KuKa
    </Typography>
  </>
);

export default Logo;

export const LogoXs: React.FC = () => (
  <>
    <Diversity2Icon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
    <Typography
      variant="h5"
      noWrap
      component="a"
      href=""
      sx={{
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      KuKa
    </Typography>
  </>
);
