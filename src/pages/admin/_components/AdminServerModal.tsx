import { useState } from 'react';
import CreateServerModal from '../../../components/modal/contents/CreateServerModal';

export default function AdminServerModal() {
  const [isOpen, setIsOpen] = useState(false); // 모달 상태 관리
  const openModal = () => {
    setIsOpen(true); // 모달 열기
  };

  const closeModal = () => {
    setIsOpen(false); // 모달 닫기
  };
  return (
    <div>
      <button onClick={openModal} type='button'>
        서버 생성
      </button>
      <CreateServerModal closeModal={closeModal} isOpen={isOpen} />
    </div>
  );
}
