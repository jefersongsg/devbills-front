import { ChevronLeft, ChevronRight } from "lucide-react";

interface MonthYearSelectProps {
  month: number;
  year: number;
  onMonthChange: (month: number) => void;
  onYearChange: (year: number) => void;
}

const monthNames: readonly string[] = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const MothYearSelect = ({ month, year, onMonthChange, onYearChange }: MonthYearSelectProps) => {
  const currentYear = new Date().getFullYear();
  const years: number[] = Array.from({ length: 11 }, (_, i) => currentYear - 5 + i);

  const handleNextMonth: () => void = () => {
    if (month === 12) {
      onMonthChange(1);
      onYearChange(year + 1);
    } else {
      onMonthChange(month + 1);
    }
  };
  const handlePreviousMonth: () => void = () => {
    if (month === 1) {
      onMonthChange(12);
      onYearChange(year - 1);
    } else {
      onMonthChange(month - 1);
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3 border border-gray-700">
      <button
        type="button"
        className="p-2 rounded-full hover:bg-gray-800 hover:text-primary-500 transition-colors cursor-pointer"
        onClick={handlePreviousMonth}
        aria-label="Mês anterior"
      >
        <ChevronLeft />
      </button>
      <div className="flex items-center gap-2">
        <label htmlFor="month-select" className="sr-only">
          Selecionar Mês
        </label>
        <select
          id="month-select"
          className="bg-gray-800 border-gray-700 rounded-md py-1 px-2 text-sm font-medium text-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-500 cursor-pointer"
          value={month}
          onChange={(e) => onMonthChange(Number(e.target.value))}
        >
          {monthNames.map((name, index) => (
            <option key={name} value={index + 1}>
              {name}
            </option>
          ))}
        </select>

        <label htmlFor="year-select" className="sr-only">
          Selecionar Ano
        </label>
        <select
          id="year-select"
          className="bg-gray-800 border-gray-700 rounded-md py-1 px-2 text-sm font-medium text-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-500 cursor-pointer"
          value={year}
          onChange={(e) => onYearChange(Number(e.target.value))}
        >
          {years.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="button"
        className="p-2 rounded-full hover:bg-gray-800 hover:text-primary-500 transition-colors cursor-pointer"
        onClick={handleNextMonth}
        aria-label="Mês seguinte"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default MothYearSelect;
