import { check, sleep } from 'k6';
import http from 'k6/http';

export let options = {
  vus: 1,
  duration: '30s',
};
  export default function () {
    let res = http.get('http://test.loadimpact.com/');
    check(res, {
      'is status 200': (r) => r.status === 200,
    });

    sleep(1);
  }