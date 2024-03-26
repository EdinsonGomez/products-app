import { Fragment } from "react";
import { useSelector } from "react-redux";
import Button from "../base/Button";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { signOff } from '@/store/authSlice';

function UserSection() {
  const dispatch = useDispatch();

  const { login } = useSelector((state) => state.auth);

  const onSignOff = () => {
    dispatch(signOff());
  }

  return (
    <>
      {!login?.user?.token ? (
        <Button
          type="button"
        >
          <Link to="/login">
            Iniciar sesión
          </Link>
        </Button>
      ): (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex flex-col justify-center items-center gap-y-1">
              <img
                src={`https://avatar.iran.liara.run/username?username=${login?.user?.name + login?.user?.last_name}`}
                width={45}
              />
              <small className="text-xs text-black/60">{login?.user?.email}</small>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y  rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="py-3 px-4 flex flex-col gap-4">
                <Menu.Item>
                  <span className="capitalize">{login?.user?.rol?.name ?? ''}</span>
                </Menu.Item>
                <Menu.Item className="border-t-2 border-neutral-100 pt-2">
                  <span
                    className="hover:cursor-pointer"
                    onClick={onSignOff}
                  >
                    Cerrar sesion
                  </span>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </>
  )
}

export default UserSection