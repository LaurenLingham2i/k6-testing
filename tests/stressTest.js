
// Stress testing to simulate gradually increasing the load to a very high level

import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    stages: [
        { duration: "2m", target: 50 },   // Ramp-up to 50 users over 2 minutes
        { duration: "3m", target: 50 },   // Stay at 50 users for 3 minutes
        { duration: "2m", target: 100 },  // Ramp-up to 100 users over 2 minutes
        { duration: "3m", target: 100 },  // Stay at 100 users for 3 minutes
        { duration: "2m", target: 200 },  // Ramp-up to 200 users over 2 minutes
        { duration: "3m", target: 200 },  // Stay at 200 users for 3 minutes
        { duration: "2m", target: 0 },    // Ramp-down to 0 users
    ],
};

export default function () {
    const res = http.get("https://jsonplaceholder.typicode.com/posts/1");
    check(res, { "status is 200": (r) => r.status === 200 });
    sleep(1);
};
