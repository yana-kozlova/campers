import { eColors } from '../../utils/eColors.ts';
import heroImage from '../../assets/images/bg.png';

export const styles = {
  heroContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 'calc(100vh - 64px)',
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '0 64px',
    overflow: 'hidden',
  },
  textBox: {
    maxWidth: '600px',
  },
  title: {
    color: eColors.WHITE,
    marginBottom: '16px',
  },
  subtitle: {
    color: eColors.WHITE,
    marginBottom: '42px',
  },
};
