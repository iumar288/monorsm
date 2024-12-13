import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '000b810a-18ca-4e32-9f3d-e2e99618257d',
};

export const sampleWithPartialData: IAuthority = {
  name: '5649b6f1-8d59-4360-8e2a-09b9f628bcae',
};

export const sampleWithFullData: IAuthority = {
  name: '0bbc0a1e-b0b0-4be0-9d7d-8e50fa3f7489',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
