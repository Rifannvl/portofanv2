import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoMailOutline,
  IoLinkOutline,
} from "react-icons/io5"; // Ikon outline dari react-icons/io5
import { motion } from "framer-motion"; // Import motion dari framer-motion

export default function Sidebar() {
  const location = useLocation(); // Mendapatkan informasi lokasi (URL) saat ini

  // Fungsi untuk mengecek apakah URL saat ini cocok dengan path yang diberikan
  const isActive = (path) =>
    location.pathname === path
      ? "bg-transparent backdrop-blur-sm shadow-lg transform translate-y-1" // Warna latar dan bayangan saat aktif
      : ""; // Warna latar default saat tidak aktif

  return (
    <motion.div
      className="fixed top-0 left-0 h-screen"
      initial={{ opacity: 0 }} // Animasi awal
      animate={{ opacity: 1 }} // Animasi saat sidebar ditampilkan
      transition={{ duration: 0.5 }} // Durasi animasi
    >
      {/* Tambahkan `group` untuk mendeteksi hover pada sidebar */}
      <motion.div
        className="group flex flex-col transition-all ease-in-out duration-700"
        initial={{ width: "5rem" }} // Sidebar semula sempit
        animate={{ width: "16rem" }} // Sidebar melebar
        transition={{ duration: 0.3, ease: "easeInOut" }} // Durasi dan easing untuk transisi melebar
      >
        <div className="p-4 border shadow-2xl rounded-b-md w-20 group-hover:w-64 h-screen transition-all ease-in-out duration-700">
          <div className="text-center">
            {/* Judul sidebar hanya tampil saat sidebar melebar */}
            <motion.div
              className="mt-12 group-hover:block hidden transition-all duration-300 ease-in-out"
              initial={{ opacity: 0 }} // Initial state, tersembunyi
              animate={{ opacity: 1 }} // Animasi saat sidebar melebar
              transition={{ delay: 0.3 }} // Delay agar muncul setelah sidebar melebar
            >
              <img
                src="https://cdn-icons-png.freepik.com/256/16334/16334205.png?ga=GA1.1.135343962.1731777400&semt=ais_hybrid"
                className="w-20 h-20 rounded-full mx-auto"
                alt=""
              />
              <p className="mt-2 font-bold">Rifan Afendi</p>
              <p className="text-sm">Web Developer</p>
            </motion.div>
          </div>
          <hr className="border-t-2 shadow-inherit border-gray-400 my-4" />
          <ul className="mt-8 space-y-4 transition-all ease-in-out duration-700">
            {/* Item Sidebar 1 - Home */}
            <Link to="/" className="block">
              <motion.li
                className={`flex group items-center mb-4 px-4 py-2 rounded-full transition-all ease-in-out duration-300 ${isActive(
                  "/"
                )}`}
                whileHover={{
                  scale: 1.1, // Membesarkan item saat hover
                  transition: { duration: 0.2, ease: "easeOut" }, // Durasi dan easing yang lebih halus saat hover
                }}
                whileTap={{
                  scale: 0.95, // Efek klik dengan memperkecil item
                  transition: { duration: 0.2 },
                }}
              >
                <IoHomeOutline className="text-2xl transition-all duration-300 ease-in-out transform group-hover:scale-100 group-hover:mr-2 group-hover:text-xl" />
                <span className="text-black group-hover:block hidden hover:translate-x-1 transition-all duration-300 ease-in-out">
                  Home
                </span>
              </motion.li>
            </Link>

            {/* Item Sidebar 2 - About */}
            <Link to="/about" className="block">
              <motion.li
                className={`flex items-center mb-4 px-4 py-2 rounded-full transition-all ease-in-out duration-300 ${isActive(
                  "/about"
                )}`}
                whileHover={{
                  scale: 1.1, // Membesarkan item saat hover
                  transition: { duration: 0.2, ease: "easeOut" }, // Durasi dan easing yang lebih halus saat hover
                }}
                whileTap={{
                  scale: 0.95, // Efek klik dengan memperkecil item
                  transition: { duration: 0.2 },
                }}
              >
                <IoPersonOutline className="text-2xl transition-all duration-300 ease-in-out transform group-hover:scale-100 group-hover:mr-2 group-hover:text-xl" />
                <span className="text-black group-hover:block hidden hover:translate-x-1 transition-all duration-300 ease-in-out">
                  About
                </span>
              </motion.li>
            </Link>

            {/* Item Sidebar 3 - Contact */}
            <Link to="/contact" className="block">
              <motion.li
                className={`flex items-center mb-4 px-4 py-2 rounded-full transition-all ease-in-out duration-300 ${isActive(
                  "/contact"
                )}`}
                whileHover={{
                  scale: 1.1, // Membesarkan item saat hover
                  transition: { duration: 0.2, ease: "easeOut" }, // Durasi dan easing yang lebih halus saat hover
                }}
                whileTap={{
                  scale: 0.95, // Efek klik dengan memperkecil item
                  transition: { duration: 0.2 },
                }}
              >
                <IoMailOutline className="text-2xl transition-all duration-300 ease-in-out transform group-hover:scale-100 group-hover:mr-2 group-hover:text-xl" />
                <span className="text-black group-hover:block hidden hover:translate-x-1 transition-all duration-300 ease-in-out">
                  Contact
                </span>
              </motion.li>
            </Link>

            {/* Item Sidebar 4 - Another link */}
            <Link to="/project" className="block">
              <motion.li
                className={`flex items-center mb-4 px-4 py-2 rounded-full transition-all ease-in-out duration-300 ${isActive(
                  "/project"
                )}`}
                whileHover={{
                  scale: 1.1, // Membesarkan item saat hover
                  transition: { duration: 0.2, ease: "easeOut" }, // Durasi dan easing yang lebih halus saat hover
                }}
                whileTap={{
                  scale: 0.95, // Efek klik dengan memperkecil item
                  transition: { duration: 0.2 },
                }}
              >
                <IoLinkOutline className="text-2xl transition-all duration-300 ease-in-out transform group-hover:scale-100 group-hover:mr-2 group-hover:text-xl" />
                <span className="text-black group-hover:block hidden hover:translate-x-1 transition-all duration-300 ease-in-out">
                  Project
                </span>
              </motion.li>
            </Link>
          </ul>
          <hr className="border-t-2 shadow-inherit border-gray-400 my-4" />
        </div>
      </motion.div>
    </motion.div>
  );
}
