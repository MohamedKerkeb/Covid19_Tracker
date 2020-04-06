import React from "react";
import styles from "./App.module.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleConutryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.logo}>Covid-19</h1>
        {data ? (
          <div>
            Mise à jour le {new Date(data.lastUpdate).toLocaleDateString()} à {new Date(data.lastUpdate).toTimeString().slice(0, 9)}
          </div>
        ) : null}
        <Cards data={data} />
        <CountryPicker handleConutryChange={this.handleConutryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
