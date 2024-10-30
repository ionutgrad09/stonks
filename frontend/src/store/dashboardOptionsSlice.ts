import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface StoreState {
  activeSymbol: string | null;
  showCardInfo: boolean;
}

interface SymbolPayload {
  activeSymbol: string;
}

const initialState: StoreState = {
  activeSymbol: null,
  showCardInfo: true
};

export const dashboardOptionsSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    toggleShowCardInfo: (state) => {
      state.showCardInfo = !state.showCardInfo;
    },
    setActiveSymbol: (state, action: PayloadAction<string | null>) => {
      state.activeSymbol = action.payload;
    }
  }
});


const selectShowCardInfo = (state: { store: StoreState }) => state.store.showCardInfo;
const getActiveSymbol = (state: { store: StoreState }) => state.store.activeSymbol;

const selectors = {
    selectShowCardInfo,
    getActiveSymbol
}
export default dashboardOptionsSlice.reducer;
export { selectors };
