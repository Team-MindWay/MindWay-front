import { atom } from 'recoil';

export const UserMenuModalId = atom({
  key: 'UserMenuModalId',
  default: null,
});

export const ShowUserMenuModal = atom({
  key: 'ShowUserMenuModal',
  default: false,
});

export const ShowBookDeleteModal = atom({
  key: 'ShowBookDeleteModal',
  default: false,
});
