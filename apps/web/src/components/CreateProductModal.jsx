import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./base/Button";
import CreateProductForm from "./CreateProductForm";

function CreateProductModal({
  open,
  onClose
}) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium text-gray-900"
                  >
                    Crear nuevo producto
                  </Dialog.Title>
                  <div className="mt-8 px-3">
                    <CreateProductForm
                      onSubmitSuccess={onClose}
                    >
                      <div className="flex justify-end gap-x-4 mt-4">
                        <Button
                          type="button"
                          onClick={onClose}
                          outlined
                        >
                          Cancelar
                        </Button>
                        <Button
                          type="submit"
                        >
                          Crear
                        </Button>
                      </div>
                    </CreateProductForm>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
      </Dialog>
    </Transition>
  )
}

export default CreateProductModal