import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProba_1ГородLForm from './forms/i-i-s-proba-1-город-l';
import IISProba_1УлицаLForm from './forms/i-i-s-proba-1-улица-l';
import IISProba_1ГородEForm from './forms/i-i-s-proba-1-город-e';
import IISProba_1УлицаEForm from './forms/i-i-s-proba-1-улица-e';
import IISProba_1ГородModel from './models/i-i-s-proba-1-город';
import IISProba_1УлицаModel from './models/i-i-s-proba-1-улица';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba-1-город': IISProba_1ГородModel,
    'i-i-s-proba-1-улица': IISProba_1УлицаModel
  },

  'application-name': 'Proba_1',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba_1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba_1',
          title: 'Proba_1'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'proba-1': {
          caption: 'Proba_1',
          title: 'Proba_1',
          'i-i-s-proba-1-улица-l': {
            caption: 'Улица',
            title: ''
          },
          'i-i-s-proba-1-город-l': {
            caption: 'Город',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba-1-город-l': IISProba_1ГородLForm,
    'i-i-s-proba-1-улица-l': IISProba_1УлицаLForm,
    'i-i-s-proba-1-город-e': IISProba_1ГородEForm,
    'i-i-s-proba-1-улица-e': IISProba_1УлицаEForm
  },

});

export default translations;
