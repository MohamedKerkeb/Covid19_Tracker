import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, FormHelperText } from "@material-ui/core";

import styles from "./CP.module.css";

import { fetchCountries } from "../../api";

const CountryPicker = ({ handleConutryChange }) => {
  const [fetchedCountries, setFerchedCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFerchedCountries(await fetchCountries());
    };
    fetchApi();
  }, [setFerchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(evt) => handleConutryChange(evt.target.value)}>
        <option value=""> Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
      <FormHelperText>Chose your bled</FormHelperText>
    </FormControl>
  );
};

export default CountryPicker;
