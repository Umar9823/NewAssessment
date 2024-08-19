import { ADD_WIDGET, REMOVE_WIDGET } from '../action/action';

const initialState = {
  categories: [],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      const { categoryIndex, widget } = action.payload;
      return {
        ...state,
        categories: state.categories.map((category, index) =>
          index === categoryIndex
            ? { ...category, widgets: [...category.widgets, widget] }
            : category
        ),
      };

    case REMOVE_WIDGET:
      const { categoryIndex: removeCategoryIndex, widgetIndex } = action.payload;
      return {
        ...state,
        categories: state.categories.map((category, index) =>
          index === removeCategoryIndex
            ? {
                ...category,
                widgets: category.widgets.filter((_, i) => i !== widgetIndex),
              }
            : category
        ),
      };

    default:
      return state;
  }
};

export default dashboardReducer;
