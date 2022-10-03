import { atom } from 'recoil';

/**
 * 사용자가 신청한 도서 중 메뉴바를 클릭한 BookId
 */
export const UserMenuModalId = atom({
  key: 'UserMenuModalId',
  default: null,
});

/**
 * 메뉴바 보여주기 여부
 */
export const ShowUserMenuModal = atom({
  key: 'ShowUserMenuModal',
  default: false,
});

/**
 * 삭제 모달 보여주기 여부
 */
export const ShowBookDeleteModal = atom({
  key: 'ShowBookDeleteModal',
  default: false,
});
