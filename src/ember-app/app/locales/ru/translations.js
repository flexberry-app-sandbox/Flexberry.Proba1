import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proba_1',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba_1',
          title: 'Proba_1'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proba-1-город-l': IISProba_1ГородLForm,
    'i-i-s-proba-1-улица-l': IISProba_1УлицаLForm,
    'i-i-s-proba-1-город-e': IISProba_1ГородEForm,
    'i-i-s-proba-1-улица-e': IISProba_1УлицаEForm
  },

});

export default translations;
