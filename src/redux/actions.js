export const SELECT_TITLE = "SELECT_TITLE";


export function selectTitle(title) {
    return {
        type: SELECT_TITLE,
        title,
    }
};
