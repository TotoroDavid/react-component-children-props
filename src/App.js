import React, { useState } from 'react'
import GalleryModal from './components/GalleryModal'
import Modal from './components/Modal'
import UseModal from './hooks/UseModal'

const App = () => {

  const [isOpenLoginModal, openLoginModal, closeLoginModal] = UseModal()
  const [isOpenChatModal, openChatModal, closeChatModal] = UseModal()
  const [isOpenGalleryModal, openGalleryModal, closeGalleryModal] = UseModal()

  return (
    <div>
      <button onClick={openLoginModal}>
        Open Modal
      </button>
      <button onClick={openChatModal}>
        Open  chat Modal
      </button>
      <button onClick={openGalleryModal}>
        Open  Gallery
      </button>
      <Modal
        isOpen={isOpenLoginModal}
        closeModal={closeLoginModal}
        title='Login'
      >
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
        </form>
      </Modal>
      <Modal
        isOpen={isOpenChatModal}
        closeModal={closeChatModal}
        title='chat!!'
      >
        <p>hello <b>Luis!!</b></p>
      </Modal>
      <GalleryModal
        isOpen={isOpenGalleryModal}
        title='photos!!'
        closeModal={closeGalleryModal}
      />

    </div>
  )
}

export default App
