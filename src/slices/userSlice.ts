import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';

interface DeleteUserPayload {
    userId: number;
}

const userSlice = createSlice({
    name: 'user',
    initialState: [] as User[],
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.push(action.payload);
        },
        editUser: (state, action: PayloadAction<User>) => {
            const index = state.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteUser: (state, action: PayloadAction<DeleteUserPayload>) => {
            const { userId } = action.payload;
            const index = state.findIndex(user => user.id === userId);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        setUsers: (state, action: PayloadAction<User[]>) => {
            return [...action.payload];
        },
    },
});

export const { addUser, editUser, deleteUser, setUsers } = userSlice.actions;
export default userSlice.reducer;
