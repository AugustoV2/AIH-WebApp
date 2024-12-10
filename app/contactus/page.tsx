"use client";
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";

const ContactUs = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalContent, setModalContent] = useState("");

  const openModalWithContent = (content: string) => {
    setModalContent(content);
    onOpen();
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-10 px-6 sm:px-14 w-full">
        <Image
          src="https://envs.sh/1rN.png"
          alt="Support"
          width={240}
          height={160}
          className="mb-8"
        />
        <h1 className="text-4xl sm:text-7xl text-black mb-4 text-center">
          Hi, how can we help?
        </h1>
        <p className="text-lg sm:text-2xl text-black text-center mt-5 mb-8 max-w-3xl">
          Have questions or need assistance with SIH? We're here to help! Reach
          out and let us know how we can assist you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button
            size="lg"
            className="shadow-lg hover:shadow-xl transition duration-300 w-full sm:w-auto"
            onPress={() => openModalWithContent("Registration")}
          >
            Registration
          </Button>
          <Button
            size="lg"
            className="shadow-lg hover:shadow-xl transition duration-300 w-full sm:w-auto"
            onPress={() => openModalWithContent("Food Committee-Regular")}
          >
            Food Committee-Regular
          </Button>
          <Button
            size="lg"
            className="shadow-lg hover:shadow-xl transition duration-300 w-full sm:w-auto"
            onPress={() => openModalWithContent("Food Committee-VIP")}
          >
            Food Committee-VIP
          </Button>
          <Button
            size="lg"
            className="shadow-lg hover:shadow-xl transition duration-300 w-full sm:w-auto"
            onPress={() => openModalWithContent("Accommodation")}
          >
            Accommodation
          </Button>
          <Button
            size="lg"
            className="shadow-lg hover:shadow-xl transition duration-300 w-full sm:w-auto"
            onPress={() => openModalWithContent("Travel")}
          >
            Travel
          </Button>
        </div>
        {/* Modal */}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-2 text-center text-lg font-semibold text-white">
                  <h2>{modalContent}</h2>
                </ModalHeader>
                <ModalBody>
                  {modalContent === "Registration" && (
                    <div>
                      <p className="text-black">
                        For registration inquiries, please contact:
                      </p>
                      <p className="text-black mt-4">Sharon(Lead): +91 NIL.</p>
                      <p className="text-black">Reubel: +91 NIL.</p>
                      <p className="text-black">Joshua: +91 NIL.</p>
                      <p className="text-black">Anugrah: +91 NIL.</p>
                      <p className="text-black">Deon: +91 NIL.</p>
                      <p className="text-black">Darwin: +91 NIL.</p>
                    </div>
                  )}
                  {modalContent === "Food Committee-Regular" && (
                    <div>
                      <p className="text-black">
                        For regular food committee inquiries, please contact:
                      </p>
                      <p className="text-black mt-4">Anwar: +91 NIL.</p>
                      <p className="text-black">Augustin: +91 NIL.</p>
                      <p className="text-black">Nandana LP: +91 NIL.</p>
                      <p className="text-black">Unknown: +91 NIL.</p>
                      <p className="text-black">Blaaa: +91 NIL.</p>
                    </div>
                  )}
                  {modalContent === "Food Committee-VIP" && (
                    <div>
                      <p className="text-black">
                        For VIP food committee, please contact:
                      </p>
                      <p className="text-black mt-4">Akshay: NIL</p>
                      <p className="text-black">Deon Berchmans: NIL</p>
                      <p className="text-black">Adithya b dev: NIL</p>
                    </div>
                  )}
                  {modalContent === "Accommodation" && (
                    <div>
                      <p className="text-black">
                        For accommodation inquiries, please contact:
                      </p>
                      <p className="text-black mt-4">
                        ALAN JOSEPH(lead): NIL.
                      </p>
                      <p className="text-black">Saveo Biju: NIL.</p>
                      <p className="text-black ">Alan jimmy: +91 9539909336.</p>
                      <p className="text-black ">
                        Kevin George: +91 8281651978.
                      </p>
                      <p className="text-black">Juan: +91 9747396408.</p>
                      <p className="text-black ">Don johns: +91 8891554693.</p>
                      <p className="text-black ">Aadhi lakshmi (LEAD): NIL</p>
                      <p className="text-black">Adona: NIL</p>
                    </div>
                  )}
                  {modalContent === "Travel" && (
                    <div>
                      <p className="text-black">
                        For Travel inquiries, please contact:
                      </p>
                      <p className="text-black mt-4">Ashirvad: NIL.</p>
                    </div>
                  )}
                  {modalContent === "Reports &amp; Certificate" && (
                    <div>
                      <p className="text-black">
                        For Reports &amp; Certificate inquiries, please contact:
                      </p>
                      <p className="text-black mt-4">Neha: NIL.</p>
                    </div>
                  )}
                  {modalContent === "Technical" && (
                    <div>
                      <p className="text-black">
                        For Technical inquiries, please contact:
                      </p>
                      <p className="text-black mt-4">NIL: NIL.</p>
                    </div>
                  )}
                  {modalContent === "Program Commitee" && (
                    <div>
                      <p className="text-black">
                        For Program Commitee inquiries, please contact:
                      </p>
                      <p className="text-black mt-4">
                        Alan Thomas Shaji (lead): NIL.
                      </p>
                      <p className="text-black ">Aswin MS: +91 8891554693.</p>
                      <p className="text-black">Athul P Shibu: NIL</p>
                    </div>
                  )}
                </ModalBody>
                <ModalFooter className="flex justify-center gap-4">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button onPress={onClose}>OK</Button>
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
