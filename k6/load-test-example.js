import http from "k6/http";
import { check, sleep } from "k6";
import { Rate } from "k6/metrics";

export let errorRate = new Rate("errors");
export let options = {
    stages: [
        { duration: "40s",  target: 5 }, // simulate ramp-up of traffic from 1 to 5 users over 40 seconds
        { duration: "1m", target: 5 }, // stay at 5 users for 1 minute
        { duration: "40s",  target: 10 }, // ramp-up to 10 users over 40 seconds
        { duration: "1m",  target: 10 }, // stay at 10 users for 1 minute
        { duration: "40s",  target: 5 }, // ramp-down to 5 users over 40 seconds
        { duration: "1m", target: 5 }, // continue at 5 users for 1 minute
        { duration: "1m",  target: 0 }  // ramp-down to 0 users
    ],
    thresholds: {
       errors: ["rate<0.1"], // test will fail if over 10% of requests do not a return 200 response
       "http_req_duration": ['p(99)<1500'], // 99% of requests must complete below 1.5s
  }
};

export default function() {
  const res = http.get("http://test.loadimpact.com/");
  const result = check(res, {
    "status is 200": r => r.status == 200,
  });
  errorRate.add(!result);

  sleep(1);
}