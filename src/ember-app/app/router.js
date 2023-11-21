import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proba-1-город-l');
  this.route('i-i-s-proba-1-город-e',
  { path: 'i-i-s-proba-1-город-e/:id' });
  this.route('i-i-s-proba-1-город-e.new',
  { path: 'i-i-s-proba-1-город-e/new' });
  this.route('i-i-s-proba-1-улица-l');
  this.route('i-i-s-proba-1-улица-e',
  { path: 'i-i-s-proba-1-улица-e/:id' });
  this.route('i-i-s-proba-1-улица-e.new',
  { path: 'i-i-s-proba-1-улица-e/new' });
});

export default Router;
