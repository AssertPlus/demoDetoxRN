require('babel-register');

import {Before, AfterAll} from '@cucumber/cucumber';
import detox from 'detox';
import {startDevice} from '../../utils/common';


Before({timeout: 120 * 1000}, async function () {
	await startDevice(this);
});

AfterAll(async function () {
	await detox.cleanup();
});