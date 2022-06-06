import React from 'react';
import './Character.css';
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';
import breakingbadShort2 from '../../../assets/Breakingbad/breakShort2.jpg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const initialCast = {
  id: uuidv4(),
  img: breakingbadShort2,
  actor: '',
  name: '',
  description: '',
};

const Character = ({ data }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [cast, setCast] = React.useState(initialCast);

  function handleOnClick(cast) {
    setCast(cast);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  console.log(data);
  return (
    <div className="container_character">
      <>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img className="character" src={cast.img} />
        </Modal>
        {data.map((cast) => (
          <div className="child_character" key={cast.id}>
            <img
              className="character"
              src={cast.img}
              onClick={() => {
                openModal();
                handleOnClick(cast);
              }}
            />
          </div>
        ))}
      </>
    </div>
  );
};

export default Character;
