import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPut, httpPost } from '../../utils';
import { baseUrl } from '../../baseURL';

const campeonatosAdapter = createEntityAdapter();

const initialState = campeonatosAdapter.getInitialState({
  status: 'not_loaded',
  error: null,
});

export const fetchCampeonatos = createAsyncThunk(
  'campeonatos/fetchCampeonatos',
  async (_, { getState }) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/campeonatos`, {
      headers: { Authorization: 'Bearer ' + getState().logins.currentToken },
    });
  }
);

export const deleteCampeonatoServer = createAsyncThunk(
  'campeonatos/deleteCampeonatoServer',
  async (idCampeonato, { getState }) => {
    await httpDelete(`${baseUrl}/campeonatos/${idCampeonato}`, {
      headers: { Authorization: 'Bearer ' + getState().logins.currentToken },
    });
    return idCampeonato;
  }
);

export const addCampeonatoServer = createAsyncThunk(
  'campeonatos/addCampeonatoServer',
  async (campeonato, { getState }) => {
    return await httpPost(`${baseUrl}/campeonatos`, campeonato, {
      headers: { Authorization: 'Bearer ' + getState().logins.currentToken },
    });
  }
);

export const updateCampeonatoServer = createAsyncThunk(
  'campeonatos/updateCampeonatoServer',
  async (campeonato, { getState }) => {
    return await httpPut(`${baseUrl}/campeonatos/${campeonato.id}`, campeonato, {
      headers: { Authorization: 'Bearer ' + getState().logins.currentToken },
    });
  }
);

const campeonatosSlice = createSlice({
  name: 'campeonatos',
  initialState: initialState,
  reducers: {
    // Seus reducers síncronos aqui
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampeonatos.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCampeonatos.fulfilled, (state, action) => {
        state.status = 'loaded';
        campeonatosAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCampeonatos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteCampeonatoServer.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteCampeonatoServer.fulfilled, (state, action) => {
        state.status = 'deleted';
        campeonatosAdapter.removeOne(state, action.payload);
      })
      .addCase(addCampeonatoServer.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(addCampeonatoServer.fulfilled, (state, action) => {
        state.status = 'saved';
        campeonatosAdapter.addOne(state, action.payload);
      })
      .addCase(updateCampeonatoServer.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateCampeonatoServer.fulfilled, (state, action) => {
        state.status = 'saved';
        campeonatosAdapter.upsertOne(state, action.payload);
      });
  },
});

export default campeonatosSlice.reducer;

export const {
  selectAll: selectAllCampeonatos,
  selectById: selectCampeonatosById,
  selectIds: selectCampeonatosIds,
} = campeonatosAdapter.getSelectors((state) => state.campeonatos);
