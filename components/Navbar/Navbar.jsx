"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Uncommented the icons

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [navBackground, setNavBackground] = useState("rgba(0, 0, 0, 0)");
  const [textColor, setTextColor] = useState("black"); // Initial text color black
  const [logoColor, setLogoColor] = useState("black"); // Start with transparent background

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get current scroll position
      const maxScroll = 300; // Max scroll where the background should be fully black
      let opacity = Math.min(scrollY / maxScroll, 1); // Calculate opacity (0 to 1 based on scroll)
      console.log(scrollY);
      // Create the rgba color with increasing opacity
      if (scrollY < 40) {
        setTextColor(`black`);
        setLogoColor(`black`);
      } else {
        setTextColor(`rgba(255,255,255, ${opacity})`);
        setLogoColor(`rgba(255,255,255, ${opacity})`);
      }
      setNavBackground(`rgba(0, 0, 0, ${opacity})`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    // <div className="flex justify-between items-center w-full h-[20vh] px-4 top-0 z-50 text-white bg-black fixed nav border-b-2 border-transparent transition-all duration-300 ease-in-out hover:border-b-white">
    <div
      className="flex justify-between items-center w-full h-[10vh] md:h-[15vh] px-4 text-white bg-transparent  top-0 z-50 fixed nav"
      style={{ backgroundColor: navBackground }}
    >
      <div>
        <h1 className="text-5xl font-signature ml-2 w-[100px]">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            {/* <img src="logo1.png" alt="Delit" className="w-[65px]" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              className="w-[65px]"
              viewBox="0 0 1668.000000 2464.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,2464.000000) scale(0.100000,-0.100000)"
                fill={logoColor}
                stroke="none"
              >
                <path d="M14285 20874 c-60 -13 -159 -31 -220 -39 -161 -21 -267 -41 -380 -70 -220 -56 -254 -65 -349 -85 -54 -12 -122 -26 -150 -30 -309 -47 -484 -89 -706 -172 -74 -28 -153 -57 -175 -65 -22 -8 -58 -23 -80 -33 -22 -10 -69 -32 -105 -48 -246 -110 -909 -441 -993 -496 -34 -22 -66 -58 -113 -128 -36 -53 -73 -103 -81 -110 -15 -12 -16 -9 -9 22 19 90 19 110 1 110 -30 0 -251 -125 -585 -330 -80 -49 -170 -103 -200 -121 -30 -18 -113 -70 -185 -117 -140 -92 -198 -128 -285 -174 -49 -27 -101 -60 -205 -133 -16 -11 -64 -45 -105 -76 -41 -30 -88 -64 -104 -74 -16 -11 -41 -29 -56 -40 -16 -11 -61 -43 -101 -70 -41 -28 -103 -71 -139 -96 -36 -25 -99 -65 -140 -89 -138 -80 -273 -169 -448 -295 -46 -33 -114 -81 -150 -107 -37 -26 -104 -82 -150 -125 -83 -77 -83 -79 -103 -158 -22 -86 -30 -128 -54 -270 -8 -49 -28 -142 -45 -205 -16 -63 -30 -128 -30 -145 0 -36 -23 -74 -34 -57 -6 10 6 228 30 553 7 90 1 139 -17 139 -17 0 -101 -85 -169 -170 -70 -89 -231 -270 -369 -415 -96 -102 -203 -230 -242 -290 -94 -147 -123 -190 -152 -223 -140 -159 -268 -447 -307 -687 -5 -27 -13 -70 -20 -95 -6 -25 -22 -103 -35 -175 -13 -71 -28 -148 -34 -170 -6 -22 -13 -52 -16 -66 -13 -71 -149 -79 -249 -15 -31 20 -59 36 -63 36 -11 0 6 -100 25 -142 10 -24 47 -73 80 -111 34 -37 62 -73 62 -80 0 -7 -28 -40 -62 -73 -107 -103 -219 -186 -388 -288 -25 -15 -72 -45 -105 -66 -33 -21 -95 -60 -139 -87 -43 -26 -90 -56 -105 -66 -14 -9 -37 -23 -51 -30 -14 -7 -44 -25 -67 -40 -24 -15 -46 -27 -50 -27 -3 0 -14 -6 -22 -14 -9 -7 -61 -37 -116 -66 -273 -143 -325 -188 -325 -282 1 -92 64 -176 200 -268 147 -99 187 -162 161 -253 -17 -58 -132 -168 -242 -231 -143 -83 -157 -94 -189 -149 -63 -111 -63 -199 2 -301 30 -45 31 -50 17 -75 -9 -15 -47 -44 -94 -69 -100 -53 -157 -109 -198 -191 -26 -53 -32 -78 -35 -150 -4 -76 -1 -95 22 -152 14 -36 26 -76 26 -88 0 -63 -71 -140 -254 -275 -142 -105 -225 -189 -254 -256 -16 -38 -12 -146 7 -212 16 -50 81 -146 169 -248 131 -151 237 -233 425 -329 61 -31 113 -62 115 -68 11 -35 -151 1 -248 55 -169 94 -288 196 -415 355 -55 69 -108 129 -119 132 -33 12 -59 -27 -64 -93 -11 -158 113 -489 263 -697 84 -117 171 -206 327 -335 148 -122 161 -148 68 -140 -81 7 -258 140 -424 318 -27 29 -54 51 -60 49 -20 -7 -23 -63 -10 -232 11 -155 31 -306 54 -410 5 -22 19 -107 30 -190 21 -147 67 -343 95 -411 18 -43 41 -53 65 -28 21 23 173 323 265 524 36 80 101 217 144 305 90 184 125 260 136 295 4 14 20 48 35 75 15 28 49 100 75 160 26 61 68 155 92 210 25 55 53 118 63 140 48 109 125 272 136 290 7 11 27 54 44 95 17 41 49 111 70 155 21 44 67 143 101 220 33 77 80 181 104 230 23 50 46 101 50 115 4 14 42 104 85 200 43 96 96 218 118 270 22 52 61 140 87 195 26 55 55 119 66 142 10 23 41 93 69 155 29 62 60 131 70 153 10 22 52 110 93 196 85 176 98 205 157 339 42 97 188 381 268 525 109 194 149 268 212 390 37 72 101 186 142 255 67 112 95 158 172 280 13 19 60 96 106 170 273 445 466 728 689 1013 64 81 145 185 181 231 36 46 112 144 170 217 58 74 116 150 129 169 14 19 57 74 98 122 40 48 101 127 135 175 35 48 133 162 219 253 152 161 409 409 409 395 0 -13 -43 -62 -188 -210 -232 -237 -430 -461 -521 -591 -47 -65 -104 -144 -127 -174 -24 -30 -101 -131 -170 -225 -70 -93 -177 -233 -239 -310 -118 -147 -249 -326 -376 -510 -94 -136 -411 -643 -492 -785 -32 -58 -74 -130 -92 -160 -37 -63 -110 -196 -215 -390 -40 -74 -106 -191 -145 -260 -132 -230 -213 -384 -303 -575 -49 -104 -124 -262 -167 -350 -42 -88 -112 -241 -155 -340 -43 -99 -94 -214 -113 -255 -61 -133 -88 -192 -148 -333 -33 -76 -77 -173 -98 -215 -21 -42 -42 -88 -46 -102 -4 -14 -48 -107 -96 -208 -49 -100 -89 -185 -89 -189 0 -3 -27 -60 -59 -127 -33 -67 -75 -159 -94 -206 -43 -105 -218 -499 -282 -635 -51 -109 -132 -305 -259 -630 -102 -259 -190 -454 -274 -605 -36 -63 -79 -146 -97 -185 -40 -88 -95 -247 -95 -274 0 -82 -98 -482 -192 -781 -11 -36 -32 -108 -48 -160 -31 -108 -93 -304 -185 -590 -35 -107 -75 -233 -89 -280 -13 -47 -45 -150 -70 -230 -39 -128 -59 -195 -96 -330 -68 -246 -73 -356 -26 -505 33 -101 33 -145 3 -173 -13 -12 -29 -22 -36 -22 -17 0 -91 -52 -121 -87 -40 -44 -66 -86 -73 -113 -3 -14 -22 -79 -42 -145 -54 -180 -107 -384 -115 -440 -3 -27 -14 -67 -23 -89 -12 -26 -17 -67 -17 -130 l0 -91 -78 -55 c-140 -98 -300 -248 -382 -355 -37 -49 -70 -126 -70 -166 0 -65 67 -113 185 -133 129 -21 419 -11 695 24 61 8 136 17 325 40 111 13 226 28 315 40 41 5 111 15 155 21 44 5 112 15 150 20 39 5 135 12 214 15 183 7 205 -2 276 -111 58 -91 120 -153 182 -184 26 -12 56 -27 65 -32 10 -5 27 -9 37 -9 11 0 22 -4 25 -9 3 -4 25 -12 48 -15 24 -4 68 -12 98 -17 310 -53 828 -40 1700 41 58 5 157 14 220 20 127 12 246 23 420 40 175 17 487 45 673 60 295 25 370 31 482 40 387 31 658 61 885 99 30 5 84 14 120 20 36 6 88 15 115 20 62 11 97 17 255 42 226 37 350 65 350 79 0 12 -53 19 -210 29 -454 30 -782 23 -1395 -29 -71 -6 -182 -15 -245 -20 -63 -5 -167 -14 -230 -20 -63 -6 -167 -15 -230 -21 -63 -5 -158 -14 -210 -19 -885 -85 -1063 -100 -1440 -122 -433 -25 -799 -10 -970 40 -19 6 -46 14 -60 18 -42 12 -113 55 -148 87 -17 17 -55 66 -83 108 -52 80 -94 115 -165 138 -45 15 -287 10 -424 -8 -123 -17 -225 -30 -308 -42 -105 -14 -189 -25 -302 -38 -122 -14 -236 -28 -330 -40 -205 -27 -329 -36 -470 -35 -182 0 -233 8 -277 41 -37 27 -43 63 -19 116 8 18 21 52 31 77 9 25 26 61 38 80 12 19 29 49 37 65 8 17 18 32 21 35 18 14 36 69 32 92 -4 20 6 46 33 93 65 112 93 159 100 175 15 31 83 126 100 140 19 16 148 171 204 245 37 49 95 95 168 132 155 79 367 293 407 409 22 67 37 358 25 494 -23 253 -60 954 -60 1131 0 153 23 433 40 483 6 16 10 41 10 55 0 36 191 581 212 608 6 7 40 22 76 33 36 11 70 24 76 29 6 5 31 12 56 16 71 11 243 73 378 136 34 16 66 29 70 29 4 0 52 27 106 60 289 176 751 544 807 643 9 16 7 17 -18 11 -15 -3 -66 -23 -113 -44 -206 -92 -546 -187 -783 -217 -93 -12 -82 22 18 55 33 11 137 39 230 62 299 73 541 164 630 235 22 17 60 45 85 60 25 16 67 47 94 69 63 53 196 205 196 224 0 23 -48 11 -240 -62 -96 -37 -192 -69 -213 -73 -34 -5 -39 -4 -35 12 2 13 65 51 192 117 193 101 286 165 369 258 58 65 153 256 173 351 15 69 15 85 1 187 -23 171 -13 192 167 331 184 142 222 201 238 368 5 60 15 118 21 131 6 13 43 43 83 68 184 114 261 239 299 479 17 111 36 177 71 247 34 68 60 84 149 92 118 11 259 52 381 111 95 46 119 63 168 117 31 35 69 88 84 118 26 53 27 62 28 220 1 91 -3 217 -8 280 -16 201 -10 869 8 1001 32 228 55 322 103 422 50 103 177 237 358 375 244 187 374 364 706 962 199 359 473 800 621 1000 23 30 48 65 56 77 36 54 203 266 285 364 158 187 198 241 184 249 -15 10 -73 2 -118 -16 -18 -8 -47 -14 -63 -14 -16 0 -39 -5 -51 -12 -12 -6 -35 -14 -52 -19 -16 -4 -61 -19 -100 -34 -38 -14 -126 -46 -195 -70 -69 -24 -150 -53 -180 -65 -187 -74 -260 -98 -260 -87 0 6 120 76 180 104 203 96 228 107 330 143 19 7 54 21 78 31 23 11 51 19 62 19 10 0 21 4 24 9 3 5 20 11 38 14 18 2 78 20 133 40 55 19 154 52 220 72 l120 37 175 172 c288 284 667 629 829 755 32 25 101 83 152 129 89 78 142 119 393 307 207 155 240 180 244 192 6 20 -85 55 -108 43 -10 -6 -65 -10 -122 -11 -151 -1 -272 -14 -430 -44 -54 -10 -48 10 6 24 25 6 66 11 91 11 25 0 58 6 73 14 34 17 208 29 433 31 l176 0 144 98 c79 53 180 122 224 152 44 31 97 68 118 82 20 14 40 38 44 52 8 33 20 41 60 41 34 0 77 23 210 111 45 30 114 74 154 99 40 25 89 56 109 69 193 133 274 185 385 249 162 94 189 113 173 124 -19 11 -50 8 -173 -18z m-2530 -973 c-31 -29 -115 -74 -115 -62 0 6 12 17 28 24 15 6 29 14 32 18 5 6 60 36 70 38 2 1 -4 -7 -15 -18z m-291 -179 c-27 -21 -69 -49 -94 -61 -44 -23 -58 -33 -172 -132 -29 -26 -132 -108 -228 -183 -225 -174 -286 -223 -400 -321 -338 -289 -479 -420 -650 -600 -234 -249 -290 -305 -300 -305 -18 0 38 69 154 190 61 63 185 194 276 289 160 169 266 267 513 476 312 263 446 370 552 442 33 22 69 50 79 62 11 11 23 21 27 21 5 0 39 21 76 47 65 45 188 112 207 113 5 0 -13 -17 -40 -38z m-1943 -1709 c-22 -38 -101 -113 -101 -96 0 14 89 113 101 113 6 0 6 -7 0 -17z" />
              </g>
            </svg>
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium  hover:scale-105 hover:text-white duration-200 link-underline"
            style={{ color: textColor }}
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
