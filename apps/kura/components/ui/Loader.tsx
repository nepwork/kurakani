import { LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const LoaderWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%',
});

const LinLoader: React.FC = () => (
  <LoaderWrapper>
    <LinearProgress color="primary" />
  </LoaderWrapper>
);

export default LinLoader;
