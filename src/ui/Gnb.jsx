import React, { useState, useEffect, useRef } from 'react';
import { useImage, useUserMain } from '../store/UserMain/store';
import { GrUserSettings } from 'react-icons/gr';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

export default function Gnb() {
  const { userMainData, setIsOpenDropdown, headerUserImg } = useUserMain(
    (state) => state,
  );
  const { setUserImg, stateImageData } = useImage((state) => state);
  console.log('headerUserImg', headerUserImg);
  const navigate = useNavigate();
  return (
    <header className="relative items-center justify-between w-full p-1 pl-5 pr-5 bg-white border-b-2 cursor-pointer border-slate-300">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover-bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover-bg-gray-700 dark:focus:ring-gray-600"
            ></button>
            {/* <p className="flex md:mr-24">
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                <img
                  src="/gnbLogo.png"
                  alt="로고"
                  className="h-12 w-47* p-1"
                  onClick={() => {
                    navigate('/home/main');
                  }}
                />
              </span>
            </p> */}
          </div>
          {/* 로그인 안되면 보여주면 안됨 */}
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <div
                onClick={() => {
                  setIsOpenDropdown();
                }}
              >
                <ui className="flex items-center mr-3 list-none">
                  <li>
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus-ring-4 focus-ring-gray-300"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Open user menu</span>
                      {stateImageData.userImg !== '' ? (
                        <img
                          className="font-medium rounded-full w-11 h-11 hover:bg-gray-400 focus:ring-3 focus:ring-gray-300"
                          // src="testImg.jpg"
                          src={stateImageData.userImg}
                          alt="user photo"
                        />
                      ) : (
                        <img
                          className="font-medium rounded-full w-11 h-11 hover:bg-gray-400 focus:ring-3 focus:ring-gray-300"
                          // src="testImg.jpg"
                          src={`data:image/*;base64,${headerUserImg}`}
                          alt="user photo"
                        />
                      )}
                    </button>
                  </li>
                  <li className="pl-3 text-xl">{userMainData.name}</li>
                </ui>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
