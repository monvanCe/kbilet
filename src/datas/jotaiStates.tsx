import { atom } from 'jotai';
import { userInterface } from './interfaces';

const defaultUser: userInterface = {
  email: 'omerfkoca@gmail.com',
  password: '729272',
  firstName: 'ömerf',
  lastName: 'koca',
  gender: 'male',
  idNumber: 29794920776,
  birthDate: '1998-03-28',
};

export const usersAtom = atom<userInterface[]>([defaultUser]);
