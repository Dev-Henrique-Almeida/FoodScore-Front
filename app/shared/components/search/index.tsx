import React, { useState } from "react";
import { Autocomplete, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IRestaurantData } from "@/app/shared/@types";
import styles from "./search.module.scss";

interface SearchProps {
  onSearchChange: (searchTerm: string) => void;
  restaurants: IRestaurantData[];
}

export default function Search({ onSearchChange, restaurants }: SearchProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (
    event: React.SyntheticEvent,
    value: string | null
  ) => {
    if (value !== null) {
      setInputValue(value);
      onSearchChange(value);
    }
  };

  return (
    <div className={styles.searchSection}>
      <Autocomplete
        freeSolo
        options={restaurants.map((restaurant) => restaurant.name)}
        onInputChange={handleInputChange}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              value: inputValue,
              placeholder: "Informe o nome do restaurante",
              sx: {
                "&::placeholder": {
                  opacity: inputValue ? 0 : 1,
                },
                "& fieldset": { border: "none" },
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            fullWidth
            className={styles.searchInput}
          />
        )}
      />
    </div>
  );
}
