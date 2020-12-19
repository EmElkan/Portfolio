import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate } from 'k6/metrics';

let oneErrorRate = new Rate('One errors');
let twoErrorRate = new Rate('Two errors');
let OneTrend = new Trend('One');
let TwoTrend = new Trend('Two');

export let options = {
  vus: 10,
  duration: '5m',
  thresholds: {
    'One': ['p(95)<1000'],
    'Two': ['p(95)<1000'],
  },
};

export default function () {
  let urlOne = 'http://test.loadimpact.com/one';
  let urlTwo = 'http://test.loadimpact.com/two';


  let requests = {
    'One': {
      method: 'GET',
      url: urlOne,
    },
    'Two': {
      method: 'GET',
      url: urlTwo,
    },
  };

  let responses = http.batch(requests);
  let oneResp = responses['One'];
  let twoResp = responses['Two'];

  check(oneResp, {
    'One status is 200': (r) => r.status === 200,
  }) || oneErrorRate.add(1);

  OneTrend.add(oneResp.timings.duration);

  check(twoResp, {
    'Two status is 200': (r) => r.status === 200,
  }) || twoErrorRate.add(1);

  TwoTrend.add(twoResp.timings.duration);

  sleep(1);
}