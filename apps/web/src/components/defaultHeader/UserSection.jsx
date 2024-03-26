import { Fragment } from "react";
import { useSelector } from "react-redux";
import Button from "../base/Button";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { signOff } from '@/store/authSlice';
import { useMemo } from "react";
import clsx from "clsx";

function UserSection() {
  const dispatch = useDispatch();

  const { login } = useSelector((state) => state.auth);

  const onSignOff = () => {
    dispatch(signOff());
  };

  const userData = useMemo(() => {
    return {
      name: `${login?.user?.name ?? ''} ${login?.user?.last_name}`,
      email: login?.user?.email ?? '',
      rol: login?.user?.rol?.name ?? ''
    }
  }, [login.user])

  return (
    <>
      {!login?.user?.token ? (
        <Button
          type="button"
          className="!text-indigo-700 font-semibold"
          text
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
                <Menu.Item className="pb-2">
                  <div className="flex items-center gap-x-4">
                    <div className="flex flex-col grow">
                      <span className="text-sm">{userData.name}</span>
                      <span className="text-xs">{userData.email}</span>
                    </div>
                    <span
                      className={clsx(
                        'text-xs py-1 px-2 rounded-full capitalize bg-neutral-300',
                        {
                          'bg-rose-700 text-white': userData.rol === 'admin'
                        }
                      )}
                    >
                      {userData.rol}
                    </span>
                  </div>
                </Menu.Item>
                <Menu.Item className="border-t-2 border-neutral-200 pt-2 hover:cursor-pointer">
                  <div className="flex items-center gap-x-1" onClick={onSignOff}>
                    <span className="material-symbols-outlined">logout</span>
                    <span>Cerrar sesion</span>
                  </div>
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