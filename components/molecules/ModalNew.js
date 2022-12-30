import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Button from "../atoms/Button";
import Par from "../typography/Par";

function ModalNew({
  btnLabel = "Open Modal",
  heading = "Get the latest news and insights every day!",
  description = "We only share the best so you can stay ahead of the curve and make informed decisions about your investments. You won&apos;t want to miss a day of this!",
  btnClassName = "",
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button className={`max-w-sm ${btnClassName}`} onClick={(el) => setIsOpen(true)}>{btnLabel}</Button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-900">
                  <Dialog.Title
                    as="h3"
                    className="text-xl leading-6 text-yellow-600 dark:text-white font-sans"
                  >
                    {heading}
                  </Dialog.Title>
                  <div className="my-2">
                    <Par className="text-sm" size="sm">{description}</Par>
                  </div>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ModalNew;
