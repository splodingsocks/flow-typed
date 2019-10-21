import { describe, it } from 'flow-typed-test';
import React from 'react';

import {
  type OK,
  getStatusText
} from 'http-status-codes';

describe('http-status-codes', () => {
  it('status code 200 is OK', () => {
    (200: OK);
    // $ExpectError
    (201: OK);
  });

  it('status by code', () => {
    (getStatusText(200): string);
    // $ExpectError
    (getStatusText(200): boolean);
    // $ExpectError
    getStatusText("200");
  });
});
