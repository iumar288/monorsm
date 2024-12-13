import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 28427,
  login: 'Z@JI\\\\F8HRX\\xoj9y\\Nn',
};

export const sampleWithPartialData: IUser = {
  id: 626,
  login: '9GIc@Y',
};

export const sampleWithFullData: IUser = {
  id: 7387,
  login: 'PIa8l-@AFs',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
