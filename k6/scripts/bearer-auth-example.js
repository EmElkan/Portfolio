import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

let secret = JSON.parse(open(__ENV.MY_CONFIG_FILE));

export const options = {
  stages: [
    { duration: '2s', target: 10 },
    { duration: '5s', target: 10 },
    { duration: '2s', target: 0 },
  ],

  thresholds: {
    http_req_failed : [ 'rate<0.05' ],  // http errors < 5%
    http_req_duration : ['p(95)<3000'],  // 95% requests below 3s
    errors: ['rate<0.05'],  // status code failures < 5%
  },
};

export let errorRate = new Rate('errors');

export function setup() {
	const url = secret.AUTH_URL;
	const response = http.post(url);
	check(response, {
		'signed in': (res) => res.status === 200
	});
	return { bearerToken: JSON.parse(response.body).access_token };

  };

  export default function (data) {

	const params = {
	  headers: {
		'Authorization': `bearer ${data.bearerToken}`
	  }
	};
	
	const response = http.get(secret.API_URL,params);
	check(response, {
	  'response is 200': (r) => r.status === 200,
	}) || errorRate.add(1);
  
  sleep(Math.floor(Math.random() * 3) + 1);
};
