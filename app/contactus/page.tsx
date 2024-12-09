
'use client'
import React, { useState } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import { Navbar } from "@/components/navbar";

const ContactUs = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalContent, setModalContent] = useState('');


    const openModalWithContent = (content: string) => {
        setModalContent(content);
        onOpen();
    };

    return (
        <>  
        <Navbar/>
        <div className="flex flex-col items-start mt-10 px-14 w-full">

            <img
                src="https://envs.sh/1rN.png"
                alt="Support"
                className="w-60 h-auto mb-8"
            />


            <h1 className="text-7xl text-black mb-4">Hi, how can we help?</h1>


            <p className="text-2xl text-black text-left mt-5 mb-8 max-w-3xl">
                Have questions or need to report an issue with a SIH? We're here to help you! Let us know how we can assist you.
            </p>


            <div className="flex flex-row gap-4">
                <Button
                    onPress={() => openModalWithContent('Registration')}
                    size="lg"
                    className="shadow-lg hover:shadow-xl transition duration-300"
                >
                    Registration
                </Button>
                <Button
                    onPress={() => openModalWithContent('Food Committee-Regular')}
                    size="lg"
                    className="shadow-lg hover:shadow-xl transition duration-300"
                >
                    Food Committee-Regular
                </Button>
                <Button
                    onPress={() => openModalWithContent('Food Committee-VIP')}
                    size="lg"
                    className="shadow-lg hover:shadow-xl transition duration-300"
                >
                    Food Committee-VIP
                </Button>
                <Button
                    onPress={() => openModalWithContent('Accommodation')}
                    size="lg"
                    className="shadow-lg hover:shadow-xl transition duration-300"
                >
                    Accommodation
                </Button>
            </div>


            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>

                            <ModalHeader className="flex flex-col gap-2 text-center text-lg font-semibold text-white">
                                <h2>{modalContent}</h2>
                            </ModalHeader>
                            <ModalBody>

                                {modalContent === 'Registration' && (
                                    <div>
                                        <p className="text-white">
                                            For registration inquiries, please contact:
                                        </p>
                                        <p className="text-white mt-4">
                                            Joel: +91 9876543210.
                                        </p>
                                        <p className="text-white">
                                            Blaa: +91 9876543210.
                                        </p>
                                    </div>
                                )}
                                {modalContent === 'Food Committee-Regular' && (
                                    <div>
                                        <p className="text-white">
                                            For regular food committee inquiries, please contact:
                                        </p>
                                        <p className="text-white mt-4">
                                            Joel: +91 9876543210.
                                        </p>
                                        <p className="text-white">
                                            Blaa: +91 9876543210.
                                        </p>
                                    </div>
                                )}
                                {modalContent === 'Food Committee-VIP' && (
                                    <div>
                                        <p className="text-white">
                                            For VIP food committee, please contact:
                                        </p>
                                        <p className="text-white mt-4">
                                            Joel: +91 9876543210.
                                        </p>
                                        <p className="text-white">
                                            Blaa: +91 9876543210.
                                        </p>
                                    </div>
                                )}
                                {modalContent === 'Accommodation' && (
                                    <div>
                                        <p className="text-white">
                                            For accommodation inquiries, please contact:
                                        </p>
                                        <p className="text-white mt-4">
                                            Joel: +91 9876543210.
                                        </p>
                                        <p className="text-white">
                                            Blaa: +91 9876543210.
                                        </p>
                                    </div>
                                )}
                            </ModalBody>

                            <ModalFooter className="flex justify-center gap-4">
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button onPress={onClose}>
                                    OK
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
        </>
    );
};

export default ContactUs;
