import { Connection } from "jsstore";

const getWorkerPath = () => {
    // return dev build when env is development
    if (process.env.NODE_ENV === 'development') {
        return require("~/assets/js/jsstore.worker.js");
    }
    else { // return prod build when env is production
        return require("~/assets/js/jsstore.worker.min.js");
    }
};

const workerPath = getWorkerPath().default;
export const connection = new Connection(new Worker(workerPath));

