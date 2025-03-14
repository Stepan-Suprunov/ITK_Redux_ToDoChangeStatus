let countId = 0;

const defaultState = [
    {
        id: countId++,
        text: "Помыть кота",
        status: true,
    },
];

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_DONE = "CHANGE_DONE";

export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: countId++,
                    text: action.text,
                    status: false,
                },
            ];
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        case CHANGE_DONE:
            return state.map(todo =>
                todo.id === action.id
                    ? todo.status
                        ? { ...todo, status: false }
                        : { ...todo, status: true }
                    : todo
            );
        default:
            return state;
    }
};

export const addTodoAC = (text) => ({type: ADD_TODO, text});
export const deleteTodoAC = (id) => ({type: DELETE_TODO, id});
export const changeDoneAC = (id) => ({type: CHANGE_DONE, id});