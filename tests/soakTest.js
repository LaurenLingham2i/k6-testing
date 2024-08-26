// Soak testing to simulate a prolonged period of load

import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    vus: 5, // Virtual users
    duration: "10m", // Duration of the test
};

export default function () {
    const res = http.get("https://jsonplaceholder.typicode.com/posts/1");
    check(res, { "status is 200": (r) => r.status === 200 });
    sleep(1);
};
