import { PROGRESSBAR_STEP } from '@/constants';
import styles from './ProgressBar.module.css';

const ProgressBar = (props: {
  passwordStrength: number;
}): React.ReactElement => {
  const { passwordStrength } = props;
  const progressBarWidth = passwordStrength * PROGRESSBAR_STEP;
  return (
    <div className={styles.progressbar}>
      <span
        style={{ width: `${progressBarWidth}%` }}
        className={`${styles.progress}`}
      ></span>
    </div>
  );
};

export { ProgressBar };
