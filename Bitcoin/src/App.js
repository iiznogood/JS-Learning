import getBitcoinData from './apis/getBitcoinData';
import Dropdown from './copmonents/Dropdown/Dropdown';
import LineChart from './copmonents/LineChart';
import Currencies from './constants/Currencies';

const createChart = async (currency = Currencies.AmericanDollars) => {
  const data = await getBitcoinData(currency);

  let lineChart = LineChart({ data: data.prices });

  return lineChart;
};

  const App = async () => {
  const container = document.createElement('div');
  const lineChart = await createChart();

  const dropdown = Dropdown();

  dropdown.onchange = async (event) => {
    const currency = event.target.seletedOptions[0].value;

    container.removeChild(lineChart);
    lineChart = await createChart(currency);
    container.append(lineChart);
  }

  container.append(dropdown, lineChart);

  return container;
};

export default App;
