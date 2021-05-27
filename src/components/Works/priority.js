const PRIORITIES = ["secondary", "primary", "warning", "danger"];
const PRIORITIESVALUES = {
    danger: 4,
    warning: 3,
    primary: 2,
    secondary: 1,
};

const orderByOptions = {
    priorityASC: "Priority - ASC",
    priorityDESC: "Priority - DESC",
    numberASC: "Number - ASC",
    numberDESC: "Number - DESC",
};

const _PRIORITIES = {
    PRIORITIES,
    PRIORITIESVALUES,
    orderByOptions,
};

export default _PRIORITIES;
