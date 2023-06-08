import { Dialog, Transition } from '@headlessui/react'
import { format } from 'date-fns';
import { Fragment} from 'react'

const BookingModal = ({isOpen, closeModal, bookingInfo, handlePayment}) => {
    const {guest, host, price, to, from, location, title} = bookingInfo;
  
   
    return (
        <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Place: {title}
                    </Dialog.Title>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                       Location: {location}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-lg text-black py-3">
                       Host: <span className='text-sm text-black underline'>{host}</span>

                      </p>
                      <p className='text-lg text-black'>Guest Name: {guest?.name}</p>
                      <p className='text-lg text-black py-3'>Guest Email: <span className='text-sm text-black underline'>{guest?.email}</span></p>
                      <img src={guest?.photo} alt="Guest Image" className=' w-36 rounded-xl' />
                      <p className='text-lg text-black py-3'>Check In: {format(new Date (from), 'PP')} </p>
                      <p className='text-lg text-black pb-3'>Check Out: {format(new Date (to), 'PP')} </p>
                      <p className='text-lg text-black pb-3'>Total Rent: ${price} </p>
                    </div>

                    {/* Close and pay button  */}
                  <div className='flex justify-between '>
                  <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                       Cancel
                      </button>
                    </div>
                    
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-blue-900 hover:text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handlePayment}
                      >
                       Pay ${price}
                      </button>
                    </div>
                  </div>

                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
};

export default BookingModal;