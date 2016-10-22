import angular from 'angular';

import {listing} from './listing';
import {listings} from './listings';

export const listingsModule = 'listings';

angular
  .module(listingsModule, [])
  .component('fountainListing', listing)
  .component('fountainListings', listings);
