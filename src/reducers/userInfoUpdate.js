import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  _id: "1",
  userName: "",
  totalDailyCalories: "0",
  macroRatioSelected: {
    macroDisplay: "P:40%, C:30%, F:30%",
    macroValue: "4:3:3",
  },
  protein: {
    totalProtein: "0",
    consumedProtein: "0",
  },
  carbohydrates: {
    totalCarbohydrates: "0",
    consumedCarbohydrates: "0",
  },
  fats: {
    totalFats: "0",
    consumedFats: "0",
  },
  totalCaloriesConsumed: "0",
  searchResultsSuggestions: [],
  searchFoodItemDetails: {},
  meals: {
    breakfast: [],
    lunch: [],
    dinner: [],
  },
};

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (userId) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users?id=" + userId
    );
    return response.data;
  }
);

export const fetchSearchAutoComplete = createAsyncThunk(
  "foodSearch",
  async (foodItem) => {
    const response = await axios.get(
      "https://api.edamam.com/auto-complete?app_id=a6255a5d&app_key=4a3686359eff557961541c981967cf44&q=" +
        foodItem
    );
    return response.data;
  }
);

export const fetchFoodItemDetails = createAsyncThunk(
  "foodItemDetails",
  async (foodItem) => {
    const parsedData = await axios.get(
      "https://api.edamam.com/api/food-database/v2/parser?app_id=a6255a5d&app_key=4a3686359eff557961541c981967cf44&ingr=" +
        foodItem
    );

    return parsedData.data;
  }
);

export const userInputSlice = createSlice({
  name: "userInput",
  initialState,
  reducers: {
    addTotalDailyCalories: (state, action) => {
      state.totalDailyCalories = action.payload;
    },
    setMacroRatioSelected: (state, action) => {
      state.macroRatioSelected = action.payload;
    },
    updateIndividualMacros: (state) => {
      const macroArray = state.macroRatioSelected.macroValue.split(":");
      state.protein.totalProtein = Math.round(
        (state.totalDailyCalories * macroArray[0]) / 40
      );
      state.carbohydrates.totalCarbohydrates = Math.round(
        (state.totalDailyCalories * macroArray[1]) / 40
      );

      state.fats.totalFats = Math.round(
        (state.totalDailyCalories * macroArray[2]) / 90
      );
    },
    updateSuggestionAfterClick: (state) => {
      state.searchResultsSuggestions = [];
    },
    addItemToMeal: (state, action) => {
      console.log(action.payload);
      const mealType = action.payload?.type;
      console.log(mealType);

      state.meals[mealType].push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      const [result] = action.payload;
      state.userName = result.name;
    });
    builder.addCase(fetchSearchAutoComplete.fulfilled, (state, action) => {
      state.searchResultsSuggestions = action.payload;
    });
    builder.addCase(fetchFoodItemDetails.fulfilled, (state, action) => {
      state.searchFoodItemDetails = action.payload;
    });
  },
});

export const {
  addTotalDailyCalories,
  setMacroRatioSelected,
  updateIndividualMacros,
  updateSuggestionAfterClick,
  addItemToMeal,
} = userInputSlice.actions;

export default userInputSlice.reducer;
