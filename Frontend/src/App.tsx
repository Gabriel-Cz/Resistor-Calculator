import './App.scss'
import { Resistor, BandSelector } from './components';
import { BandColors, ColorKey } from './types';
import useResistor from './hooks/useResistor';
import getLocalColors from './utils/transform-colors';

export default function App() {
  const {
    getValue,
    onResetActive,
    handleSelector,
    selectedColors,
    activeSelector,
    dbColors
  } = useResistor();

  return (
    <Resistor
      hmsValue={getValue}
      tolerance={selectedColors[3].value}
      currentColors={[
        selectedColors['0'].color,
        selectedColors['1'].color,
        selectedColors['2'].color,
        selectedColors['3'].color
      ]}
    >
      <BandSelector
        index={0}
        colors={getLocalColors(BandColors, 'enum')}
        currentActive={activeSelector}
        cb={onResetActive}
        variant='digit'
        color={selectedColors[0].color as ColorKey}
        value={selectedColors['0'].value}
        onSelectChange={(value: ColorKey) => handleSelector(value, 0)}
        onValueChange={(value: ColorKey) => handleSelector(value, 0)}
      />
      <BandSelector
        index={1}
        colors={getLocalColors(BandColors, 'enum')}
        currentActive={activeSelector}
        cb={onResetActive}
        variant='digit'
        color={selectedColors[1].color as ColorKey}
        value={selectedColors['1'].value}
        onSelectChange={(value: ColorKey) => handleSelector(value, 1)}
        onValueChange={(value: ColorKey) => handleSelector(value, 1)}
      />
      {dbColors['multipliers'] && (
        <BandSelector
          index={2}
          colors={getLocalColors(dbColors['multipliers'], 'obj')}
          cb={onResetActive}
          currentActive={activeSelector}
          variant="multiplier"
          color={selectedColors[2].color as ColorKey}
          value={selectedColors['2'].value}
          onSelectChange={(value: string) => handleSelector(value, 2)}
          onValueChange={(value: string) => handleSelector(value, 2)}
        />
      )}
      {dbColors['tolerance'] && (
        <BandSelector
          index={3}
          colors={getLocalColors(dbColors['tolerance'], 'obj')}
          cb={onResetActive}
          currentActive={activeSelector}
          variant="tolerance"
          value={selectedColors['3'].value}
          color={selectedColors[3].color as ColorKey}
          onSelectChange={(value: string) => handleSelector(value, 3)}
          onValueChange={(value: string) => handleSelector(value, 3)}
        />
      )}
    </Resistor>
  )
}
