import React from 'react';
import { Button, Input, Textarea, Switch, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react';

const ModalDialog = ({ title = "Model Title", isOpen = false, onClose = true }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="py-2">
              <Input placeholder='Basic usage' />
            </div>
            <div className="py-2">
              <Textarea />
            </div>
            <div className="py-2">
              <Switch />
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>บันทึก</Button>
            <Button colorScheme='red' variant='ghost' onClick={onClose}>ยกเลิก</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDialog;
