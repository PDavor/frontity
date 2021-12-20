// import React from "react";
// import { connect } from "frontity";
// import Link from "@frontity/components/link";

// const NavOld = ({ state }) => {
//   const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
//   console.log("nav state", items);
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-plava">
//         <div className="container">
//           <div className="col">
//             <button
//               type="button"
//               id="sidebarCollapse"
//               className="btn bg-plava-tamnija text-bijela"
//             >
//               <i className="fas fa-align-left"></i>
//               <span>Izbornik</span>
//             </button>
//           </div>
//           <div className="row">
//             <button
//               className="navbar-toggler text-bijela"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarTogglerDemo01"
//               aria-controls="navbarTogglerDemo01"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <i className="fas fa-align-left"></i>
//             </button>
//           </div>
//           <div className="col">
//             <div
//               className="collapse navbar-collapse text-bijela"
//               id="navbarTogglerDemo01"
//             >
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 {items.map((item) => {
//                   return (
//                     <li className="nav-item" key={item.ID}>
//                       <a className="nav-link text-bijela" href="#">
//                         <Link link={item.url}>{item.title}</Link>
//                       </a>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           </div>
//           {/* <div className="col"></div> */}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default connect(NavOld);
