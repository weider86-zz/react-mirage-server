import {Server} from 'miragejs';

export const makeServer = (enviroment = 'development') => {
  return new Server({
    enviroment,
    routes() {
      this.namespace = 'api';
      this.get('users', () => {
        return [
          {
            id: 1,
            name: 'Benício Barbosa Lima',
            email: 'ben121216@gmail.com',
            gender: 'male',
            active: true,
          },
          {
            id: 2,
            name: 'Weider Lima',
            email: 'weider86@gmail.com',
            gender: 'male',
            active: false,
          },
          {
            id: 3,
            name: 'Rosimeire Barbosa',
            email: 'pequena_meire@gmail.com',
            gender: 'female',
            active: true,
          },
        ];
      });
    },
  });
};
