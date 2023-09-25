import ResistorSVG from '../../assets/svg/Resistor';
import styles from './Resistor.module.scss';

interface ResistorProps {
  children: React.ReactNode;
  hmsValue: React.ReactNode;
  tolerance: React.ReactNode;
  currentColors: Array<string>;
}

export const Resistor: React.FC<ResistorProps> = ({
  children,
  hmsValue,
  currentColors,
  tolerance
}) => {
  return (
    <div className={styles.resistor}>
      <h3>Resistor Calculator</h3>
      <h4>Adjust the following digits to change the color of the bands and calculate the hms value for this Resistor</h4>
      <div className={styles.resistorImg} >
        <ResistorSVG colors={currentColors} />
      </div>
      <div className={styles.bandWrapper}>
        {children && children}
      </div>
      <div className={styles.totalValuesWrapper}>
        <h2>
          {hmsValue} hms
        </h2>
        <h2>
          Tolerance {tolerance} ± %
        </h2>
      </div>
    </div>
  );
}