import reducer from './reducer'
import {
    ADD,
    REMOVE,
    COMPLETED
} from './type.js'

export default (ctx) => {
    const {
        addItem,
        removeItem,
        changeCompleted
    } = reducer(ctx.todoData);

    return function (type, arg) {
        switch (type) {
            case ADD:
                ctx.todoData = addItem(arg);
                console.log( ctx.todoData )

                break;
            case REMOVE:
                ctx.todoData = removeItem(arg);
                break;
            case COMPLETED:
                ctx.todoData = changeCompleted(arg);
                break;
            default:
                break

        }
    }
}