import { atom } from 'recoil';

/**
 * 삭제 모달 보여주기 여부
 */
export const ShowBookDeleteModal = atom({
  key: 'ShowBookDeleteModal',
  default: false,
});

/**
 * 삭제하려고 하는 책의 id
 */
export const BookDeleteId = atom({
  key: 'BookDeleteId',
  default: null,
});
