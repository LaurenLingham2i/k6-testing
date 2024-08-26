// Spike testing to simulate a sudden increase in load

import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    stages: [
        { duration: "1m", target: 10 }, // Ramp-up to 10 users
        { duration: "10s", target: 100 }, // Spike to 100 users
        { duration: "1m", target: 10 }, // Ramp-down to 10 users
    ],
};

export default function () {
    const res = http.get("https://jsonplaceholder.typicode.com/posts/1");
    check(res, { "status is 200": (r) => r.status === 200 });
    sleep(1);
};
