import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import cartLogo from '../../logo/cart.png';
import Item from '../Cart/Item';

const customStyles = {
  content: {
    top: '33%',
    left: '33%',
    right: '33%',
    bottom: 'auto',
   // marginRight: '-50%',
   // transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const ModalComp = ()=> {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [products,state,dispatch] = useContext(GlobalContext);


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {

  //  subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={""}>
      <img src={cartLogo} className="w-16 mx-2 cursor-pointer mb-2" onClick={openModal} alt={""}/>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
       // className="bg-red-600 mt-1/2 flex justify-center items-center"
      >
       <div className="grid">
         <div className="flex justify-between">
            <div>
              
            </div>
            <div className="font-bold text-lg">Cart Items</div>
            <div className="bg-red-600  text-white font-bold px-1 rounded-md m-2 cursor-pointer" onClick={closeModal}>X</div>
         </div>
           <div className={"border-solid"}>
            {state.cart.map((item,index)=><Item item={products[item.id]} amount={item.amount} key={index}/>)}
           </div>
       </div>
       
      </Modal>
    </div>
  );
}

export default ModalComp;