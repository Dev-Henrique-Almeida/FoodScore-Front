import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const handleInputChange = (
    event: React.SyntheticEvent,
    value: string | null
  ) => {
    if (value !== null) {
      setInputValue(value);
      onSearchChange(value);
    }
  };

  const handleSelectionChange = (
    event: React.SyntheticEvent,
    value: string | null
  ) => {
    if (value !== null) {
      const selectedRestaurant = restaurants.find(
        (restaurant) => restaurant.name === value
      );
      if (selectedRestaurant) {
        // chamando a rota de detalhes do restaurante
        router.push(`/restaurant/${selectedRestaurant.id}`);
      }
    }
  };

  return (
    <div className={styles.searchSection}>
      <Autocomplete
        freeSolo
        options={restaurants.map((restaurant) => restaurant.name)}
        onInputChange={handleInputChange}
        onChange={handleSelectionChange}
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
