import classNames from 'classnames';

interface Props {
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export default function YearSelect({ selectedYear, onYearChange }: Props) {
  const thisYear = new Date().getFullYear();
  const startYear = 2024;

  // Generate a descending list of years from thisYear down to 2023
  const yearOptions = Array.from({ length: thisYear - startYear + 1 }, (_, i) => thisYear - i);

  return (
    <div className="flex flex-col space-y-2 text-sm">
      {yearOptions.map((year) => (
        <button
          onClick={() => onYearChange(year)}
          key={year}
          className={classNames('border-b-2', {
            'border-transparent': selectedYear !== year,
            'border-primary-500': selectedYear === year,
          })}
        >
          {year}
        </button>
      ))}
    </div>
  );
}
