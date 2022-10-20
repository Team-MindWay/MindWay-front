import { atom } from 'recoil';

/**
 * 삭제 모달 보여주기 여부
 */
export const ShowBookDeleteModal = atom({
  key: 'ShowBookDeleteModal',
  default: false,
});

export const BookDeleteId = atom({
  key: 'BookDeleteId',
  default: null,
});
