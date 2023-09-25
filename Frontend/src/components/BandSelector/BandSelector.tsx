import { useId } from "react";
import { ColorKey } from "../../types";
import styles from './BandSelector.module.scss';

interface BandColorProps extends React.ComponentProps<'div'> {
  value: string | number;
  color: ColorKey;
  colors: string[];
  variant: 'digit' | 'multiplier' | 'tolerance';
  currentActive?: {
    index: number;
    color: ColorKey;
  };
  index: number;
  cb: any;
  onSelectChange: (value: string) => void;
  onValueChange: (value: string) => void;
}

export const BandSelector: React.FC<BandColorProps> = ({
  value,
  color,
  colors,
  index,
  variant,
  currentActive,
  onSelectChange,
  onValueChange,
  cb,
  ...rest
}) => {
  const isActive = currentActive?.index === index;
  const id = useId();
  return (
    <div
      id={id}
      className={styles.bandSelector}
      data-variant={variant}
      {...rest}
    >
      <span className={styles.select}>
        <button
          style={{ color }}
          onClick={() => onSelectChange(color)}
        >
          <h1
            data-value={value}
            data-active={isActive}
            style={{ color }}
            onClick={() => onSelectChange(color)}
          >
            {value}
          </h1>
        </button>
        {typeof currentActive !== 'undefined' &&
          index === currentActive.index && (
            <div className={styles.options}>
              {colors[0] && colors.map((color, index) => (
                <option
                  key={color + index}
                  data-color={color}
                  data-active={currentActive.color === color}
                  className={styles.option}
                  style={{ backgroundColor: color.toString().toLowerCase() }}
                  onClick={() => onValueChange(color)}
                >
                  {color}
                </option>
              ))}
            </div>
          )}
      </span>
    </div>
  )
}