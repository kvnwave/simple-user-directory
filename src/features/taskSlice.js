import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [],
  },
  reducers: {
    addTask: (state, action) => {
      const trimmed = action.payload.trim();
      if (trimmed !== '') {
        state.taskList.push({ id: Date.now(), text: trimmed });
      }
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;