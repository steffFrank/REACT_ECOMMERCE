import { createSelector } from "reselect";


const selectCategoryReducer = state => state.categories;

const selCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)
export const selectCategories = createSelector([selCategories],
    (categories) => categories.reduce((acc, category) => {
      const {title, items} = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {}));


export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
   (categoriesSlice) => categoriesSlice.isLoading
);