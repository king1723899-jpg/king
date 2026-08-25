"use strict";
(globalThis["webpackChunkfair_react"] =
  globalThis["webpackChunkfair_react"] || []).push([
  ["src_pages_odds_odds_tsx"],
  {
    /***/ "./src/admin-app/pages/bet-lock/bet-lock.tsx":
      /*!***************************************************!*\
  !*** ./src/admin-app/pages/bet-lock/bet-lock.tsx ***!
  \***************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Dropdown.js"
          );
        /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js"
          );
        /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js"
          );
        /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js"
          );
        /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js"
          );
        /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js"
          );
        /* harmony import */ var _services_bet_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../services/bet.service */ "./src/services/bet.service.ts"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../redux/actions/sports/sportSlice */ "./src/redux/actions/sports/sportSlice.ts"
          );
        /* harmony import */ var _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../redux/actions/bet/betSlice */ "./src/redux/actions/bet/betSlice.ts"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
            "/www/wwwroot/Ambani/fair-react-stone/src/admin-app/pages/bet-lock/bet-lock.tsx",
          _s = __webpack_require__.$Refresh$.signature();
        // import React, { ChangeEvent, MouseEvent } from 'react'
        // import { Button, Container, Dropdown, Form, Modal, Row, Table } from 'react-bootstrap'
        // import betService from '../../../services/bet.service'
        // import { AxiosResponse } from 'axios'
        // import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
        // import { selectCurrentMatch } from '../../../redux/actions/sports/sportSlice'
        // import IMatch from '../../../models/IMatch'
        // import User from '../../../models/User'
        // import { Paginate } from '../../../models/Paginate'
        // import IMarket from '../../../models/IMarket'
        // import { FancyBook, setMarketBookUser } from '../../../redux/actions/bet/betSlice'

        // const MarketType: any = { M: 'Odds', B: 'Book', F: 'Fancy' }
        // const MarketTypeKey: any = { M: 'betFair', B: 'book', F: 'fancy' }

        // const BetLock = ({ markets }: { markets: IMarket[] }) => {
        //   const [show, setShow] = React.useState(false)
        //   const currentMatch: IMatch = useAppSelector(selectCurrentMatch)
        //   const [selectedType, setSelectedType] = React.useState('')
        //   const dispatch = useAppDispatch()
        //   const [users, setUsers] = React.useState<Paginate<Array<Partial<User>>>>(
        //     {} as Paginate<Array<Partial<User>>>,
        //   )
        //   const [value, setValue] = React.useState('')
        //   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
        //   const [debouncedValue, setDebouncedValue] = React.useState<string>(value)

        //   React.useEffect(() => {
        //     const timer = setTimeout(() => setDebouncedValue(value), 500)
        //     return () => clearTimeout(timer)
        //   }, [value, 500])

        //   React.useEffect(() => {
        //     if (currentMatch && currentMatch.matchId && selectedType) {
        //       if (debouncedValue) {
        //         getUserList(debouncedValue)
        //       } else {
        //         getUserList('')
        //       }
        //     }
        //   }, [debouncedValue, currentMatch])

        //   const handleClose = () => setShow(false)
        //   const handleShow = () => setShow(true)

        //   const lock = (e: MouseEvent<HTMLAnchorElement>, status: boolean, type: string) => {
        //     e.preventDefault()
        //     if (currentMatch && currentMatch.matchId) {
        //       betService.betLock({ match: currentMatch, type, status }).then((res: AxiosResponse) => {
        //         console.log(res.data)
        //       })
        //     }
        //   }

        //   const getUserList = (username: string) => {
        //     betService.getChildUserList(currentMatch.matchId, username).then((res: AxiosResponse) => {
        //       setUsers(res.data.data)
        //       handleShow()
        //     })
        //   }

        //   const selectUser = (e: MouseEvent<HTMLAnchorElement>, type: string) => {
        //     e.preventDefault()
        //     setSelectedType(type)
        //     getUserList('')
        //   }

        //   const lockUser = (e: ChangeEvent<HTMLInputElement>, user: Partial<User>, index: number) => {
        //     if (currentMatch && currentMatch.matchId) {
        //       const allUsers = [...users.docs]
        //       allUsers[index][MarketTypeKey[selectedType]] = e.target.checked
        //       setUsers({ ...users, docs: allUsers })
        //       betService
        //         .betLock({
        //           match: currentMatch,
        //           type: selectedType,
        //           status: e.target.checked,
        //           userId: user._id,
        //         })
        //         .then((res: AxiosResponse) => {
        //           console.log(res.data)
        //         })
        //     }
        //   }
        //   const setUserwisebook = (marketId: any, marketName: string) => {
        //     const filter: FancyBook = {
        //       matchId: currentMatch.matchId,
        //       selectionId: marketId,
        //       marketName: marketName,
        //     }
        //     dispatch(setMarketBookUser(filter))
        //   }

        //   return (
        //     <div className='buttons buttons-list row'>
        //       <Dropdown>
        //         <Dropdown.Toggle variant='primary' id='dropdown-basic'>
        //           Bet Lock
        //         </Dropdown.Toggle>

        //         <Dropdown.Menu>
        //           <Dropdown.Item
        //             href='#'
        //             onClick={(e: MouseEvent<HTMLAnchorElement>) => lock(e, true, 'M')}
        //           >
        //             Lock
        //           </Dropdown.Item>
        //           <Dropdown.Item
        //             href='#'
        //             onClick={(e: MouseEvent<HTMLAnchorElement>) => lock(e, false, 'M')}
        //           >
        //             Unlock
        //           </Dropdown.Item>
        //           <Dropdown.Item
        //             href='#'
        //             onClick={(e: MouseEvent<HTMLAnchorElement>) => selectUser(e, 'M')}
        //           >
        //             Select User
        //           </Dropdown.Item>
        //         </Dropdown.Menu>
        //       </Dropdown>
        //       <Dropdown>
        //         <Dropdown.Toggle variant='primary' id='dropdown-basic'>
        //           BookMaker Lock
        //         </Dropdown.Toggle>

        //         <Dropdown.Menu>
        //           <Dropdown.Item
        //             href='#'
        //             onClick={(e: MouseEvent<HTMLAnchorElement>) => lock(e, true, 'B')}
        //           >
        //             Lock
        //           </Dropdown.Item>
        //           <Dropdown.Item
        //             href='#'
        //             onClick={(e: MouseEvent<HTMLAnchorElement>) => lock(e, false, 'B')}
        //           >
        //             Unlock
        //           </Dropdown.Item>
        //           <Dropdown.Item
        //             href='#'
        //             onClick={(e: MouseEvent<HTMLAnchorElement>) => selectUser(e, 'B')}
        //           >
        //             Select User
        //           </Dropdown.Item>
        //         </Dropdown.Menu>
        //       </Dropdown>
        //       <Dropdown>
        //         <Dropdown.Toggle variant='primary' id='dropdown-basic'>
        //           Fancy Lock
        //         </Dropdown.Toggle>

        //         <Dropdown.Menu>
        //           <Dropdown.Item
        //             href='#'
        //             onClick={(e: MouseEvent<HTMLAnchorElement>) => lock(e, true, 'F')}
        //           >
        //             Lock
        //           </Dropdown.Item>
        //           <Dropdown.Item
        //             href='#'
        //             onClick={(e: MouseEvent<HTMLAnchorElement>) => lock(e, false, 'F')}
        //           >
        //             Unlock
        //           </Dropdown.Item>
        //           <Dropdown.Item
        //             href='#'
        //             onClick={(e: MouseEvent<HTMLAnchorElement>) => selectUser(e, 'F')}
        //           >
        //             Select User
        //           </Dropdown.Item>
        //         </Dropdown.Menu>
        //       </Dropdown>

        //       {markets &&
        //         markets.map(({ marketName, _id, marketId }: IMarket) => (
        //           <Button
        //             className={`mt-10 mrc-5`}
        //             key={_id}
        //             onClick={() => {
        //               setUserwisebook(marketId, marketName)
        //             }}
        //           >
        //             {marketName} Book
        //           </Button>
        //         ))}
        //       <Modal show={show} onHide={handleClose}>
        //         <Modal.Header closeButton>
        //           <Modal.Title>Select User</Modal.Title>
        //         </Modal.Header>
        //         <Modal.Body>
        //           <Container>
        //             <Row>
        //               <Form.Group className='mb-3'>
        //                 <Form.Control onChange={onChange} type='text' placeholder='Search User' />
        //               </Form.Group>
        //             </Row>
        //             <Row>
        //               <Table responsive>
        //                 <thead>
        //                   <tr>
        //                     <th>Username</th>
        //                     <th>Bet Status</th>
        //                     <th>Type</th>
        //                     <th>Action</th>
        //                   </tr>
        //                 </thead>
        //                 <tbody>
        //                   {users.docs &&
        //                     users.docs.map((user: Partial<User>, index) => (
        //                       <tr key={user._id}>
        //                         <td>{user.username}</td>
        //                         <td>Bet Lock</td>
        //                         <td>{MarketType[selectedType]}</td>
        //                         <td>
        //                           <input
        //                             type={'checkbox'}
        //                             checked={user[MarketTypeKey[selectedType]]}
        //                             value={user._id}
        //                             onChange={(e: ChangeEvent<HTMLInputElement>) =>
        //                               lockUser(e, user, index)
        //                             }
        //                           />
        //                         </td>
        //                       </tr>
        //                     ))}
        //                 </tbody>
        //               </Table>
        //             </Row>
        //           </Container>
        //         </Modal.Body>
        //       </Modal>
        //     </div>
        //   )
        // }

        // export default BetLock

        const MarketType = {
          M: "Odds",
          B: "Book",
          F: "Fancy",
        };
        const MarketTypeKey = {
          M: "betFair",
          B: "book",
          F: "fancy",
        };
        const BetLock = ({ markets }) => {
          _s();
          const [show, setShow] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const currentMatch = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(
            _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_3__.selectCurrentMatch
          );
          const [selectedType, setSelectedType] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
          const dispatch = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
          const [users, setUsers] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
          const [value, setValue] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
          const onChange = (e) => setValue(e.target.value);
          const [debouncedValue, setDebouncedValue] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(value);
          const navigate = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            const timer = setTimeout(() => setDebouncedValue(value), 500);
            return () => clearTimeout(timer);
          }, [value, 500]);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            if (currentMatch && currentMatch.matchId && selectedType) {
              if (debouncedValue) {
                getUserList(debouncedValue);
              } else {
                getUserList("");
              }
            }
          }, [debouncedValue, currentMatch]);
          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);
          const lock = (e, status, type) => {
            e.preventDefault();
            if (currentMatch && currentMatch.matchId) {
              _services_bet_service__WEBPACK_IMPORTED_MODULE_1__["default"]
                .betLock({
                  match: currentMatch,
                  type,
                  status,
                })
                .then((res) => {
                  console.log(res.data);
                });
            }
          };
          const getUserList = (username) => {
            _services_bet_service__WEBPACK_IMPORTED_MODULE_1__["default"]
              .getChildUserList(currentMatch.matchId, username)
              .then((res) => {
                setUsers(res.data.data);
                handleShow();
              });
          };
          const selectUser = (e, type) => {
            e.preventDefault();
            setSelectedType(type);
            getUserList("");
          };
          const lockUser = (e, user, index) => {
            if (currentMatch && currentMatch.matchId) {
              const allUsers = [...users.docs];
              allUsers[index][MarketTypeKey[selectedType]] = e.target.checked;
              setUsers({
                ...users,
                docs: allUsers,
              });
              _services_bet_service__WEBPACK_IMPORTED_MODULE_1__["default"]
                .betLock({
                  match: currentMatch,
                  type: selectedType,
                  status: e.target.checked,
                  userId: user._id,
                })
                .then((res) => {
                  console.log(res.data);
                });
            }
          };
          const setUserwisebook = (marketId, marketName) => {
            const filter = {
              matchId: currentMatch.matchId,
              selectionId: marketId,
              marketName: marketName,
            };
            dispatch(
              (0,
              _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__.setMarketBookUser)(
                filter
              )
            );
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
            "div",
            {
              className: "buttons buttons-list row",
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"],
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"]
                          .Toggle,
                        {
                          variant: "primary",
                          id: "dropdown-basic",
                          children: "Bet Lock",
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 351,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"]
                          .Menu,
                        {
                          className: "bg-light",
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[
                                "default"
                              ].Item,
                              {
                                href: "#",
                                className: "text-dark bg-light",
                                onClick: (e) => lock(e, true, "M"),
                                children: "Lock",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 356,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[
                                "default"
                              ].Item,
                              {
                                href: "#",
                                className: "text-dark bg-light",
                                onClick: (e) => lock(e, false, "M"),
                                children: "Unlock",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 363,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[
                                "default"
                              ].Item,
                              {
                                href: "#",
                                className: "text-dark bg-light",
                                onClick: (e) => selectUser(e, "M"),
                                children: "Select User",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 370,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 355,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 350,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"],
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"]
                          .Toggle,
                        {
                          variant: "primary",
                          id: "dropdown-basic",
                          children: "BookMaker Lock",
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 380,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"]
                          .Menu,
                        {
                          className: "bg-light",
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[
                                "default"
                              ].Item,
                              {
                                href: "#",
                                className: "text-dark bg-light",
                                onClick: (e) => lock(e, true, "B"),
                                children: "Lock",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 385,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[
                                "default"
                              ].Item,
                              {
                                href: "#",
                                className: "text-dark bg-light",
                                onClick: (e) => lock(e, false, "B"),
                                children: "Unlock",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 392,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[
                                "default"
                              ].Item,
                              {
                                href: "#",
                                className: "text-dark bg-light",
                                onClick: (e) => selectUser(e, "B"),
                                children: "Select User",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 399,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 384,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 379,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"],
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"]
                          .Toggle,
                        {
                          variant: "primary",
                          id: "dropdown-basic",
                          children: "Fancy Lock",
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 409,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"]
                          .Menu,
                        {
                          className: "bg-light",
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[
                                "default"
                              ].Item,
                              {
                                href: "#",
                                className: "text-dark bg-light",
                                onClick: (e) => lock(e, true, "F"),
                                children: "Lock",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 414,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[
                                "default"
                              ].Item,
                              {
                                href: "#",
                                className: "text-dark bg-light",
                                onClick: (e) => lock(e, false, "F"),
                                children: "Unlock",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 421,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[
                                "default"
                              ].Item,
                              {
                                href: "#",
                                className: "text-dark bg-light",
                                onClick: (e) => selectUser(e, "F"),
                                children: "Select User",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 428,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 413,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 408,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                  react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"],
                  {
                    show: show,
                    onHide: handleClose,
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"]
                          .Header,
                        {
                          closeButton: true,
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                            react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[
                              "default"
                            ].Title,
                            {
                              children: "Select User",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 441,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 440,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                        react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"]
                          .Body,
                        {
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                            react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[
                              "default"
                            ],
                            {
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                  react_bootstrap__WEBPACK_IMPORTED_MODULE_10__[
                                    "default"
                                  ],
                                  {
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                      react_bootstrap__WEBPACK_IMPORTED_MODULE_11__[
                                        "default"
                                      ].Group,
                                      {
                                        className: "mb-3",
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                          react_bootstrap__WEBPACK_IMPORTED_MODULE_11__[
                                            "default"
                                          ].Control,
                                          {
                                            onChange: onChange,
                                            type: "text",
                                            placeholder: "Search User",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 447,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 446,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 445,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                  react_bootstrap__WEBPACK_IMPORTED_MODULE_10__[
                                    "default"
                                  ],
                                  {
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                      react_bootstrap__WEBPACK_IMPORTED_MODULE_12__[
                                        "default"
                                      ],
                                      {
                                        responsive: true,
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "thead",
                                            {
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                "tr",
                                                {
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                      "th",
                                                      {
                                                        children: "Username",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 454,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                      "th",
                                                      {
                                                        children: "Bet Status",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 455,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                      "th",
                                                      {
                                                        children: "Type",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 456,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                      "th",
                                                      {
                                                        children: "Action",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 457,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 453,
                                                  columnNumber: 19,
                                                },
                                                undefined
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 452,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "tbody",
                                            {
                                              children:
                                                users.docs &&
                                                users.docs.map((user, index) =>
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                    "tr",
                                                    {
                                                      children: [
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                          "td",
                                                          {
                                                            children:
                                                              user.username,
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 464,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                          "td",
                                                          {
                                                            children:
                                                              "Bet Lock",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 465,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                          "td",
                                                          {
                                                            children:
                                                              MarketType[
                                                                selectedType
                                                              ],
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 466,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                          "td",
                                                          {
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                                "input",
                                                                {
                                                                  type: "checkbox",
                                                                  checked:
                                                                    user[
                                                                      MarketTypeKey[
                                                                        selectedType
                                                                      ]
                                                                    ],
                                                                  value:
                                                                    user._id,
                                                                  onChange: (
                                                                    e
                                                                  ) =>
                                                                    lockUser(
                                                                      e,
                                                                      user,
                                                                      index
                                                                    ),
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 468,
                                                                  columnNumber: 27,
                                                                },
                                                                undefined
                                                              ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 467,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                      ],
                                                    },
                                                    user._id,
                                                    true,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 463,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  )
                                                ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 460,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 451,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 450,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 444,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 443,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 439,
                    columnNumber: 7,
                  },
                  undefined
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 348,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(BetLock, "9B8+PfEwzxu3v8WcrtfOkGIAbNw=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,
            react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate,
          ];
        });
        _c = BetLock;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = BetLock;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "BetLock");

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/components/CashoutButton.tsx":
      /*!******************************************!*\
  !*** ./src/components/CashoutButton.tsx ***!
  \******************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../redux/hooks */ "./src/redux/hooks.ts");
        /* harmony import */ var _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../redux/actions/bet/betSlice */ "./src/redux/actions/bet/betSlice.ts"
          );
        /* harmony import */ var _utils_cashout_calculator__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../utils/cashout-calculator */ "./src/utils/cashout-calculator.ts"
          );
        /* harmony import */ var _models_IBet__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../models/IBet */ "./src/models/IBet.ts");
        /* harmony import */ var _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../redux/actions/sports/sportSlice */ "./src/redux/actions/sports/sportSlice.ts"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
            "/www/wwwroot/Ambani/fair-react-stone/src/components/CashoutButton.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const CashoutButton = ({ market, oddsData, matchId }) => {
          _s();
          var _market$marketName;
          const dispatch = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();
          const userBets = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(
            _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_2__.selectBetListUser
          );
          const currentMatch = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(
            _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_5__.selectCurrentMatch
          );

          // Don't show for Fancy Market or Meter Market
          const marketName =
            ((_market$marketName = market.marketName) === null ||
            _market$marketName === void 0
              ? void 0
              : _market$marketName.toLowerCase()) || "";
          if (marketName.includes("fancy") || marketName.includes("meter")) {
            console.log(
              "ðŸš« Cashout button hidden for market:",
              market.marketName
            );
            return null;
          }
          console.log(
            "âœ… Cashout button showing for market:",
            market.marketName
          );

          // Check if user has bets in this market
          const marketBets = Array.isArray(userBets)
            ? userBets.filter((bet) => {
                var _bet$marketId, _market$marketId;
                // Handle both backend (marketId as string) and frontend formats
                const betMarketId =
                  (_bet$marketId = bet.marketId) === null ||
                  _bet$marketId === void 0
                    ? void 0
                    : _bet$marketId.toString();
                const currentMarketId =
                  (_market$marketId = market.marketId) === null ||
                  _market$marketId === void 0
                    ? void 0
                    : _market$marketId.toString();
                const matches = betMarketId === currentMarketId;
                if (matches) {
                  console.log("âœ… Found matching bet:", {
                    betMarketId,
                    currentMarketId,
                    betSelectionName: bet.selectionName,
                    betGtype: bet.gtype,
                  });
                }
                return matches;
              })
            : [];
          const hasBets = marketBets.length > 0;
          console.log("ðŸŽ¯ Cashout Button State:", {
            marketId: market.marketId,
            marketName: market.marketName,
            marketGtype: market.gtype,
            totalUserBets: Array.isArray(userBets) ? userBets.length : 0,
            userBetsPreview: Array.isArray(userBets)
              ? userBets.slice(0, 2).map((b) => ({
                  marketId: b.marketId,
                  selectionName: b.selectionName,
                  gtype: b.gtype,
                  bet_on: b.bet_on,
                }))
              : [],
            marketBets: marketBets.length,
            marketBetsDetails: marketBets.map((b) => ({
              selectionName: b.selectionName,
              odds: b.odds,
              stack: b.stack,
              isBack: b.isBack,
            })),
            hasBets,
          });
          const handleCashout = () => {
            // Don't allow cashout if no bets exist
            if (!hasBets) {
              alert(
                "No bets placed in this market. Place a bet first to use cashout."
              );
              return;
            }
            try {
              var _market$marketId2;
              console.log(
                "ðŸŽ¯ Cashout button clicked for market:",
                market.marketName
              );

              // Get current odds for all runners
              const currentOdds = [];
              if (oddsData && oddsData.runners) {
                oddsData.runners.forEach((runner) => {
                  var _runner$ex, _runner$ex2;
                  // âœ… FIX: Get first NON-ZERO odds (important for bookmaker markets)
                  let backOdds = 0;
                  let layOdds = 0;

                  // Try to get from ex.availableToBack/availableToLay first
                  const availableToBack =
                    ((_runner$ex = runner.ex) === null || _runner$ex === void 0
                      ? void 0
                      : _runner$ex.availableToBack) ||
                    runner.back ||
                    [];
                  const availableToLay =
                    ((_runner$ex2 = runner.ex) === null ||
                    _runner$ex2 === void 0
                      ? void 0
                      : _runner$ex2.availableToLay) ||
                    runner.lay ||
                    [];

                  // Find first non-zero back odds
                  for (const odds of availableToBack) {
                    const price = parseFloat(odds.price || odds.price1 || odds);
                    if (price > 0) {
                      backOdds = price;
                      break;
                    }
                  }

                  // Find first non-zero lay odds
                  for (const odds of availableToLay) {
                    const price = parseFloat(odds.price || odds.price1 || odds);
                    if (price > 0) {
                      layOdds = price;
                      break;
                    }
                  }
                  console.log(
                    `ðŸ“Š Extracted odds for ${
                      runner.runnerName || runner.selectionName
                    }: back=${backOdds}, lay=${layOdds}`
                  );
                  currentOdds.push({
                    selectionId: runner.selectionId.toString(),
                    selectionName: runner.runnerName || runner.selectionName,
                    backOdds: backOdds,
                    layOdds: layOdds,
                  });
                });
              }
              console.log("ðŸ“Š Current odds:", currentOdds);
              console.log("ðŸŽ² User bets:", marketBets);

              // âœ… Check if any valid odds are available
              const hasValidOdds = currentOdds.some(
                (odds) => odds.backOdds > 0 || odds.layOdds > 0
              );
              if (!hasValidOdds) {
                alert(
                  "Market is suspended or odds are not available. Cannot calculate cashout."
                );
                return;
              }

              // Calculate cashout
              const cashoutResult = (0,
              _utils_cashout_calculator__WEBPACK_IMPORTED_MODULE_3__.calculateCashout)(
                marketBets,
                currentOdds,
                market.gtype
              );
              if (!cashoutResult) {
                alert(
                  "Unable to calculate cashout. Please check if odds are available."
                );
                return;
              }
              console.log("ðŸ’° Cashout result:", cashoutResult);

              // No confirmation needed - directly open bet slip
              // PNL will be shown in the placebet box

              // Find the runner data
              const runner = oddsData.runners.find(
                (r) => r.selectionId.toString() === cashoutResult.selectionId
              );
              if (!runner) {
                alert("Runner not found. Please try again.");
                return;
              }

              // âœ… Calculate PnL and exposure using EXACT SAME logic as PlaceBetBox
              let calculatedPnl = 0;
              let calculatedExposure = 0;

              // âœ… Determine calculation type - EXACT SAME as PlaceBetBox.getCalculationType
              let calculationType = "MATCH_ODDS";
              console.log(`ðŸ” Determining calculation type for cashout:`, {
                gtype: market.gtype,
                oddsType: market.oddsType,
                marketName: market.marketName,
              });

              // Priority 1: Check gtype (most reliable)
              if (market.gtype === "match1") {
                console.log(`âœ… Using BOOKMAKER based on gtype: match1`);
                calculationType = "BOOKMAKER";
              } else if (market.gtype === "match") {
                console.log(`âœ… Using MATCH_ODDS based on gtype: match`);
                calculationType = "MATCH_ODDS";
              } else if (market.gtype === "fancy") {
                console.log(`âœ… Using FANCY based on gtype: fancy`);
                calculationType = "FANCY";
              }
              // Priority 2: Fallback to market name patterns
              else {
                var _market$marketName2;
                const marketName =
                  ((_market$marketName2 = market.marketName) === null ||
                  _market$marketName2 === void 0
                    ? void 0
                    : _market$marketName2.toUpperCase()) || "";
                if (
                  marketName.includes("BOOKMAKER") ||
                  marketName.includes("BM_")
                ) {
                  console.log(
                    `âœ… Using BOOKMAKER based on market name: ${market.marketName}`
                  );
                  calculationType = "BOOKMAKER";
                } else if (
                  marketName.includes("FANCY") ||
                  marketName.includes("SESSION")
                ) {
                  console.log(
                    `âœ… Using FANCY based on market name: ${market.marketName}`
                  );
                  calculationType = "FANCY";
                } else {
                  console.log(
                    `âœ… Using MATCH_ODDS as default for market: ${market.marketName}`
                  );
                  calculationType = "MATCH_ODDS";
                }
              }

              // Calculate using same logic as PlaceBetBox's calculatePnlAndExposureByType
              switch (calculationType) {
                case "BOOKMAKER":
                  // Bookmaker logic: Odds are in percentage format (divide by 100)
                  if (cashoutResult.betType === "back") {
                    // Back bet: profit = (odds / 100) Ã— stake, exposure = -stake
                    calculatedPnl =
                      (cashoutResult.odds / 100) * cashoutResult.stake;
                    calculatedExposure = -1 * cashoutResult.stake;
                  } else {
                    // Lay bet: profit = stake, liability = -(odds / 100) Ã— stake
                    calculatedPnl = cashoutResult.stake;
                    calculatedExposure =
                      -1 * ((cashoutResult.odds / 100) * cashoutResult.stake);
                  }
                  console.log(
                    `ðŸ“Š Bookmaker ${cashoutResult.betType} PnL calculated: pnl=${calculatedPnl}, exposure=${calculatedExposure}`
                  );
                  break;
                case "MATCH_ODDS":
                default:
                  // Match odds logic: Standard decimal odds calculation (exchange style)
                  if (cashoutResult.betType === "back") {
                    // Back bet: profit = (odds - 1) Ã— stake, exposure = -stake
                    calculatedPnl =
                      (cashoutResult.odds - 1) * cashoutResult.stake;
                    calculatedExposure = -1 * cashoutResult.stake;
                  } else {
                    // Lay bet: profit = stake, liability = -(odds - 1) Ã— stake
                    calculatedPnl = cashoutResult.stake;
                    calculatedExposure =
                      -1 * ((cashoutResult.odds - 1) * cashoutResult.stake);
                  }
                  console.log(
                    `ðŸ“Š Match odds ${cashoutResult.betType} PnL calculated: pnl=${calculatedPnl}, exposure=${calculatedExposure}`
                  );
                  break;
              }
              console.log(
                "ðŸ’° Calculated PnL and Exposure (using PlaceBetBox logic):",
                {
                  calculationType,
                  gtype: market.gtype,
                  marketName: market.marketName,
                  betType: cashoutResult.betType,
                  odds: cashoutResult.odds,
                  stake: cashoutResult.stake,
                  pnl: calculatedPnl,
                  exposure: calculatedExposure,
                  finalOutcomeMin: cashoutResult.estimatedLoss,
                  finalOutcomeMax: cashoutResult.estimatedProfit,
                }
              );

              // âœ… Determine betOn and oddsType based on calculationType (matches PlaceBetBox logic)
              let betOn;
              let oddsType;
              if (calculationType === "BOOKMAKER") {
                betOn =
                  _models_IBet__WEBPACK_IMPORTED_MODULE_4__.IBetOn.BOOKMAKER;
                oddsType = "BM";
              } else if (calculationType === "FANCY") {
                betOn = _models_IBet__WEBPACK_IMPORTED_MODULE_4__.IBetOn.FANCY;
                oddsType = "FANCY";
              } else {
                betOn =
                  _models_IBet__WEBPACK_IMPORTED_MODULE_4__.IBetOn.MATCH_ODDS;
                oddsType = "MATCH_ODDS";
              }
              console.log(
                `ðŸŽ¯ Setting betOn=${betOn}, oddsType=${oddsType} for ${calculationType} market`
              );

              // Prepare bet object
              const betData = {
                marketId:
                  ((_market$marketId2 = market.marketId) === null ||
                  _market$marketId2 === void 0
                    ? void 0
                    : _market$marketId2.toString()) || "",
                matchId:
                  typeof matchId === "string" ? parseInt(matchId) : matchId,
                selectionId: parseInt(cashoutResult.selectionId),
                selectionName: cashoutResult.selectionName,
                marketName: market.marketName || "",
                odds: cashoutResult.odds,
                stack: cashoutResult.stake,
                isBack: cashoutResult.betType === "back",
                betOn: betOn,
                // âœ… Set based on calculationType
                gtype:
                  market.gtype ||
                  (calculationType === "BOOKMAKER" ? "match1" : "match"),
                oddsType: oddsType,
                // âœ… Set based on calculationType ('BM' for bookmaker!)
                volume: 0,
                pnl: Math.round(calculatedPnl),
                // âœ… This bet's PnL
                exposure: Math.round(calculatedExposure),
                // âœ… This bet's exposure
                currentMarketOdds: cashoutResult.odds,
                type: _models_IBet__WEBPACK_IMPORTED_MODULE_4__.IBetType.Match,
                suspended: runner.status === "SUSPENDED",
                betLocked: false,
                // Required fields
                eventId: market.sportId
                  ? typeof market.sportId === "string"
                    ? parseInt(market.sportId)
                    : market.sportId
                  : 0,
                ipAddress: "",
                matchName:
                  (currentMatch === null || currentMatch === void 0
                    ? void 0
                    : currentMatch.name) ||
                  market.marketName ||
                  "",
                sportId:
                  currentMatch !== null &&
                  currentMatch !== void 0 &&
                  currentMatch.sportId
                    ? typeof currentMatch.sportId === "string"
                      ? parseInt(currentMatch.sportId)
                      : currentMatch.sportId
                    : undefined,
                // âœ… TOTAL OUTCOME: Show combined PnL (existing position + this cashout bet)
                // This is what the user will end up with after placing this bet
                profitLoss: Math.round(
                  (cashoutResult.estimatedProfit +
                    cashoutResult.estimatedLoss) /
                    2
                ), // Average of min/max outcome
              };
              console.log("ðŸ“ Opening bet slip with:", betData);
              console.log(
                "ðŸ’° â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•"
              );
              console.log("ðŸ’° CASHOUT SUMMARY:");
              console.log(
                "ðŸ’° â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•"
              );
              console.log(
                `   Market: ${market.marketName} (${calculationType})`
              );
              console.log(
                `   Cashout Bet: ${cashoutResult.betType.toUpperCase()} ${
                  cashoutResult.selectionName
                } @ ${cashoutResult.odds}, Stake â‚¹${cashoutResult.stake}`
              );
              console.log("");
              console.log("   ðŸ“Š This Bet's PnL (standalone):");
              console.log(
                `      PnL: â‚¹${calculatedPnl.toFixed(2)} (profit if ${
                  cashoutResult.betType === "back" ? "wins" : "loses"
                })`
              );
              console.log(
                `      Exposure: â‚¹${calculatedExposure.toFixed(2)} (risk)`
              );
              console.log("");
              console.log("   ðŸŽ¯ TOTAL FINAL OUTCOMES (Existing + Cashout):");
              console.log(
                `      Best case: â‚¹${cashoutResult.estimatedProfit} (any team)`
              );
              console.log(
                `      Worst case: â‚¹${cashoutResult.estimatedLoss} (any team)`
              );
              console.log(
                `      Average: â‚¹${Math.round(
                  (cashoutResult.estimatedProfit +
                    cashoutResult.estimatedLoss) /
                    2
                )}`
              );
              console.log(
                `      All positive: ${
                  cashoutResult.estimatedLoss >= 0 ? "YES âœ…" : "NO âŒ"
                }`
              );
              console.log(
                "ðŸ’° â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•"
              );

              // Open the place bet box with pre-filled data
              // âœ… Pass final outcome information as custom properties
              dispatch(
                (0,
                _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_2__.betPopup)(
                  {
                    isOpen: true,
                    betData: {
                      ...betData,
                      // Custom properties for cashout display - TOTAL outcomes
                      isCashout: true,
                      cashoutEstimatedMin: Math.round(
                        cashoutResult.estimatedLoss
                      ),
                      // TOTAL outcome (worst)
                      cashoutEstimatedMax: Math.round(
                        cashoutResult.estimatedProfit
                      ),
                      // TOTAL outcome (best)
                      cashoutIsBalanced: cashoutResult.isBalanced,
                    },
                  }
                )
              );
            } catch (error) {
              console.error("âŒ Error in cashout:", error);
              alert(
                "An error occurred while calculating cashout. Please try again."
              );
            }
          };

          // Calculate button display - just show "Cashout" text always
          const calculateDisplayValue = () => {
            // Orange theme colors (matching accordian-header.tsx)
            const orangeColor = "#f77801ff"; // Primary orange
            const orangeDark = "#d66901"; // Darker orange for hover
            const grayColor = "#9CA3AF"; // Gray-400
            const grayDark = "#6B7280"; // Gray-500

            // Always show "Cashout" text
            // If no bets, show disabled state
            if (!hasBets) {
              return {
                text: "cashout",
                color: grayColor,
                hoverColor: grayDark,
                isDisabled: true,
              };
            }

            // If has bets, show enabled orange button with just "cashout" text
            return {
              text: "cashout",
              color: orangeColor,
              hoverColor: orangeDark,
              isDisabled: false,
            };
          };
          const displayValue = calculateDisplayValue();
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(
            "button",
            {
              onClick: handleCashout,
              disabled: displayValue.isDisabled,
              className: "cashout-button",
              style: {
                padding: "0.25rem 0.55rem",
                fontSize: "0.7rem",
                fontWeight: "600",
                backgroundColor: displayValue.color,
                color: "white",
                border: `1px solid ${displayValue.color}`,
                borderRadius: "4px",
                cursor: displayValue.isDisabled ? "not-allowed" : "pointer",
                marginLeft: "0px",
                transition: "all 0.2s ease",
                opacity: displayValue.isDisabled ? 0.6 : 1,
                textTransform: "none",
                position: "relative",
                zIndex: 10,
                whiteSpace: "nowrap",
                minWidth: "auto",
                height: "20px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "1",
              },
              onMouseEnter: (e) => {
                if (displayValue.isDisabled) return;
                e.currentTarget.style.backgroundColor = displayValue.hoverColor;
                e.currentTarget.style.borderColor = displayValue.hoverColor;
              },
              onMouseLeave: (e) => {
                if (displayValue.isDisabled) return;
                e.currentTarget.style.backgroundColor = displayValue.color;
                e.currentTarget.style.borderColor = displayValue.color;
              },
              title: displayValue.isDisabled
                ? "Place a bet in this market to use cashout"
                : "Click to balance your bets and secure profit/minimize loss",
              children: displayValue.text,
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 362,
              columnNumber: 5,
            },
            undefined
          );
        };
        _s(CashoutButton, "UwSQ8VpJhHN+vviNXEclYznZh/w=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,
          ];
        });
        _c = CashoutButton;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          CashoutButton;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "CashoutButton");

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/pages/odds/components/accordian-header.tsx":
      /*!********************************************************!*\
  !*** ./src/pages/odds/components/accordian-header.tsx ***!
  \********************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @mui/material/Accordion */ "./node_modules/@mui/material/Accordion/Accordion.js"
          );
        /* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! @mui/material/AccordionSummary */ "./node_modules/@mui/material/AccordionSummary/AccordionSummary.js"
          );
        /* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! @mui/material/AccordionDetails */ "./node_modules/@mui/material/AccordionDetails/AccordionDetails.js"
          );
        /* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js"
          );
        /* harmony import */ var _models_IMarket__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../models/IMarket */ "./src/models/IMarket.ts"
          );
        /* harmony import */ var _match_odds_accord__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./match-odds-accord */ "./src/pages/odds/components/match-odds-accord.tsx"
          );
        /* harmony import */ var _components_CashoutButton__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../components/CashoutButton */ "./src/components/CashoutButton.tsx"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/odds/components/accordian-header.tsx";

        const AccordianHeader = ({
          market,
          setRules,
          offplaylimit,
          oddsData,
          runnersName,
          getMarketBook,
          selectionsPrev,
          isMobile,
          children,
          infoType,
          matchId,
        }) => {
          const handleInfoClick = (e) => {
            e.preventDefault();
            if (setRules) {
              setRules({
                open: true,
                // Prefer provided infoType (e.g., Fancy-Market-1) else fallback to default oddsType mapping
                type:
                  infoType ||
                  (market.oddsType ===
                  _models_IMarket__WEBPACK_IMPORTED_MODULE_1__.OddsType.BM
                    ? "Bookmaker"
                    : market.oddsType),
              });
            }
          };

          // Calculate class names for MatchOddsAccord based on mobile and market type

          // changed this condition to the code which i have write it specifics the larger box for every market type if its on mobile
          //   const classforheadingfirst =
          //   isMobile && market.oddsType === OddsType.F ? "box-6" : "box-4";
          // const classforheading =
          //   isMobile && market.oddsType === OddsType.F ? "box-2" : "box-1";

          const classforheadingfirst = isMobile ? "box-6" : "box-4";
          const classforheading = isMobile ? "box-2" : "box-1";
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
            "div",
            {
              style: {
                width: "100%",
                marginBottom: "1px",
              },
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_5__["default"],
                {
                  defaultExpanded: true,
                  sx: {
                    "&.MuiAccordion-root": {
                      overflow: "hidden",
                      margin: 0,
                      background: "transparent",
                      borderRadius: "0px !important",
                      width: "100%",
                      boxShadow: "none",
                      padding: "0px !important",
                      "&:before": {
                        display: "none",
                      },
                      // Remove bottom spacing
                      "&.Mui-expanded": {
                        margin: "0 !important",
                        padding: "0 !important",
                      },
                    },
                    // Remove AccordionDetails padding
                    "& .MuiAccordionDetails-root": {
                      padding: "0 !important",
                    },
                    // Remove AccordionSummary spacing when expanded
                    "& .MuiAccordionSummary-root.Mui-expanded": {
                      minHeight: "42px !important",
                      margin: "0 !important",
                      padding: "0 !important",
                    },
                  },
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_6__[
                        "default"
                      ],
                      {
                        expandIcon: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                          _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__[
                            "default"
                          ],
                          {},
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 99,
                            columnNumber: 23,
                          },
                          undefined
                        ),
                        "aria-controls": "panel1-content",
                        id: "panel1-header",
                        sx: {
                          padding: 0,
                          margin: 0,
                          minHeight: "42px !important",
                          height: "42px",
                          "& .MuiAccordionSummary-content": {
                            margin: "0 !important",
                            padding: "0px !important",
                            height: "100%",
                            width: "100%",
                          },
                          "& .MuiAccordionSummary-content.Mui-expanded": {
                            margin: "0 !important",
                          },
                        },
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                          "div",
                          {
                            style: {
                              display: "flex",
                              width: "100%",
                              height: "100%",
                              position: "relative",
                              background: "transparent",
                            },
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                "div",
                                {
                                  style: {
                                    backgroundColor: "#c10930",
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "0 1rem",
                                    height: "100%",
                                    clipPath:
                                      "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
                                    position: "relative",
                                    justifyContent: "center",
                                    fontSize: "13px",
                                    fontWeight: "600",
                                    whiteSpace: "nowrap",
                                    flexShrink: 0,
                                  },
                                  children: market.marketName,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 128,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                "div",
                                {
                                  style: {
                                    flex: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    paddingRight: "1rem",
                                    height: "100%",
                                    position: "relative",
                                    zIndex: 0,
                                    gap: "1rem",
                                  },
                                  children: [
                                    market.oddsType !==
                                      _models_IMarket__WEBPACK_IMPORTED_MODULE_1__
                                        .OddsType.F &&
                                      matchId &&
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                        "div",
                                        {
                                          style: {
                                            position: "relative",
                                            zIndex: 101,
                                          },
                                          onClick: (e) => e.stopPropagation(),
                                          children: /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                            _components_CashoutButton__WEBPACK_IMPORTED_MODULE_3__[
                                              "default"
                                            ],
                                            {
                                              market: market,
                                              oddsData: oddsData,
                                              matchId: matchId,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 168,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 164,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "svg",
                                      {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                          "path",
                                          {
                                            d: "M19 21L12 16L5 21V5C5 3.9 5.9 3 7 3H17C18.1 3 19 3.9 19 5V21Z",
                                            fill: "none",
                                            stroke: "#f77801ff",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 176,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 175,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 149,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                "div",
                                {
                                  style: {
                                    flex: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    paddingRight: "0.3rem",
                                    height: "100%",
                                    position: "relative",
                                    zIndex: 0,
                                    gap: "1rem",
                                  },
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "span",
                                      {
                                        style: {
                                          fontSize: "10px",
                                        },
                                        children: [
                                          "Min: 100 | Max: ",
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                            "span",
                                            {
                                              children: [
                                                Number(offplaylimit) / 1000,
                                                "k",
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 204,
                                              columnNumber: 33,
                                            },
                                            undefined
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 203,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "a",
                                      {
                                        href: "#Bookmaker-market",
                                        onClick: handleInfoClick,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 206,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 190,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 118,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_8__[
                        "default"
                      ],
                      {
                        sx: {
                          background: "white",
                        },
                        children: children
                          ? children
                          : /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                              _match_odds_accord__WEBPACK_IMPORTED_MODULE_2__[
                                "default"
                              ],
                              {
                                market: market,
                                oddsData: oddsData,
                                isMobile: isMobile,
                                classforheadingfirst: classforheadingfirst,
                                classforheading: classforheading,
                                runnersName: runnersName,
                                getMarketBook: getMarketBook,
                                selectionsPrev: selectionsPrev,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 222,
                                columnNumber: 5,
                              },
                              undefined
                            ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 218,
                        columnNumber: 8,
                      },
                      undefined
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 5,
            },
            undefined
          );
        };
        _c = AccordianHeader;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          AccordianHeader;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "AccordianHeader");

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/pages/odds/components/available-to-back-lay.tsx":
      /*!*************************************************************!*\
  !*** ./src/pages/odds/components/available-to-back-lay.tsx ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AvailableToBackLay: () =>
            /* binding */ AvailableToBackLay,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _models_IBet__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../models/IBet */ "./src/models/IBet.ts"
          );
        /* harmony import */ var _models_IMarket__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../models/IMarket */ "./src/models/IMarket.ts"
          );
        /* harmony import */ var _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../redux/actions/bet/betSlice */ "./src/redux/actions/bet/betSlice.ts"
          );
        /* harmony import */ var _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../redux/actions/sports/sportSlice */ "./src/redux/actions/sports/sportSlice.ts"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../services/auth.service */ "./src/services/auth.service.ts"
          );
        /* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../utils/helper */ "./src/utils/helper.ts"
          );
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
          );
        /* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../../models/User */ "./src/models/User.ts"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/odds/components/available-to-back-lay.tsx",
          _s = __webpack_require__.$Refresh$.signature();
        // import React from 'react'
        // import { IBetOn, IBetType } from '../../../models/IBet'
        // import IRunner from '../../../models/IRunner'
        // import IMarket, { OddsType } from '../../../models/IMarket'
        // import { betPopup } from '../../../redux/actions/bet/betSlice'
        // import { selectCurrentMatch } from '../../../redux/actions/sports/sportSlice'
        // import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
        // import authService from '../../../services/auth.service'
        // import { nFormatter } from '../../../utils/helper'
        // import { selectUserData } from '../../../redux/actions/login/loginSlice'
        // import { RoleType } from '../../../models/User'
        // import { isMobile } from 'react-device-detect'

        // type Props = {
        //   selections: any
        //   selectionsPrev: any
        //   runner: IRunner
        //   market: IMarket
        // }
        // export const AvailableToBackLay = React.memo(({ selections, market, runner }: Props) => {
        //   const dispatch = useAppDispatch()
        //   const getCurrentMatch = useAppSelector(selectCurrentMatch)
        //   const userState = useAppSelector(selectUserData)

        //   // âœ… DEBUG: Log data received for bookmaker markets
        //   React.useEffect(() => {
        //     if (market.oddsType === OddsType.BM) {
        //       console.log(`ðŸŽ¯ AvailableToBackLay received data for bookmaker ${market.marketName}:`, {
        //         marketId: market.marketId,
        //         marketName: market.marketName,
        //         oddsType: market.oddsType,
        //         gtype: market.gtype,
        //         runnerName: runner.runnerName,
        //         runnerSelectionId: runner.selectionId,
        //         selections: selections,
        //         availableToBack: selections?.availableToBack,
        //         availableToLay: selections?.availableToLay,
        //         backCount: selections?.availableToBack?.length || 0,
        //         layCount: selections?.availableToLay?.length || 0,
        //         isBookmakerDetected: market.oddsType === OddsType.BM,
        //         OddsTypeBM: OddsType.BM
        //       })

        //       // âœ… ADDITIONAL DEBUG: Check if data structure is as expected
        //       if (selections?.availableToBack?.length === 0) {
        //         console.log(`âŒ ISSUE: Back odds array is empty for bookmaker market ${market.marketName}`)
        //       }
        //       if (selections?.availableToLay?.length === 0) {
        //         console.log(`âŒ ISSUE: Lay odds array is empty for bookmaker market ${market.marketName}`)
        //       }
        //       if (!selections) {
        //         console.log(`âŒ CRITICAL: selections object is null/undefined for bookmaker market ${market.marketName}`)
        //       }
        //     }
        //   }, [selections, market, runner])

        //   const onBet = (isBack = false, back: { price: number; size: number; price1?: string }) => {
        //     const ipAddress = authService.getIpAddress()
        //     if (market.oddsType == OddsType.BM && back.size == 0) return

        //     // For bookmaker markets, use price1 if available, otherwise use price
        //     let finalOdds = back.price;
        //     if (market.oddsType === OddsType.BM && back.price1) {
        //       finalOdds = parseFloat(back.price1);
        //     }

        //     // Determine betOn based on market type
        //     let betOn = IBetOn.MATCH_ODDS;
        //     if (market.oddsType === OddsType.BM || market.marketName?.toLowerCase().includes('bookmaker')) {
        //       betOn = 'BOOKMAKER' as any; // Set to BOOKMAKER for bookmaker markets
        //       console.log(`ðŸŽ¯ Set betOn to 'BOOKMAKER' for market: ${market.marketName}`)
        //     }

        //     if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
        //       // âœ… ENHANCED: Improved gtype determination for better PnL calculation
        //       let gtype = market.gtype

        //       // If gtype is not set, determine it more robustly
        //       if (!gtype) {
        //         if (market.oddsType === OddsType.BM) {
        //           gtype = 'match1'  // Bookmaker
        //           console.log(`ðŸŽ¯ Set gtype to 'match1' for bookmaker market based on oddsType: ${market.oddsType}`)
        //         } else if (market.marketName?.toUpperCase().includes('FANCY') || market.marketName?.toUpperCase().includes('SESSION')) {
        //           gtype = 'fancy'
        //           console.log(`ðŸŽ¯ Set gtype to 'fancy' based on market name: ${market.marketName}`)
        //         } else {
        //           gtype = 'match'  // Default to match odds
        //           console.log(`ðŸŽ¯ Set gtype to 'match' as default for market: ${market.marketName}`)
        //         }
        //       }

        //       console.log(`ðŸŽ¯ Bet popup data for ${market.marketName}:`, {
        //         marketId: market.marketId,
        //         oddsType: market.oddsType,
        //         gtype: gtype,
        //         betOn: betOn,
        //         odds: finalOdds,
        //         isBack,
        //         selectionId: runner.selectionId,
        //         selectionName: runner.runnerName
        //       })

        //       dispatch(
        //         betPopup({
        //           isOpen: true,
        //           betData: {
        //             isBack,
        //             odds: parseFloat(finalOdds.toFixed(4)),
        //             volume: back.size,
        //             marketId: market.marketId,
        //             marketName: market.marketName,
        //             matchId: market.matchId,
        //             selectionName: runner.runnerName,
        //             selectionId: runner.selectionId,
        //             pnl: 0,
        //             stack: 0,
        //             currentMarketOdds: finalOdds,
        //             eventId: market.sportId,
        //             exposure: -0,
        //             ipAddress: ipAddress,
        //             type: IBetType.Match,
        //             matchName: getCurrentMatch.name,
        //             betOn: betOn,
        //             oddsType: market.oddsType,
        //             gtype: gtype, // âœ… Use the improved gtype determination
        //           },
        //         }),
        //       )
        //     }
        //   }

        //   const availableToBack = () => {
        //     // For bookmaker markets, check if we should show only single values
        //     const isBookmaker = market.oddsType === OddsType.BM
        //     const hasOnlySingleValues = isBookmaker && selections?.availableToBack?.length === 1

        //     // âœ… DEBUG: Log availableToBack processing for bookmaker
        //     if (isBookmaker) {
        //       console.log(`ðŸ“Š Processing availableToBack for ${market.marketName}:`, {
        //         isBookmaker,
        //         hasOnlySingleValues,
        //         availableToBackLength: selections?.availableToBack?.length,
        //         availableToBack: selections?.availableToBack,
        //         isMobile: isMobile
        //       })
        //     }

        //     if (!selections?.availableToBack || selections.availableToBack.length === 0) {
        //       console.log(`âš ï¸ No back odds available for ${market.marketName}`)
        //       return null
        //     }

        //     return selections?.availableToBack?.map((back: any, index: number) => {
        //       const i = 2 - index
        //       const cls = index === 2 ? 'back' : `back${i}`
        //       const blinkCls = back.changed ? 'blink market-box-glow' : ''

        //       // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
        //       if (isMobile && market.oddsType == OddsType.F && index != 2) return

        //       // âœ… FIX: For bookmaker with single values, show the FIRST available box (index 0) instead of index 2
        //       if (isBookmaker && hasOnlySingleValues && index !== 0) {
        //         console.log(`ðŸš« Skipping back box ${index} for bookmaker (single value mode, showing index 0)`)
        //         return null
        //       }

        //       const classforbox =
        //         (!isMobile || market.oddsType == OddsType.BM || market.oddsType == OddsType.B)
        //           ? 'box-1'
        //           : 'box-2'

        //       // âœ… DEBUG: Log each back box being rendered
        //       if (isBookmaker) {
        //         console.log(`âœ… Rendering back box ${index} for ${runner.runnerName}:`, {
        //           index,
        //           cls,
        //           price: back.price,
        //           price1: back.price1,
        //           size: back.size,
        //           classforbox
        //         })
        //       }

        //       return (
        //         <div
        //           onClick={() => onBet(true, back)}
        //           key={index}
        //           className={`${classforbox}  text-center ${cls} ${blinkCls}`}
        //         >
        //           <span className='odd d-block'>
        //             {market.oddsType == OddsType.BM
        //               ? back.price1
        //                 ? back.price1
        //                 : '-'
        //               : back.price
        //               ? back.price
        //               : '-'}
        //           </span>
        //           <span className='d-block'>{back.size ? nFormatter(back.size, 1) : '-'}</span>
        //         </div>
        //       )
        //     })
        //   }

        //   const availableToLay = () => {
        //     // For bookmaker markets, check if we should show only single values
        //     const isBookmaker = market.oddsType === OddsType.BM
        //     const hasOnlySingleValues = isBookmaker && selections?.availableToLay?.length === 1

        //     // âœ… DEBUG: Log availableToLay processing for bookmaker
        //     if (isBookmaker) {
        //       console.log(`ðŸ“Š Processing availableToLay for ${market.marketName}:`, {
        //         isBookmaker,
        //         hasOnlySingleValues,
        //         availableToLayLength: selections?.availableToLay?.length,
        //         availableToLay: selections?.availableToLay
        //       })
        //     }

        //     if (!selections?.availableToLay || selections.availableToLay.length === 0) {
        //       console.log(`âš ï¸ No lay odds available for ${market.marketName}`)
        //       return null
        //     }

        //     return selections?.availableToLay?.map((lay: any, index: number) => {
        //       const i = index
        //       const cls = index === 0 ? 'lay' : `lay${i}`
        //       const blinkCls = lay.changed ? 'blink market-box-glow' : ''

        //       // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
        //       if (isMobile && market.oddsType == OddsType.F && index != 0) return

        //       // For bookmaker with single values, show only the main lay box (index 0)
        //       if (isBookmaker && hasOnlySingleValues && index !== 0) {
        //         console.log(`ðŸš« Skipping lay box ${index} for bookmaker (single value mode)`)
        //         return null
        //       }

        //       const classforbox =
        //         (!isMobile || market.oddsType == OddsType.BM || market.oddsType == OddsType.B)
        //           ? 'box-1'
        //           : 'box-2'

        //       // âœ… DEBUG: Log each lay box being rendered
        //       if (isBookmaker) {
        //         console.log(`âœ… Rendering lay box ${index} for ${runner.runnerName}:`, {
        //           index,
        //           cls,
        //           price: lay.price,
        //           price1: lay.price1,
        //           size: lay.size,
        //           classforbox
        //         })
        //       }

        //       return (
        //         <div
        //           onClick={() => onBet(false, lay)}
        //           key={index}
        //           className={`${classforbox}   text-center ${cls} ${blinkCls}`}
        //         >
        //           <span className='odd d-block'>
        //             {market.oddsType == OddsType.BM
        //               ? lay.price1
        //                 ? lay.price1
        //                 : '-'
        //               : lay.price
        //               ? lay.price
        //               : '-'}
        //           </span>
        //           <span className='d-block'>{lay.size ? nFormatter(lay.size, 1) : '-'}</span>
        //         </div>
        //       )
        //     })
        //   }

        //   return (
        //     <>
        //       {availableToBack()}
        //       {availableToLay()}
        //     </>
        //   )
        // })

        // import React from "react";
        // import { IBetOn, IBetType } from "../../../models/IBet";
        // import IRunner from "../../../models/IRunner";
        // import IMarket, { OddsType } from "../../../models/IMarket";
        // import { betPopup } from "../../../redux/actions/bet/betSlice";
        // import { selectCurrentMatch } from "../../../redux/actions/sports/sportSlice";
        // import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
        // import authService from "../../../services/auth.service";
        // import { nFormatter } from "../../../utils/helper";
        // import { selectUserData } from "../../../redux/actions/login/loginSlice";
        // import { RoleType } from "../../../models/User";
        // import { isMobile } from "react-device-detect";

        // type Props = {
        //   selections: any;
        //   selectionsPrev: any;
        //   runner: IRunner;
        //   market: IMarket;
        // };

        // export const AvailableToBackLay = React.memo(
        //   ({ selections, market, runner }: Props) => {
        //     const dispatch = useAppDispatch();
        //     const getCurrentMatch = useAppSelector(selectCurrentMatch);
        //     const userState = useAppSelector(selectUserData);
        //     const isBookmaker = market.oddsType === OddsType.BM;

        //     // âœ… DEBUG: Log data received for bookmaker markets
        //     React.useEffect(() => {
        //       if (isBookmaker) {
        //         console.log(
        //           `ðŸŽ¯ AvailableToBackLay received data for bookmaker ${market.marketName}:`,
        //           {
        //             marketId: market.marketId,
        //             marketName: market.marketName,
        //             oddsType: market.oddsType,
        //             gtype: market.gtype,
        //             runnerName: runner.runnerName,
        //             runnerSelectionId: runner.selectionId,
        //             selections: selections,
        //             availableToBack: selections?.availableToBack,
        //             availableToLay: selections?.availableToLay,
        //             backCount: selections?.availableToBack?.length || 0,
        //             layCount: selections?.availableToLay?.length || 0,
        //             isBookmakerDetected: isBookmaker,
        //             OddsTypeBM: OddsType.BM,
        //           }
        //         );

        //         // âœ… ADDITIONAL DEBUG: Check if data structure is as expected
        //         if (selections?.availableToBack?.length === 0) {
        //           console.log(
        //             `âŒ ISSUE: Back odds array is empty for bookmaker market ${market.marketName}`
        //           );
        //         }
        //         if (selections?.availableToLay?.length === 0) {
        //           console.log(
        //             `âŒ ISSUE: Lay odds array is empty for bookmaker market ${market.marketName}`
        //           );
        //         }
        //         if (!selections) {
        //           console.log(
        //             `âŒ CRITICAL: selections object is null/undefined for bookmaker market ${market.marketName}`
        //           );
        //         }
        //       }
        //     }, [selections, market, runner, isBookmaker]);

        //     const onBet = (
        //       isBack = false,
        //       back: { price: number; size: number; price1?: string }
        //     ) => {
        //       const ipAddress = authService.getIpAddress();
        //       if (isBookmaker && back.size == 0) return;

        //       // For bookmaker markets, use price1 if available, otherwise use price
        //       let finalOdds = back.price;
        //       if (isBookmaker && back.price1) {
        //         finalOdds = parseFloat(back.price1);
        //       }

        //       // Determine betOn based on market type
        //       let betOn = IBetOn.MATCH_ODDS;
        //       if (
        //         isBookmaker ||
        //         market.marketName?.toLowerCase().includes("bookmaker")
        //       ) {
        //         betOn = "BOOKMAKER" as any;
        //         console.log(
        //           `ðŸŽ¯ Set betOn to 'BOOKMAKER' for market: ${market.marketName}`
        //         );
        //       }

        //       if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
        //         // âœ… ENHANCED: Improved gtype determination for better PnL calculation
        //         let gtype = market.gtype;

        //         // If gtype is not set, determine it more robustly
        //         if (!gtype) {
        //           if (isBookmaker) {
        //             gtype = "match1"; // Bookmaker
        //             console.log(
        //               `ðŸŽ¯ Set gtype to 'match1' for bookmaker market based on oddsType: ${market.oddsType}`
        //             );
        //           } else if (
        //             market.marketName?.toUpperCase().includes("FANCY") ||
        //             market.marketName?.toUpperCase().includes("SESSION")
        //           ) {
        //             gtype = "fancy";
        //             console.log(
        //               `ðŸŽ¯ Set gtype to 'fancy' based on market name: ${market.marketName}`
        //             );
        //           } else {
        //             gtype = "match"; // Default to match odds
        //             console.log(
        //               `ðŸŽ¯ Set gtype to 'match' as default for market: ${market.marketName}`
        //             );
        //           }
        //         }

        //         console.log(`ðŸŽ¯ Bet popup data for ${market.marketName}:`, {
        //           marketId: market.marketId,
        //           oddsType: market.oddsType,
        //           gtype: gtype,
        //           betOn: betOn,
        //           odds: finalOdds,
        //           isBack,
        //           selectionId: runner.selectionId,
        //           selectionName: runner.runnerName,
        //         });

        //         dispatch(
        //           betPopup({
        //             isOpen: true,
        //             betData: {
        //               isBack,
        //               odds: parseFloat(finalOdds.toFixed(4)),
        //               volume: back.size,
        //               marketId: market.marketId,
        //               marketName: market.marketName,
        //               matchId: market.matchId,
        //               selectionName: runner.runnerName,
        //               selectionId: runner.selectionId,
        //               pnl: 0,
        //               stack: 0,
        //               currentMarketOdds: finalOdds,
        //               eventId: market.sportId,
        //               exposure: -0,
        //               ipAddress: ipAddress,
        //               type: IBetType.Match,
        //               matchName: getCurrentMatch.name,
        //               betOn: betOn,
        //               oddsType: market.oddsType,
        //               gtype: gtype,
        //             },
        //           })
        //         );
        //       }
        //     };

        //     // âœ… CRICKET FIX: For cricket bookmaker, use match odds layout (sportId 4)
        //     const isCricketBookmaker = isBookmaker && (market.sportId === 4 || getCurrentMatch?.sportId === 4);

        //     // Common box style with proper TypeScript typing
        //     const getBoxStyle = (isBack: boolean): React.CSSProperties => ({
        //       display: "flex",
        //       flexDirection: "column" as "column", // Type assertion
        //       justifyContent: "endf",
        //       alignItems: "center",
        //       minHeight: "40px",
        //       padding: "4px",
        //       maxWidth: "33%",
        //       boxSizing: "border-box",
        //       backgroundColor: isBack ? "#72bbef" : "#faa9ba",
        //       width: isCricketBookmaker ? "auto" : (isBookmaker ? "100%" : "auto"), // âœ… CRICKET: Use auto width like match odds
        //       flex: isCricketBookmaker ? 1 : (isBookmaker ? undefined : 1), // âœ… CRICKET: Use flex like match odds
        //     });

        //     // Column container style with proper TypeScript typing
        //     const columnStyleBack: React.CSSProperties = {
        //       flex: 1,
        //       display: "flex",
        //       gap: "1px",
        //       flexDirection: (isBookmaker && !isCricketBookmaker)
        //         ? "column"
        //         : ("row-reverse" as "column" | "row-reverse"), // âœ… CRICKET: Use row-reverse like match odds
        //       flexWrap: (isBookmaker && !isCricketBookmaker) ? "nowrap" : ("wrap" as "nowrap" | "wrap"), // âœ… CRICKET: Use wrap like match odds
        //       alignItems: (isBookmaker && !isCricketBookmaker) ? "flex-end" : undefined, // âœ… CRICKET: No special alignment
        //     };
        //     const columnStyleLay: React.CSSProperties = {
        //       flex: 1,
        //       display: "flex",
        //       gap: "1px",
        //       // padding:"0px",
        //       flexDirection: (isBookmaker && !isCricketBookmaker) ? "column" : ("row" as "column" | "row"), // âœ… CRICKET: Use row like match odds
        //       flexWrap: (isBookmaker && !isCricketBookmaker) ? "nowrap" : ("wrap" as "nowrap" | "wrap"), // âœ… CRICKET: Use wrap like match odds
        //     };
        //     const availableToBack = () => {
        //       const hasOnlySingleValues =
        //         isBookmaker && selections?.availableToBack?.length === 1;

        //       if (
        //         !selections?.availableToBack ||
        //         selections.availableToBack.length === 0
        //       ) {
        //         console.log(`âš ï¸ No back odds available for ${market.marketName}`);
        //         return null;
        //       }

        //       return selections?.availableToBack?.map((back: any, index: number) => {
        //         const i = 2 - index;
        //         const cls = index === 2 ? "back" : `back${i}`;
        //         const blinkCls = back.changed ? "blink market-box-glow" : "";

        //         // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
        //         if (isMobile && market.oddsType == OddsType.F && index != 2) return;

        //         // âœ… CRICKET FIX: For cricket bookmaker, show all boxes like match odds
        //         // For non-cricket bookmaker with single values, show only the first box
        //         if (isBookmaker && !isCricketBookmaker && hasOnlySingleValues && index !== 0) return;

        //         return (
        //           <div
        //             onClick={() => onBet(true, back)}
        //             key={index}
        //             style={getBoxStyle(true)}
        //             className={`text-center back ${cls} ${blinkCls}`}
        //           >
        //             <span className="odd d-block">
        //               {isBookmaker ? back.price1 || "-" : back.price || "-"}
        //             </span>
        //             <span className="d-block">
        //               {back.size ? nFormatter(back.size, 1) : "-"}
        //             </span>
        //           </div>
        //         );
        //       });
        //     };

        //     const availableToLay = () => {
        //       const hasOnlySingleValues =
        //         isBookmaker && selections?.availableToLay?.length === 1;

        //       if (
        //         !selections?.availableToLay ||
        //         selections.availableToLay.length === 0
        //       ) {
        //         console.log(`âš ï¸ No lay odds available for ${market.marketName}`);
        //         return null;
        //       }

        //       return selections?.availableToLay?.map((lay: any, index: number) => {
        //         const i = index;
        //         const cls = index === 0 ? "lay" : `lay${i}`;
        //         const blinkCls = lay.changed ? "blink market-box-glow" : "";

        //         // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
        //         if (isMobile && market.oddsType == OddsType.F && index != 0) return;

        //         // âœ… CRICKET FIX: For cricket bookmaker, show all boxes like match odds
        //         // For non-cricket bookmaker with single values, show only the first box
        //         if (isBookmaker && !isCricketBookmaker && hasOnlySingleValues && index !== 0) return;

        //         return (
        //           <div
        //             onClick={() => onBet(false, lay)}
        //             key={index}
        //             style={getBoxStyle(false)}
        //             className={`text-center ${cls} ${blinkCls}`}
        //           >
        //             <span className="odd d-block">
        //               {isBookmaker ? lay.price1 || "-" : lay.price || "-"}
        //             </span>
        //             <span className="d-block">
        //               {lay.size ? nFormatter(lay.size, 1) : "-"}
        //             </span>
        //           </div>
        //         );
        //       });
        //     };

        //     return (
        //       <div
        //         style={
        //           {
        //             display: "flex",
        //             width: "100%",
        //             // background: "green",
        //             overflow: "hidden",
        //             boxSizing: "border-box",
        //             padding: "0px",
        //             gap: "1px",
        //           } as React.CSSProperties
        //         }
        //       >
        //         {/* Back Boxes Column */}
        //         <div style={columnStyleBack}>{availableToBack()}</div>

        //         {/* Lay Boxes Column */}
        //         <div style={columnStyleLay}>{availableToLay()}</div>
        //       </div>
        //     );
        //   }
        // );

        // import React from 'react'
        // import { IBetOn, IBetType } from '../../../models/IBet'
        // import IRunner from '../../../models/IRunner'
        // import IMarket, { OddsType } from '../../../models/IMarket'
        // import { betPopup } from '../../../redux/actions/bet/betSlice'
        // import { selectCurrentMatch } from '../../../redux/actions/sports/sportSlice'
        // import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
        // import authService from '../../../services/auth.service'
        // import { nFormatter } from '../../../utils/helper'
        // import { selectUserData } from '../../../redux/actions/login/loginSlice'
        // import { RoleType } from '../../../models/User'
        // import { isMobile } from 'react-device-detect'

        // type Props = {
        //   selections: any
        //   selectionsPrev: any
        //   runner: IRunner
        //   market: IMarket
        // }
        // export const AvailableToBackLay = React.memo(({ selections, market, runner }: Props) => {
        //   const dispatch = useAppDispatch()
        //   const getCurrentMatch = useAppSelector(selectCurrentMatch)
        //   const userState = useAppSelector(selectUserData)

        //   // âœ… DEBUG: Log data received for bookmaker markets
        //   React.useEffect(() => {
        //     if (market.oddsType === OddsType.BM) {
        //       console.log(`ðŸŽ¯ AvailableToBackLay received data for bookmaker ${market.marketName}:`, {
        //         marketId: market.marketId,
        //         marketName: market.marketName,
        //         oddsType: market.oddsType,
        //         gtype: market.gtype,
        //         runnerName: runner.runnerName,
        //         runnerSelectionId: runner.selectionId,
        //         selections: selections,
        //         availableToBack: selections?.availableToBack,
        //         availableToLay: selections?.availableToLay,
        //         backCount: selections?.availableToBack?.length || 0,
        //         layCount: selections?.availableToLay?.length || 0,
        //         isBookmakerDetected: market.oddsType === OddsType.BM,
        //         OddsTypeBM: OddsType.BM
        //       })

        //       // âœ… ADDITIONAL DEBUG: Check if data structure is as expected
        //       if (selections?.availableToBack?.length === 0) {
        //         console.log(`âŒ ISSUE: Back odds array is empty for bookmaker market ${market.marketName}`)
        //       }
        //       if (selections?.availableToLay?.length === 0) {
        //         console.log(`âŒ ISSUE: Lay odds array is empty for bookmaker market ${market.marketName}`)
        //       }
        //       if (!selections) {
        //         console.log(`âŒ CRITICAL: selections object is null/undefined for bookmaker market ${market.marketName}`)
        //       }
        //     }
        //   }, [selections, market, runner])

        //   const onBet = (isBack = false, back: { price: number; size: number; price1?: string }) => {
        //     const ipAddress = authService.getIpAddress()
        //     if (market.oddsType == OddsType.BM && back.size == 0) return

        //     // For bookmaker markets, use price1 if available, otherwise use price
        //     let finalOdds = back.price;
        //     if (market.oddsType === OddsType.BM && back.price1) {
        //       finalOdds = parseFloat(back.price1);
        //     }

        //     // Determine betOn based on market type
        //     let betOn = IBetOn.MATCH_ODDS;
        //     if (market.oddsType === OddsType.BM || market.marketName?.toLowerCase().includes('bookmaker')) {
        //       betOn = 'BOOKMAKER' as any; // Set to BOOKMAKER for bookmaker markets
        //       console.log(`ðŸŽ¯ Set betOn to 'BOOKMAKER' for market: ${market.marketName}`)
        //     }

        //     if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
        //       // âœ… ENHANCED: Improved gtype determination for better PnL calculation
        //       let gtype = market.gtype

        //       // If gtype is not set, determine it more robustly
        //       if (!gtype) {
        //         if (market.oddsType === OddsType.BM) {
        //           gtype = 'match1'  // Bookmaker
        //           console.log(`ðŸŽ¯ Set gtype to 'match1' for bookmaker market based on oddsType: ${market.oddsType}`)
        //         } else if (market.marketName?.toUpperCase().includes('FANCY') || market.marketName?.toUpperCase().includes('SESSION')) {
        //           gtype = 'fancy'
        //           console.log(`ðŸŽ¯ Set gtype to 'fancy' based on market name: ${market.marketName}`)
        //         } else {
        //           gtype = 'match'  // Default to match odds
        //           console.log(`ðŸŽ¯ Set gtype to 'match' as default for market: ${market.marketName}`)
        //         }
        //       }

        //       console.log(`ðŸŽ¯ Bet popup data for ${market.marketName}:`, {
        //         marketId: market.marketId,
        //         oddsType: market.oddsType,
        //         gtype: gtype,
        //         betOn: betOn,
        //         odds: finalOdds,
        //         isBack,
        //         selectionId: runner.selectionId,
        //         selectionName: runner.runnerName
        //       })

        //       dispatch(
        //         betPopup({
        //           isOpen: true,
        //           betData: {
        //             isBack,
        //             odds: parseFloat(finalOdds.toFixed(4)),
        //             volume: back.size,
        //             marketId: market.marketId,
        //             marketName: market.marketName,
        //             matchId: market.matchId,
        //             selectionName: runner.runnerName,
        //             selectionId: runner.selectionId,
        //             pnl: 0,
        //             stack: 0,
        //             currentMarketOdds: finalOdds,
        //             eventId: market.sportId,
        //             exposure: -0,
        //             ipAddress: ipAddress,
        //             type: IBetType.Match,
        //             matchName: getCurrentMatch.name,
        //             betOn: betOn,
        //             oddsType: market.oddsType,
        //             gtype: gtype, // âœ… Use the improved gtype determination
        //           },
        //         }),
        //       )
        //     }
        //   }

        //   const availableToBack = () => {
        //     // For bookmaker markets, check if we should show only single values
        //     const isBookmaker = market.oddsType === OddsType.BM
        //     const hasOnlySingleValues = isBookmaker && selections?.availableToBack?.length === 1

        //     // âœ… DEBUG: Log availableToBack processing for bookmaker
        //     if (isBookmaker) {
        //       console.log(`ðŸ“Š Processing availableToBack for ${market.marketName}:`, {
        //         isBookmaker,
        //         hasOnlySingleValues,
        //         availableToBackLength: selections?.availableToBack?.length,
        //         availableToBack: selections?.availableToBack,
        //         isMobile: isMobile
        //       })
        //     }

        //     if (!selections?.availableToBack || selections.availableToBack.length === 0) {
        //       console.log(`âš ï¸ No back odds available for ${market.marketName}`)
        //       return null
        //     }

        //     return selections?.availableToBack?.map((back: any, index: number) => {
        //       const i = 2 - index
        //       const cls = index === 2 ? 'back' : `back${i}`
        //       const blinkCls = back.changed ? 'blink market-box-glow' : ''

        //       // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
        //       if (isMobile && market.oddsType == OddsType.F && index != 2) return

        //       // âœ… FIX: For bookmaker with single values, show the FIRST available box (index 0) instead of index 2
        //       if (isBookmaker && hasOnlySingleValues && index !== 0) {
        //         console.log(`ðŸš« Skipping back box ${index} for bookmaker (single value mode, showing index 0)`)
        //         return null
        //       }

        //       const classforbox =
        //         (!isMobile || market.oddsType == OddsType.BM || market.oddsType == OddsType.B)
        //           ? 'box-1'
        //           : 'box-2'

        //       // âœ… DEBUG: Log each back box being rendered
        //       if (isBookmaker) {
        //         console.log(`âœ… Rendering back box ${index} for ${runner.runnerName}:`, {
        //           index,
        //           cls,
        //           price: back.price,
        //           price1: back.price1,
        //           size: back.size,
        //           classforbox
        //         })
        //       }

        //       return (
        //         <div
        //           onClick={() => onBet(true, back)}
        //           key={index}
        //           className={`${classforbox}  text-center ${cls} ${blinkCls}`}
        //         >
        //           <span className='odd d-block'>
        //             {market.oddsType == OddsType.BM
        //               ? back.price1
        //                 ? back.price1
        //                 : '-'
        //               : back.price
        //               ? back.price
        //               : '-'}
        //           </span>
        //           <span className='d-block'>{back.size ? nFormatter(back.size, 1) : '-'}</span>
        //         </div>
        //       )
        //     })
        //   }

        //   const availableToLay = () => {
        //     // For bookmaker markets, check if we should show only single values
        //     const isBookmaker = market.oddsType === OddsType.BM
        //     const hasOnlySingleValues = isBookmaker && selections?.availableToLay?.length === 1

        //     // âœ… DEBUG: Log availableToLay processing for bookmaker
        //     if (isBookmaker) {
        //       console.log(`ðŸ“Š Processing availableToLay for ${market.marketName}:`, {
        //         isBookmaker,
        //         hasOnlySingleValues,
        //         availableToLayLength: selections?.availableToLay?.length,
        //         availableToLay: selections?.availableToLay
        //       })
        //     }

        //     if (!selections?.availableToLay || selections.availableToLay.length === 0) {
        //       console.log(`âš ï¸ No lay odds available for ${market.marketName}`)
        //       return null
        //     }

        //     return selections?.availableToLay?.map((lay: any, index: number) => {
        //       const i = index
        //       const cls = index === 0 ? 'lay' : `lay${i}`
        //       const blinkCls = lay.changed ? 'blink market-box-glow' : ''

        //       // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
        //       if (isMobile && market.oddsType == OddsType.F && index != 0) return

        //       // For bookmaker with single values, show only the main lay box (index 0)
        //       if (isBookmaker && hasOnlySingleValues && index !== 0) {
        //         console.log(`ðŸš« Skipping lay box ${index} for bookmaker (single value mode)`)
        //         return null
        //       }

        //       const classforbox =
        //         (!isMobile || market.oddsType == OddsType.BM || market.oddsType == OddsType.B)
        //           ? 'box-1'
        //           : 'box-2'

        //       // âœ… DEBUG: Log each lay box being rendered
        //       if (isBookmaker) {
        //         console.log(`âœ… Rendering lay box ${index} for ${runner.runnerName}:`, {
        //           index,
        //           cls,
        //           price: lay.price,
        //           price1: lay.price1,
        //           size: lay.size,
        //           classforbox
        //         })
        //       }

        //       return (
        //         <div
        //           onClick={() => onBet(false, lay)}
        //           key={index}
        //           className={`${classforbox}   text-center ${cls} ${blinkCls}`}
        //         >
        //           <span className='odd d-block'>
        //             {market.oddsType == OddsType.BM
        //               ? lay.price1
        //                 ? lay.price1
        //                 : '-'
        //               : lay.price
        //               ? lay.price
        //               : '-'}
        //           </span>
        //           <span className='d-block'>{lay.size ? nFormatter(lay.size, 1) : '-'}</span>
        //         </div>
        //       )
        //     })
        //   }

        //   return (
        //     <>
        //       {availableToBack()}
        //       {availableToLay()}
        //     </>
        //   )
        // })

        // import React from "react";
        // import { IBetOn, IBetType } from "../../../models/IBet";
        // import IRunner from "../../../models/IRunner";
        // import IMarket, { OddsType } from "../../../models/IMarket";
        // import { betPopup } from "../../../redux/actions/bet/betSlice";
        // import { selectCurrentMatch } from "../../../redux/actions/sports/sportSlice";
        // import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
        // import authService from "../../../services/auth.service";
        // import { nFormatter } from "../../../utils/helper";
        // import { selectUserData } from "../../../redux/actions/login/loginSlice";
        // import { RoleType } from "../../../models/User";
        // import { isMobile } from "react-device-detect";

        // type Props = {
        //   selections: any;
        //   selectionsPrev: any;
        //   runner: IRunner;
        //   market: IMarket;
        // };

        // export const AvailableToBackLay = React.memo(
        //   ({ selections, market, runner }: Props) => {
        //     const dispatch = useAppDispatch();
        //     const getCurrentMatch = useAppSelector(selectCurrentMatch);
        //     const userState = useAppSelector(selectUserData);
        //     const isBookmaker = market.oddsType === OddsType.BM;

        //     // âœ… DEBUG: Log data received for bookmaker markets
        //     React.useEffect(() => {
        //       if (isBookmaker) {
        //         console.log(
        //           `ðŸŽ¯ AvailableToBackLay received data for bookmaker ${market.marketName}:`,
        //           {
        //             marketId: market.marketId,
        //             marketName: market.marketName,
        //             oddsType: market.oddsType,
        //             gtype: market.gtype,
        //             runnerName: runner.runnerName,
        //             runnerSelectionId: runner.selectionId,
        //             selections: selections,
        //             availableToBack: selections?.availableToBack,
        //             availableToLay: selections?.availableToLay,
        //             backCount: selections?.availableToBack?.length || 0,
        //             layCount: selections?.availableToLay?.length || 0,
        //             isBookmakerDetected: isBookmaker,
        //             OddsTypeBM: OddsType.BM,
        //           }
        //         );

        //         // âœ… ADDITIONAL DEBUG: Check if data structure is as expected
        //         if (selections?.availableToBack?.length === 0) {
        //           console.log(
        //             `âŒ ISSUE: Back odds array is empty for bookmaker market ${market.marketName}`
        //           );
        //         }
        //         if (selections?.availableToLay?.length === 0) {
        //           console.log(
        //             `âŒ ISSUE: Lay odds array is empty for bookmaker market ${market.marketName}`
        //           );
        //         }
        //         if (!selections) {
        //           console.log(
        //             `âŒ CRITICAL: selections object is null/undefined for bookmaker market ${market.marketName}`
        //           );
        //         }
        //       }
        //     }, [selections, market, runner, isBookmaker]);

        //     const onBet = (
        //       isBack = false,
        //       back: { price: number; size: number; price1?: string }
        //     ) => {
        //       const ipAddress = authService.getIpAddress();
        //       if (isBookmaker && back.size == 0) return;

        //       // For bookmaker markets, use price1 if available, otherwise use price
        //       let finalOdds = back.price;
        //       if (isBookmaker && back.price1) {
        //         finalOdds = parseFloat(back.price1);
        //       }

        //       // Determine betOn based on market type
        //       let betOn = IBetOn.MATCH_ODDS;
        //       if (
        //         isBookmaker ||
        //         market.marketName?.toLowerCase().includes("bookmaker")
        //       ) {
        //         betOn = "BOOKMAKER" as any;
        //         console.log(
        //           `ðŸŽ¯ Set betOn to 'BOOKMAKER' for market: ${market.marketName}`
        //         );
        //       }

        //       if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
        //         // âœ… ENHANCED: Improved gtype determination for better PnL calculation
        //         let gtype = market.gtype;

        //         // If gtype is not set, determine it more robustly
        //         if (!gtype) {
        //           if (isBookmaker) {
        //             gtype = "match1"; // Bookmaker
        //             console.log(
        //               `ðŸŽ¯ Set gtype to 'match1' for bookmaker market based on oddsType: ${market.oddsType}`
        //             );
        //           } else if (
        //             market.marketName?.toUpperCase().includes("FANCY") ||
        //             market.marketName?.toUpperCase().includes("SESSION")
        //           ) {
        //             gtype = "fancy";
        //             console.log(
        //               `ðŸŽ¯ Set gtype to 'fancy' based on market name: ${market.marketName}`
        //             );
        //           } else {
        //             gtype = "match"; // Default to match odds
        //             console.log(
        //               `ðŸŽ¯ Set gtype to 'match' as default for market: ${market.marketName}`
        //             );
        //           }
        //         }

        //         console.log(`ðŸŽ¯ Bet popup data for ${market.marketName}:`, {
        //           marketId: market.marketId,
        //           oddsType: market.oddsType,
        //           gtype: gtype,
        //           betOn: betOn,
        //           odds: finalOdds,
        //           isBack,
        //           selectionId: runner.selectionId,
        //           selectionName: runner.runnerName,
        //         });

        //         dispatch(
        //           betPopup({
        //             isOpen: true,
        //             betData: {
        //               isBack,
        //               odds: parseFloat(finalOdds.toFixed(4)),
        //               volume: back.size,
        //               marketId: market.marketId,
        //               marketName: market.marketName,
        //               matchId: market.matchId,
        //               selectionName: runner.runnerName,
        //               selectionId: runner.selectionId,
        //               pnl: 0,
        //               stack: 0,
        //               currentMarketOdds: finalOdds,
        //               eventId: market.sportId,
        //               exposure: -0,
        //               ipAddress: ipAddress,
        //               type: IBetType.Match,
        //               matchName: getCurrentMatch.name,
        //               betOn: betOn,
        //               oddsType: market.oddsType,
        //               gtype: gtype,
        //             },
        //           })
        //         );
        //       }
        //     };

        //     // âœ… CRICKET FIX: For cricket bookmaker, use match odds layout (sportId 4)
        //     const isCricketBookmaker = isBookmaker && (market.sportId === 4 || getCurrentMatch?.sportId === 4);

        //     // Common box style with proper TypeScript typing
        //     const getBoxStyle = (isBack: boolean): React.CSSProperties => ({
        //       display: "flex",
        //       flexDirection: "column" as "column", // Type assertion
        //       justifyContent: "endf",
        //       alignItems: "center",
        //       minHeight: "40px",
        //       padding: "4px",
        //       maxWidth: "33%",
        //       boxSizing: "border-box",
        //       backgroundColor: isBack ? "#72bbef" : "#faa9ba",
        //       width: isCricketBookmaker ? "auto" : (isBookmaker ? "100%" : "auto"), // âœ… CRICKET: Use auto width like match odds
        //       flex: isCricketBookmaker ? 1 : (isBookmaker ? undefined : 1), // âœ… CRICKET: Use flex like match odds
        //     });

        //     // Column container style with proper TypeScript typing
        //     const columnStyleBack: React.CSSProperties = {
        //       flex: 1,
        //       display: "flex",
        //       gap: "1px",
        //       flexDirection: (isBookmaker && !isCricketBookmaker)
        //         ? "column"
        //         : ("row-reverse" as "column" | "row-reverse"), // âœ… CRICKET: Use row-reverse like match odds
        //       flexWrap: (isBookmaker && !isCricketBookmaker) ? "nowrap" : ("wrap" as "nowrap" | "wrap"), // âœ… CRICKET: Use wrap like match odds
        //       alignItems: (isBookmaker && !isCricketBookmaker) ? "flex-end" : undefined, // âœ… CRICKET: No special alignment
        //     };
        //     const columnStyleLay: React.CSSProperties = {
        //       flex: 1,
        //       display: "flex",
        //       gap: "1px",
        //       // padding:"0px",
        //       flexDirection: (isBookmaker && !isCricketBookmaker) ? "column" : ("row" as "column" | "row"), // âœ… CRICKET: Use row like match odds
        //       flexWrap: (isBookmaker && !isCricketBookmaker) ? "nowrap" : ("wrap" as "nowrap" | "wrap"), // âœ… CRICKET: Use wrap like match odds
        //     };
        //     const availableToBack = () => {
        //       const hasOnlySingleValues =
        //         isBookmaker && selections?.availableToBack?.length === 1;

        //       if (
        //         !selections?.availableToBack ||
        //         selections.availableToBack.length === 0
        //       ) {
        //         console.log(`âš ï¸ No back odds available for ${market.marketName}`);
        //         return null;
        //       }

        //       return selections?.availableToBack?.map((back: any, index: number) => {
        //         const i = 2 - index;
        //         const cls = index === 2 ? "back" : `back${i}`;
        //         const blinkCls = back.changed ? "blink market-box-glow" : "";

        //         // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
        //         if (isMobile && market.oddsType == OddsType.F && index != 2) return;

        //         // âœ… CRICKET FIX: For cricket bookmaker, show all boxes like match odds
        //         // For non-cricket bookmaker with single values, show only the first box
        //         if (isBookmaker && !isCricketBookmaker && hasOnlySingleValues && index !== 0) return;

        //         return (
        //           <div
        //             onClick={() => onBet(true, back)}
        //             key={index}
        //             style={getBoxStyle(true)}
        //             className={`text-center back ${cls} ${blinkCls}`}
        //           >
        //             <span className="odd d-block">
        //               {isBookmaker ? back.price1 || "-" : back.price || "-"}
        //             </span>
        //             <span className="d-block">
        //               {back.size ? nFormatter(back.size, 1) : "-"}
        //             </span>
        //           </div>
        //         );
        //       });
        //     };

        //     const availableToLay = () => {
        //       const hasOnlySingleValues =
        //         isBookmaker && selections?.availableToLay?.length === 1;

        //       if (
        //         !selections?.availableToLay ||
        //         selections.availableToLay.length === 0
        //       ) {
        //         console.log(`âš ï¸ No lay odds available for ${market.marketName}`);
        //         return null;
        //       }

        //       return selections?.availableToLay?.map((lay: any, index: number) => {
        //         const i = index;
        //         const cls = index === 0 ? "lay" : `lay${i}`;
        //         const blinkCls = lay.changed ? "blink market-box-glow" : "";

        //         // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
        //         if (isMobile && market.oddsType == OddsType.F && index != 0) return;

        //         // âœ… CRICKET FIX: For cricket bookmaker, show all boxes like match odds
        //         // For non-cricket bookmaker with single values, show only the first box
        //         if (isBookmaker && !isCricketBookmaker && hasOnlySingleValues && index !== 0) return;

        //         return (
        //           <div
        //             onClick={() => onBet(false, lay)}
        //             key={index}
        //             style={getBoxStyle(false)}
        //             className={`text-center ${cls} ${blinkCls}`}
        //           >
        //             <span className="odd d-block">
        //               {isBookmaker ? lay.price1 || "-" : lay.price || "-"}
        //             </span>
        //             <span className="d-block">
        //               {lay.size ? nFormatter(lay.size, 1) : "-"}
        //             </span>
        //           </div>
        //         );
        //       });
        //     };

        //     return (
        //       <div
        //         style={
        //           {
        //             display: "flex",
        //             width: "100%",
        //             // background: "green",
        //             overflow: "hidden",
        //             boxSizing: "border-box",
        //             padding: "0px",
        //             gap: "1px",
        //           } as React.CSSProperties
        //         }
        //       >
        //         {/* Back Boxes Column */}
        //         <div style={columnStyleBack}>{availableToBack()}</div>

        //         {/* Lay Boxes Column */}
        //         <div style={columnStyleLay}>{availableToLay()}</div>
        //       </div>
        //     );
        //   }
        // );

        // import React from 'react'
        // import { IBetOn, IBetType } from '../../../models/IBet'
        // import IRunner from '../../../models/IRunner'
        // import IMarket, { OddsType } from '../../../models/IMarket'
        // import { betPopup } from '../../../redux/actions/bet/betSlice'
        // import { selectCurrentMatch } from '../../../redux/actions/sports/sportSlice'
        // import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
        // import authService from '../../../services/auth.service'
        // import { nFormatter } from '../../../utils/helper'
        // import { selectUserData } from '../../../redux/actions/login/loginSlice'
        // import { RoleType } from '../../../models/User'
        // import { isMobile } from 'react-device-detect'

        // type Props = {
        //   selections: any
        //   selectionsPrev: any
        //   runner: IRunner
        //   market: IMarket
        // }
        // export const AvailableToBackLay = React.memo(({ selections, market, runner }: Props) => {
        //   const dispatch = useAppDispatch()
        //   const getCurrentMatch = useAppSelector(selectCurrentMatch)
        //   const userState = useAppSelector(selectUserData)

        //   // âœ… DEBUG: Log data received for bookmaker markets
        //   React.useEffect(() => {
        //     if (market.oddsType === OddsType.BM) {
        //       console.log(`ðŸŽ¯ AvailableToBackLay received data for bookmaker ${market.marketName}:`, {
        //         marketId: market.marketId,
        //         marketName: market.marketName,
        //         oddsType: market.oddsType,
        //         gtype: market.gtype,
        //         runnerName: runner.runnerName,
        //         runnerSelectionId: runner.selectionId,
        //         selections: selections,
        //         availableToBack: selections?.availableToBack,
        //         availableToLay: selections?.availableToLay,
        //         backCount: selections?.availableToBack?.length || 0,
        //         layCount: selections?.availableToLay?.length || 0,
        //         isBookmakerDetected: market.oddsType === OddsType.BM,
        //         OddsTypeBM: OddsType.BM
        //       })

        //       // âœ… ADDITIONAL DEBUG: Check if data structure is as expected
        //       if (selections?.availableToBack?.length === 0) {
        //         console.log(`âŒ ISSUE: Back odds array is empty for bookmaker market ${market.marketName}`)
        //       }
        //       if (selections?.availableToLay?.length === 0) {
        //         console.log(`âŒ ISSUE: Lay odds array is empty for bookmaker market ${market.marketName}`)
        //       }
        //       if (!selections) {
        //         console.log(`âŒ CRITICAL: selections object is null/undefined for bookmaker market ${market.marketName}`)
        //       }
        //     }
        //   }, [selections, market, runner])

        //   const onBet = (isBack = false, back: { price: number; size: number; price1?: string }) => {
        //     const ipAddress = authService.getIpAddress()
        //     if (market.oddsType == OddsType.BM && back.size == 0) return

        //     // For bookmaker markets, use price1 if available, otherwise use price
        //     let finalOdds = back.price;
        //     if (market.oddsType === OddsType.BM && back.price1) {
        //       finalOdds = parseFloat(back.price1);
        //     }

        //     // Determine betOn based on market type
        //     let betOn = IBetOn.MATCH_ODDS;
        //     if (market.oddsType === OddsType.BM || market.marketName?.toLowerCase().includes('bookmaker')) {
        //       betOn = 'BOOKMAKER' as any; // Set to BOOKMAKER for bookmaker markets
        //       console.log(`ðŸŽ¯ Set betOn to 'BOOKMAKER' for market: ${market.marketName}`)
        //     }

        //     if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
        //       // âœ… ENHANCED: Improved gtype determination for better PnL calculation
        //       let gtype = market.gtype

        //       // If gtype is not set, determine it more robustly
        //       if (!gtype) {
        //         if (market.oddsType === OddsType.BM) {
        //           gtype = 'match1'  // Bookmaker
        //           console.log(`ðŸŽ¯ Set gtype to 'match1' for bookmaker market based on oddsType: ${market.oddsType}`)
        //         } else if (market.marketName?.toUpperCase().includes('FANCY') || market.marketName?.toUpperCase().includes('SESSION')) {
        //           gtype = 'fancy'
        //           console.log(`ðŸŽ¯ Set gtype to 'fancy' based on market name: ${market.marketName}`)
        //         } else {
        //           gtype = 'match'  // Default to match odds
        //           console.log(`ðŸŽ¯ Set gtype to 'match' as default for market: ${market.marketName}`)
        //         }
        //       }

        //       console.log(`ðŸŽ¯ Bet popup data for ${market.marketName}:`, {
        //         marketId: market.marketId,
        //         oddsType: market.oddsType,
        //         gtype: gtype,
        //         betOn: betOn,
        //         odds: finalOdds,
        //         isBack,
        //         selectionId: runner.selectionId,
        //         selectionName: runner.runnerName
        //       })

        //       dispatch(
        //         betPopup({
        //           isOpen: true,
        //           betData: {
        //             isBack,
        //             odds: parseFloat(finalOdds.toFixed(4)),
        //             volume: back.size,
        //             marketId: market.marketId,
        //             marketName: market.marketName,
        //             matchId: market.matchId,
        //             selectionName: runner.runnerName,
        //             selectionId: runner.selectionId,
        //             pnl: 0,
        //             stack: 0,
        //             currentMarketOdds: finalOdds,
        //             eventId: market.sportId,
        //             exposure: -0,
        //             ipAddress: ipAddress,
        //             type: IBetType.Match,
        //             matchName: getCurrentMatch.name,
        //             betOn: betOn,
        //             oddsType: market.oddsType,
        //             gtype: gtype, // âœ… Use the improved gtype determination
        //           },
        //         }),
        //       )
        //     }
        //   }

        //   const availableToBack = () => {
        //     // For bookmaker markets, check if we should show only single values
        //     const isBookmaker = market.oddsType === OddsType.BM
        //     const hasOnlySingleValues = isBookmaker && selections?.availableToBack?.length === 1

        //     // âœ… DEBUG: Log availableToBack processing for bookmaker
        //     if (isBookmaker) {
        //       console.log(`ðŸ“Š Processing availableToBack for ${market.marketName}:`, {
        //         isBookmaker,
        //         hasOnlySingleValues,
        //         availableToBackLength: selections?.availableToBack?.length,
        //         availableToBack: selections?.availableToBack,
        //         isMobile: isMobile
        //       })
        //     }

        //     if (!selections?.availableToBack || selections.availableToBack.length === 0) {
        //       console.log(`âš ï¸ No back odds available for ${market.marketName}`)
        //       return null
        //     }

        //     return selections?.availableToBack?.map((back: any, index: number) => {
        //       const i = 2 - index
        //       const cls = index === 2 ? 'back' : `back${i}`
        //       const blinkCls = back.changed ? 'blink market-box-glow' : ''

        //       // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
        //       if (isMobile && market.oddsType == OddsType.F && index != 2) return

        //       // âœ… FIX: For bookmaker with single values, show the FIRST available box (index 0) instead of index 2
        //       if (isBookmaker && hasOnlySingleValues && index !== 0) {
        //         console.log(`ðŸš« Skipping back box ${index} for bookmaker (single value mode, showing index 0)`)
        //         return null
        //       }

        //       const classforbox =
        //         (!isMobile || market.oddsType == OddsType.BM || market.oddsType == OddsType.B)
        //           ? 'box-1'
        //           : 'box-2'

        //       // âœ… DEBUG: Log each back box being rendered
        //       if (isBookmaker) {
        //         console.log(`âœ… Rendering back box ${index} for ${runner.runnerName}:`, {
        //           index,
        //           cls,
        //           price: back.price,
        //           price1: back.price1,
        //           size: back.size,
        //           classforbox
        //         })
        //       }

        //       return (
        //         <div
        //           onClick={() => onBet(true, back)}
        //           key={index}
        //           className={`${classforbox}  text-center ${cls} ${blinkCls}`}
        //         >
        //           <span className='odd d-block'>
        //             {market.oddsType == OddsType.BM
        //               ? back.price1
        //                 ? back.price1
        //                 : '-'
        //               : back.price
        //               ? back.price
        //               : '-'}
        //           </span>
        //           <span className='d-block'>{back.size ? nFormatter(back.size, 1) : '-'}</span>
        //         </div>
        //       )
        //     })
        //   }

        //   const availableToLay = () => {
        //     // For bookmaker markets, check if we should show only single values
        //     const isBookmaker = market.oddsType === OddsType.BM
        //     const hasOnlySingleValues = isBookmaker && selections?.availableToLay?.length === 1

        //     // âœ… DEBUG: Log availableToLay processing for bookmaker
        //     if (isBookmaker) {
        //       console.log(`ðŸ“Š Processing availableToLay for ${market.marketName}:`, {
        //         isBookmaker,
        //         hasOnlySingleValues,
        //         availableToLayLength: selections?.availableToLay?.length,
        //         availableToLay: selections?.availableToLay
        //       })
        //     }

        //     if (!selections?.availableToLay || selections.availableToLay.length === 0) {
        //       console.log(`âš ï¸ No lay odds available for ${market.marketName}`)
        //       return null
        //     }

        //     return selections?.availableToLay?.map((lay: any, index: number) => {
        //       const i = index
        //       const cls = index === 0 ? 'lay' : `lay${i}`
        //       const blinkCls = lay.changed ? 'blink market-box-glow' : ''

        //       // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
        //       if (isMobile && market.oddsType == OddsType.F && index != 0) return

        //       // For bookmaker with single values, show only the main lay box (index 0)
        //       if (isBookmaker && hasOnlySingleValues && index !== 0) {
        //         console.log(`ðŸš« Skipping lay box ${index} for bookmaker (single value mode)`)
        //         return null
        //       }

        //       const classforbox =
        //         (!isMobile || market.oddsType == OddsType.BM || market.oddsType == OddsType.B)
        //           ? 'box-1'
        //           : 'box-2'

        //       // âœ… DEBUG: Log each lay box being rendered
        //       if (isBookmaker) {
        //         console.log(`âœ… Rendering lay box ${index} for ${runner.runnerName}:`, {
        //           index,
        //           cls,
        //           price: lay.price,
        //           price1: lay.price1,
        //           size: lay.size,
        //           classforbox
        //         })
        //       }

        //       return (
        //         <div
        //           onClick={() => onBet(false, lay)}
        //           key={index}
        //           className={`${classforbox}   text-center ${cls} ${blinkCls}`}
        //         >
        //           <span className='odd d-block'>
        //             {market.oddsType == OddsType.BM
        //               ? lay.price1
        //                 ? lay.price1
        //                 : '-'
        //               : lay.price
        //               ? lay.price
        //               : '-'}
        //           </span>
        //           <span className='d-block'>{lay.size ? nFormatter(lay.size, 1) : '-'}</span>
        //         </div>
        //       )
        //     })
        //   }

        //   return (
        //     <>
        //       {availableToBack()}
        //       {availableToLay()}
        //     </>
        //   )
        // })

        // import React from "react";
        // import { IBetOn, IBetType } from "../../../models/IBet";
        // import IRunner from "../../../models/IRunner";
        // import IMarket, { OddsType } from "../../../models/IMarket";
        // import { betPopup } from "../../../redux/actions/bet/betSlice";
        // import { selectCurrentMatch } from "../../../redux/actions/sports/sportSlice";
        // import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
        // import authService from "../../../services/auth.service";
        // import { nFormatter } from "../../../utils/helper";
        // import { selectUserData } from "../../../redux/actions/login/loginSlice";
        // import { RoleType } from "../../../models/User";
        // import { isMobile } from "react-device-detect";

        // type Props = {
        //   selections: any;
        //   selectionsPrev: any;
        //   runner: IRunner;
        //   market: IMarket;
        // };

        // export const AvailableToBackLay = React.memo(
        //   ({ selections, market, runner }: Props) => {
        //     const dispatch = useAppDispatch();
        //     const getCurrentMatch = useAppSelector(selectCurrentMatch);
        //     const userState = useAppSelector(selectUserData);
        //     const isBookmaker = market.oddsType === OddsType.BM;

        //     // âœ… DEBUG: Log data received for bookmaker markets
        //     React.useEffect(() => {
        //       if (isBookmaker) {
        //         console.log(
        //           `ðŸŽ¯ AvailableToBackLay received data for bookmaker ${market.marketName}:`,
        //           {
        //             marketId: market.marketId,
        //             marketName: market.marketName,
        //             oddsType: market.oddsType,
        //             gtype: market.gtype,
        //             runnerName: runner.runnerName,
        //             runnerSelectionId: runner.selectionId,
        //             selections: selections,
        //             availableToBack: selections?.availableToBack,
        //             availableToLay: selections?.availableToLay,
        //             backCount: selections?.availableToBack?.length || 0,
        //             layCount: selections?.availableToLay?.length || 0,
        //             isBookmakerDetected: isBookmaker,
        //             OddsTypeBM: OddsType.BM,
        //           }
        //         );

        //         // âœ… ADDITIONAL DEBUG: Check if data structure is as expected
        //         if (selections?.availableToBack?.length === 0) {
        //           console.log(
        //             `âŒ ISSUE: Back odds array is empty for bookmaker market ${market.marketName}`
        //           );
        //         }
        //         if (selections?.availableToLay?.length === 0) {
        //           console.log(
        //             `âŒ ISSUE: Lay odds array is empty for bookmaker market ${market.marketName}`
        //           );
        //         }
        //         if (!selections) {
        //           console.log(
        //             `âŒ CRITICAL: selections object is null/undefined for bookmaker market ${market.marketName}`
        //           );
        //         }
        //       }
        //     }, [selections, market, runner, isBookmaker]);

        //     const onBet = (
        //       isBack = false,
        //       back: { price: number; size: number; price1?: string }
        //     ) => {
        //       const ipAddress = authService.getIpAddress();
        //       if (isBookmaker && back.size == 0) return;

        //       // For bookmaker markets, use price1 if available, otherwise use price
        //       let finalOdds = back.price;
        //       if (isBookmaker && back.price1) {
        //         finalOdds = parseFloat(back.price1);
        //       }

        //       // Determine betOn based on market type
        //       let betOn = IBetOn.MATCH_ODDS;
        //       if (
        //         isBookmaker ||
        //         market.marketName?.toLowerCase().includes("bookmaker")
        //       ) {
        //         betOn = "BOOKMAKER" as any;
        //         console.log(
        //           `ðŸŽ¯ Set betOn to 'BOOKMAKER' for market: ${market.marketName}`
        //         );
        //       }

        //       if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
        //         // âœ… ENHANCED: Improved gtype determination for better PnL calculation
        //         let gtype = market.gtype;

        //         // If gtype is not set, determine it more robustly
        //         if (!gtype) {
        //           if (isBookmaker) {
        //             gtype = "match1"; // Bookmaker
        //             console.log(
        //               `ðŸŽ¯ Set gtype to 'match1' for bookmaker market based on oddsType: ${market.oddsType}`
        //             );
        //           } else if (
        //             market.marketName?.toUpperCase().includes("FANCY") ||
        //             market.marketName?.toUpperCase().includes("SESSION")
        //           ) {
        //             gtype = "fancy";
        //             console.log(
        //               `ðŸŽ¯ Set gtype to 'fancy' based on market name: ${market.marketName}`
        //             );
        //           } else {
        //             gtype = "match"; // Default to match odds
        //             console.log(
        //               `ðŸŽ¯ Set gtype to 'match' as default for market: ${market.marketName}`
        //             );
        //           }
        //         }

        //         console.log(`ðŸŽ¯ Bet popup data for ${market.marketName}:`, {
        //           marketId: market.marketId,
        //           oddsType: market.oddsType,
        //           gtype: gtype,
        //           betOn: betOn,
        //           odds: finalOdds,
        //           isBack,
        //           selectionId: runner.selectionId,
        //           selectionName: runner.runnerName,
        //         });

        //         dispatch(
        //           betPopup({
        //             isOpen: true,
        //             betData: {
        //               isBack,
        //               odds: parseFloat(finalOdds.toFixed(4)),
        //               volume: back.size,
        //               marketId: market.marketId,
        //               marketName: market.marketName,
        //               matchId: market.matchId,
        //               selectionName: runner.runnerName,
        //               selectionId: runner.selectionId,
        //               pnl: 0,
        //               stack: 0,
        //               currentMarketOdds: finalOdds,
        //               eventId: market.sportId,
        //               exposure: -0,
        //               ipAddress: ipAddress,
        //               type: IBetType.Match,
        //               matchName: getCurrentMatch.name,
        //               betOn: betOn,
        //               oddsType: market.oddsType,
        //               gtype: gtype,
        //             },
        //           })
        //         );
        //       }
        //     };

        //     // âœ… CRICKET FIX: For cricket bookmaker, use match odds layout (sportId 4)
        //     const isCricketBookmaker = isBookmaker && (market.sportId === 4 || getCurrentMatch?.sportId === 4);

        //     // Common box style with proper TypeScript typing
        //     const getBoxStyle = (isBack: boolean): React.CSSProperties => ({
        //       display: "flex",
        //       flexDirection: "column" as "column", // Type assertion
        //       justifyContent: "endf",
        //       alignItems: "center",
        //       minHeight: "40px",
        //       padding: "4px",
        //       maxWidth: "33%",
        //       boxSizing: "border-box",
        //       backgroundColor: isBack ? "#72bbef" : "#faa9ba",
        //       width: isCricketBookmaker ? "auto" : (isBookmaker ? "100%" : "auto"), // âœ… CRICKET: Use auto width like match odds
        //       flex: isCricketBookmaker ? 1 : (isBookmaker ? undefined : 1), // âœ… CRICKET: Use flex like match odds
        //     });

        //     // Column container style with proper TypeScript typing
        //     const columnStyleBack: React.CSSProperties = {
        //       flex: 1,
        //       display: "flex",
        //       gap: "1px",
        //       flexDirection: (isBookmaker && !isCricketBookmaker)
        //         ? "column"
        //         : ("row-reverse" as "column" | "row-reverse"), // âœ… CRICKET: Use row-reverse like match odds
        //       flexWrap: (isBookmaker && !isCricketBookmaker) ? "nowrap" : ("wrap" as "nowrap" | "wrap"), // âœ… CRICKET: Use wrap like match odds
        //       alignItems: (isBookmaker && !isCricketBookmaker) ? "flex-end" : undefined, // âœ… CRICKET: No special alignment
        //     };
        //     const columnStyleLay: React.CSSProperties = {
        //       flex: 1,
        //       display: "flex",
        //       gap: "1px",
        //       // padding:"0px",
        //       flexDirection: (isBookmaker && !isCricketBookmaker) ? "column" : ("row" as "column" | "row"), // âœ… CRICKET: Use row like match odds
        //       flexWrap: (isBookmaker && !isCricketBookmaker) ? "nowrap" : ("wrap" as "nowrap" | "wrap"), // âœ… CRICKET: Use wrap like match odds
        //     };
        //     const availableToBack = () => {
        //       const hasOnlySingleValues =
        //         isBookmaker && selections?.availableToBack?.length === 1;

        //       if (
        //         !selections?.availableToBack ||
        //         selections.availableToBack.length === 0
        //       ) {
        //         console.log(`âš ï¸ No back odds available for ${market.marketName}`);
        //         return null;
        //       }

        //       return selections?.availableToBack?.map((back: any, index: number) => {
        //         const i = 2 - index;
        //         const cls = index === 2 ? "back" : `back${i}`;
        //         const blinkCls = back.changed ? "blink market-box-glow" : "";

        //         // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
        //         if (isMobile && market.oddsType == OddsType.F && index != 2) return;

        //         // âœ… CRICKET FIX: For cricket bookmaker, show all boxes like match odds
        //         // For non-cricket bookmaker with single values, show only the first box
        //         if (isBookmaker && !isCricketBookmaker && hasOnlySingleValues && index !== 0) return;

        //         return (
        //           <div
        //             onClick={() => onBet(true, back)}
        //             key={index}
        //             style={getBoxStyle(true)}
        //             className={`text-center back ${cls} ${blinkCls}`}
        //           >
        //             <span className="odd d-block">
        //               {isBookmaker ? back.price1 || "-" : back.price || "-"}
        //             </span>
        //             <span className="d-block">
        //               {back.size ? nFormatter(back.size, 1) : "-"}
        //             </span>
        //           </div>
        //         );
        //       });
        //     };

        //     const availableToLay = () => {
        //       const hasOnlySingleValues =
        //         isBookmaker && selections?.availableToLay?.length === 1;

        //       if (
        //         !selections?.availableToLay ||
        //         selections.availableToLay.length === 0
        //       ) {
        //         console.log(`âš ï¸ No lay odds available for ${market.marketName}`);
        //         return null;
        //       }

        //       return selections?.availableToLay?.map((lay: any, index: number) => {
        //         const i = index;
        //         const cls = index === 0 ? "lay" : `lay${i}`;
        //         const blinkCls = lay.changed ? "blink market-box-glow" : "";

        //         // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
        //         if (isMobile && market.oddsType == OddsType.F && index != 0) return;

        //         // âœ… CRICKET FIX: For cricket bookmaker, show all boxes like match odds
        //         // For non-cricket bookmaker with single values, show only the first box
        //         if (isBookmaker && !isCricketBookmaker && hasOnlySingleValues && index !== 0) return;

        //         return (
        //           <div
        //             onClick={() => onBet(false, lay)}
        //             key={index}
        //             style={getBoxStyle(false)}
        //             className={`text-center ${cls} ${blinkCls}`}
        //           >
        //             <span className="odd d-block">
        //               {isBookmaker ? lay.price1 || "-" : lay.price || "-"}
        //             </span>
        //             <span className="d-block">
        //               {lay.size ? nFormatter(lay.size, 1) : "-"}
        //             </span>
        //           </div>
        //         );
        //       });
        //     };

        //     return (
        //       <div
        //         style={
        //           {
        //             display: "flex",
        //             width: "100%",
        //             // background: "green",
        //             overflow: "hidden",
        //             boxSizing: "border-box",
        //             padding: "0px",
        //             gap: "1px",
        //           } as React.CSSProperties
        //         }
        //       >
        //         {/* Back Boxes Column */}
        //         <div style={columnStyleBack}>{availableToBack()}</div>

        //         {/* Lay Boxes Column */}
        //         <div style={columnStyleLay}>{availableToLay()}</div>
        //       </div>
        //     );
        //   }
        // );

        // import React from 'react'
        // import { IBetOn, IBetType } from '../../../models/IBet'
        // import IRunner from '../../../models/IRunner'
        // import IMarket, { OddsType } from '../../../models/IMarket'
        // import { betPopup } from '../../../redux/actions/bet/betSlice'
        // import { selectCurrentMatch } from '../../../redux/actions/sports/sportSlice'
        // import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
        // import authService from '../../../services/auth.service'
        // import { nFormatter } from '../../../utils/helper'
        // import { selectUserData } from '../../../redux/actions/login/loginSlice'
        // import { RoleType } from '../../../models/User'
        // import { isMobile } from 'react-device-detect'

        // type Props = {
        //   selections: any
        //   selectionsPrev: any
        //   runner: IRunner
        //   market: IMarket
        // }
        // export const AvailableToBackLay = React.memo(({ selections, market, runner }: Props) => {
        //   const dispatch = useAppDispatch()
        //   const getCurrentMatch = useAppSelector(selectCurrentMatch)
        //   const userState = useAppSelector(selectUserData)

        //   // âœ… DEBUG: Log data received for bookmaker markets
        //   React.useEffect(() => {
        //     if (market.oddsType === OddsType.BM) {
        //       console.log(`ðŸŽ¯ AvailableToBackLay received data for bookmaker ${market.marketName}:`, {
        //         marketId: market.marketId,
        //         marketName: market.marketName,
        //         oddsType: market.oddsType,
        //         gtype: market.gtype,
        //         runnerName: runner.runnerName,
        //         runnerSelectionId: runner.selectionId,
        //         selections: selections,
        //         availableToBack: selections?.availableToBack,
        //         availableToLay: selections?.availableToLay,
        //         backCount: selections?.availableToBack?.length || 0,
        //         layCount: selections?.availableToLay?.length || 0,
        //         isBookmakerDetected: market.oddsType === OddsType.BM,
        //         OddsTypeBM: OddsType.BM
        //       })

        //       // âœ… ADDITIONAL DEBUG: Check if data structure is as expected
        //       if (selections?.availableToBack?.length === 0) {
        //         console.log(`âŒ ISSUE: Back odds array is empty for bookmaker market ${market.marketName}`)
        //       }
        //       if (selections?.availableToLay?.length === 0) {
        //         console.log(`âŒ ISSUE: Lay odds array is empty for bookmaker market ${market.marketName}`)
        //       }
        //       if (!selections) {
        //         console.log(`âŒ CRITICAL: selections object is null/undefined for bookmaker market ${market.marketName}`)
        //       }
        //     }
        //   }, [selections, market, runner])

        //   const onBet = (isBack = false, back: { price: number; size: number; price1?: string }) => {
        //     const ipAddress = authService.getIpAddress()
        //     if (market.oddsType == OddsType.BM && back.size == 0) return

        //     // For bookmaker markets, use price1 if available, otherwise use price
        //     let finalOdds = back.price;
        //     if (market.oddsType === OddsType.BM && back.price1) {
        //       finalOdds = parseFloat(back.price1);
        //     }

        //     // Determine betOn based on market type
        //     let betOn = IBetOn.MATCH_ODDS;
        //     if (market.oddsType === OddsType.BM || market.marketName?.toLowerCase().includes('bookmaker')) {
        //       betOn = 'BOOKMAKER' as any; // Set to BOOKMAKER for bookmaker markets
        //       console.log(`ðŸŽ¯ Set betOn to 'BOOKMAKER' for market: ${market.marketName}`)
        //     }

        //     if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
        //       // âœ… ENHANCED: Improved gtype determination for better PnL calculation
        //       let gtype = market.gtype

        //       // If gtype is not set, determine it more robustly
        //       if (!gtype) {
        //         if (market.oddsType === OddsType.BM) {
        //           gtype = 'match1'  // Bookmaker
        //           console.log(`ðŸŽ¯ Set gtype to 'match1' for bookmaker market based on oddsType: ${market.oddsType}`)
        //         } else if (market.marketName?.toUpperCase().includes('FANCY') || market.marketName?.toUpperCase().includes('SESSION')) {
        //           gtype = 'fancy'
        //           console.log(`ðŸŽ¯ Set gtype to 'fancy' based on market name: ${market.marketName}`)
        //         } else {
        //           gtype = 'match'  // Default to match odds
        //           console.log(`ðŸŽ¯ Set gtype to 'match' as default for market: ${market.marketName}`)
        //         }
        //       }

        //       console.log(`ðŸŽ¯ Bet popup data for ${market.marketName}:`, {
        //         marketId: market.marketId,
        //         oddsType: market.oddsType,
        //         gtype: gtype,
        //         betOn: betOn,
        //         odds: finalOdds,
        //         isBack,
        //         selectionId: runner.selectionId,
        //         selectionName: runner.runnerName
        //       })

        //       dispatch(
        //         betPopup({
        //           isOpen: true,
        //           betData: {
        //             isBack,
        //             odds: parseFloat(finalOdds.toFixed(4)),
        //             volume: back.size,
        //             marketId: market.marketId,
        //             marketName: market.marketName,
        //             matchId: market.matchId,
        //             selectionName: runner.runnerName,
        //             selectionId: runner.selectionId,
        //             pnl: 0,
        //             stack: 0,
        //             currentMarketOdds: finalOdds,
        //             eventId: market.sportId,
        //             exposure: -0,
        //             ipAddress: ipAddress,
        //             type: IBetType.Match,
        //             matchName: getCurrentMatch.name,
        //             betOn: betOn,
        //             oddsType: market.oddsType,
        //             gtype: gtype, // âœ… Use the improved gtype determination
        //           },
        //         }),
        //       )
        //     }
        //   }

        //   const availableToBack = () => {
        //     // For bookmaker markets, check if we should show only single values
        //     const isBookmaker = market.oddsType === OddsType.BM
        //     const hasOnlySingleValues = isBookmaker && selections?.availableToBack?.length === 1

        //     // âœ… DEBUG: Log availableToBack processing for bookmaker
        //     if (isBookmaker) {
        //       console.log(`ðŸ“Š Processing availableToBack for ${market.marketName}:`, {
        //         isBookmaker,
        //         hasOnlySingleValues,
        //         availableToBackLength: selections?.availableToBack?.length,
        //         availableToBack: selections?.availableToBack,
        //         isMobile: isMobile
        //       })
        //     }

        //     if (!selections?.availableToBack || selections.availableToBack.length === 0) {
        //       console.log(`âš ï¸ No back odds available for ${market.marketName}`)
        //       return null
        //     }

        //     return selections?.availableToBack?.map((back: any, index: number) => {
        //       const i = 2 - index
        //       const cls = index === 2 ? 'back' : `back${i}`
        //       const blinkCls = back.changed ? 'blink market-box-glow' : ''

        //       // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
        //       if (isMobile && market.oddsType == OddsType.F && index != 2) return

        //       // âœ… FIX: For bookmaker with single values, show the FIRST available box (index 0) instead of index 2
        //       if (isBookmaker && hasOnlySingleValues && index !== 0) {
        //         console.log(`ðŸš« Skipping back box ${index} for bookmaker (single value mode, showing index 0)`)
        //         return null
        //       }

        //       const classforbox =
        //         (!isMobile || market.oddsType == OddsType.BM || market.oddsType == OddsType.B)
        //           ? 'box-1'
        //           : 'box-2'

        //       // âœ… DEBUG: Log each back box being rendered
        //       if (isBookmaker) {
        //         console.log(`âœ… Rendering back box ${index} for ${runner.runnerName}:`, {
        //           index,
        //           cls,
        //           price: back.price,
        //           price1: back.price1,
        //           size: back.size,
        //           classforbox
        //         })
        //       }

        //       return (
        //         <div
        //           onClick={() => onBet(true, back)}
        //           key={index}
        //           className={`${classforbox}  text-center ${cls} ${blinkCls}`}
        //         >
        //           <span className='odd d-block'>
        //             {market.oddsType == OddsType.BM
        //               ? back.price1
        //                 ? back.price1
        //                 : '-'
        //               : back.price
        //               ? back.price
        //               : '-'}
        //           </span>
        //           <span className='d-block'>{back.size ? nFormatter(back.size, 1) : '-'}</span>
        //         </div>
        //       )
        //     })
        //   }

        //   const availableToLay = () => {
        //     // For bookmaker markets, check if we should show only single values
        //     const isBookmaker = market.oddsType === OddsType.BM
        //     const hasOnlySingleValues = isBookmaker && selections?.availableToLay?.length === 1

        //     // âœ… DEBUG: Log availableToLay processing for bookmaker
        //     if (isBookmaker) {
        //       console.log(`ðŸ“Š Processing availableToLay for ${market.marketName}:`, {
        //         isBookmaker,
        //         hasOnlySingleValues,
        //         availableToLayLength: selections?.availableToLay?.length,
        //         availableToLay: selections?.availableToLay
        //       })
        //     }

        //     if (!selections?.availableToLay || selections.availableToLay.length === 0) {
        //       console.log(`âš ï¸ No lay odds available for ${market.marketName}`)
        //       return null
        //     }

        //     return selections?.availableToLay?.map((lay: any, index: number) => {
        //       const i = index
        //       const cls = index === 0 ? 'lay' : `lay${i}`
        //       const blinkCls = lay.changed ? 'blink market-box-glow' : ''

        //       // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
        //       if (isMobile && market.oddsType == OddsType.F && index != 0) return

        //       // For bookmaker with single values, show only the main lay box (index 0)
        //       if (isBookmaker && hasOnlySingleValues && index !== 0) {
        //         console.log(`ðŸš« Skipping lay box ${index} for bookmaker (single value mode)`)
        //         return null
        //       }

        //       const classforbox =
        //         (!isMobile || market.oddsType == OddsType.BM || market.oddsType == OddsType.B)
        //           ? 'box-1'
        //           : 'box-2'

        //       // âœ… DEBUG: Log each lay box being rendered
        //       if (isBookmaker) {
        //         console.log(`âœ… Rendering lay box ${index} for ${runner.runnerName}:`, {
        //           index,
        //           cls,
        //           price: lay.price,
        //           price1: lay.price1,
        //           size: lay.size,
        //           classforbox
        //         })
        //       }

        //       return (
        //         <div
        //           onClick={() => onBet(false, lay)}
        //           key={index}
        //           className={`${classforbox}   text-center ${cls} ${blinkCls}`}
        //         >
        //           <span className='odd d-block'>
        //             {market.oddsType == OddsType.BM
        //               ? lay.price1
        //                 ? lay.price1
        //                 : '-'
        //               : lay.price
        //               ? lay.price
        //               : '-'}
        //           </span>
        //           <span className='d-block'>{lay.size ? nFormatter(lay.size, 1) : '-'}</span>
        //         </div>
        //       )
        //     })
        //   }

        //   return (
        //     <>
        //       {availableToBack()}
        //       {availableToLay()}
        //     </>
        //   )
        // })

        // import React from "react";
        // import { IBetOn, IBetType } from "../../../models/IBet";
        // import IRunner from "../../../models/IRunner";
        // import IMarket, { OddsType } from "../../../models/IMarket";
        // import { betPopup } from "../../../redux/actions/bet/betSlice";
        // import { selectCurrentMatch } from "../../../redux/actions/sports/sportSlice";
        // import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
        // import authService from "../../../services/auth.service";
        // import { nFormatter } from "../../../utils/helper";
        // import { selectUserData } from "../../../redux/actions/login/loginSlice";
        // import { RoleType } from "../../../models/User";
        // import { isMobile } from "react-device-detect";

        // type Props = {
        //   selections: any;
        //   selectionsPrev: any;
        //   runner: IRunner;
        //   market: IMarket;
        // };

        // export const AvailableToBackLay = React.memo(
        //   ({ selections, market, runner }: Props) => {
        //     const dispatch = useAppDispatch();
        //     const getCurrentMatch = useAppSelector(selectCurrentMatch);
        //     const userState = useAppSelector(selectUserData);
        //     const isBookmaker = market.oddsType === OddsType.BM;

        //     // âœ… DEBUG: Log data received for bookmaker markets
        //     React.useEffect(() => {
        //       if (isBookmaker) {
        //         console.log(
        //           `ðŸŽ¯ AvailableToBackLay received data for bookmaker ${market.marketName}:`,
        //           {
        //             marketId: market.marketId,
        //             marketName: market.marketName,
        //             oddsType: market.oddsType,
        //             gtype: market.gtype,
        //             runnerName: runner.runnerName,
        //             runnerSelectionId: runner.selectionId,
        //             selections: selections,
        //             availableToBack: selections?.availableToBack,
        //             availableToLay: selections?.availableToLay,
        //             backCount: selections?.availableToBack?.length || 0,
        //             layCount: selections?.availableToLay?.length || 0,
        //             isBookmakerDetected: isBookmaker,
        //             OddsTypeBM: OddsType.BM,
        //           }
        //         );

        //         // âœ… ADDITIONAL DEBUG: Check if data structure is as expected
        //         if (selections?.availableToBack?.length === 0) {
        //           console.log(
        //             `âŒ ISSUE: Back odds array is empty for bookmaker market ${market.marketName}`
        //           );
        //         }
        //         if (selections?.availableToLay?.length === 0) {
        //           console.log(
        //             `âŒ ISSUE: Lay odds array is empty for bookmaker market ${market.marketName}`
        //           );
        //         }
        //         if (!selections) {
        //           console.log(
        //             `âŒ CRITICAL: selections object is null/undefined for bookmaker market ${market.marketName}`
        //           );
        //         }
        //       }
        //     }, [selections, market, runner, isBookmaker]);

        //     const onBet = (
        //       isBack = false,
        //       back: { price: number; size: number; price1?: string }
        //     ) => {
        //       const ipAddress = authService.getIpAddress();
        //       if (isBookmaker && back.size == 0) return;

        //       // For bookmaker markets, use price1 if available, otherwise use price
        //       let finalOdds = back.price;
        //       if (isBookmaker && back.price1) {
        //         finalOdds = parseFloat(back.price1);
        //       }

        //       // Determine betOn based on market type
        //       let betOn = IBetOn.MATCH_ODDS;
        //       if (
        //         isBookmaker ||
        //         market.marketName?.toLowerCase().includes("bookmaker")
        //       ) {
        //         betOn = "BOOKMAKER" as any;
        //         console.log(
        //           `ðŸŽ¯ Set betOn to 'BOOKMAKER' for market: ${market.marketName}`
        //         );
        //       }

        //       if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
        //         // âœ… ENHANCED: Improved gtype determination for better PnL calculation
        //         let gtype = market.gtype;

        //         // If gtype is not set, determine it more robustly
        //         if (!gtype) {
        //           if (isBookmaker) {
        //             gtype = "match1"; // Bookmaker
        //             console.log(
        //               `ðŸŽ¯ Set gtype to 'match1' for bookmaker market based on oddsType: ${market.oddsType}`
        //             );
        //           } else if (
        //             market.marketName?.toUpperCase().includes("FANCY") ||
        //             market.marketName?.toUpperCase().includes("SESSION")
        //           ) {
        //             gtype = "fancy";
        //             console.log(
        //               `ðŸŽ¯ Set gtype to 'fancy' based on market name: ${market.marketName}`
        //             );
        //           } else {
        //             gtype = "match"; // Default to match odds
        //             console.log(
        //               `ðŸŽ¯ Set gtype to 'match' as default for market: ${market.marketName}`
        //             );
        //           }
        //         }

        //         console.log(`ðŸŽ¯ Bet popup data for ${market.marketName}:`, {
        //           marketId: market.marketId,
        //           oddsType: market.oddsType,
        //           gtype: gtype,
        //           betOn: betOn,
        //           odds: finalOdds,
        //           isBack,
        //           selectionId: runner.selectionId,
        //           selectionName: runner.runnerName,
        //         });

        //         dispatch(
        //           betPopup({
        //             isOpen: true,
        //             betData: {
        //               isBack,
        //               odds: parseFloat(finalOdds.toFixed(4)),
        //               volume: back.size,
        //               marketId: market.marketId,
        //               marketName: market.marketName,
        //               matchId: market.matchId,
        //               selectionName: runner.runnerName,
        //               selectionId: runner.selectionId,
        //               pnl: 0,
        //               stack: 0,
        //               currentMarketOdds: finalOdds,
        //               eventId: market.sportId,
        //               exposure: -0,
        //               ipAddress: ipAddress,
        //               type: IBetType.Match,
        //               matchName: getCurrentMatch.name,
        //               betOn: betOn,
        //               oddsType: market.oddsType,
        //               gtype: gtype,
        //             },
        //           })
        //         );
        //       }
        //     };

        //     // âœ… CRICKET FIX: For cricket bookmaker, use match odds layout (sportId 4)
        //     const isCricketBookmaker = isBookmaker && (market.sportId === 4 || getCurrentMatch?.sportId === 4);

        //     // Common box style with proper TypeScript typing
        //     const getBoxStyle = (isBack: boolean): React.CSSProperties => ({
        //       display: "flex",
        //       flexDirection: "column" as "column", // Type assertion
        //       justifyContent: "endf",
        //       alignItems: "center",
        //       minHeight: "40px",
        //       padding: "4px",
        //       maxWidth: "33%",
        //       boxSizing: "border-box",
        //       backgroundColor: isBack ? "#72bbef" : "#faa9ba",
        //       width: isCricketBookmaker ? "auto" : (isBookmaker ? "100%" : "auto"), // âœ… CRICKET: Use auto width like match odds
        //       flex: isCricketBookmaker ? 1 : (isBookmaker ? undefined : 1), // âœ… CRICKET: Use flex like match odds
        //     });

        //     // Column container style with proper TypeScript typing
        //     const columnStyleBack: React.CSSProperties = {
        //       flex: 1,
        //       display: "flex",
        //       gap: "1px",
        //       flexDirection: (isBookmaker && !isCricketBookmaker)
        //         ? "column"
        //         : ("row-reverse" as "column" | "row-reverse"), // âœ… CRICKET: Use row-reverse like match odds
        //       flexWrap: (isBookmaker && !isCricketBookmaker) ? "nowrap" : ("wrap" as "nowrap" | "wrap"), // âœ… CRICKET: Use wrap like match odds
        //       alignItems: (isBookmaker && !isCricketBookmaker) ? "flex-end" : undefined, // âœ… CRICKET: No special alignment
        //     };
        //     const columnStyleLay: React.CSSProperties = {
        //       flex: 1,
        //       display: "flex",
        //       gap: "1px",
        //       // padding:"0px",
        //       flexDirection: (isBookmaker && !isCricketBookmaker) ? "column" : ("row" as "column" | "row"), // âœ… CRICKET: Use row like match odds
        //       flexWrap: (isBookmaker && !isCricketBookmaker) ? "nowrap" : ("wrap" as "nowrap" | "wrap"), // âœ… CRICKET: Use wrap like match odds
        //     };
        //     const availableToBack = () => {
        //       const hasOnlySingleValues =
        //         isBookmaker && selections?.availableToBack?.length === 1;

        //       if (
        //         !selections?.availableToBack ||
        //         selections.availableToBack.length === 0
        //       ) {
        //         console.log(`âš ï¸ No back odds available for ${market.marketName}`);
        //         return null;
        //       }

        //       return selections?.availableToBack?.map((back: any, index: number) => {
        //         const i = 2 - index;
        //         const cls = index === 2 ? "back" : `back${i}`;
        //         const blinkCls = back.changed ? "blink market-box-glow" : "";

        //         // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
        //         if (isMobile && market.oddsType == OddsType.F && index != 2) return;

        //         // âœ… CRICKET FIX: For cricket bookmaker, show all boxes like match odds
        //         // For non-cricket bookmaker with single values, show only the first box
        //         if (isBookmaker && !isCricketBookmaker && hasOnlySingleValues && index !== 0) return;

        //         return (
        //           <div
        //             onClick={() => onBet(true, back)}
        //             key={index}
        //             style={getBoxStyle(true)}
        //             className={`text-center back ${cls} ${blinkCls}`}
        //           >
        //             <span className="odd d-block">
        //               {isBookmaker ? back.price1 || "-" : back.price || "-"}
        //             </span>
        //             <span className="d-block">
        //               {back.size ? nFormatter(back.size, 1) : "-"}
        //             </span>
        //           </div>
        //         );
        //       });
        //     };

        //     const availableToLay = () => {
        //       const hasOnlySingleValues =
        //         isBookmaker && selections?.availableToLay?.length === 1;

        //       if (
        //         !selections?.availableToLay ||
        //         selections.availableToLay.length === 0
        //       ) {
        //         console.log(`âš ï¸ No lay odds available for ${market.marketName}`);
        //         return null;
        //       }

        //       return selections?.availableToLay?.map((lay: any, index: number) => {
        //         const i = index;
        //         const cls = index === 0 ? "lay" : `lay${i}`;
        //         const blinkCls = lay.changed ? "blink market-box-glow" : "";

        //         // Show only 2 boxes for Fancy markets on mobile, all boxes for other markets
        //         if (isMobile && market.oddsType == OddsType.F && index != 0) return;

        //         // âœ… CRICKET FIX: For cricket bookmaker, show all boxes like match odds
        //         // For non-cricket bookmaker with single values, show only the first box
        //         if (isBookmaker && !isCricketBookmaker && hasOnlySingleValues && index !== 0) return;

        //         return (
        //           <div
        //             onClick={() => onBet(false, lay)}
        //             key={index}
        //             style={getBoxStyle(false)}
        //             className={`text-center ${cls} ${blinkCls}`}
        //           >
        //             <span className="odd d-block">
        //               {isBookmaker ? lay.price1 || "-" : lay.price || "-"}
        //             </span>
        //             <span className="d-block">
        //               {lay.size ? nFormatter(lay.size, 1) : "-"}
        //             </span>
        //           </div>
        //         );
        //       });
        //     };

        //     return (
        //       <div
        //         style={
        //           {
        //             display: "flex",
        //             width: "100%",
        //             // background: "green",
        //             overflow: "hidden",
        //             boxSizing: "border-box",
        //             padding: "0px",
        //             gap: "1px",
        //           } as React.CSSProperties
        //         }
        //       >
        //         {/* Back Boxes Column */}
        //         <div style={columnStyleBack}>{availableToBack()}</div>

        //         {/* Lay Boxes Column */}
        //         <div style={columnStyleLay}>{availableToLay()}</div>
        //       </div>
        //     );
        //   }
        // );

        // import React from 'react';
        // import { IBetOn, IBetType } from '../../../models/IBet';
        // import IRunner from '../../../models/IRunner';
        // import IMarket, { OddsType } from '../../../models/IMarket';
        // import { betPopup } from '../../../redux/actions/bet/betSlice';
        // import { selectCurrentMatch } from '../../../redux/actions/sports/sportSlice';
        // import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
        // import authService from '../../../services/auth.service';
        // import { nFormatter } from '../../../utils/helper';
        // import { selectUserData } from '../../../redux/actions/login/loginSlice';
        // import { RoleType } from '../../../models/User';
        // import { isMobile } from 'react-device-detect';

        // type Props = {
        //   selections: any;
        //   selectionsPrev: any;
        //   runner: IRunner;
        //   market: IMarket;
        // };

        // export const AvailableToBackLay = React.memo(({ selections, market, runner }: Props) => {
        //   const dispatch = useAppDispatch();
        //   const getCurrentMatch = useAppSelector(selectCurrentMatch);
        //   const userState = useAppSelector(selectUserData);

        //   const onBet = (isBack = false, back: { price: number; size: number; price1?: string }) => {
        //     const ipAddress = authService.getIpAddress();
        //     if (market.oddsType == OddsType.BM && back.size == 0) return;
        //     let finalOdds = back.price;
        //     if (market.oddsType === OddsType.BM && back.price1) {
        //       finalOdds = parseFloat(back.price1);
        //     }
        //     let betOn = IBetOn.MATCH_ODDS;
        //     if (market.oddsType === OddsType.BM || market.marketName?.toLowerCase().includes('bookmaker')) {
        //       betOn = 'BOOKMAKER' as any;
        //     }
        //     if (finalOdds > 0 && back.size && userState.user.role === RoleType.user) {
        //       let gtype = market.gtype;
        //       if (!gtype) {
        //         if (market.oddsType === OddsType.BM) {
        //           gtype = 'match1';
        //         } else if (market.marketName?.toUpperCase().includes('FANCY') || market.marketName?.toUpperCase().includes('SESSION')) {
        //           gtype = 'fancy';
        //         } else {
        //           gtype = 'match';
        //         }
        //       }
        //       dispatch(
        //         betPopup({
        //           isOpen: true,
        //           betData: {
        //             isBack,
        //             odds: parseFloat(finalOdds.toFixed(4)),
        //             volume: back.size,
        //             marketId: market.marketId,
        //             marketName: market.marketName,
        //             matchId: market.matchId,
        //             selectionName: runner.runnerName,
        //             selectionId: runner.selectionId,
        //             pnl: 0,
        //             stack: 0,
        //             currentMarketOdds: finalOdds,
        //             eventId: market.sportId,
        //             exposure: -0,
        //             ipAddress: ipAddress,
        //             type: IBetType.Match,
        //             matchName: getCurrentMatch.name,
        //             betOn: betOn,
        //             oddsType: market.oddsType,
        //             gtype: gtype,
        //           },
        //         })
        //       );
        //     }
        //   };

        //   // --- SHIFT & REVERSE LOGIC FOR BACK ODDS ---
        //   const availableToBack = () => {
        //     let oddsArr = selections.availableToBack ? [...selections.availableToBack] : [];
        //     if (oddsArr.length > 1) {
        //       oddsArr = oddsArr.filter(o => o && (o.price1 || o.price));
        //       while (oddsArr.length < 3) {
        //         oddsArr.unshift(null);
        //       }
        //       // oddsArr = oddsArr.reverse();
        //     }
        //     if (oddsArr.length === 0) {
        //       const classforbox = (!isMobile) ? 'box-1' : 'box-2';
        //       return (
        //         <div className={`${classforbox} text-center back no-odds-box`}>
        //           <span className='odd d-block' style={{ fontSize: '13px' }}>-</span>
        //           <span className='d-block'>-</span>
        //         </div>
        //       );
        //     }
        //     return oddsArr.map((back: any, index: number) => {
        //       const i = index;
        //       // Always use 'box-1 back' for all boxes (so all have first box color)
        //       const classforbox = 'box-1 back';
        //       const cls = `back${i}`;
        //       const blinkCls = back && back.changed ? 'blink market-box-glow' : '';
        //       if (isMobile && index !== 0) return null;
        //       return (
        //         <div
        //           onClick={() => back ? onBet(true, back) : null}
        //           key={index}
        //           className={`${classforbox} text-center ${cls} ${blinkCls}`}
        //         >
        //           <span className='odd d-block' style={{fontSize:'13px'}}>
        //             {back
        //               ? (market.oddsType == OddsType.BM
        //                   ? back.price1
        //                     ? back.price1
        //                     : '-'
        //                   : back.price
        //                   ? back.price
        //                   : '-')
        //               : '-'}
        //           </span>
        //           <span className='d-block'>{back && back.size ? nFormatter(back.size, 1) : '-'}</span>
        //         </div>
        //       );
        //     });
        //   };

        //   // --- LAY ODDS (left shift logic, reversed row) ---
        //   const availableToLay = () => {
        //     let oddsArr = selections.availableToLay ? [...selections.availableToLay] : [];
        //     if (oddsArr.length > 1) {
        //       oddsArr = oddsArr.filter(o => o && (o.price1 || o.price));
        //       while (oddsArr.length < 3) {
        //         oddsArr.push(null);
        //       }
        //       oddsArr = oddsArr.reverse(); // Reverse the row for lay odds
        //     }
        //     if (oddsArr.length === 0) {
        //       const classforbox = (!isMobile) ? 'box-1' : 'box-2';
        //       return (
        //         <div className={`${classforbox} text-center lay no-odds-box`}>
        //           <span className='odd d-block' style={{ fontSize: '13px' }}>-</span>
        //           <span className='d-block'>-</span>
        //         </div>
        //       );
        //     }
        //     return oddsArr.map((lay: any, index: number) => {
        //       const i = index;
        //       const cls = index === 0 ? 'lay' : `lay${i}`;
        //       const blinkCls = lay && lay.changed ? 'blink market-box-glow' : '';
        //       if (isMobile && index !== 0) return null;
        //       const classforbox = (!isMobile) ? 'box-1' : 'box-2';
        //       return (
        //         <div
        //           onClick={() => lay ? onBet(false, lay) : null}
        //           key={index}
        //           className={`${classforbox} text-center ${cls} ${blinkCls}`}
        //         >
        //           <span className='odd d-block' style={{fontSize:'13px'}}>
        //             {lay
        //               ? (market.oddsType == OddsType.BM
        //                   ? lay.price1
        //                     ? lay.price1
        //                     : '-'
        //                   : lay.price
        //                   ? lay.price
        //                   : '-')
        //               : '-'}
        //           </span>
        //           <span className='d-block'>{lay && lay.size ? nFormatter(lay.size, 1) : '-'}</span>
        //         </div>
        //       );
        //     });
        //   };

        //   return (
        //     <>
        //       {availableToBack()}
        //       {availableToLay()}
        //     </>
        //   );
        // });

        //namire update

        const AvailableToBackLay = /*#__PURE__*/ _s(
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().memo(
            (_c = _s(
              ({ selections, market, runner }) => {
                _s();
                const dispatch = (0,
                _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
                const getCurrentMatch = (0,
                _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(
                  _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_4__.selectCurrentMatch
                );
                const userState = (0,
                _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(
                  _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_8__.selectUserData
                );
                const onBet = (isBack = false, back) => {
                  var _market$marketName;
                  const ipAddress =
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_6__[
                      "default"
                    ].getIpAddress();
                  if (
                    market.oddsType ==
                      _models_IMarket__WEBPACK_IMPORTED_MODULE_2__.OddsType
                        .BM &&
                    back.size == 0
                  )
                    return;
                  let finalOdds = back.price;
                  if (
                    market.oddsType ===
                      _models_IMarket__WEBPACK_IMPORTED_MODULE_2__.OddsType
                        .BM &&
                    back.price1
                  ) {
                    finalOdds = parseFloat(back.price1);
                  }
                  let betOn =
                    _models_IBet__WEBPACK_IMPORTED_MODULE_1__.IBetOn.MATCH_ODDS;
                  if (
                    market.oddsType ===
                      _models_IMarket__WEBPACK_IMPORTED_MODULE_2__.OddsType
                        .BM ||
                    ((_market$marketName = market.marketName) !== null &&
                      _market$marketName !== void 0 &&
                      _market$marketName.toLowerCase().includes("bookmaker"))
                  ) {
                    betOn = "BOOKMAKER";
                  }
                  if (
                    finalOdds > 0 &&
                    back.size &&
                    userState.user.role ===
                      _models_User__WEBPACK_IMPORTED_MODULE_9__.RoleType.user
                  ) {
                    let gtype = market.gtype;
                    if (!gtype) {
                      var _market$marketName2, _market$marketName3;
                      if (
                        market.oddsType ===
                        _models_IMarket__WEBPACK_IMPORTED_MODULE_2__.OddsType.BM
                      ) {
                        gtype = "match1";
                      } else if (
                        ((_market$marketName2 = market.marketName) !== null &&
                          _market$marketName2 !== void 0 &&
                          _market$marketName2
                            .toUpperCase()
                            .includes("FANCY")) ||
                        ((_market$marketName3 = market.marketName) !== null &&
                          _market$marketName3 !== void 0 &&
                          _market$marketName3.toUpperCase().includes("SESSION"))
                      ) {
                        gtype = "fancy";
                      } else {
                        gtype = "match";
                      }
                    }
                    dispatch(
                      (0,
                      _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_3__.betPopup)(
                        {
                          isOpen: true,
                          betData: {
                            isBack,
                            odds: parseFloat(finalOdds.toFixed(4)),
                            volume: back.size,
                            marketId: market.marketId,
                            marketName: market.marketName,
                            matchId: market.matchId,
                            selectionName: runner.runnerName,
                            selectionId: runner.selectionId,
                            pnl: 0,
                            stack: 0,
                            currentMarketOdds: finalOdds,
                            eventId: market.sportId,
                            exposure: -0,
                            ipAddress: ipAddress,
                            type: _models_IBet__WEBPACK_IMPORTED_MODULE_1__
                              .IBetType.Match,
                            matchName: getCurrentMatch.name,
                            betOn: betOn,
                            oddsType: market.oddsType,
                            gtype: gtype,
                          },
                        }
                      )
                    );
                  }
                };

                // --- SHIFT & REVERSE LOGIC FOR BACK ODDS ---
                const availableToBack = () => {
                  let oddsArr = selections.availableToBack
                    ? [...selections.availableToBack]
                    : [];
                  if (oddsArr.length > 1) {
                    oddsArr = oddsArr.filter((o) => o && (o.price1 || o.price));
                    while (oddsArr.length < 3) {
                      oddsArr.push(null);
                    }
                    if (
                      react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile
                    ) {
                      oddsArr = oddsArr.reverse();
                    }
                  }
                  if (oddsArr.length === 0) {
                    const classforbox =
                      !react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile
                        ? "box-1 back"
                        : "box-2 back";
                    return /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                      "div",
                      {
                        className: `${classforbox} text-center back no-odds-box`,
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "span",
                            {
                              className: "odd d-block",
                              style: {
                                fontSize: "13px",
                              },
                              children: "-",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 2687,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "span",
                            {
                              className: "d-block",
                              children: "-",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 2688,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 2686,
                        columnNumber: 9,
                      },
                      undefined
                    );
                  }
                  return oddsArr.map((back, index) => {
                    const i = index;
                    // Always use 'box-1 back' for all boxes (so all have first box color)
                    // const classforbox = 'box-1 back';
                    // const cls = index === 2 ? 'back' : `back${2-i}`;
                    const cls =
                      react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile
                        ? "back"
                        : index === 2
                        ? "back"
                        : `back${2 - index}`;
                    const blinkCls =
                      back && back.changed ? "blink market-box-glow" : "";
                    const classforbox =
                      !react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile
                        ? "box-1"
                        : "box-2";
                    if (
                      react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile &&
                      index !== 0
                    )
                      return null;
                    return /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                      "div",
                      {
                        onClick: () => (back ? onBet(true, back) : null),
                        className: `${classforbox} text-center ${cls} ${blinkCls}`,
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "span",
                            {
                              className: "odd d-block",
                              style: {
                                fontSize: "13px",
                              },
                              children: back
                                ? market.oddsType ==
                                  _models_IMarket__WEBPACK_IMPORTED_MODULE_2__
                                    .OddsType.BM
                                  ? back.price1
                                    ? back.price1
                                    : "-"
                                  : back.price
                                  ? back.price
                                  : "-"
                                : "-",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 2708,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "span",
                            {
                              className: "d-block",
                              children:
                                back && back.size
                                  ? (0,
                                    _utils_helper__WEBPACK_IMPORTED_MODULE_7__.nFormatter)(
                                      back.size,
                                      1
                                    )
                                  : "-",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 2719,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      index,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 2703,
                        columnNumber: 9,
                      },
                      undefined
                    );
                  });
                };

                // --- LAY ODDS (left shift logic, reversed row) ---
                const availableToLay = () => {
                  let oddsArr = selections.availableToLay
                    ? [...selections.availableToLay]
                    : [];
                  if (oddsArr.length > 1) {
                    oddsArr = oddsArr.filter((o) => o && (o.price1 || o.price));
                    while (oddsArr.length < 3) {
                      oddsArr.push(null);
                    }
                    // Don't reverse for Match Odds markets (reversing causes first/third values to swap)
                    const isMatchOddsMarket =
                      /match[_-\s]?odds/i.test(market.marketName || "") ||
                      market.gtype === "match";
                    if (!isMatchOddsMarket) {
                      oddsArr = oddsArr.reverse(); // Reverse the row for lay odds
                    }
                  }
                  if (oddsArr.length === 0) {
                    const classforbox =
                      !react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile
                        ? "box-1 lay"
                        : "box-2 lay";
                    return /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                      "div",
                      {
                        className: `${classforbox} text-center lay no-odds-box`,
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "span",
                            {
                              className: "odd d-block",
                              style: {
                                fontSize: "13px",
                              },
                              children: "-",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 2743,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "span",
                            {
                              className: "d-block",
                              children: "-",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 2744,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 2742,
                        columnNumber: 9,
                      },
                      undefined
                    );
                  }
                  return oddsArr.map((lay, index) => {
                    const i = index;
                    const cls = index === 0 ? "lay" : `lay${i}`;
                    const blinkCls =
                      lay && lay.changed ? "blink market-box-glow" : "";
                    if (
                      react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile &&
                      index !== 0
                    )
                      return null;
                    const classforbox =
                      !react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile
                        ? "box-1"
                        : "box-2";
                    return /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                      "div",
                      {
                        onClick: () => (lay ? onBet(false, lay) : null),
                        className: `${classforbox} text-center ${cls} ${blinkCls}`,
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "span",
                            {
                              className: "odd d-block",
                              style: {
                                fontSize: "13px",
                              },
                              children: lay
                                ? market.oddsType ==
                                  _models_IMarket__WEBPACK_IMPORTED_MODULE_2__
                                    .OddsType.BM
                                  ? lay.price1
                                    ? lay.price1
                                    : "-"
                                  : lay.price
                                  ? lay.price
                                  : "-"
                                : "-",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 2760,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "span",
                            {
                              className: "d-block",
                              children:
                                lay && lay.size
                                  ? (0,
                                    _utils_helper__WEBPACK_IMPORTED_MODULE_7__.nFormatter)(
                                      lay.size,
                                      1
                                    )
                                  : "-",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 2771,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      index,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 2755,
                        columnNumber: 9,
                      },
                      undefined
                    );
                  });
                };
                return /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment,
                  {
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                      "div",
                      {
                        className: "new-container",
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "div",
                            {
                              className: "new-child new-back",
                              children: availableToBack(),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 2780,
                              columnNumber: 3,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                            "div",
                            {
                              className: "new-child new-lay",
                              children: availableToLay(),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 2783,
                              columnNumber: 3,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 2779,
                        columnNumber: 4,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false
                );
              },
              "QIDWQ6Kp4bmOJqps58oBOsk0jaI=",
              false,
              function () {
                return [
                  _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch,
                  _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,
                  _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,
                ];
              }
            ))
          ),
          "QIDWQ6Kp4bmOJqps58oBOsk0jaI=",
          false,
          function () {
            return [
              _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch,
              _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,
              _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,
            ];
          }
        );
        _c2 = AvailableToBackLay;
        var _c, _c2;
        __webpack_require__.$Refresh$.register(
          _c,
          "AvailableToBackLay$React.memo"
        );
        __webpack_require__.$Refresh$.register(_c2, "AvailableToBackLay");

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/pages/odds/components/fancy.tsx":
      /*!*********************************************!*\
  !*** ./src/pages/odds/components/fancy.tsx ***!
  \*********************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _context_webSocket__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../context/webSocket */ "./src/context/webSocket.tsx"
          );
        /* harmony import */ var _fancy_fancy_list__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./fancy/fancy-list */ "./src/pages/odds/components/fancy/fancy-list.tsx"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-redux */ "./node_modules/react-redux/es/index.js"
          );
        /* harmony import */ var _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../../redux/actions/bet/betSlice */ "./src/redux/actions/bet/betSlice.ts"
          );
        /* harmony import */ var _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../redux/actions/common/commonSlice */ "./src/redux/actions/common/commonSlice.ts"
          );
        /* harmony import */ var _services_sports_service__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../services/sports.service */ "./src/services/sports.service.ts"
          );
        /* harmony import */ var _accordian_header__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./accordian-header */ "./src/pages/odds/components/accordian-header.tsx"
          );
        /* harmony import */ var _models_IMarket__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../../models/IMarket */ "./src/models/IMarket.ts"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/odds/components/fancy.tsx";
        // /* eslint-disable */
        // import React, { MouseEvent } from 'react'
        // import LFancy from '../../../models/LFancy'
        // import { FancyType, IFancy } from '../../../models/IFancy'
        // import { SocketContext } from '../../../context/webSocket'
        // import { FancyList } from './fancy/fancy-list'
        // import { isMobile } from 'react-device-detect'
        // import { connect } from 'react-redux'
        // import { selectFancyType, setFancyType } from '../../../redux/actions/bet/betSlice'
        // import { store } from '../../../redux/store'
        // import { setRules } from '../../../redux/actions/common/commonSlice'
        // import sportsService from '../../../services/sports.service'

        // type FancyBallTypes = {
        //   blank: LFancy[]
        //   ballRun: LFancy[]
        //   overBallNo: LFancy[]
        //   fancy1: LFancy[]
        //   meter: LFancy[]
        //   khado: LFancy[]
        //   oddeven: LFancy[]
        //   cricketcasino: LFancy[]
        //   [key: string]: LFancy[]
        // }

        // // Market type to display name mapping
        // const FANCY_TYPE_NAMES: { [key: string]: string } = {
        //   session: 'Fancy',
        //   blank: 'Fancy',
        //   ballRun: 'Ball by Ball Session',
        //   overBallNo: 'Over by Over Session',
        //   fancy1: 'Fancy1',
        //   meter: 'Meter',
        //   khado: 'Khado',
        //   oddeven: 'Odd/Even',
        //   cricketcasino: 'Cricket Casino',
        //   wkt: 'Wicket',
        //   Four: 'Four',
        //   Sixes: 'Six',
        //   Casino: 'Cricket Casino'
        // }

        // class Fancy extends React.Component<
        //   {
        //     fancies: LFancy[]
        //     matchId: string
        //     fancyType: string
        //     setRules: (data: { open: boolean; type: string }) => void
        //     socketUser: any
        //   },
        //   {
        //     fancies: FancyBallTypes
        //     matchId: string
        //     fancyUpdate: Record<string, IFancy>
        //   }
        // > {
        //   static contextType = SocketContext
        //   context!: React.ContextType<typeof SocketContext>

        //   interval: any
        //   lastErrorTime: number = 0

        //   constructor(props: any) {
        //     super(props)
        //     const session = props.fancies
        //     const updateFancy: Record<string, IFancy> = {}
        //     const typesFancy: any = {}
        //     session
        //       .sort((a: any, b: any) => a.sr_no - b.sr_no)
        //       .forEach((fancy: LFancy) => {
        //         updateFancy[fancy.marketId] = {
        //           gtype: fancy.gtype as FancyType,
        //           SelectionId: fancy.marketId,
        //           RunnerName: fancy.fancyName,
        //         }
        //         // Use gtype for better categorization, fallback to name-based categorization
        //         const type = this.getFancyCategory(fancy)
        //         typesFancy[type] = typesFancy[type] ? [...typesFancy[type], fancy] : [fancy]
        //       })

        //     this.state = {
        //       matchId: props.matchId,
        //       fancies: typesFancy,
        //       fancyUpdate: updateFancy,
        //     }
        //   }

        //   componentDidMount(): void {
        //     this.socketEvents()
        //   }

        //   componentDidUpdate(prevProps: Readonly<{ fancies: LFancy[]; matchId: string }>): void {
        //     if (prevProps.matchId !== this.props.matchId) {
        //       this.leaveSocketEvents()
        //       this.socketEvents()
        //       clearInterval(this.interval)
        //     }
        //     if (prevProps.fancies !== this.props.fancies) {
        //       const typesFancy: any = {}
        //       this.props.fancies.forEach((fancy: LFancy) => {
        //         const type = this.getFancyCategory(fancy)
        //         typesFancy[type] = typesFancy[type] ? [...typesFancy[type], fancy] : [fancy]
        //       })
        //       this.setState({ fancies: typesFancy })
        //     }
        //   }

        //   socketEvents = () => {
        //     this.context.socket.emit('joinRoom', this.props.matchId)
        //     if (this.props.socketUser) {
        //       this.props.socketUser.emit('joinRoomMatchIdWUserId', this.props.matchId)
        //     }
        //     this.getFancySockets()
        //     this.addNewFancy()
        //     this.removeFancy()
        //     this.suspendedFancy()
        //     this.context.socket.on('connect', () => {
        //       this.context.socket.emit('joinRoom', this.props.matchId)
        //     })
        //   }

        //   leaveSocketEvents = () => {
        //     this.context.socket.off('addNewFancy')
        //     this.context.socket.off('removeFancy')
        //     this.context.socket.off('getFancyData')
        //     this.context.socket.off('suspendedFancy')
        //     this.context.socket.emit('leaveRoom', this.props.matchId)
        //   }

        //   getFancySockets() {
        //     const handler = () => {
        //       sportsService.fancyData(+this.props.matchId)
        //         .then(({ data }) => {
        //           console.log('ðŸŽ¯ Fancy API response:', data)

        //           // Transform fancy API response format
        //           let fancyData = [];
        //           if (data.data && Array.isArray(data.data)) {
        //             // Direct array format from API
        //             fancyData = data.data.map((item: any) => ({
        //               SelectionId: item.SelectionId,
        //               RunnerName: item.RunnerName,
        //               gtype: item.gtype,
        //               GameStatus: item.GameStatus,
        //               LayPrice1: item.LayPrice1 || 0,
        //               LaySize1: item.LaySize1 || 0,
        //               BackPrice1: item.BackPrice1 || 0,
        //               BackSize1: item.BackSize1 || 0,
        //               LayPrice2: item.LayPrice2 || 0,
        //               LaySize2: item.LaySize2 || 0,
        //               BackPrice2: item.BackPrice2 || 0,
        //               BackSize2: item.BackSize2 || 0,
        //               LayPrice3: item.LayPrice3 || 0,
        //               LaySize3: item.LaySize3 || 0,
        //               BackPrice3: item.BackPrice3 || 0,
        //               BackSize3: item.BackSize3 || 0,
        //               min: item.min,
        //               max: item.max,
        //               sr_no: item.sr_no,
        //               rem: item.rem || '',
        //               ballsess: item.ballsess || '',
        //               status: item.status || 'active',
        //               active: item.active !== false,
        //               suspended: item.suspended || item.GameStatus === 'SUSPENDED' || item.GameStatus === 'Ball Running',
        //               matchId: parseInt(this.props.matchId),
        //               sportId: 4
        //             }));
        //           } else if (data.sessions) {
        //             // Old format: direct sessions (fallback)
        //             fancyData = data.sessions;
        //           }

        //           console.log('ðŸŽ¯ Processed fancy data:', fancyData.length, 'items')

        //           const fancies = fancyData.reduce((acc: Record<string, IFancy>, fancy: IFancy) => {
        //             acc[fancy.SelectionId] = { ...this.state.fancyUpdate[fancy.SelectionId], ...fancy }
        //             return acc
        //           }, {})
        //           this.setState({ fancyUpdate: fancies })
        //         })
        //         .catch((error) => {
        //           // Handle timeout and other errors gracefully
        //           console.warn('Fancy data fetch failed:', error.message)
        //           // Don't spam the console with errors - just log once per minute
        //           if (!this.lastErrorTime || Date.now() - this.lastErrorTime > 60000) {
        //             console.error('Fancy API error:', error.message)
        //             this.lastErrorTime = Date.now()
        //           }
        //         })
        //     }
        //     // Update every 500ms (0.5 seconds) for faster odds updates
        //     this.interval = setInterval(handler, 500)

        //     // const socketHandler = (fancy: IFancy) => {
        //     //   this.setState({ fancyUpdate: { ...this.state.fancyUpdate, [fancy.SelectionId]: fancy } })
        //     // }
        //     // this.context.socket.on('getFancyData', socketHandler)
        //   }

        //   checkFancyKey = (allFancies: LFancy[], fancy: IFancy) => {
        //     return allFancies.findIndex((f) => f.marketId === fancy.SelectionId)
        //   }

        //   addNewFancy = () => {
        //     if (this.props.socketUser) {
        //       this.props.socketUser.on('addNewFancy', ({ newFancy, fancy }: any) => {
        //         const type = this.getFancyCategory(fancy)
        //         const allFacies = [...this.state.fancies[type]]

        //         if (this.checkFancyKey(allFacies, fancy) === -1 && this.props.fancyType == newFancy.gtype) {
        //           const items = { ...this.state.fancyUpdate }
        //           allFacies.push(newFancy)
        //           this.setState({
        //             fancies: {
        //               ...this.state.fancies,
        //               [type]: allFacies.sort((a: any, b: any) => a.sr_no - b.sr_no),
        //             },
        //             fancyUpdate: { ...items, [fancy.SelectionId]: fancy },
        //           })
        //         }
        //       })
        //     }
        //   }

        //   removeFancy = () => {
        //     if (this.props.socketUser)
        //       this.props.socketUser.on('removeFancy', (fancy: any) => {
        //         const type = this.getFancyCategory(fancy)
        //         const allFacies = [...this.state.fancies[type]]

        //         const fancies = allFacies.filter((f) => f.marketId !== fancy.marketId)
        //         delete this.state.fancyUpdate[fancy.marketId]
        //         this.setState({
        //           fancies: { ...this.state.fancies, [type]: fancies },
        //           fancyUpdate: this.state.fancyUpdate,
        //         })
        //       })
        //   }

        //   suspendedFancy = () => {
        //     this.context.socket.on('suspendedFancy', ({ fancy, type }) => {
        //       const fancies = [...this.state.fancies[this.getFancyCategory(fancy)]]

        //       const fanciesIndex = fancies.findIndex(
        //         (f) => f.marketId === fancy.marketId && f.matchId === fancy.matchId,
        //       )

        //       if (fanciesIndex !== -1) {
        //         if (type !== 'active') {
        //           fancies[fanciesIndex].GameStatus = fancy.GameStatus
        //           fancies[fanciesIndex].isSuspend = fancy.isSuspend
        //         } else {
        //           fancies[fanciesIndex].active = fancy.active
        //         }
        //         this.setState({
        //           fancies: { ...this.state.fancies, [type]: fancies },
        //           fancyUpdate: this.state.fancyUpdate,
        //         })
        //       }
        //     })
        //   }

        //   componentWillUnmount(): void {
        //     this.leaveSocketEvents()
        //     clearInterval(this.interval)
        //   }

        //   FancyBallTypes(fancyName: string) {
        //     let type = 'blank'
        //     if (fancyName) {
        //       if (fancyName.includes(' ball run ')) {
        //         type = 'ballRun'
        //       }
        //       if (
        //         /^Only/.test(fancyName) ||
        //         fancyName.includes(' ball No ') //||
        //         //fancyName.includes(' over run ')
        //       ) {
        //         type = 'overBallNo'
        //       }
        //     }
        //     return type
        //   }

        //   onFancyType = (type: string) => {
        //     // Remove this method as nav tabs are no longer used
        //   }

        //   fancyMenu = (fancyType: string) => {
        //     // Remove this method as nav tabs are no longer used
        //     return []
        //   }

        //   fancyheader = (title: string) => {
        //     return (
        //       <div className='table-header'>
        //         <div className={`float-left ${isMobile ? 'bg-theme text-white' : ''} country-name box-6`}>
        //           {isMobile ? title : ''}
        //         </div>
        //         <div className={`${isMobile ? 'box-2' : 'box-1'} float-left lay text-center`}>
        //           <b>No</b>
        //         </div>
        //         <div className={`${isMobile ? 'box-2' : 'box-1'} float-left back text-center`}>
        //           <b>Yes</b>
        //         </div>
        //         {!isMobile && <div className='box-2 float-left' />}
        //       </div>
        //     )
        //   }

        //   // Enhanced categorization function
        //   getFancyCategory(fancy: LFancy): string {
        //     // Map API gtype values to display categories
        //     const gtypeMapping: { [key: string]: string } = {
        //       'fancy': 'blank',           // Traditional fancy markets
        //       'fancy1': 'fancy1',         // Fancy1 markets - HIDDEN
        //       'fancy2': 'blank',          // Fancy2 markets - treat as traditional fancy
        //       'meter': 'meter',           // Meter markets
        //       'khado': 'khado',           // Khado markets - HIDDEN
        //       'oddeven': 'oddeven',       // Odd/Even markets - HIDDEN
        //       'cricketcasino': 'cricketcasino', // Cricket casino markets - HIDDEN
        //       'session': 'blank'          // Session markets - treat as traditional fancy
        //     };

        //     // First check if it has a specific gtype and map it
        //     if (fancy.gtype && gtypeMapping[fancy.gtype]) {
        //       return gtypeMapping[fancy.gtype];
        //     }

        //     // If gtype is not recognized, check if it's a valid category directly
        //     if (fancy.gtype && ['blank', 'fancy1', 'meter', 'khado', 'oddeven', 'ballRun', 'overBallNo', 'cricketcasino'].includes(fancy.gtype)) {
        //       return fancy.gtype;
        //     }

        //     // Fallback to name-based categorization for unknown types
        //     return this.FancyBallTypes(fancy.fancyName);
        //   }
        //   render(): React.ReactNode {
        //     const { fancies, matchId, fancyUpdate } = this.state
        //     const clsgrid = isMobile ? 'col-12' : 'col-6'

        //     // Helper function to render a fancy section
        //     const renderFancySection = (fancyKey: string, fancyList: LFancy[]) => {
        //       if (!fancyList || fancyList.length === 0) return null;

        //       const displayName = FANCY_TYPE_NAMES[fancyKey] || fancyKey.charAt(0).toUpperCase() + fancyKey.slice(1);
        //       const ruleType = this.getFancyRuleType(fancyKey);

        //       return (
        //         <div key={fancyKey} style={{ marginBottom: '20px' }}>
        //           {!isMobile && (
        //             <div className='market-title mt-1'>
        //               {displayName} Market
        //               <a
        //                 href='#'
        //                 onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        //                   e.preventDefault()
        //                   this.props.setRules({
        //                     open: true,
        //                     type: ruleType,
        //                   })
        //                 }}
        //                 className='m-r-5 game-rules-icon'
        //               >
        //                 <span>
        //                   <i className='fa fa-info-circle float-right' />
        //                 </span>
        //               </a>
        //             </div>
        //           )}
        //           {this.fancyheader(`${displayName} Market`)}
        //           <FancyList fancies={fancyList} fancyUpdate={fancyUpdate} />
        //         </div>
        //       );
        //     };

        //     return (
        //       <>
        //         <div
        //           className='fancy-market row'
        //           style={{ marginLeft: isMobile ? '0px' : '', marginRight: isMobile ? '0px' : '' }}
        //         >
        //           {/* Left Column */}
        //           <div className={`${clsgrid}`} style={{ padding: isMobile ? '0px' : '' }}>
        //             {/* Traditional Fancy/Session Markets */}
        //             {renderFancySection('blank', fancies.blank)}

        //             {/* Fancy1 Markets - HIDDEN */}
        //             {/* {renderFancySection('fancy1', fancies.fancy1)} */}

        //             {/* Ball Run Markets */}
        //             {renderFancySection('ballRun', fancies.ballRun)}
        //           </div>

        //           {/* Right Column */}
        //           <div className={`${clsgrid}`} style={{ padding: isMobile ? '0px' : '' }}>
        //             {/* Over Ball Number Markets */}
        //             {renderFancySection('overBallNo', fancies.overBallNo)}

        //             {/* Meter Markets */}
        //             {renderFancySection('meter', fancies.meter)}

        //             {/* Khado Markets - HIDDEN */}
        //             {/* {renderFancySection('khado', fancies.khado)} */}

        //             {/* Odd/Even Markets - HIDDEN */}
        //             {/* {renderFancySection('oddeven', fancies.oddeven)} */}

        //             {/* Cricket Casino Markets - HIDDEN */}
        //             {/* {renderFancySection('cricketcasino', fancies.cricketcasino)} */}

        //             {/* Other custom fancy types */}
        //             {Object.keys(fancies).map((fancyKey) => {
        //               // Skip already rendered types and hidden types
        //               if (['blank', 'fancy1', 'ballRun', 'overBallNo', 'meter', 'khado', 'oddeven', 'cricketcasino'].includes(fancyKey)) {
        //                 return null;
        //               }
        //               return renderFancySection(fancyKey, fancies[fancyKey]);
        //             })}
        //           </div>
        //         </div>
        //       </>
        //     )
        //   }

        //   // Helper function to get rule type for different fancy categories
        //   getFancyRuleType(fancyKey: string): string {
        //     const ruleTypeMap: { [key: string]: string } = {
        //       'blank': 'Fancy-Market-1',
        //       'fancy1': 'Fancy1-Market',
        //       'meter': 'Meter-Market',
        //       'khado': 'Khado-Market',
        //       'oddeven': 'OddEven-Market',
        //       'cricketcasino': 'Cricket-Casino-Market',
        //       'ballRun': 'Fancy-Market-1',
        //       'overBallNo': 'Fancy-Market-1'
        //     };

        //     return ruleTypeMap[fancyKey] || 'Fancy-Market-1';
        //   }
        // }

        // const mapStateToProps = (state: any) => ({
        //   fancyType: state.betReducer.fancyType,
        // })

        // const actionCreators = {
        //   selectFancyType,
        //   setRules,
        // }
        // export default connect(mapStateToProps, actionCreators)(Fancy)

        /* eslint-disable */

        // Market type to display name mapping
        const FANCY_TYPE_NAMES = {
          session: "Fancy",
          blank: "Fancy",
          ballRun: "Ball by Ball Session",
          overBallNo: "Over by Over Session",
          fancy1: "Fancy1",
          meter: "Meter",
          khado: "Khado",
          oddeven: "Odd/Even",
          cricketcasino: "Cricket Casino",
          wkt: "Wicket",
          Four: "Four",
          Sixes: "Six",
          Casino: "Cricket Casino",
        };
        class Fancy extends react__WEBPACK_IMPORTED_MODULE_0___default()
          .Component {
          constructor(props) {
            super(props);
            this.context = void 0;
            this.interval = void 0;
            this.lastErrorTime = 0;
            this.socketEvents = () => {
              this.context.socket.emit("joinRoom", this.props.matchId);
              if (this.props.socketUser) {
                this.props.socketUser.emit(
                  "joinRoomMatchIdWUserId",
                  this.props.matchId
                );
              }
              this.getFancySockets();
              this.addNewFancy();
              this.removeFancy();
              this.suspendedFancy();
              this.context.socket.on("connect", () => {
                this.context.socket.emit("joinRoom", this.props.matchId);
              });
            };
            this.leaveSocketEvents = () => {
              this.context.socket.off("addNewFancy");
              this.context.socket.off("removeFancy");
              this.context.socket.off("getFancyData");
              this.context.socket.off("suspendedFancy");
              this.context.socket.emit("leaveRoom", this.props.matchId);
            };
            this.checkFancyKey = (allFancies, fancy) => {
              return allFancies.findIndex(
                (f) => f.marketId === fancy.SelectionId
              );
            };
            this.addNewFancy = () => {
              if (this.props.socketUser) {
                this.props.socketUser.on(
                  "addNewFancy",
                  ({ newFancy, fancy }) => {
                    const type = this.getFancyCategory(fancy);
                    const allFacies = [...this.state.fancies[type]];
                    if (
                      this.checkFancyKey(allFacies, fancy) === -1 &&
                      this.props.fancyType == newFancy.gtype
                    ) {
                      const items = {
                        ...this.state.fancyUpdate,
                      };
                      allFacies.push(newFancy);
                      this.setState({
                        fancies: {
                          ...this.state.fancies,
                          [type]: allFacies.sort((a, b) => a.sr_no - b.sr_no),
                        },
                        fancyUpdate: {
                          ...items,
                          [fancy.SelectionId]: fancy,
                        },
                      });
                    }
                  }
                );
              }
            };
            this.removeFancy = () => {
              if (this.props.socketUser)
                this.props.socketUser.on("removeFancy", (fancy) => {
                  const type = this.getFancyCategory(fancy);
                  const allFacies = [...this.state.fancies[type]];
                  const fancies = allFacies.filter(
                    (f) => f.marketId !== fancy.marketId
                  );
                  delete this.state.fancyUpdate[fancy.marketId];
                  this.setState({
                    fancies: {
                      ...this.state.fancies,
                      [type]: fancies,
                    },
                    fancyUpdate: this.state.fancyUpdate,
                  });
                });
            };
            this.suspendedFancy = () => {
              this.context.socket.on("suspendedFancy", ({ fancy, type }) => {
                const fancies = [
                  ...this.state.fancies[this.getFancyCategory(fancy)],
                ];
                const fanciesIndex = fancies.findIndex(
                  (f) =>
                    f.marketId === fancy.marketId && f.matchId === fancy.matchId
                );
                if (fanciesIndex !== -1) {
                  if (type !== "active") {
                    fancies[fanciesIndex].GameStatus = fancy.GameStatus;
                    fancies[fanciesIndex].isSuspend = fancy.isSuspend;
                  } else {
                    fancies[fanciesIndex].active = fancy.active;
                  }
                  this.setState({
                    fancies: {
                      ...this.state.fancies,
                      [type]: fancies,
                    },
                    fancyUpdate: this.state.fancyUpdate,
                  });
                }
              });
            };
            this.onFancyType = (type) => {
              // Remove this method as nav tabs are no longer used
            };
            this.fancyMenu = (fancyType) => {
              // Remove this method as nav tabs are no longer used
              return [];
            };
            this.fancyheader = (title) => {
              return /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                "div",
                {
                  className: "table-header",
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                      "div",
                      {
                        className: `float-left ${
                          react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile
                            ? " text-white"
                            : ""
                        } country-name box-6`,
                        children:
                          react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile
                            ? title
                            : "",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 751,
                        columnNumber: 9,
                      },
                      this
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                      "div",
                      {
                        className: `${
                          react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile
                            ? "box-2"
                            : "box-1"
                        } float-left text-center`,
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                          "b",
                          {
                            children: "No",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 755,
                            columnNumber: 11,
                          },
                          this
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 754,
                        columnNumber: 3,
                      },
                      this
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                      "div",
                      {
                        className: `${
                          react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile
                            ? "box-2"
                            : "box-1"
                        } float-left text-center`,
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                          "b",
                          {
                            children: "Yes",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 758,
                            columnNumber: 11,
                          },
                          this
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 757,
                        columnNumber: 3,
                      },
                      this
                    ),
                    !react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile &&
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                        "div",
                        {
                          className: "box-2 float-left",
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 760,
                          columnNumber: 23,
                        },
                        this
                      ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: _jsxFileName,
                  lineNumber: 750,
                  columnNumber: 7,
                },
                this
              );
            };
            const session = props.fancies;
            const updateFancy = {};
            const typesFancy = {};
            session
              .sort((a, b) => a.sr_no - b.sr_no)
              .forEach((fancy) => {
                updateFancy[fancy.marketId] = {
                  gtype: fancy.gtype,
                  SelectionId: fancy.marketId,
                  RunnerName: fancy.fancyName,
                };
                // Use gtype for better categorization, fallback to name-based categorization
                const type = this.getFancyCategory(fancy);
                typesFancy[type] = typesFancy[type]
                  ? [...typesFancy[type], fancy]
                  : [fancy];
              });
            this.state = {
              matchId: props.matchId,
              fancies: typesFancy,
              fancyUpdate: updateFancy,
            };
          }
          componentDidMount() {
            this.socketEvents();
          }
          componentDidUpdate(prevProps) {
            if (prevProps.matchId !== this.props.matchId) {
              this.leaveSocketEvents();
              this.socketEvents();
              clearInterval(this.interval);
            }
            if (prevProps.fancies !== this.props.fancies) {
              const typesFancy = {};
              this.props.fancies.forEach((fancy) => {
                const type = this.getFancyCategory(fancy);
                typesFancy[type] = typesFancy[type]
                  ? [...typesFancy[type], fancy]
                  : [fancy];
              });
              this.setState({
                fancies: typesFancy,
              });
            }
          }
          getFancySockets() {
            const handler = () => {
              _services_sports_service__WEBPACK_IMPORTED_MODULE_7__["default"]
                .fancyData(+this.props.matchId)
                .then(({ data }) => {
                  console.log("ðŸŽ¯ Fancy API response:", data);

                  // Transform fancy API response format
                  let fancyData = [];
                  if (data.data && Array.isArray(data.data)) {
                    // Direct array format from API
                    fancyData = data.data.map((item) => ({
                      SelectionId: item.SelectionId,
                      RunnerName: item.RunnerName,
                      gtype: item.gtype,
                      GameStatus: item.GameStatus,
                      LayPrice1: item.LayPrice1 || 0,
                      LaySize1: item.LaySize1 || 0,
                      BackPrice1: item.BackPrice1 || 0,
                      BackSize1: item.BackSize1 || 0,
                      LayPrice2: item.LayPrice2 || 0,
                      LaySize2: item.LaySize2 || 0,
                      BackPrice2: item.BackPrice2 || 0,
                      BackSize2: item.BackSize2 || 0,
                      LayPrice3: item.LayPrice3 || 0,
                      LaySize3: item.LaySize3 || 0,
                      BackPrice3: item.BackPrice3 || 0,
                      BackSize3: item.BackSize3 || 0,
                      min: item.min,
                      max: item.max,
                      sr_no: item.sr_no,
                      rem: item.rem || "",
                      ballsess: item.ballsess || "",
                      status: item.status || "active",
                      active: item.active !== false,
                      suspended:
                        item.suspended ||
                        item.GameStatus === "SUSPENDED" ||
                        item.GameStatus === "Ball Running",
                      matchId: parseInt(this.props.matchId),
                      sportId: 4,
                    }));
                  } else if (data.sessions) {
                    // Old format: direct sessions (fallback)
                    fancyData = data.sessions;
                  }
                  console.log(
                    "ðŸŽ¯ Processed fancy data:",
                    fancyData.length,
                    "items"
                  );
                  const fancies = fancyData.reduce((acc, fancy) => {
                    acc[fancy.SelectionId] = {
                      ...this.state.fancyUpdate[fancy.SelectionId],
                      ...fancy,
                    };
                    return acc;
                  }, {});
                  this.setState({
                    fancyUpdate: fancies,
                  });
                })
                .catch((error) => {
                  // Handle timeout and other errors gracefully
                  console.warn("Fancy data fetch failed:", error.message);
                  // Don't spam the console with errors - just log once per minute
                  if (
                    !this.lastErrorTime ||
                    Date.now() - this.lastErrorTime > 60000
                  ) {
                    console.error("Fancy API error:", error.message);
                    this.lastErrorTime = Date.now();
                  }
                });
            };
            // Update every 500ms (0.5 seconds) for faster odds updates
            this.interval = setInterval(handler, 500);

            // const socketHandler = (fancy: IFancy) => {
            //   this.setState({ fancyUpdate: { ...this.state.fancyUpdate, [fancy.SelectionId]: fancy } })
            // }
            // this.context.socket.on('getFancyData', socketHandler)
          }
          componentWillUnmount() {
            this.leaveSocketEvents();
            clearInterval(this.interval);
          }
          FancyBallTypes(fancyName) {
            let type = "blank";
            if (fancyName) {
              if (fancyName.includes(" ball run ")) {
                type = "ballRun";
              }
              if (
                /^Only/.test(fancyName) ||
                fancyName.includes(" ball No ") //||
                //fancyName.includes(' over run ')
              ) {
                type = "overBallNo";
              }
            }
            return type;
          }
          // Enhanced categorization function
          getFancyCategory(fancy) {
            // Map API gtype values to display categories
            const gtypeMapping = {
              fancy: "blank",
              // Traditional fancy markets
              fancy1: "fancy1",
              // Fancy1 markets - HIDDEN
              fancy2: "blank",
              // Fancy2 markets - treat as traditional fancy
              meter: "meter",
              // Meter markets
              khado: "khado",
              // Khado markets - HIDDEN
              oddeven: "oddeven",
              // Odd/Even markets - HIDDEN
              cricketcasino: "cricketcasino",
              // Cricket casino markets - HIDDEN
              session: "blank", // Session markets - treat as traditional fancy
            };

            // First check if it has a specific gtype and map it
            if (fancy.gtype && gtypeMapping[fancy.gtype]) {
              return gtypeMapping[fancy.gtype];
            }

            // If gtype is not recognized, check if it's a valid category directly
            if (
              fancy.gtype &&
              [
                "blank",
                "fancy1",
                "meter",
                "khado",
                "oddeven",
                "ballRun",
                "overBallNo",
                "cricketcasino",
              ].includes(fancy.gtype)
            ) {
              return fancy.gtype;
            }

            // Fallback to name-based categorization for unknown types
            return this.FancyBallTypes(fancy.fancyName);
          }
          render() {
            const { fancies, matchId, fancyUpdate } = this.state;
            const clsgrid =
              react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile
                ? "col-12"
                : "col-6";

            // Helper function to render a fancy section
            const renderFancySection = (fancyKey, fancyList) => {
              var _fancyList$, _ref, _this$state$fancyUpda;
              if (!fancyList || fancyList.length === 0) return null;
              const displayName =
                FANCY_TYPE_NAMES[fancyKey] ||
                fancyKey.charAt(0).toUpperCase() + fancyKey.slice(1);
              const ruleType = this.getFancyRuleType(fancyKey);
              const headerMarket = {
                isActive: true,
                isDelete: false,
                marketId: `${this.props.matchId}-${fancyKey}`,
                marketName: `${displayName} Market`,
                gtype: "fancy",
                matchId: parseInt(this.props.matchId),
                oddsType:
                  _models_IMarket__WEBPACK_IMPORTED_MODULE_9__.OddsType.F,
                seriesId: "0",
                sportId: 4,
                __v: 0,
                runners: [],
              };
              const firstId =
                fancyList === null || fancyList === void 0
                  ? void 0
                  : (_fancyList$ = fancyList[0]) === null ||
                    _fancyList$ === void 0
                  ? void 0
                  : _fancyList$.marketId;
              const offplaylimit = Number(
                (_ref =
                  firstId &&
                  ((_this$state$fancyUpda = this.state.fancyUpdate[firstId]) ===
                    null || _this$state$fancyUpda === void 0
                    ? void 0
                    : _this$state$fancyUpda.max)) !== null && _ref !== void 0
                  ? _ref
                  : 0
              );
              return /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                "div",
                {
                  style: {
                    marginBottom: "1px",
                  },
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                    _accordian_header__WEBPACK_IMPORTED_MODULE_8__["default"],
                    {
                      market: headerMarket,
                      // Override setRules so clicking the info icon opens the correct rule type label
                      setRules: () =>
                        this.props.setRules({
                          open: true,
                          type: ruleType,
                        }),
                      offplaylimit: offplaylimit,
                      oddsData: null,
                      runnersName: {},
                      getMarketBook: () => {},
                      selectionsPrev: {},
                      isMobile:
                        react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile,
                      children: [
                        this.fancyheader(
                          react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile
                            ? ""
                            : `${displayName} Market`
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                          _fancy_fancy_list__WEBPACK_IMPORTED_MODULE_2__.FancyList,
                          {
                            fancies: fancyList,
                            fancyUpdate: fancyUpdate,
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 831,
                            columnNumber: 13,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 819,
                      columnNumber: 11,
                    },
                    this
                  ),
                },
                fancyKey,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 818,
                  columnNumber: 9,
                },
                this
              );
            };
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment,
              {
                children: /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                  "div",
                  {
                    className: "fancy-market row",
                    style: {
                      marginLeft:
                        react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile
                          ? "0px"
                          : "",
                      marginRight:
                        react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile
                          ? "0px"
                          : "",
                    },
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                        "div",
                        {
                          className: `${clsgrid}`,
                          style: {
                            padding:
                              react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile
                                ? "0px"
                                : "",
                          },
                          children: [
                            renderFancySection("blank", fancies.blank),
                            renderFancySection("ballRun", fancies.ballRun),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 844,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(
                        "div",
                        {
                          className: `${clsgrid}`,
                          style: {
                            padding:
                              react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile
                                ? "0px"
                                : "",
                          },
                          children: [
                            renderFancySection(
                              "overBallNo",
                              fancies.overBallNo
                            ),
                            renderFancySection("meter", fancies.meter),
                            Object.keys(fancies).map((fancyKey) => {
                              // Skip already rendered types and hidden types
                              if (
                                [
                                  "blank",
                                  "fancy1",
                                  "ballRun",
                                  "overBallNo",
                                  "meter",
                                  "khado",
                                  "oddeven",
                                  "cricketcasino",
                                ].includes(fancyKey)
                              ) {
                                return null;
                              }
                              return renderFancySection(
                                fancyKey,
                                fancies[fancyKey]
                              );
                            }),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 856,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 839,
                    columnNumber: 9,
                  },
                  this
                ),
              },
              void 0,
              false
            );
          }

          // Helper function to get rule type for different fancy categories
          getFancyRuleType(fancyKey) {
            const ruleTypeMap = {
              blank: "Fancy-Market-1",
              fancy1: "Fancy1-Market",
              meter: "Meter-Market",
              khado: "Khado-Market",
              oddeven: "OddEven-Market",
              cricketcasino: "Cricket-Casino-Market",
              ballRun: "Fancy-Market-1",
              overBallNo: "Fancy-Market-1",
            };
            return ruleTypeMap[fancyKey] || "Fancy-Market-1";
          }
        }
        Fancy.contextType =
          _context_webSocket__WEBPACK_IMPORTED_MODULE_1__.SocketContext;
        const mapStateToProps = (state) => ({
          fancyType: state.betReducer.fancyType,
        });
        const actionCreators = {
          selectFancyType:
            _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_5__.selectFancyType,
          setRules:
            _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_6__.setRules,
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (0,
        react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(
          mapStateToProps,
          actionCreators
        )(Fancy);

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/pages/odds/components/fancy/book-popup.tsx":
      /*!********************************************************!*\
  !*** ./src/pages/odds/components/fancy/book-popup.tsx ***!
  \********************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-modal */ "./node_modules/react-modal/lib/index.js"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_modal__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../../services/book.service */ "./src/services/book.service.ts"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../../redux/actions/bet/betSlice */ "./src/redux/actions/bet/betSlice.ts"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/odds/components/fancy/book-popup.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const BookPopup = () => {
          _s();
          const bookFancy = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(
            _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__.selectBookFancy
          );
          const dispatch = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
          const [book, setBook] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
          const [isOpen, setIsOpen] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            if (bookFancy.matchId) {
              _services_book_service__WEBPACK_IMPORTED_MODULE_2__["default"]
                .getFancyBook(bookFancy)
                .then((res) => {
                  setBook(res.data.data);
                  setIsOpen(true);
                });
            }
          }, [bookFancy]);
          const close = () => {
            dispatch(
              (0,
              _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__.setBookFancy)(
                {}
              )
            );
            setIsOpen(false);
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
            {
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                react_modal__WEBPACK_IMPORTED_MODULE_1___default(),
                {
                  isOpen: isOpen,
                  onRequestClose: (e) => {
                    close();
                  },
                  contentLabel: "Fancy Book",
                  className: "modal-dialog modal-sm",
                  ariaHideApp: false,
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                    "div",
                    {
                      className: "modal-content",
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                          "div",
                          {
                            className: "modal-header",
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                "h5",
                                {
                                  children: "Run Position",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 40,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                "span",
                                {
                                  onClick: close,
                                  className: "float-right",
                                  children: "X",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 41,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 39,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                          "table",
                          {
                            className: "table",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                              "tbody",
                              {
                                children:
                                  Object.keys(book).length > 0 &&
                                  Object.keys(book).map((itemKey) =>
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                      "tr",
                                      {
                                        className:
                                          book[itemKey] < 0 ? "lay" : "back",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "td",
                                            {
                                              children: itemKey,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 50,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "td",
                                            {
                                              className:
                                                book[itemKey] < 0
                                                  ? "red"
                                                  : "green",
                                              children: book[itemKey],
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 51,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                        ],
                                      },
                                      itemKey,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 49,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    )
                                  ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 46,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 45,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 5,
                },
                undefined
              ),
            },
            void 0,
            false
          );
        };
        _s(BookPopup, "6f34gsGQORjIpct87azJVyzeKT0=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,
          ];
        });
        _c = BookPopup;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          BookPopup;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "BookPopup");

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/pages/odds/components/fancy/fancy-list.tsx":
      /*!********************************************************!*\
  !*** ./src/pages/odds/components/fancy/fancy-list.tsx ***!
  \********************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ FancyList: () => /* binding */ FancyList,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _models_IBet__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../../models/IBet */ "./src/models/IBet.ts"
          );
        /* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../../models/User */ "./src/models/User.ts"
          );
        /* harmony import */ var _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../../redux/actions/bet/betSlice */ "./src/redux/actions/bet/betSlice.ts"
          );
        /* harmony import */ var _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../../../redux/actions/common/commonSlice */ "./src/redux/actions/common/commonSlice.ts"
          );
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
          );
        /* harmony import */ var _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../../redux/actions/sports/sportSlice */ "./src/redux/actions/sports/sportSlice.ts"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../../../services/auth.service */ "./src/services/auth.service.ts"
          );
        /* harmony import */ var _CasinoList_component_common_limitinfo__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../../../CasinoList/component/_common/limitinfo */ "./src/pages/CasinoList/component/_common/limitinfo.tsx"
          );
        /* harmony import */ var _pnl_calculate__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../pnl-calculate */ "./src/pages/odds/components/pnl-calculate.tsx"
          );
        /* harmony import */ var _models_IMarket__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ../../../../models/IMarket */ "./src/models/IMarket.ts"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/odds/components/fancy/fancy-list.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const FancyList = /*#__PURE__*/ _s(
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().memo(
            (_c = _s(
              ({ fancies, fancyUpdate }) => {
                _s();
                const userState = (0,
                _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector)(
                  _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_6__.selectUserData
                );
                const loading = (0,
                _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector)(
                  _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_5__.selectLoader
                );
                const dispatch = (0,
                _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppDispatch)();
                const getCurrentMatch = (0,
                _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector)(
                  _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_7__.selectCurrentMatch
                );
                const getMarketBook = (0,
                _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector)(
                  _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__.selectMarketBook
                );
                const onBet = (isBack = false, market) => {
                  if (
                    userState.user.role !==
                    _models_User__WEBPACK_IMPORTED_MODULE_3__.RoleType.user
                  )
                    return false;
                  if (market.BackPrice1 === 0 && isBack) return false;
                  if (market.LayPrice1 === 0 && !isBack) return false;
                  const ipAddress =
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_9__[
                      "default"
                    ].getIpAddress();
                  dispatch(
                    (0,
                    _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__.betPopup)(
                      {
                        isOpen: true,
                        betData: {
                          isBack,
                          odds: isBack ? market.BackPrice1 : market.LayPrice1,
                          volume: isBack ? market.BackSize1 : market.LaySize1,
                          marketId: market.marketId,
                          marketName: "Fancy",
                          matchId: market.matchId,
                          selectionName: market.RunnerName,
                          selectionId: market.SelectionId,
                          pnl: 0,
                          stack: 0,
                          currentMarketOdds: isBack
                            ? market.BackPrice1
                            : market.LayPrice1,
                          eventId: market.sportId,
                          exposure: -0,
                          ipAddress: ipAddress,
                          type: _models_IBet__WEBPACK_IMPORTED_MODULE_2__
                            .IBetType.Match,
                          matchName: getCurrentMatch.name,
                          betOn:
                            _models_IBet__WEBPACK_IMPORTED_MODULE_2__.IBetOn
                              .FANCY,
                          gtype: market.gtype,
                          oppsiteVol: isBack
                            ? market.LaySize1
                            : market.BackSize1,
                          oddsType:
                            _models_IMarket__WEBPACK_IMPORTED_MODULE_12__
                              .OddsType.F,
                        },
                      }
                    )
                  );
                };
                return /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                  "div",
                  {
                    className: "table-body",
                    children: [
                      (fancies === null || fancies === void 0
                        ? void 0
                        : fancies.length) > 0 &&
                        fancies.map((fancy) => {
                          var _fancy$marketId;
                          if (
                            !(
                              fancy !== null &&
                              fancy !== void 0 &&
                              fancy.active
                            )
                          )
                            return null;
                          let updatedFancy = {};
                          if (fancyUpdate[fancy.marketId]) {
                            updatedFancy = fancyUpdate[fancy.marketId];
                          }
                          if (updatedFancy.LayPrice1 === undefined) return null;
                          return /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                            "div",
                            {
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                  "div",
                                  {
                                    className:
                                      "fancy-tripple fancy-tripple-box",
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                      "div",
                                      {
                                        "data-title":
                                          updatedFancy.GameStatus ||
                                          fancy.GameStatus,
                                        className: `table-row ${
                                          fancy.isSuspend ||
                                          (updatedFancy.GameStatus &&
                                            updatedFancy.GameStatus.toLowerCase() ===
                                              "suspended") ||
                                          (updatedFancy.GameStatus &&
                                            updatedFancy.GameStatus.toLowerCase() ===
                                              "ball running") ||
                                          (updatedFancy.ballsess &&
                                            String(
                                              updatedFancy.ballsess
                                            ).toLowerCase() === "ball running")
                                            ? "suspended"
                                            : ""
                                        }`,
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                "float-left country-name box-6",
                                              style: {
                                                borderBottom: "0px none",
                                              },
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                  "p",
                                                  {
                                                    className: "m-b-0",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                        "span",
                                                        {
                                                          style: {
                                                            display:
                                                              react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile
                                                                ? "flex"
                                                                : "",
                                                            justifyContent:
                                                              react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile
                                                                ? "space-between"
                                                                : "",
                                                          },
                                                          children: [
                                                            updatedFancy.RunnerName ||
                                                              fancy.fancyName,
                                                            react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile &&
                                                              /*#__PURE__*/ (0,
                                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                                _CasinoList_component_common_limitinfo__WEBPACK_IMPORTED_MODULE_10__[
                                                                  "default"
                                                                ],
                                                                {
                                                                  nameString:
                                                                    String(
                                                                      (_fancy$marketId =
                                                                        fancy.marketId) !==
                                                                        null &&
                                                                        _fancy$marketId !==
                                                                          void 0
                                                                        ? _fancy$marketId
                                                                        : ""
                                                                    ),
                                                                  min: getCurrentMatch.inPlayFancyMinLimit,
                                                                  max: getCurrentMatch.inPlayFancyMaxLimit,
                                                                },
                                                                void 0,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    _jsxFileName,
                                                                  lineNumber: 100,
                                                                  columnNumber: 29,
                                                                },
                                                                undefined
                                                              ),
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 92,
                                                          columnNumber: 25,
                                                        },
                                                        undefined
                                                      ),
                                                      getMarketBook &&
                                                        // Only show profit/loss if there's actual data (not 0)
                                                        (getMarketBook[
                                                          fancy.marketId
                                                        ] ||
                                                          getMarketBook[
                                                            updatedFancy
                                                              .SelectionId
                                                          ] ||
                                                          getMarketBook[
                                                            `${fancy.marketId}_${updatedFancy.SelectionId}`
                                                          ]) !== undefined &&
                                                        (getMarketBook[
                                                          fancy.marketId
                                                        ] ||
                                                          getMarketBook[
                                                            updatedFancy
                                                              .SelectionId
                                                          ] ||
                                                          getMarketBook[
                                                            `${fancy.marketId}_${updatedFancy.SelectionId}`
                                                          ]) !== 0 &&
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                          "span",
                                                          {
                                                            style: {
                                                              textDecoration:
                                                                "underline",
                                                              cursor: "pointer",
                                                            },
                                                            onClick: (e) => {
                                                              e.preventDefault();
                                                              dispatch(
                                                                (0,
                                                                _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__.setBookFancy)(
                                                                  {
                                                                    matchId:
                                                                      fancy.matchId,
                                                                    selectionId:
                                                                      updatedFancy.SelectionId,
                                                                    marketName:
                                                                      updatedFancy.RunnerName ||
                                                                      fancy.fancyName,
                                                                  }
                                                                )
                                                              );
                                                            },
                                                            className:
                                                              // Check both selection ID and market_selection format for fancy profit
                                                              (getMarketBook[
                                                                fancy.marketId
                                                              ] ||
                                                                getMarketBook[
                                                                  updatedFancy
                                                                    .SelectionId
                                                                ] ||
                                                                getMarketBook[
                                                                  `${fancy.marketId}_${updatedFancy.SelectionId}`
                                                                ]) >= 0
                                                                ? "green"
                                                                : "red",
                                                            children:
                                                              getMarketBook[
                                                                fancy.marketId
                                                              ] ||
                                                              getMarketBook[
                                                                updatedFancy
                                                                  .SelectionId
                                                              ] ||
                                                              getMarketBook[
                                                                `${fancy.marketId}_${updatedFancy.SelectionId}`
                                                              ],
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 115,
                                                            columnNumber: 29,
                                                          },
                                                          undefined
                                                        ),
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 91,
                                                    columnNumber: 23,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                  "p",
                                                  {
                                                    className: "p5",
                                                    children: [
                                                      " ",
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                        _pnl_calculate__WEBPACK_IMPORTED_MODULE_11__[
                                                          "default"
                                                        ],
                                                        {
                                                          marketId:
                                                            fancy.marketId,
                                                          selectionId:
                                                            updatedFancy.SelectionId,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 146,
                                                          columnNumber: 25,
                                                        },
                                                        undefined
                                                      ),
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 144,
                                                    columnNumber: 23,
                                                  },
                                                  undefined
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 87,
                                              columnNumber: 21,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                            "div",
                                            {
                                              className: `${
                                                react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile
                                                  ? "box-2"
                                                  : "box-1"
                                              } lay float-left text-center`,
                                              onClick: () =>
                                                onBet(false, {
                                                  ...fancy,
                                                  ...updatedFancy,
                                                }),
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                  "span",
                                                  {
                                                    className: "odd d-block",
                                                    children:
                                                      updatedFancy.LayPrice1,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 157,
                                                    columnNumber: 23,
                                                  },
                                                  undefined
                                                ),
                                                " ",
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                  "span",
                                                  {
                                                    children:
                                                      updatedFancy.LaySize1,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 158,
                                                    columnNumber: 23,
                                                  },
                                                  undefined
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 153,
                                              columnNumber: 21,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                            "div",
                                            {
                                              className: `${
                                                react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile
                                                  ? "box-2"
                                                  : "box-1"
                                              } back float-left text-center`,
                                              onClick: () =>
                                                onBet(true, {
                                                  ...fancy,
                                                  ...updatedFancy,
                                                }),
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                  "span",
                                                  {
                                                    className: "odd d-block",
                                                    children:
                                                      updatedFancy.BackPrice1,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 164,
                                                    columnNumber: 23,
                                                  },
                                                  undefined
                                                ),
                                                " ",
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                  "span",
                                                  {
                                                    children:
                                                      updatedFancy.BackSize1,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 165,
                                                    columnNumber: 23,
                                                  },
                                                  undefined
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 160,
                                              columnNumber: 21,
                                            },
                                            undefined
                                          ),
                                          !react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile &&
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                              "div",
                                              {
                                                className:
                                                  "box-2 float-left text-right min-max",
                                                style: {
                                                  borderBottom: "0px none",
                                                },
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                    "span",
                                                    {
                                                      className: "d-block",
                                                      children: [
                                                        "Min: ",
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                          "span",
                                                          {
                                                            children:
                                                              getCurrentMatch.inPlayFancyMinLimit,
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 173,
                                                            columnNumber: 32,
                                                          },
                                                          undefined
                                                        ),
                                                      ],
                                                    },
                                                    void 0,
                                                    true,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 172,
                                                      columnNumber: 25,
                                                    },
                                                    undefined
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                    "span",
                                                    {
                                                      className: "d-block",
                                                      children: [
                                                        "Max: ",
                                                        /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                          "span",
                                                          {
                                                            children:
                                                              getCurrentMatch.inPlayFancyMaxLimit,
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 176,
                                                            columnNumber: 32,
                                                          },
                                                          undefined
                                                        ),
                                                      ],
                                                    },
                                                    void 0,
                                                    true,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 175,
                                                      columnNumber: 25,
                                                    },
                                                    undefined
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 168,
                                                columnNumber: 23,
                                              },
                                              undefined
                                            ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 77,
                                        columnNumber: 19,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 76,
                                    columnNumber: 17,
                                  },
                                  undefined
                                ),
                                updatedFancy.rem &&
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                    "div",
                                    {
                                      className: "table-remark text-right",
                                      children: [
                                        "// ",
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                          "p",
                                          {
                                            className: "m-b-0",
                                            children: updatedFancy.rem,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 184,
                                            columnNumber: 23,
                                          },
                                          undefined
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 183,
                                      columnNumber: 19,
                                    },
                                    undefined
                                  ),
                              ],
                            },
                            fancy._id,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 75,
                              columnNumber: 15,
                            },
                            undefined
                          );
                        }),
                      " ",
                      !loading &&
                        (fancies === null || fancies === void 0
                          ? void 0
                          : fancies.length) <= 0 &&
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                          "div",
                          {
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                              "div",
                              {
                                className:
                                  "fancy-tripple bg-gray text-center p10",
                                children: "No Real time Fancy Found",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 192,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 191,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      loading &&
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                          "div",
                          {
                            className: "text-center m-1",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                              "i",
                              {
                                className: "mx-5 fas fa-spinner fa-spin",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 197,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 196,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 7,
                  },
                  undefined
                );
              },
              "1Gp/5JaGgtcOoxE8M5/di5WvGcE=",
              false,
              function () {
                return [
                  _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector,
                  _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector,
                  _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppDispatch,
                  _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector,
                  _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector,
                ];
              }
            ))
          ),
          "1Gp/5JaGgtcOoxE8M5/di5WvGcE=",
          false,
          function () {
            return [
              _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector,
              _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector,
              _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppDispatch,
              _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector,
              _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector,
            ];
          }
        );
        _c2 = FancyList;
        var _c, _c2;
        __webpack_require__.$Refresh$.register(_c, "FancyList$React.memo");
        __webpack_require__.$Refresh$.register(_c2, "FancyList");

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/pages/odds/components/match-detail-mobile.tsx":
      /*!***********************************************************!*\
  !*** ./src/pages/odds/components/match-detail-mobile.tsx ***!
  \***********************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tabs.js"
          );
        /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tab.js"
          );
        /* harmony import */ var _my_bet_component__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./my-bet.component */ "./src/pages/odds/components/my-bet.component.tsx"
          );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            moment__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _match_odds__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./match-odds */ "./src/pages/odds/components/match-odds.tsx"
          );
        /* harmony import */ var _place_bet_box__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./place-bet-box */ "./src/pages/odds/components/place-bet-box.tsx"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../../redux/actions/bet/betSlice */ "./src/redux/actions/bet/betSlice.ts"
          );
        /* harmony import */ var _fancy__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./fancy */ "./src/pages/odds/components/fancy.tsx"
          );
        /* harmony import */ var _context_webSocketUser__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../../context/webSocketUser */ "./src/context/webSocketUser.tsx"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/odds/components/match-detail-mobile.tsx",
          _s = __webpack_require__.$Refresh$.signature();
        /* eslint-disable @typescript-eslint/ban-ts-comment */

        const MatchDetailWrapper = (props) => {
          _s();
          var _props$currentMatch, _props$currentMatch2;
          const dispatch = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
          const betCount = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(
            _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_6__.selectBetCount
          );
          const [tavstatus, settvstatus] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const { socketUser } = (0,
          _context_webSocketUser__WEBPACK_IMPORTED_MODULE_8__.useWebsocketUser)();

          // React.useEffect(() => {
          //   return () => {
          //     dispatch(setBetCount(0))
          //   }
          // }, [])

          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment,
            {
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                "div",
                {
                  className: "prelative",
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                      react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"],
                      {
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                            react_bootstrap__WEBPACK_IMPORTED_MODULE_11__[
                              "default"
                            ],
                            {
                              eventKey: "home",
                              title: "ODDS",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                  "div",
                                  {
                                    className: "game-heading clsforellipse",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                        "span",
                                        {
                                          className:
                                            "card-header-title giveMeEllipsis",
                                          children:
                                            (_props$currentMatch =
                                              props.currentMatch) === null ||
                                            _props$currentMatch === void 0
                                              ? void 0
                                              : _props$currentMatch.name,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 31,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                        "span",
                                        {
                                          className:
                                            "float-right card-header-date",
                                          children:
                                            moment__WEBPACK_IMPORTED_MODULE_2___default()(
                                              (_props$currentMatch2 =
                                                props.currentMatch) === null ||
                                                _props$currentMatch2 === void 0
                                                ? void 0
                                                : _props$currentMatch2.matchDateTime
                                            )
                                              .subtract(5, "hours")
                                              .subtract(30, "minutes")
                                              .format("MM/DD/YYYY  h:mm a"),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 32,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 30,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                props.scoreBoard(),
                                tavstatus && props.otherTv(),
                                props.t10Tv(250),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                  "div",
                                  {
                                    className: "markets",
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                      "div",
                                      {
                                        className: "main-market",
                                        children:
                                          props.markets &&
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                            _match_odds__WEBPACK_IMPORTED_MODULE_3__[
                                              "default"
                                            ],
                                            {
                                              data: props.markets,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 44,
                                              columnNumber: 35,
                                            },
                                            undefined
                                          ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 43,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 41,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                  "br",
                                  {},
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 47,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                props.fancies &&
                                  props.currentMatch &&
                                  props.currentMatch.sportId == "4" &&
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                    react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                    {
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                        _fancy__WEBPACK_IMPORTED_MODULE_7__[
                                          "default"
                                        ],
                                        {
                                          socketUser: socketUser,
                                          fancies: props.fancies,
                                          matchId: props.matchId,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 51,
                                          columnNumber: 18,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 49,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                props.marketDataList.stake &&
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                    _place_bet_box__WEBPACK_IMPORTED_MODULE_4__[
                                      "default"
                                    ],
                                    {
                                      stake: props.marketDataList.stake,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 54,
                                      columnNumber: 44,
                                    },
                                    undefined
                                  ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 29,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                            react_bootstrap__WEBPACK_IMPORTED_MODULE_11__[
                              "default"
                            ],
                            {
                              eventKey: "profile",
                              title: `PLACED BET (${betCount})`,
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                "div",
                                {
                                  className: "card m-b-10 my-bet",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                      "div",
                                      {
                                        className: "card-header",
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                          "h6",
                                          {
                                            className:
                                              "card-title d-inline-block",
                                            children: "My Bet",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 59,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 58,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                      "div",
                                      {
                                        className: "card-body",
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                          _my_bet_component__WEBPACK_IMPORTED_MODULE_1__[
                                            "default"
                                          ],
                                          {},
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 62,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 61,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 57,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 56,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 28,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                      "div",
                      {
                        className: "csmobileround",
                        style: {
                          top: "16px",
                        },
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                          "span",
                          {
                            onClick: () =>
                              settvstatus(tavstatus ? false : true),
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(
                                "i",
                                {
                                  className: "fa fa-tv",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 69,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                              " ",
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 68,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 67,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false
          );
        };
        _s(
          MatchDetailWrapper,
          "T8sNhPC7PFKS1QwN61r5C7PleWY=",
          false,
          function () {
            return [
              _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch,
              _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,
              _context_webSocketUser__WEBPACK_IMPORTED_MODULE_8__.useWebsocketUser,
            ];
          }
        );
        _c = MatchDetailWrapper;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().memo(
            MatchDetailWrapper
          ));
        var _c, _c2;
        __webpack_require__.$Refresh$.register(_c, "MatchDetailWrapper");
        __webpack_require__.$Refresh$.register(_c2, "%default%");

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/pages/odds/components/match-detail.tsx":
      /*!****************************************************!*\
  !*** ./src/pages/odds/components/match-detail.tsx ***!
  \****************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _match_odds__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./match-odds */ "./src/pages/odds/components/match-odds.tsx"
          );
        /* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../models/User */ "./src/models/User.ts"
          );
        /* harmony import */ var _fancy__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./fancy */ "./src/pages/odds/components/fancy.tsx"
          );
        /* harmony import */ var _my_bet_component__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./my-bet.component */ "./src/pages/odds/components/my-bet.component.tsx"
          );
        /* harmony import */ var _place_bet_box__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./place-bet-box */ "./src/pages/odds/components/place-bet-box.tsx"
          );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default =
          /*#__PURE__*/ __webpack_require__.n(
            moment__WEBPACK_IMPORTED_MODULE_6__
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
          );
        /* harmony import */ var _admin_app_pages_bet_lock_bet_lock__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../../admin-app/pages/bet-lock/bet-lock */ "./src/admin-app/pages/bet-lock/bet-lock.tsx"
          );
        /* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js"
          );
        /* harmony import */ var _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ../../_layout/elements/custom-link */ "./src/pages/_layout/elements/custom-link.tsx"
          );
        /* harmony import */ var _admin_app_pages_UnsetteleBetHistory_UnsetteleBetHistoryAdmin__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ../../../admin-app/pages/UnsetteleBetHistory/UnsetteleBetHistoryAdmin */ "./src/admin-app/pages/UnsetteleBetHistory/UnsetteleBetHistoryAdmin.tsx"
          );
        /* harmony import */ var _context_webSocketUser__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ../../../context/webSocketUser */ "./src/context/webSocketUser.tsx"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/odds/components/match-detail.tsx",
          _s = __webpack_require__.$Refresh$.signature();
        // /* eslint-disable @typescript-eslint/ban-ts-comment */
        // import React, { Fragment, MouseEvent } from 'react'
        // import MatchOdds from './match-odds'
        // import { RoleType } from '../../../models/User'
        // import Fancy from './fancy'
        // import MyBetComponent from './my-bet.component'
        // import PlaceBetBox from './place-bet-box'
        // import moment from 'moment'
        // import { useAppSelector } from '../../../redux/hooks'
        // import { selectUserData } from '../../../redux/actions/login/loginSlice'
        // import BetLock from '../../../admin-app/pages/bet-lock/bet-lock'
        // import { Modal } from 'react-bootstrap'
        // import { useNavigateCustom } from '../../_layout/elements/custom-link'
        // import UnsetteleBetHistoryAdmin from '../../../admin-app/pages/UnsetteleBetHistory/UnsetteleBetHistoryAdmin'
        // import { useWebsocketUser } from '../../../context/webSocketUser'

        // const MatchDetail = (props: any) => {
        //   const userState = useAppSelector(selectUserData)
        //   const { socketUser } = useWebsocketUser()
        //   const [show, setShow] = React.useState(false)
        //   const navigate = useNavigateCustom()
        //   const handleClose = () => setShow(false)
        //   const handleShow = () => setShow(true)
        //   const showAllBet = (e: MouseEvent<HTMLAnchorElement>) => {
        //     e.preventDefault()
        //     if (userState.user.role !== RoleType.user) {
        //       handleShow()
        //       return
        //     }
        //     navigate.go('/unsettledbet')
        //   }
        //   return (
        //     <>
        //       <div
        //         className={userState.user.role !== RoleType.user ? ' admin-match-detail' : 'featured-box'}
        //       >
        //         <div className='row'>
        //           <div className={'col-8  sports-wrapper m-b-10 pr0'}>
        //             <div className='game-heading'>
        //               <span className='card-header-title'>{props.currentMatch?.name}</span>
        //               <span className='float-right card-header-date'>
        //                 {moment(props.currentMatch?.matchDateTime).format('MM/DD/YYYY  h:mm a')}
        //               </span>
        //             </div>
        //             {props.scoreBoard()}
        //             {props.t10Tv(450)}

        //             <div className='markets'>
        //               {/* Score Component Here */}
        //               <div className='main-market'>
        //                 {props.markets && <MatchOdds data={props.markets} />}
        //               </div>
        //             </div>
        //             <br />
        //             {props.fancies && props.currentMatch && props.currentMatch.sportId == '4' && (
        //               <Fragment>
        //                 {/* @ts-expect-error */}
        //                 <Fancy socketUser={socketUser} fancies={props.fancies} matchId={props.matchId!} />
        //               </Fragment>
        //             )}
        //           </div>
        //           {/* tab here */}
        //           <div id='sidebar-right' className='col-4 pl0 '>
        //             <div className='ps'>
        //               <div className='sidebar-right-inner'>
        //                 {userState?.user?.role && userState.user.role !== RoleType.user && (
        //                   <BetLock markets={props.marketDataList.markets} />
        //                 )}
        //                 {props.otherTv()}
        //                 {props.marketDataList.stake && <PlaceBetBox stake={props.marketDataList.stake} />}
        //                 <div className='card m-b-10 my-bet'>
        //                   <div className='card-header'>
        //                     <h6 className='card-title d-inline-block'>My Bet</h6>
        //                     <a
        //                       href='#'
        //                       onClick={showAllBet}
        //                       className='card-title d-inline-block float-right'
        //                     >
        //                       View All
        //                     </a>
        //                   </div>
        //                   <div className='card-body'>
        //                     <MyBetComponent />
        //                   </div>
        //                 </div>
        //                 {/**/}
        //               </div>
        //               <div className='ps__rail-x' style={{ left: 0, bottom: 0 }}>
        //                 <div className='ps__thumb-x' tabIndex={0} style={{ left: 0, width: 0 }} />
        //               </div>
        //               <div className='ps__rail-y' style={{ top: 0, right: 0 }}>
        //                 <div className='ps__thumb-y' tabIndex={0} style={{ top: 0, height: 0 }} />
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //       <Modal show={show} onHide={handleClose} size={'lg'}>
        //         <Modal.Header closeButton>
        //           <Modal.Title>Bets</Modal.Title>
        //         </Modal.Header>
        //         <Modal.Body>
        //           <UnsetteleBetHistoryAdmin matchId={props.matchId!} hideHeader={true} />
        //         </Modal.Body>
        //       </Modal>
        //     </>
        //   )
        // }
        // export default React.memo(MatchDetail)
        /* eslint-disable @typescript-eslint/ban-ts-comment */

        const MatchDetail = (props) => {
          _s();
          var _props$currentMatch, _props$currentMatch2, _userState$user;
          const userState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)(
            _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_8__.selectUserData
          );
          const { socketUser } = (0,
          _context_webSocketUser__WEBPACK_IMPORTED_MODULE_12__.useWebsocketUser)();
          const [show, setShow] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const navigate = (0,
          _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_10__.useNavigateCustom)();
          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);
          const showAllBet = (e) => {
            e.preventDefault();
            if (
              userState.user.role !==
              _models_User__WEBPACK_IMPORTED_MODULE_2__.RoleType.user
            ) {
              handleShow();
              return;
            }
            navigate.go("/unsettledbet");
          };
          console.log(props);
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment,
            {
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                  "div",
                  {
                    className:
                      userState.user.role !==
                      _models_User__WEBPACK_IMPORTED_MODULE_2__.RoleType.user
                        ? " admin-match-detail"
                        : "featured-box",
                    style: {
                      background: "#DFE8E9",
                    },
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                      "div",
                      {
                        className: "row",
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                            "div",
                            {
                              className: "col-8  sports-wrapper m-b-10 pr0",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                  "div",
                                  {
                                    className: "game-heading",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                        "span",
                                        {
                                          className: "card-header-title",
                                          children:
                                            (_props$currentMatch =
                                              props.currentMatch) === null ||
                                            _props$currentMatch === void 0
                                              ? void 0
                                              : _props$currentMatch.name,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 154,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                        "span",
                                        {
                                          className:
                                            "float-right card-header-date",
                                          style: {
                                            fontSize: "11px",
                                          },
                                          children:
                                            moment__WEBPACK_IMPORTED_MODULE_6___default()(
                                              (_props$currentMatch2 =
                                                props.currentMatch) === null ||
                                                _props$currentMatch2 === void 0
                                                ? void 0
                                                : _props$currentMatch2.matchDateTime
                                            )
                                              .subtract(5, "hours")
                                              .subtract(30, "minutes")
                                              .format("MM/DD/YYYY  h:mm a"),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 155,
                                          columnNumber: 15,
                                        },
                                        undefined
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 153,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                props.scoreBoard(),
                                props.t10Tv(450),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                  "div",
                                  {
                                    className: "markets",
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                      "div",
                                      {
                                        className: "main-market",
                                        children:
                                          props.markets &&
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                            _match_odds__WEBPACK_IMPORTED_MODULE_1__[
                                              "default"
                                            ],
                                            {
                                              data: props.markets,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 167,
                                              columnNumber: 35,
                                            },
                                            undefined
                                          ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 166,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 164,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                props.fancies &&
                                  props.currentMatch &&
                                  props.currentMatch.sportId == "4" &&
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                    react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                    {
                                      children: /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                        _fancy__WEBPACK_IMPORTED_MODULE_3__[
                                          "default"
                                        ],
                                        {
                                          socketUser: socketUser,
                                          fancies: props.fancies,
                                          matchId: props.matchId,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 174,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 172,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 152,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                            "div",
                            {
                              id: "sidebar-right",
                              className: "col-4 pl0 ",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                "div",
                                {
                                  className: "ps",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                      "div",
                                      {
                                        className: "sidebar-right-inner",
                                        children: [
                                          (userState === null ||
                                          userState === void 0
                                            ? void 0
                                            : (_userState$user =
                                                userState.user) === null ||
                                              _userState$user === void 0
                                            ? void 0
                                            : _userState$user.role) &&
                                            userState.user.role !==
                                              _models_User__WEBPACK_IMPORTED_MODULE_2__
                                                .RoleType.user &&
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                              _admin_app_pages_bet_lock_bet_lock__WEBPACK_IMPORTED_MODULE_9__[
                                                "default"
                                              ],
                                              {
                                                markets:
                                                  props.marketDataList.markets,
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 183,
                                                columnNumber: 19,
                                              },
                                              undefined
                                            ),
                                          props.otherTv(),
                                          props.marketDataList.stake &&
                                            /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                              _place_bet_box__WEBPACK_IMPORTED_MODULE_5__[
                                                "default"
                                              ],
                                              {
                                                stake:
                                                  props.marketDataList.stake,
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 186,
                                                columnNumber: 48,
                                              },
                                              undefined
                                            ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                            "div",
                                            {
                                              className: "card m-b-10 my-bet",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "card-header",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                        "h6",
                                                        {
                                                          className:
                                                            "card-title d-inline-block",
                                                          children: "My Bet",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 189,
                                                          columnNumber: 21,
                                                        },
                                                        undefined
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                        "a",
                                                        {
                                                          href: "#",
                                                          onClick: showAllBet,
                                                          className:
                                                            "card-title d-inline-block float-right",
                                                          children: "View All",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 190,
                                                          columnNumber: 21,
                                                        },
                                                        undefined
                                                      ),
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 188,
                                                    columnNumber: 19,
                                                  },
                                                  undefined
                                                ),
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                  "div",
                                                  {
                                                    className: "card-body",
                                                    children: /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                                      _my_bet_component__WEBPACK_IMPORTED_MODULE_4__[
                                                        "default"
                                                      ],
                                                      {},
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 199,
                                                        columnNumber: 21,
                                                      },
                                                      undefined
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 198,
                                                    columnNumber: 19,
                                                  },
                                                  undefined
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 187,
                                              columnNumber: 17,
                                            },
                                            undefined
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 181,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                      "div",
                                      {
                                        className: "ps__rail-x",
                                        style: {
                                          left: 0,
                                          bottom: 0,
                                        },
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                          "div",
                                          {
                                            className: "ps__thumb-x",
                                            tabIndex: 0,
                                            style: {
                                              left: 0,
                                              width: 0,
                                            },
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 205,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 204,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                      "div",
                                      {
                                        className: "ps__rail-y",
                                        style: {
                                          top: 0,
                                          right: 0,
                                        },
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                                          "div",
                                          {
                                            className: "ps__thumb-y",
                                            tabIndex: 0,
                                            style: {
                                              top: 0,
                                              height: 0,
                                            },
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 208,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 207,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 180,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 179,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                  react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"],
                  {
                    show: show,
                    onHide: handleClose,
                    size: "lg",
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                        react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"]
                          .Header,
                        {
                          closeButton: true,
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                            react_bootstrap__WEBPACK_IMPORTED_MODULE_14__[
                              "default"
                            ].Title,
                            {
                              children: "Bets",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 216,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 215,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                        react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"]
                          .Body,
                        {
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(
                            _admin_app_pages_UnsetteleBetHistory_UnsetteleBetHistoryAdmin__WEBPACK_IMPORTED_MODULE_11__[
                              "default"
                            ],
                            {
                              matchId: props.matchId,
                              hideHeader: true,
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 219,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 218,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 7,
                  },
                  undefined
                ),
              ],
            },
            void 0,
            true
          );
        };
        _s(MatchDetail, "6Age2cPZTC1op+wziRuY9KpU2N4=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector,
            _context_webSocketUser__WEBPACK_IMPORTED_MODULE_12__.useWebsocketUser,
            _layout_elements_custom_link__WEBPACK_IMPORTED_MODULE_10__.useNavigateCustom,
          ];
        });
        _c = MatchDetail;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().memo(
            MatchDetail
          ));
        var _c, _c2;
        __webpack_require__.$Refresh$.register(_c, "MatchDetail");
        __webpack_require__.$Refresh$.register(_c2, "%default%");

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/pages/odds/components/match-odds-accord.tsx":
      /*!*********************************************************!*\
  !*** ./src/pages/odds/components/match-odds-accord.tsx ***!
  \*********************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _models_IMarket__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../models/IMarket */ "./src/models/IMarket.ts"
          );
        /* harmony import */ var _available_to_back_lay__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./available-to-back-lay */ "./src/pages/odds/components/available-to-back-lay.tsx"
          );
        /* harmony import */ var _pnl_calculate__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./pnl-calculate */ "./src/pages/odds/components/pnl-calculate.tsx"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/odds/components/match-odds-accord.tsx";
        // import React from 'react';
        // import IMarket, { OddsType } from "../../../models/IMarket";
        // import IRunner from "../../../models/IRunner";
        // import { AvailableToBackLay } from './available-to-back-lay';
        // import PnlCalculate from './pnl-calculate';

        // interface MatchOddsAccordProps {
        //   market: IMarket;
        //   oddsData?: {
        //     runners?: IRunner[];
        //   };
        //   isMobile: boolean;
        //   classforheadingfirst: string;
        //   classforheading: string;
        //   runnersName: Record<string, string>;
        //   getMarketBook: any;
        //   selectionsPrev: any;
        // }

        // const MatchOddsAccord: React.FC<MatchOddsAccordProps> = ({
        //   market,
        //   oddsData,
        //   isMobile,
        //   classforheadingfirst,
        //   classforheading,
        //   runnersName,
        //   getMarketBook,
        //   selectionsPrev
        // }) => {
        //   return (
        //     <div className=''>
        //       {/* Header Section */}
        //       <div className="table-header">
        //         <div className={`float-left country-name ${classforheadingfirst} min-max`}>
        //           <b />
        //         </div>

        //         {(() => {
        //           // Check for 6 odds (3 back, 3 lay) in any market
        //           const runners = oddsData?.runners || [];
        //           const firstRunner = runners[0];
        //           const backLen = firstRunner?.ex?.availableToBack?.length || 0;
        //           const layLen = firstRunner?.ex?.availableToLay?.length || 0;
        //           const isSixOdds = backLen === 3 && layLen === 3;

        //           if (isSixOdds) {
        //             // Render odds_market header style (3 BACK, 3 LAY columns)
        //             return (
        //               <>
        //                 <div className={`box-1 float-left text-center ${classforheading}`}><b></b></div>
        //                 <div className={`box-1 float-left text-center ${classforheading}`}><b></b></div>
        //                 <div className={`box-1 float-left back text-center ${classforheading}`}><b>BACK</b></div>
        //                 <div className={`box-1 float-left lay text-center ${classforheading}`}><b>LAY</b></div>
        //                 <div className={`box-1 float-left text-center ${classforheading}`}><b></b></div>
        //                 <div className={`box-1 float-left text-center ${classforheading}`}><b></b></div>
        //               </>
        //             );
        //           }

        //           // Fallback to previous logic for other cases
        //           const isBookmaker = market.oddsType === OddsType.BM;
        //           const hasOnlySingleValues =
        //             isBookmaker ||
        //             backLen === 1 ||
        //             layLen === 1;

        //           if (isBookmaker || hasOnlySingleValues) {
        //             return (
        //               <>
        //                 <div className={`back ${classforheading} float-left text-center`}>
        //                   <b>BACK</b>
        //                 </div>
        //                 <div className={`lay ${classforheading} float-left text-center`}>
        //                   <b>LAY</b>
        //                 </div>
        //               </>
        //             );
        //           } else {
        //             return (
        //               <>
        //                 {(!isMobile || market.oddsType != OddsType.F) && (
        //                   <>
        //                     <div className="box-1 float-left" />
        //                     <div className="box-1 float-left" />
        //                   </>
        //                 )}

        //                 <div className={` ${classforheading} float-left text-center`}>
        //                   <b>BACK</b>
        //                 </div>

        //                 <div className={` ${classforheading} float-left text-center`}>
        //                   <b>LAY</b>
        //                 </div>

        //                 {(!isMobile || market.oddsType != OddsType.F) && (
        //                   <>
        //                     <div className="box-1 float-left" />
        //                     <div className="box-1 float-left" />
        //                   </>
        //                 )}
        //               </>
        //             );
        //           }
        //         })()}
        //       </div>

        //       {/* Runner Rows Section - Below the header */}
        //       <div className="runner-rows-container ">
        //         {oddsData?.runners
        //           ?.sort((a: any, b: any) => a?.sortPriority - b?.sortPriority)
        //           .map((runner: IRunner) => {
        //             const runnerName = runnersName?.[market.marketId]?.[runner.selectionId] || runner.runnerName;
        //             return (
        //               <div key={runner.selectionId} className="runner-row ">
        //                 <div
        //                   data-title={runner.status}
        //                   className={`table-row ${runner.status === "SUSPENDED" ? "suspended" : ""}`}
        //                 >
        //                   <div className={`country-name   ${classforheadingfirst}`}>
        //                     <span className="team-name">
        //                       <b>{runnerName}</b>
        //                     </span>
        //                     <p>
        //                       {getMarketBook[`${market.marketId}_${runner.selectionId}`] ? (
        //                         <span
        //                           className={
        //                             getMarketBook[`${market.marketId}_${runner.selectionId}`] > 0
        //                               ? "green"
        //                               : "red"
        //                           }
        //                         >
        //                           {getMarketBook[`${market.marketId}_${runner.selectionId}`].toLocaleString()}
        //                         </span>
        //                       ) : (
        //                         <span className="" style={{ color: "black" }}>
        //                           {" "}
        //                         </span>
        //                       )}

        //                       <PnlCalculate
        //                         marketId={market.marketId}
        //                         selectionId={runner.selectionId}
        //                       />
        //                     </p>
        //                   </div>
        //                   <AvailableToBackLay
        //                     selections={runner.ex}
        //                     selectionsPrev={selectionsPrev}
        //                     market={market}
        //                     runner={runner}
        //                   />
        //                 </div>
        //               </div>
        //             );
        //           })}
        //       </div>
        //     </div>
        //   );
        // };

        // export default MatchOddsAccord;

        //namire updates

        //import React from 'react';
        // import IMarket, { OddsType } from "../../../models/IMarket";
        // import IRunner from "../../../models/IRunner";
        // import { AvailableToBackLay } from './available-to-back-lay';
        // import PnlCalculate from './pnl-calculate';

        // interface MatchOddsAccordProps {
        //   market: IMarket;
        //   oddsData?: {
        //     runners?: IRunner[];
        //   };
        //   isMobile: boolean;
        //   classforheadingfirst: string;
        //   classforheading: string;
        //   runnersName: Record<string, string>;
        //   getMarketBook: any;
        //   selectionsPrev: any;
        // }

        // const MatchOddsAccord: React.FC<MatchOddsAccordProps> = ({
        //   market,
        //   oddsData,
        //   isMobile,
        //   classforheadingfirst,
        //   classforheading,
        //   runnersName,
        //   getMarketBook,
        //   selectionsPrev
        // }) => {
        //   return (
        //     <div className=''>
        //       {/* Header Section */}
        //       <div className="table-header">
        //         <div className={`float-left country-name ${classforheadingfirst} min-max`}>
        //           <b />
        //         </div>

        //         {(() => {
        //           // Check for 6 odds (3 back, 3 lay) in any market
        //           const runners = oddsData?.runners || [];
        //           const firstRunner = runners[0];
        //           const backLen = firstRunner?.ex?.availableToBack?.length || 0;
        //           const layLen = firstRunner?.ex?.availableToLay?.length || 0;
        //           const isSixOdds = backLen === 3 && layLen === 3;

        //         if (isSixOdds) {
        //   if (isMobile) {
        //     // Mobile header (simplified view)
        //     return (
        //       <>
        //         <div className={`box-2 float-left back text-center ${classforheading}`}>
        //           <b>BACK</b>
        //         </div>
        //         <div className={`box-2 float-left lay text-center ${classforheading}`}>
        //           <b>LAY</b>
        //         </div>
        //       </>
        //     );
        //   }

        //   // Desktop header (3 BACK, 3 LAY columns)
        //   return (
        //     <>
        //       <div className={`box-1 float-left text-center ${classforheading}`} />
        //       <div className={`box-1 float-left text-center ${classforheading}`} />
        //       <div className={`box-1 float-left back text-center ${classforheading}`}><b>BACK</b></div>
        //       <div className={`box-1 float-left lay text-center ${classforheading}`}><b>LAY</b></div>
        //       <div className={`box-1 float-left text-center ${classforheading}`} />
        //       <div className={`box-1 float-left text-center ${classforheading}`} />
        //     </>
        //   );
        // }

        //           // Fallback to previous logic for other cases
        //           const isBookmaker = market.oddsType === OddsType.BM;
        //           const hasOnlySingleValues =
        //             isBookmaker ||
        //             backLen === 1 ||
        //             layLen === 1;

        //           if (isBookmaker || hasOnlySingleValues) {
        //             return (
        //               <>
        //                 <div className={`back ${classforheading} float-left text-center`}>
        //                   <b>BACK</b>
        //                 </div>
        //                 <div className={`lay ${classforheading} float-left text-center`}>
        //                   <b>LAY</b>
        //                 </div>
        //               </>
        //             );
        //           } else {
        //             return (
        //               <>
        //                 {(!isMobile || market.oddsType != OddsType.F) && (
        //                   <>
        //                     <div className="box-1 float-left" />
        //                     <div className="box-1 float-left" />
        //                   </>
        //                 )}

        //                 <div className={` ${classforheading} float-left text-center`}>
        //                   <b>BACK</b>
        //                 </div>

        //                 <div className={` ${classforheading} float-left text-center`}>
        //                   <b>LAY</b>
        //                 </div>

        //                 {(!isMobile || market.oddsType != OddsType.F) && (
        //                   <>
        //                     <div className="box-1 float-left" />
        //                     <div className="box-1 float-left" />
        //                   </>
        //                 )}
        //               </>
        //             );
        //           }
        //         })()}
        //       </div>

        //       {/* Runner Rows Section - Below the header */}
        //       <div className="runner-rows-container ">
        //         {oddsData?.runners
        //           ?.sort((a: any, b: any) => a?.sortPriority - b?.sortPriority)
        //           .map((runner: IRunner) => {
        //             const runnerName = runnersName?.[market.marketId]?.[runner.selectionId] || runner.runnerName;
        //             return (
        //               <div key={runner.selectionId} className="runner-row ">
        //                 <div
        //                   data-title={runner.status}
        //                   className={`table-row ${runner.status === "SUSPENDED" ? "suspended" : ""}`}
        //                 >
        //                   <div className={`country-name   ${classforheadingfirst}`}>
        //                     <span className="team-name">
        //                       <b>{runnerName}</b>
        //                     </span>
        //                     <p>
        //                       {getMarketBook[`${market.marketId}_${runner.selectionId}`] ? (
        //                         <span
        //                           className={
        //                             getMarketBook[`${market.marketId}_${runner.selectionId}`] > 0
        //                               ? "green"
        //                               : "red"
        //                           }
        //                         >
        //                           {getMarketBook[`${market.marketId}_${runner.selectionId}`].toLocaleString()}
        //                         </span>
        //                       ) : (
        //                         <span className="" style={{ color: "black" }}>
        //                           {" "}
        //                         </span>
        //                       )}

        //                       <PnlCalculate
        //                         marketId={market.marketId}
        //                         selectionId={runner.selectionId}
        //                       />
        //                     </p>
        //                   </div>
        //                   <AvailableToBackLay
        //                     selections={runner.ex}
        //                     selectionsPrev={selectionsPrev}
        //                     market={market}
        //                     runner={runner}
        //                   />
        //                 </div>
        //               </div>
        //             );
        //           })}
        //       </div>
        //     </div>
        //   );
        // };

        // export default MatchOddsAccord;

        const MatchOddsAccord = ({
          market,
          oddsData,
          isMobile,
          classforheadingfirst,
          classforheading,
          runnersName,
          getMarketBook,
          selectionsPrev,
        }) => {
          var _oddsData$runners;
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
            "div",
            {
              className: "",
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                  "div",
                  {
                    className: "table-header",
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                        "div",
                        {
                          className: `float-left country-name ${classforheadingfirst} min-max`,
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            "b",
                            {},
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 385,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 384,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      ((
                        _firstRunner$ex,
                        _firstRunner$ex$avail,
                        _firstRunner$ex2,
                        _firstRunner$ex2$avai
                      ) => {
                        // Check for 6 odds (3 back, 3 lay) in any market
                        const runners =
                          (oddsData === null || oddsData === void 0
                            ? void 0
                            : oddsData.runners) || [];
                        const firstRunner = runners[0];
                        const backLen =
                          (firstRunner === null || firstRunner === void 0
                            ? void 0
                            : (_firstRunner$ex = firstRunner.ex) === null ||
                              _firstRunner$ex === void 0
                            ? void 0
                            : (_firstRunner$ex$avail =
                                _firstRunner$ex.availableToBack) === null ||
                              _firstRunner$ex$avail === void 0
                            ? void 0
                            : _firstRunner$ex$avail.length) || 0;
                        const layLen =
                          (firstRunner === null || firstRunner === void 0
                            ? void 0
                            : (_firstRunner$ex2 = firstRunner.ex) === null ||
                              _firstRunner$ex2 === void 0
                            ? void 0
                            : (_firstRunner$ex2$avai =
                                _firstRunner$ex2.availableToLay) === null ||
                              _firstRunner$ex2$avai === void 0
                            ? void 0
                            : _firstRunner$ex2$avai.length) || 0;
                        const isSixOdds = backLen === 3 && layLen === 3;
                        if (isSixOdds && !isMobile) {
                          // Render odds_market header style (3 BACK, 3 LAY columns)
                          return /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                            {
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "div",
                                  {
                                    className: `box-1 float-left text-center ${classforheading}`,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "b",
                                      {},
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 400,
                                        columnNumber: 84,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 400,
                                    columnNumber: 17,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "div",
                                  {
                                    className: `box-1 float-left text-center ${classforheading}`,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "b",
                                      {},
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 401,
                                        columnNumber: 84,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 401,
                                    columnNumber: 17,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "div",
                                  {
                                    className: `box-1 float-left back text-center ${classforheading}`,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "b",
                                      {
                                        children: "BACK",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 402,
                                        columnNumber: 89,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 402,
                                    columnNumber: 17,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "div",
                                  {
                                    className: `box-1 float-left lay text-center ${classforheading}`,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "b",
                                      {
                                        children: "LAY",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 403,
                                        columnNumber: 88,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 403,
                                    columnNumber: 17,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "div",
                                  {
                                    className: `box-1 float-left text-center ${classforheading}`,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "b",
                                      {},
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 404,
                                        columnNumber: 84,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 404,
                                    columnNumber: 17,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "div",
                                  {
                                    className: `box-1 float-left text-center ${classforheading}`,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "b",
                                      {},
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 405,
                                        columnNumber: 84,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 405,
                                    columnNumber: 17,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true
                          );
                        }
                        if (isMobile) {
                          return /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                            {
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "div",
                                  {
                                    className: `box-1 float-left back text-center ${classforheading}`,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "b",
                                      {
                                        children: "BACK",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 413,
                                        columnNumber: 89,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 413,
                                    columnNumber: 17,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "div",
                                  {
                                    className: `box-1 float-left lay text-center ${classforheading}`,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "b",
                                      {
                                        children: "LAY",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 414,
                                        columnNumber: 88,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 414,
                                    columnNumber: 17,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true
                          );
                        }
                        // Fallback to previous logic for other cases
                        const isBookmaker =
                          market.oddsType ===
                          _models_IMarket__WEBPACK_IMPORTED_MODULE_1__.OddsType
                            .BM;
                        const hasOnlySingleValues =
                          isBookmaker || backLen === 1 || layLen === 1;
                        if (isBookmaker || hasOnlySingleValues) {
                          return /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                            {
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "div",
                                  {
                                    className: `back ${classforheading} float-left text-center`,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "b",
                                      {
                                        children: "BACK",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 429,
                                        columnNumber: 19,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 428,
                                    columnNumber: 17,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "div",
                                  {
                                    className: `lay ${classforheading} float-left text-center`,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "b",
                                      {
                                        children: "LAY",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 432,
                                        columnNumber: 19,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 431,
                                    columnNumber: 17,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true
                          );
                        } else {
                          return /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                            {
                              children: [
                                (!isMobile ||
                                  market.oddsType !=
                                    _models_IMarket__WEBPACK_IMPORTED_MODULE_1__
                                      .OddsType.F) &&
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                                    {
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                          "div",
                                          {
                                            className: "box-1 float-left",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 441,
                                            columnNumber: 21,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                          "div",
                                          {
                                            className: "box-1 float-left",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 442,
                                            columnNumber: 21,
                                          },
                                          undefined
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true
                                  ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "div",
                                  {
                                    className: ` ${classforheading} float-left text-center`,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "b",
                                      {
                                        children: "BACK",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 447,
                                        columnNumber: 19,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 446,
                                    columnNumber: 17,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "div",
                                  {
                                    className: ` ${classforheading} float-left text-center`,
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "b",
                                      {
                                        children: "LAY",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 451,
                                        columnNumber: 19,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 450,
                                    columnNumber: 17,
                                  },
                                  undefined
                                ),
                                (!isMobile ||
                                  market.oddsType !=
                                    _models_IMarket__WEBPACK_IMPORTED_MODULE_1__
                                      .OddsType.F) &&
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                                    {
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                          "div",
                                          {
                                            className: "box-1 float-left",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 456,
                                            columnNumber: 21,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                          "div",
                                          {
                                            className: "box-1 float-left",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 457,
                                            columnNumber: 21,
                                          },
                                          undefined
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true
                                  ),
                              ],
                            },
                            void 0,
                            true
                          );
                        }
                      })(),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 383,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                  "div",
                  {
                    className: "runner-rows-container ",
                    children:
                      oddsData === null || oddsData === void 0
                        ? void 0
                        : (_oddsData$runners = oddsData.runners) === null ||
                          _oddsData$runners === void 0
                        ? void 0
                        : _oddsData$runners
                            .sort(
                              (a, b) =>
                                (a === null || a === void 0
                                  ? void 0
                                  : a.sortPriority) -
                                (b === null || b === void 0
                                  ? void 0
                                  : b.sortPriority)
                            )
                            .map((runner) => {
                              var _runnersName$market$m;
                              const runnerName =
                                (runnersName === null || runnersName === void 0
                                  ? void 0
                                  : (_runnersName$market$m =
                                      runnersName[market.marketId]) === null ||
                                    _runnersName$market$m === void 0
                                  ? void 0
                                  : _runnersName$market$m[
                                      runner.selectionId
                                    ]) || runner.runnerName;
                              return /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                "div",
                                {
                                  className: "runner-row ",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                    "div",
                                    {
                                      "data-title": runner.status,
                                      className: `table-row ${
                                        runner.status === "SUSPENDED"
                                          ? "suspended"
                                          : ""
                                      }`,
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                          "div",
                                          {
                                            className: `country-name   ${classforheadingfirst}`,
                                            children: [
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                "span",
                                                {
                                                  className: "team-name",
                                                  children: /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                    "b",
                                                    {
                                                      children: runnerName,
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 480,
                                                      columnNumber: 23,
                                                    },
                                                    undefined
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 479,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                "p",
                                                {
                                                  children: [
                                                    getMarketBook[
                                                      `${market.marketId}_${runner.selectionId}`
                                                    ]
                                                      ? /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                          "span",
                                                          {
                                                            className:
                                                              getMarketBook[
                                                                `${market.marketId}_${runner.selectionId}`
                                                              ] > 0
                                                                ? "green"
                                                                : "red",
                                                            children:
                                                              getMarketBook[
                                                                `${market.marketId}_${runner.selectionId}`
                                                              ].toLocaleString(),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 484,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        )
                                                      : /*#__PURE__*/ (0,
                                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                          "span",
                                                          {
                                                            className: "",
                                                            style: {
                                                              color: "black",
                                                            },
                                                            children: " ",
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              _jsxFileName,
                                                            lineNumber: 494,
                                                            columnNumber: 25,
                                                          },
                                                          undefined
                                                        ),
                                                    /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                      _pnl_calculate__WEBPACK_IMPORTED_MODULE_3__[
                                                        "default"
                                                      ],
                                                      {
                                                        marketId:
                                                          market.marketId,
                                                        selectionId:
                                                          runner.selectionId,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 499,
                                                        columnNumber: 23,
                                                      },
                                                      undefined
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 482,
                                                  columnNumber: 21,
                                                },
                                                undefined
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 478,
                                            columnNumber: 19,
                                          },
                                          undefined
                                        ),
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                          _available_to_back_lay__WEBPACK_IMPORTED_MODULE_2__.AvailableToBackLay,
                                          {
                                            selections: runner.ex,
                                            selectionsPrev: selectionsPrev,
                                            market: market,
                                            runner: runner,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 505,
                                            columnNumber: 19,
                                          },
                                          undefined
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 474,
                                      columnNumber: 17,
                                    },
                                    undefined
                                  ),
                                },
                                runner.selectionId,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 473,
                                  columnNumber: 15,
                                },
                                undefined
                              );
                            }),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 467,
                    columnNumber: 7,
                  },
                  undefined
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 381,
              columnNumber: 5,
            },
            undefined
          );
        };
        _c = MatchOddsAccord;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          MatchOddsAccord;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "MatchOddsAccord");

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/pages/odds/components/match-odds.tsx":
      /*!**************************************************!*\
  !*** ./src/pages/odds/components/match-odds.tsx ***!
  \**************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _models_IMarket__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../../models/IMarket */ "./src/models/IMarket.ts"
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _context_webSocket__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../context/webSocket */ "./src/context/webSocket.tsx"
          );
        /* harmony import */ var _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../redux/actions/bet/betSlice */ "./src/redux/actions/bet/betSlice.ts"
          );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react-redux */ "./node_modules/react-redux/es/index.js"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _fancy_book_popup__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./fancy/book-popup */ "./src/pages/odds/components/fancy/book-popup.tsx"
          );
        /* harmony import */ var _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../../redux/actions/common/commonSlice */ "./src/redux/actions/common/commonSlice.ts"
          );
        /* harmony import */ var _user_book_popup__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./user-book-popup */ "./src/pages/odds/components/user-book-popup.tsx"
          );
        /* harmony import */ var _styles_market_layout_css__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../../styles/market-layout.css */ "./src/styles/market-layout.css"
          );
        /* harmony import */ var _accordian_header__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./accordian-header */ "./src/pages/odds/components/accordian-header.tsx"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
          "/www/wwwroot/Ambani/fair-react-stone/src/pages/odds/components/match-odds.tsx";
        // /* eslint-disable */
        // import IMarket, { OddsType } from '../../../models/IMarket'
        // import React, { MouseEvent } from 'react'
        // import IRunner from '../../../models/IRunner'
        // import { SocketContext } from '../../../context/webSocket'
        // import { AvailableToBackLay } from './available-to-back-lay'
        // import { betPopup } from '../../../redux/actions/bet/betSlice'
        // import { connect } from 'react-redux'
        // import PnlCalculate from './pnl-calculate'
        // // import { checkoddslength } from '../../../utils/helper'
        // import { isMobile } from 'react-device-detect'
        // import BookPopup from './fancy/book-popup'
        // import IMatch from '../../../models/IMatch'
        // import { setRules } from '../../../redux/actions/common/commonSlice'
        // import UserBookPopup from './user-book-popup'
        // import '../../../styles/market-layout.css'

        // interface Props {
        //   data: IMarket[]
        //   getMarketBook?: any
        //   bet?: any
        //   fancySelectionId?: any
        //   currentMatch?: IMatch
        //   setRules: (data: { open: boolean; type: string }) => void
        //   marketUserBookId?: any
        // }

        // class MatchOdds extends React.PureComponent<
        //   Props,
        //   {
        //     runnersData: any
        //     runnersDataPrev: any
        //     profitLoss: any
        //     getMarketBook: any
        //     remarkMarket: any
        //     runnersName: Record<string, string>
        //   }
        // > {
        //   static contextType = SocketContext
        //   context!: React.ContextType<typeof SocketContext>
        //   pollInterval: any

        //   constructor(props: Props) {
        //     super(props)
        //     const selections: any = {}
        //     const profitLoss: any = {}
        //     const remarkMarket: any = {}
        //     let runnersName: any = {}
        //     props.data.forEach(async (market: IMarket) => {
        //       market.runners.forEach((runner: IRunner) => {
        //         runnersName = {
        //           ...runnersName,
        //           [market.marketId]: {
        //             ...runnersName[market.marketId],
        //             [runner.selectionId]: runner.runnerName,
        //           },
        //         }
        //         selections[market.marketId] = market
        //         profitLoss[runner.selectionId] = 0
        //       })
        //       remarkMarket[market.marketId] = ''
        //     })
        //     this.state = {
        //       runnersData: selections,
        //       runnersDataPrev: JSON.parse(JSON.stringify(selections)),
        //       profitLoss,
        //       getMarketBook: props.getMarketBook,
        //       remarkMarket: remarkMarket,
        //       runnersName: runnersName,
        //     }
        //   }

        //   componentDidMount(): void {
        //     this.socketEvents()
        //   }

        //   componentWillUnmount(): void {
        //     this.context.socket.off('getMarketData')
        //     this.leaveMarketRoom()
        //     if (this.pollInterval) {
        //       clearInterval(this.pollInterval)
        //     }
        //   }

        //   componentDidUpdate(prevProps: Readonly<Props>): void {
        //     if (prevProps.data !== this.props.data) {
        //       this.socketEvents()
        //     }
        //   }

        //   socketEvents = () => {
        //     // Since WebSocket real-time updates are not working properly,
        //     // we'll use polling to update match odds every 0.5 seconds
        //     this.pollMarketData()

        //     this.context.socket.emit('joinRoom', this.props.currentMatch?.matchId)
        //     this.props.data.forEach(async (market: IMarket) => {
        //       this.context.socket.emit('joinMarketRoom', market.marketId)
        //     })
        //     this.getSocketEvents()
        //     this.context.socket.on('connect', () => {
        //       this.joinMarketRoom()
        //     })
        //     this.context.socket.on('reconnect', () => {
        //       this.joinMarketRoom()
        //     })
        //   }

        //   pollMarketData = () => {
        //     const handler = () => {
        //       // Poll once per match instead of per market to avoid duplicate requests
        //       // Use Array.from() to convert Set to array (avoids TypeScript downlevelIteration error)
        //       const matchIds = Array.from(new Set(this.props.data.map(market => market.matchId)))

        //       // Process matches sequentially to avoid race conditions and duplicates
        //       matchIds.forEach(async (matchId) => {
        //         try {
        //           // Get the token from localStorage
        //           const token = window.location.pathname.includes('admin')
        //             ? localStorage.getItem('token-admin')
        //             : localStorage.getItem('token')

        //           console.log(`ðŸ”„ Polling sessions for matchId: ${matchId}`)

        //           // Fix URL construction to avoid double /api/ prefix
        //           const baseUrl = process.env.REACT_APP_API_BASEURL || 'http://localhost:3010'
        //           const apiUrl = baseUrl.endsWith('/api')
        //             ? `${baseUrl}sessions-data?MatchID=${matchId}`  // Base URL already includes /api
        //             : `${baseUrl}sessions-data?MatchID=${matchId}` // Add /api to base URL

        //           const response = await fetch(apiUrl, {
        //             headers: {
        //               'Authorization': token ? `Bearer ${token}` : '',
        //               'Content-Type': 'application/json'
        //             }
        //           })
        //           const data = await response.json()

        //           console.log(`ðŸ“Š Sessions response for match ${matchId}:`, data)

        //           // Update response handling to match the standardized response format (same as fancy-data)
        //           if (data && !data.error && Array.isArray(data.data)) {
        //             // Filter only match and bookmaker data for faster processing
        //             const matchAndBookmakerData = data.data.filter((market: any) =>
        //               market.gtype === 'match' || market.gtype === 'match1'
        //             );

        //             console.log(`ðŸŽ¯ Filtered ${matchAndBookmakerData.length} match/bookmaker markets from ${data.data.length} total markets`);
        //             console.log('ðŸ” Filtered markets:', matchAndBookmakerData.map((m: any) => ({
        //               marketId: m.marketId,
        //               gtype: m.gtype,
        //               marketName: m.marketName,
        //               runnersCount: m.runners?.length || 0
        //             })));

        //             // Batch update all markets for this match to avoid multiple setState calls
        //             const updatedMarketsData: any = {}

        //             matchAndBookmakerData.forEach((market: any) => {
        //               // Transform the response to match the expected format for MatchOdds component
        //               const transformedMarket = {
        //                 _id: market.marketId?.toString() || market.externalData?.mid?.toString(),
        //                 marketId: market.marketId?.toString() || market.externalData?.mid?.toString(),
        //                 marketName: market.marketName || market.externalData?.mname,
        //                 matchId: market.externalData?.gmid || matchId,
        //                 gtype: market.gtype || market.externalData?.gtype,
        //                 oddsType: market.gtype === 'match1' ? 'BM' : 'MATCH_ODDS',
        //                 status: market.externalData?.status || 'OPEN',
        //                 runners: (market.runners || []).map((runner: any) => {
        //                   // Transform odds based on market type
        //                   const isBookmaker = market.gtype === 'match1'

        //                   // âœ… ENHANCED: Better debugging for bookmaker markets
        //                   console.log(`ðŸ”„ Processing ${market.marketName} (${market.gtype}):`, {
        //                     isBookmaker,
        //                     marketId: market.marketId,
        //                     marketStatus: market.externalData?.status,
        //                     runnersCount: market.runners?.length
        //                   })

        //                   // For bookmaker markets, use the existing price values directly from API
        //                   const transformOdds = (oddsArray: any[]) => {
        //                     if (!oddsArray || !Array.isArray(oddsArray)) {
        //                       console.log(`âš ï¸ Invalid odds array for ${market.marketName}:`, oddsArray)
        //                       return []
        //                     }

        //                     const transformed = oddsArray.map((odd: any) => ({
        //                       // For bookmaker: use existing price and price1 directly (API already has correct format)
        //                       // For regular odds: use price as-is
        //                       price: isBookmaker ? odd.price : odd.price,  // Use API price directly for bookmaker
        //                       price1: isBookmaker ? odd.price1 || odd.price?.toFixed(2) : odd.price?.toFixed(2), // Use API price1 for bookmaker
        //                       size: odd.size || 0
        //                     }))

        //                     // âœ… DEBUG: Log the transformation
        //                     if (isBookmaker) {
        //                       console.log(`ðŸ“Š Transformed ${market.marketName} odds:`, {
        //                         original: oddsArray,
        //                         transformed: transformed
        //                       })
        //                     }

        //                     return transformed
        //                   }

        //                   const transformedRunner = {
        //                     selectionId: runner.selectionId,
        //                     runnerName: runner.selectionName,
        //                     // FIX: For bookmaker markets, use individual runner status from externalData.gstatus
        //                     // For match odds, use the runner status as-is
        //                     status: (() => {
        //                       if (market.gtype === 'match1') {
        //                         // For bookmaker (match1), check individual runner gstatus from externalData
        //                         const externalRunner = market.externalData?.section?.find((s: any) =>
        //                           s.sid?.toString() === runner.selectionId?.toString() ||
        //                           s.sno?.toString() === runner.sortPriority?.toString()
        //                         );

        //                         if (externalRunner) {
        //                           // Individual runner suspension for bookmaker
        //                           return externalRunner.gstatus === 'SUSPENDED' ? 'SUSPENDED' : 'ACTIVE';
        //                         }
        //                       }

        //                       // For regular match odds, use runner status as-is
        //                       return runner.status || 'ACTIVE';
        //                     })(),
        //                     sortPriority: runner.sortPriority,
        //                     ex: {
        //                       availableToBack: transformOdds(runner.back),
        //                       availableToLay: transformOdds(runner.lay)
        //                     },
        //                     // Keep the original back/lay arrays for compatibility
        //                     back: transformOdds(runner.back),
        //                     lay: transformOdds(runner.lay),
        //                     // Add gtype for bet validation
        //                     gtype: market.gtype
        //                   }

        //                   // âœ… DEBUG: Log runner transformation for bookmaker markets
        //                   if (isBookmaker) {
        //                     console.log(`ðŸƒ Transformed runner ${transformedRunner.runnerName}:`, {
        //                       selectionId: transformedRunner.selectionId,
        //                       status: transformedRunner.status,
        //                       backOddsCount: transformedRunner.ex.availableToBack?.length || 0,
        //                       layOddsCount: transformedRunner.ex.availableToLay?.length || 0,
        //                       backOdds: transformedRunner.ex.availableToBack,
        //                       layOdds: transformedRunner.ex.availableToLay,
        //                       originalBack: runner.back,
        //                       originalLay: runner.lay
        //                     })
        //                   }

        //                   return transformedRunner
        //                 }) || []
        //               }

        //               updatedMarketsData[market.marketId || market.externalData?.mid] = transformedMarket
        //             })

        //             // Single setState call for all markets of this match
        //             this.setState((prev) => ({
        //               runnersData: {
        //                 ...prev.runnersData,
        //                 ...updatedMarketsData
        //               },
        //             }))

        //             console.log(`âœ… Updated ${Object.keys(updatedMarketsData).length} match/bookmaker markets for match ${matchId}`)
        //             console.log('ðŸ“‹ Updated market IDs:', Object.keys(updatedMarketsData))
        //             console.log('ðŸ”„ Total markets in state:', Object.keys(this.state.runnersData).length)
        //           } else {
        //             console.log(`âš ï¸ No markets data in response for match ${matchId}`)
        //           }
        //         } catch (error) {
        //           console.error(`âŒ Error polling market data for match ${matchId}:`, error)
        //           // Don't stop polling on error, just log it and continue
        //         }
        //       })
        //     }

        //     // Clear any existing polling interval
        //     if (this.pollInterval) {
        //       clearInterval(this.pollInterval)
        //     }

        //     // Poll every 300ms for ultra-fast match/bookmaker updates (optimized for high frequency trading)
        //     this.pollInterval = setInterval(handler, 300)

        //     // Also run once immediately
        //     handler()
        //   }

        //   joinMarketRoom = () => {
        //     if (this.props.currentMatch) {
        //       this.context.socket.emit('joinRoom', this.props.currentMatch.matchId)
        //     }
        //     this.props.data.forEach(async (market: IMarket) => {
        //       this.context.socket.emit('joinMarketRoom', market.marketId)
        //     })
        //   }

        //   leaveMarketRoom = () => {
        //     this.props.data.forEach(async (market: IMarket) => {
        //       this.context.socket.emit('leaveRoom', market.marketId)
        //       this.context.socket.emit('leaveRoom', market.matchId)
        //     })
        //   }

        //   getSocketEvents = () => {
        //     const handler = (market: IMarket) => {
        //       this.setState((prev) => ({
        //         runnersData: { ...prev.runnersData, [market.marketId]: market },
        //       }))
        //     }
        //     this.context.socket.on('getMarketData', handler)
        //   }

        //   offplaylimit = (market: any) => {
        //     const inplayl =
        //       market.oddsType == OddsType.BM
        //         ? this.props.currentMatch?.inPlayBookMaxLimit
        //         : this.props.currentMatch?.inPlayMaxLimit
        //     const offplayl =
        //       market.oddsType == OddsType.BM
        //         ? this.props.currentMatch?.offPlayBookMaxLimit
        //         : this.props.currentMatch?.offPlayMaxLimit
        //     return this.props.currentMatch?.inPlay ? inplayl : offplayl
        //   }

        //   render(): React.ReactNode {
        //     const { data, getMarketBook } = this.props
        //     ///console.log(data)
        //     const { runnersData } = this.state
        //     return (
        //       <div>
        //         {data &&
        //           data.map((market: IMarket) => {
        //             const selectionsPrev: any = {}
        //             const oddsData = runnersData ? runnersData[market.marketId] : null
        //             let setVisibleMarketStatus = false
        //             if (oddsData) {
        //               setVisibleMarketStatus = !!oddsData?.['runners']?.[0]?.ex
        //             }
        //             const classforheadingfirst =
        //               isMobile && market.oddsType == OddsType.F ? 'box-6' : 'box-4'
        //             const classforheading = isMobile && market.oddsType == OddsType.F ? 'box-2' : 'box-1'
        //             if (!setVisibleMarketStatus) return null
        //             return (
        //               <div key={market._id}>
        //                 <div className='market-title mt-1'>
        //                   {market.marketName}
        //                   <a
        //                     href='#Bookmaker-market'
        //                     onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        //                       e.preventDefault()
        //                       this.props.setRules({
        //                         open: true,
        //                         type: market.oddsType === OddsType.BM ? 'Bookmaker' : market.oddsType,
        //                       })
        //                     }}
        //                     className='m-r-5 game-rules-icon'
        //                   >
        //                     <span>
        //                       <i className='fa fa-info-circle float-right' />
        //                     </span>
        //                   </a>
        //                   <span className='float-right m-r-10'>
        //                     Maximum Bet <span>{this.offplaylimit(market)}</span>
        //                   </span>
        //                 </div>
        //                 <div className='table-header'>
        //                   <div className={`float-left country-name ${classforheadingfirst} min-max`}>
        //                     <b />
        //                   </div>

        //                   {/* Check if bookmaker has single values to adjust header layout */}
        //                   {(() => {
        //                     const isBookmaker = market.oddsType === OddsType.BM
        //                     const hasOnlySingleValues = isBookmaker && oddsData?.runners?.[0]?.ex?.availableToBack?.length === 1 && oddsData?.runners?.[0]?.ex?.availableToLay?.length === 1

        //                     if (isBookmaker && hasOnlySingleValues) {
        //                       // For bookmaker with single values, show only main Back and Lay headers
        //                       return (
        //                         <>
        //                           <div className={`back ${classforheading} float-left text-center`}>
        //                             <b>BACK</b>
        //                           </div>
        //                           <div className={`lay ${classforheading} float-left text-center`}>
        //                             <b>LAY</b>
        //                           </div>
        //                         </>
        //                       )
        //                     } else {
        //                       // Standard layout with all boxes
        //                       return (
        //                         <>
        //                           {/* Show header boxes for all markets except Fancy on mobile */}
        //                           {(!isMobile || market.oddsType != OddsType.F) && (
        //                             <>
        //                               <div className='box-1 float-left' />
        //                               <div className='box-1 float-left' />
        //                             </>
        //                           )}

        //                           <div className={`back ${classforheading} float-left text-center`}>
        //                             <b>BACK</b>
        //                           </div>
        //                           <div className={`lay ${classforheading} float-left text-center`}>
        //                             <b>LAY</b>
        //                           </div>
        //                           {(!isMobile || market.oddsType != OddsType.F) && (
        //                             <>
        //                               <div className='box-1 float-left' />
        //                               <div className='box-1 float-left' />
        //                             </>
        //                           )}
        //                         </>
        //                       )
        //                     }
        //                   })()}
        //                 </div>
        //                 {oddsData &&
        //                   oddsData?.runners
        //                     ?.sort((a: any, b: any) => a?.sortPriority - b?.sortPriority)
        //                     /* .map((runner: IRunner) => {
        //                       runner = {
        //                         ...runner,
        //                         runnerName: this.state.runnersName?.[market.marketId]?.[runner.selectionId],
        //                       } */
        //                      //back array reverse for odds
        //                         .map((runner: IRunner) => {
        //                           runner = {
        //                             ...runner,
        //                             runnerName:
        //                               this.state.runnersName?.[market.marketId]?.[
        //                                 runner.selectionId
        //                               ],
        //                             ex: {
        //                               ...runner.ex,
        //                               availableToBack: [
        //                                 ...(runner.ex?.availableToBack || []),
        //                               ].reverse(),
        //                               availableToLay: runner.ex?.availableToLay || [],
        //                             },
        //                           };
        //                       return (
        //                         <div key={runner.selectionId}>
        //                           <div
        //                             data-title={runner.status}
        //                             className={`table-row ${runner.status === 'SUSPENDED' ? 'suspended' : ''
        //                               }`}
        //                           >
        //                             <div className={` country-name ${classforheadingfirst}`}>
        //                               <span className='team-name'>
        //                                 <b>{runner.runnerName}</b>
        //                               </span>
        //                               <p>
        //                                 {getMarketBook[`${market.marketId}_${runner.selectionId}`] ? (
        //                                   <span
        //                                     className={
        //                                       getMarketBook[`${market.marketId}_${runner.selectionId}`] > 0
        //                                         ? 'green'
        //                                         : 'red'
        //                                     }
        //                                   >
        //                                     {getMarketBook[
        //                                       `${market.marketId}_${runner.selectionId}`
        //                                     ].toLocaleString()}
        //                                   </span>
        //                                 ) : (
        //                                   <span className='' style={{ color: 'black' }}>
        //                                     {'0'}
        //                                   </span>
        //                                 )}

        //                                 {/* âœ… UNIFIED: Use same PnlCalculate component for all market types (match odds, bookmaker, fancy) */}
        //                                 <PnlCalculate
        //                                   marketId={market.marketId}
        //                                   selectionId={runner.selectionId}
        //                                 />
        //                               </p>
        //                             </div>
        //                             <AvailableToBackLay
        //                               selections={runner.ex}
        //                               selectionsPrev={selectionsPrev}
        //                               market={market}
        //                               runner={runner}
        //                             />
        //                           </div>
        //                         </div>
        //                       )
        //                     })}
        //                 {this.state.remarkMarket[market.marketId] ? (
        //                   <div className='table-remark text-right remark'>
        //                     {this.state.remarkMarket[market.marketId]}
        //                   </div>
        //                 ) : (
        //                   ''
        //                 )}
        //               </div>
        //             )
        //           })}
        //         {this.props.fancySelectionId && <BookPopup />}
        //         {this.props.marketUserBookId && <UserBookPopup />}
        //       </div>
        //     )
        //   }
        // }
        // const mapStateToProps = (state: any) => ({
        //   bet: state.betReducer.bet,
        //   getMarketBook: state.betReducer.userBookMarketList,
        //   fancySelectionId: state.betReducer.fancyMatchAndSelectionId,
        //   currentMatch: state.sportReducer.currentMatch,
        //   marketUserBookId: state.betReducer.marketBookAndSelectionId,
        // })

        // const actionCreators = {
        //   betPopup,
        //   setRules,
        // }
        // export default connect(mapStateToProps, actionCreators)(MatchOdds)
        /* eslint-disable */

        // import IMarket, { OddsType } from "../../../models/IMarket";
        // import React, { MouseEvent } from "react";
        // import IRunner from "../../../models/IRunner";
        // import { SocketContext } from "../../../context/webSocket";
        // import { AvailableToBackLay } from "./available-to-back-lay";
        // import { betPopup } from "../../../redux/actions/bet/betSlice";
        // import { connect } from "react-redux";
        // import PnlCalculate from "./pnl-calculate";
        // import { isMobile } from "react-device-detect";
        // import BookPopup from "./fancy/book-popup";
        // import IMatch from "../../../models/IMatch";
        // import { setRules } from "../../../redux/actions/common/commonSlice";
        // import UserBookPopup from "./user-book-popup";
        // import "../../../styles/market-layout.css";

        // // Standardized Header Component for all market types
        // // ... (previous imports and code)

        // // Updated Header Component for all market types
        // interface MarketHeaderProps {
        //   market: IMarket;
        //   hasSingleValues: boolean;
        //   currentMatch?: IMatch;
        // }

        // const MarketHeader: React.FC<MarketHeaderProps> = ({
        //   market,
        //   hasSingleValues,
        //   currentMatch,
        // }) => {
        //   const teamNameClass =
        //     isMobile && market.oddsType === OddsType.F ? "box-6" : "box-4";
        //   const backLayClass =
        //     isMobile && market.oddsType === OddsType.F ? "box-2" : "box-1";
        //   const isBookmaker = market.oddsType === OddsType.BM;

        //   // âœ… CRICKET FIX: For cricket bookmaker, use match odds layout (sportId 4)
        //   const isCricketBookmaker = isBookmaker && (market.sportId === 4 || currentMatch?.sportId === 4);

        //   // Determine if we should show spacing boxes
        //   const showSpacingBoxes = isCricketBookmaker ? true : (!isBookmaker || (isBookmaker && !hasSingleValues));

        //   // Special case for Bookmaker with single values (but not cricket)
        //   const isBookmakerSingle = isBookmaker && hasSingleValues && !isCricketBookmaker;

        //   return (
        //     <div className="table-header">
        //       <div className={`float-left country-name ${teamNameClass} min-max`}>
        //         <b />
        //       </div>

        //       {/* Left spacing boxes */}
        //       {showSpacingBoxes && (
        //         <>
        //           <div className="box-1 float-left" />
        //           <div className="box-1 float-left" />
        //         </>
        //       )}

        //       {/* Bookmaker with single values: Two extra boxes (Left) */}
        //       {isBookmakerSingle && (
        //         <>
        //           <div className="box-1 float-left" />
        //           <div className="box-1 float-left" />
        //         </>
        //       )}

        //       {/* BACK and LAY boxes */}
        //       <div className={`back ${backLayClass} float-left text-center`}>
        //         <b>BACK</b>
        //       </div>

        //       <div className={`lay ${backLayClass} float-left text-center`}>
        //         <b>LAY</b>
        //       </div>

        //       {/* Right spacing boxes */}
        //       {showSpacingBoxes && (
        //         <>
        //           <div className="box-1 bg-red-500 float-left" />
        //           <div className="box-1 float-left" />
        //         </>
        //       )}

        //       {/* Bookmaker with single values: Two extra boxes (Right) */}
        //       {isBookmakerSingle && (
        //         <>
        //           <div className="box-1 float-left" />
        //           <div className="box-1 float-left" />
        //         </>
        //       )}
        //     </div>
        //   );
        // };

        // interface Props {
        //   data: IMarket[];
        //   getMarketBook?: any;
        //   bet?: any;
        //   fancySelectionId?: any;
        //   currentMatch?: IMatch;
        //   setRules: (data: { open: boolean; type: string }) => void;
        //   marketUserBookId?: any;
        // }

        // class MatchOdds extends React.PureComponent<
        //   Props,
        //   {
        //     runnersData: any;
        //     runnersDataPrev: any;
        //     profitLoss: any;
        //     getMarketBook: any;
        //     remarkMarket: any;
        //     runnersName: Record<string, string>;
        //   }
        // > {
        //   static contextType = SocketContext;
        //   context!: React.ContextType<typeof SocketContext>;
        //   pollInterval: any;

        //   constructor(props: Props) {
        //     super(props);
        //     const selections: any = {};
        //     const profitLoss: any = {};
        //     const remarkMarket: any = {};
        //     let runnersName: any = {};
        //     props.data.forEach(async (market: IMarket) => {
        //       market.runners.forEach((runner: IRunner) => {
        //         runnersName = {
        //           ...runnersName,
        //           [market.marketId]: {
        //             ...runnersName[market.marketId],
        //             [runner.selectionId]: runner.runnerName,
        //           },
        //         };
        //         selections[market.marketId] = market;
        //         profitLoss[runner.selectionId] = 0;
        //       });
        //       remarkMarket[market.marketId] = "";
        //     });
        //     this.state = {
        //       runnersData: selections,
        //       runnersDataPrev: JSON.parse(JSON.stringify(selections)),
        //       profitLoss,
        //       getMarketBook: props.getMarketBook,
        //       remarkMarket: remarkMarket,
        //       runnersName: runnersName,
        //     };
        //   }

        //   componentDidMount(): void {
        //     this.socketEvents();
        //   }

        //   componentWillUnmount(): void {
        //     this.context.socket.off("getMarketData");
        //     this.leaveMarketRoom();
        //     if (this.pollInterval) {
        //       clearInterval(this.pollInterval);
        //     }
        //   }

        //   componentDidUpdate(prevProps: Readonly<Props>): void {
        //     if (prevProps.data !== this.props.data) {
        //       this.socketEvents();
        //     }
        //   }

        //   socketEvents = () => {
        //     // Since WebSocket real-time updates are not working properly,
        //     // we'll use polling to update match odds every 0.5 seconds
        //     this.pollMarketData();

        //     this.context.socket.emit("joinRoom", this.props.currentMatch?.matchId);
        //     this.props.data.forEach(async (market: IMarket) => {
        //       this.context.socket.emit("joinMarketRoom", market.marketId);
        //     });
        //     this.getSocketEvents();
        //     this.context.socket.on("connect", () => {
        //       this.joinMarketRoom();
        //     });
        //     this.context.socket.on("reconnect", () => {
        //       this.joinMarketRoom();
        //     });
        //   };

        //   pollMarketData = () => {
        //     const handler = () => {
        //       // Poll once per match instead of per market to avoid duplicate requests
        //       // Use Array.from() to convert Set to array (avoids TypeScript downlevelIteration error)
        //       const matchIds = Array.from(
        //         new Set(this.props.data.map((market) => market.matchId))
        //       );

        //       // Process matches sequentially to avoid race conditions and duplicates
        //       matchIds.forEach(async (matchId) => {
        //         try {
        //           // Get the token from localStorage
        //           const token = window.location.pathname.includes("admin")
        //             ? localStorage.getItem("token-admin")
        //             : localStorage.getItem("token");

        //           console.log(`ðŸ”„ Polling sessions for matchId: ${matchId}`);

        //           // Fix URL construction to avoid double /api/ prefix
        //           const baseUrl =
        //             process.env.REACT_APP_API_BASEURL || "http://localhost:3010";
        //           const apiUrl = baseUrl.endsWith("/api")
        //             ? `${baseUrl}sessions-data?MatchID=${matchId}` // Base URL already includes /api
        //             : `${baseUrl}sessions-data?MatchID=${matchId}`; // Add /api to base URL

        //           const response = await fetch(apiUrl, {
        //             headers: {
        //               Authorization: token ? `Bearer ${token}` : "",
        //               "Content-Type": "application/json",
        //             },
        //           });
        //           const data = await response.json();

        //           console.log(`ðŸ“Š Sessions response for match ${matchId}:`, data);

        //           // Update response handling to match the standardized response format (same as fancy-data)
        //           if (data && !data.error && Array.isArray(data.data)) {
        //             // Filter only match and bookmaker data for faster processing
        //             const matchAndBookmakerData = data.data.filter(
        //               (market: any) =>
        //                 market.gtype === "match" || market.gtype === "match1"
        //             );

        //             console.log(
        //               `ðŸŽ¯ Filtered ${matchAndBookmakerData.length} match/bookmaker markets from ${data.data.length} total markets`
        //             );
        //             console.log(
        //               "ðŸ” Filtered markets:",
        //               matchAndBookmakerData.map((m: any) => ({
        //                 marketId: m.marketId,
        //                 gtype: m.gtype,
        //                 marketName: m.marketName,
        //                 runnersCount: m.runners?.length || 0,
        //               }))
        //             );

        //             // Batch update all markets for this match to avoid multiple setState calls
        //             const updatedMarketsData: any = {};

        //             matchAndBookmakerData.forEach((market: any) => {
        //               // Transform the response to match the expected format for MatchOdds component
        //               const transformedMarket = {
        //                 _id:
        //                   market.marketId?.toString() ||
        //                   market.externalData?.mid?.toString(),
        //                 marketId:
        //                   market.marketId?.toString() ||
        //                   market.externalData?.mid?.toString(),
        //                 marketName: market.marketName || market.externalData?.mname,
        //                 matchId: market.externalData?.gmid || matchId,
        //                 gtype: market.gtype || market.externalData?.gtype,
        //                 oddsType: market.gtype === "match1" ? "BM" : "MATCH_ODDS",
        //                 status: market.externalData?.status || "OPEN",
        //                 runners:
        //                   (market.runners || []).map((runner: any) => {
        //                     // Transform odds based on market type
        //                     const isBookmaker = market.gtype === "match1";

        //                     // âœ… ENHANCED: Better debugging for bookmaker markets
        //                     console.log(
        //                       `ðŸ”„ Processing ${market.marketName} (${market.gtype}):`,
        //                       {
        //                         isBookmaker,
        //                         marketId: market.marketId,
        //                         marketStatus: market.externalData?.status,
        //                         runnersCount: market.runners?.length,
        //                       }
        //                     );

        //                     // For bookmaker markets, use the existing price values directly from API
        //                     const transformOdds = (oddsArray: any[]) => {
        //                       if (!oddsArray || !Array.isArray(oddsArray)) {
        //                         console.log(
        //                           `âš ï¸ Invalid odds array for ${market.marketName}:`,
        //                           oddsArray
        //                         );
        //                         return [];
        //                       }

        //                       const transformed = oddsArray.map((odd: any) => ({
        //                         // For bookmaker: use existing price and price1 directly (API already has correct format)
        //                         // For regular odds: use price as-is
        //                         price: isBookmaker ? odd.price : odd.price, // Use API price directly for bookmaker
        //                         price1: isBookmaker
        //                           ? odd.price1 || odd.price?.toFixed(2)
        //                           : odd.price?.toFixed(2), // Use API price1 for bookmaker
        //                         size: odd.size || 0,
        //                       }));

        //                       // âœ… DEBUG: Log the transformation
        //                       if (isBookmaker) {
        //                         console.log(
        //                           `ðŸ“Š Transformed ${market.marketName} odds:`,
        //                           {
        //                             original: oddsArray,
        //                             transformed: transformed,
        //                           }
        //                         );
        //                       }

        //                       return transformed;
        //                     };

        //                     const transformedRunner = {
        //                       selectionId: runner.selectionId,
        //                       runnerName: runner.selectionName,
        //                       // FIX: For bookmaker markets, use individual runner status from externalData.gstatus
        //                       // For match odds, use the runner status as-is
        //                       status: (() => {
        //                         if (market.gtype === "match1") {
        //                           // For bookmaker (match1), check individual runner gstatus from externalData
        //                           const externalRunner =
        //                             market.externalData?.section?.find(
        //                               (s: any) =>
        //                                 s.sid?.toString() ===
        //                                   runner.selectionId?.toString() ||
        //                                 s.sno?.toString() ===
        //                                   runner.sortPriority?.toString()
        //                             );

        //                           if (externalRunner) {
        //                             // Individual runner suspension for bookmaker
        //                             return externalRunner.gstatus === "SUSPENDED"
        //                               ? "SUSPENDED"
        //                               : "ACTIVE";
        //                           }
        //                         }

        //                         // For regular match odds, use runner status as-is
        //                         return runner.status || "ACTIVE";
        //                       })(),
        //                       sortPriority: runner.sortPriority,
        //                       ex: {
        //                         availableToBack: transformOdds(runner.back),
        //                         availableToLay: transformOdds(runner.lay),
        //                       },
        //                       // Keep the original back/lay arrays for compatibility
        //                       back: transformOdds(runner.back),
        //                       lay: transformOdds(runner.lay),
        //                       // Add gtype for bet validation
        //                       gtype: market.gtype,
        //                     };

        //                     // âœ… DEBUG: Log runner transformation for bookmaker markets
        //                     if (isBookmaker) {
        //                       console.log(
        //                         `ðŸƒ Transformed runner ${transformedRunner.runnerName}:`,
        //                         {
        //                           selectionId: transformedRunner.selectionId,
        //                           status: transformedRunner.status,
        //                           backOddsCount:
        //                             transformedRunner.ex.availableToBack?.length || 0,
        //                           layOddsCount:
        //                             transformedRunner.ex.availableToLay?.length || 0,
        //                           backOdds: transformedRunner.ex.availableToBack,
        //                           layOdds: transformedRunner.ex.availableToLay,
        //                           originalBack: runner.back,
        //                           originalLay: runner.lay,
        //                         }
        //                       );
        //                     }

        //                     return transformedRunner;
        //                   }) || [],
        //               };

        //               updatedMarketsData[market.marketId || market.externalData?.mid] =
        //                 transformedMarket;
        //             });

        //             // Single setState call for all markets of this match
        //             this.setState((prev) => ({
        //               runnersData: {
        //                 ...prev.runnersData,
        //                 ...updatedMarketsData,
        //               },
        //             }));

        //             console.log(
        //               `âœ… Updated ${
        //                 Object.keys(updatedMarketsData).length
        //               } match/bookmaker markets for match ${matchId}`
        //             );
        //             console.log(
        //               "ðŸ“‹ Updated market IDs:",
        //               Object.keys(updatedMarketsData)
        //             );
        //             console.log(
        //               "ðŸ”„ Total markets in state:",
        //               Object.keys(this.state.runnersData).length
        //             );
        //           } else {
        //             console.log(`âš ï¸ No markets data in response for match ${matchId}`);
        //           }
        //         } catch (error) {
        //           console.error(
        //             `âŒ Error polling market data for match ${matchId}:`,
        //             error
        //           );
        //           // Don't stop polling on error, just log it and continue
        //         }
        //       });
        //     };

        //     // Clear any existing polling interval
        //     if (this.pollInterval) {
        //       clearInterval(this.pollInterval);
        //     }

        //     // Poll every 300ms for ultra-fast match/bookmaker updates (optimized for high frequency trading)
        //     this.pollInterval = setInterval(handler, 300);

        //     // Also run once immediately
        //     handler();
        //   };

        //   joinMarketRoom = () => {
        //     if (this.props.currentMatch) {
        //       this.context.socket.emit("joinRoom", this.props.currentMatch.matchId);
        //     }
        //     this.props.data.forEach(async (market: IMarket) => {
        //       this.context.socket.emit("joinMarketRoom", market.marketId);
        //     });
        //   };

        //   leaveMarketRoom = () => {
        //     this.props.data.forEach(async (market: IMarket) => {
        //       this.context.socket.emit("leaveRoom", market.marketId);
        //       this.context.socket.emit("leaveRoom", market.matchId);
        //     });
        //   };

        //   getSocketEvents = () => {
        //     const handler = (market: IMarket) => {
        //       this.setState((prev) => ({
        //         runnersData: { ...prev.runnersData, [market.marketId]: market },
        //       }));
        //     };
        //     this.context.socket.on("getMarketData", handler);
        //   };

        //   offplaylimit = (market: any) => {
        //     const inplayl =
        //       market.oddsType == OddsType.BM
        //         ? this.props.currentMatch?.inPlayBookMaxLimit
        //         : this.props.currentMatch?.inPlayMaxLimit;
        //     const offplayl =
        //       market.oddsType == OddsType.BM
        //         ? this.props.currentMatch?.offPlayBookMaxLimit
        //         : this.props.currentMatch?.offPlayMaxLimit;
        //     return this.props.currentMatch?.inPlay ? inplayl : offplayl;
        //   };

        //   render(): React.ReactNode {
        //     const { data, getMarketBook } = this.props;
        //     const { runnersData } = this.state;
        //     return (
        //       <div>
        //         {data &&
        //           data.map((market: IMarket) => {
        //             const selectionsPrev: any = {};
        //             const oddsData = runnersData ? runnersData[market.marketId] : null;
        //             let setVisibleMarketStatus = false;
        //             if (oddsData) {
        //               setVisibleMarketStatus = !!oddsData?.["runners"]?.[0]?.ex;
        //             }
        //             if (!setVisibleMarketStatus) return null;

        //             // Check if bookmaker market has single values
        //             const isBookmakerMarket = market.oddsType === OddsType.BM;
        //             const hasSingleValues =
        //               isBookmakerMarket &&
        //               oddsData?.runners?.[0]?.ex?.availableToBack?.length === 1 &&
        //               oddsData?.runners?.[0]?.ex?.availableToLay?.length === 1;

        //             return (
        //               <div key={market._id}>
        //                 <div className="market-title mt-1">
        //                   {market.marketName}
        //                   <a
        //                     href="#Bookmaker-market"
        //                     onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        //                       e.preventDefault();
        //                       this.props.setRules({
        //                         open: true,
        //                         type:
        //                           market.oddsType === OddsType.BM
        //                             ? "Bookmaker"
        //                             : market.oddsType,
        //                       });
        //                     }}
        //                     className="m-r-5 game-rules-icon"
        //                   >
        //                     <span>
        //                       <i className="fa fa-info-circle float-right" />
        //                     </span>
        //                   </a>
        //                   <span className="float-right m-r-10">
        //                     Maximum Bet <span>{this.offplaylimit(market)}</span>
        //                   </span>
        //                 </div>

        //                 {/* Use standardized header for all market types */}
        //                 <MarketHeader
        //                   market={market}
        //                   hasSingleValues={hasSingleValues}
        //                   currentMatch={this.props.currentMatch}
        //                 />

        //                 {oddsData &&
        //                   oddsData?.runners
        //                     ?.sort(
        //                       (a: any, b: any) => a?.sortPriority - b?.sortPriority
        //                     )
        //                     .map((runner: IRunner) => {
        //                       runner = {
        //                                             ...runner,
        //                                             runnerName:
        //                                               this.state.runnersName?.[market.marketId]?.[
        //                                                 runner.selectionId
        //                                               ],
        //                                             ex: {
        //                                               ...runner.ex,
        //                                               availableToBack: [
        //                                                 ...(runner.ex?.availableToBack || []),
        //                                               ].reverse(),
        //                                               availableToLay: runner.ex?.availableToLay || [],
        //                                             },
        //                                           };
        //                       return (
        //                         <div key={runner.selectionId}>
        //                           <div
        //                             data-title={runner.status}
        //                             className={`table-row ${
        //                               runner.status === "SUSPENDED" ? "suspended" : ""
        //                             }`}
        //                           >
        //                             <div
        //                               className={`country-name ${
        //                                 isMobile && market.oddsType === OddsType.F
        //                                   ? "box-6"
        //                                   : "box-4"
        //                               }`}
        //                             >
        //                               <span className="team-name">
        //                                 <b>{runner.runnerName}</b>
        //                               </span>
        //                               <p>
        //                                 {getMarketBook[
        //                                   `${market.marketId}_${runner.selectionId}`
        //                                 ] ? (
        //                                   <span
        //                                     className={
        //                                       getMarketBook[
        //                                         `${market.marketId}_${runner.selectionId}`
        //                                       ] > 0
        //                                         ? "green"
        //                                         : "red"
        //                                     }
        //                                   >
        //                                     {getMarketBook[
        //                                       `${market.marketId}_${runner.selectionId}`
        //                                     ].toLocaleString()}
        //                                   </span>
        //                                 ) : (
        //                                   <span className="" style={{ color: "black" }}>
        //                                     {"0"}
        //                                   </span>
        //                                 )}

        //                                 {/* Unified PNL calculation for all market types */}
        //                                 <PnlCalculate
        //                                   marketId={market.marketId}
        //                                   selectionId={runner.selectionId}
        //                                 />
        //                               </p>
        //                             </div>
        //                             <AvailableToBackLay
        //                               selections={runner.ex}
        //                               selectionsPrev={selectionsPrev}
        //                               market={market}
        //                               runner={runner}
        //                             />
        //                           </div>
        //                         </div>
        //                       );
        //                     })}
        //                 {this.state.remarkMarket[market.marketId] ? (
        //                   <div className="table-remark text-right remark">
        //                     {this.state.remarkMarket[market.marketId]}
        //                   </div>
        //                 ) : (
        //                   ""
        //                 )}
        //               </div>
        //             );
        //           })}
        //         {this.props.fancySelectionId && <BookPopup />}
        //         {this.props.marketUserBookId && <UserBookPopup />}
        //       </div>
        //     );
        //   }
        // }
        // const mapStateToProps = (state: any) => ({
        //   bet: state.betReducer.bet,
        //   getMarketBook: state.betReducer.userBookMarketList,
        //   fancySelectionId: state.betReducer.fancyMatchAndSelectionId,
        //   currentMatch: state.sportReducer.currentMatch,
        //   marketUserBookId: state.betReducer.marketBookAndSelectionId,
        // });

        // const actionCreators = {
        //   betPopup,
        //   setRules,
        // };
        // export default connect(mapStateToProps, actionCreators)(MatchOdds);

        /* eslint-disable */

        // import { checkoddslength } from '../../../utils/helper'

        class MatchOdds extends react__WEBPACK_IMPORTED_MODULE_1___default()
          .PureComponent {
          constructor(props) {
            super(props);
            this.context = void 0;
            this.pollInterval = void 0;
            this.safeMarkets = (input) =>
              Array.isArray(input)
                ? input.filter((m) => m && m.marketId)
                : [];
            this.socketEvents = () => {
              var _this$props$currentMa;
              // Since WebSocket real-time updates are not working properly,
              // we'll use polling to update match odds every 0.5 seconds
              this.pollMarketData();
              this.context.socket.emit(
                "joinRoom",
                (_this$props$currentMa = this.props.currentMatch) === null ||
                  _this$props$currentMa === void 0
                  ? void 0
                  : _this$props$currentMa.matchId
              );
              this.safeMarkets(this.props.data).forEach((market) => {
                this.context.socket.emit("joinMarketRoom", market.marketId);
              });
              this.getSocketEvents();
              this.context.socket.on("connect", () => {
                this.joinMarketRoom();
              });
              this.context.socket.on("reconnect", () => {
                this.joinMarketRoom();
              });
            };
            this.pollMarketData = () => {
              const handler = () => {
                const markets = this.safeMarkets(this.props.data);
                if (!markets.length) return;
                // Poll once per match instead of per market to avoid duplicate requests
                // Use Array.from() to convert Set to array (avoids TypeScript downlevelIteration error)
                const matchIds = Array.from(
                  new Set(markets.map((market) => market.matchId).filter(Boolean))
                );

                // Process matches sequentially to avoid race conditions and duplicates
                matchIds.forEach(async (matchId) => {
                  try {
                    // Get the token from localStorage
                    const token = window.location.pathname.includes("admin")
                      ? localStorage.getItem("token-admin")
                      : localStorage.getItem("token");
                    console.log(`ðŸ”„ Polling sessions for matchId: ${matchId}`);

                    // Fix URL construction to avoid double /api/ prefix
                    const baseUrl = "/api/" || 0;
                    const apiUrl = baseUrl.endsWith("/api")
                      ? `${baseUrl}sessions-data?MatchID=${matchId}` // Base URL already includes /api
                      : `${baseUrl}sessions-data?MatchID=${matchId}`; // Add /api to base URL

                    const response = await fetch(apiUrl, {
                      headers: {
                        Authorization: token ? `Bearer ${token}` : "",
                        "Content-Type": "application/json",
                      },
                    });
                    const data = await response.json();
                    console.log(
                      `ðŸ“Š Sessions response for match ${matchId}:`,
                      data
                    );

                    // Update response handling to match the standardized response format (same as fancy-data)
                    if (data && !data.error && Array.isArray(data.data)) {
                      // Filter only match and bookmaker data for faster processing
                      const matchAndBookmakerData = data.data.filter(
                        (market) =>
                          market.gtype === "match" || market.gtype === "match1"
                      );
                      console.log(
                        `ðŸŽ¯ Filtered ${matchAndBookmakerData.length} match/bookmaker markets from ${data.data.length} total markets`
                      );
                      console.log(
                        "ðŸ” Filtered markets:",
                        matchAndBookmakerData.map((m) => {
                          var _m$runners;
                          return {
                            marketId: m.marketId,
                            gtype: m.gtype,
                            marketName: m.marketName,
                            runnersCount:
                              ((_m$runners = m.runners) === null ||
                              _m$runners === void 0
                                ? void 0
                                : _m$runners.length) || 0,
                          };
                        })
                      );

                      // Batch update all markets for this match to avoid multiple setState calls
                      const updatedMarketsData = {};
                      matchAndBookmakerData.forEach((market) => {
                        var _market$marketId,
                          _market$externalData,
                          _market$externalData$,
                          _market$marketId2,
                          _market$externalData2,
                          _market$externalData3,
                          _market$externalData4,
                          _market$externalData5,
                          _market$externalData6,
                          _market$externalData7,
                          _market$externalData1;
                        // Transform the response to match the expected format for MatchOdds component
                        const transformedMarket = {
                          _id:
                            ((_market$marketId = market.marketId) === null ||
                            _market$marketId === void 0
                              ? void 0
                              : _market$marketId.toString()) ||
                            ((_market$externalData = market.externalData) ===
                              null || _market$externalData === void 0
                              ? void 0
                              : (_market$externalData$ =
                                  _market$externalData.mid) === null ||
                                _market$externalData$ === void 0
                              ? void 0
                              : _market$externalData$.toString()),
                          marketId:
                            ((_market$marketId2 = market.marketId) === null ||
                            _market$marketId2 === void 0
                              ? void 0
                              : _market$marketId2.toString()) ||
                            ((_market$externalData2 = market.externalData) ===
                              null || _market$externalData2 === void 0
                              ? void 0
                              : (_market$externalData3 =
                                  _market$externalData2.mid) === null ||
                                _market$externalData3 === void 0
                              ? void 0
                              : _market$externalData3.toString()),
                          marketName:
                            market.marketName ||
                            ((_market$externalData4 = market.externalData) ===
                              null || _market$externalData4 === void 0
                              ? void 0
                              : _market$externalData4.mname),
                          matchId:
                            ((_market$externalData5 = market.externalData) ===
                              null || _market$externalData5 === void 0
                              ? void 0
                              : _market$externalData5.gmid) || matchId,
                          gtype:
                            market.gtype ||
                            ((_market$externalData6 = market.externalData) ===
                              null || _market$externalData6 === void 0
                              ? void 0
                              : _market$externalData6.gtype),
                          oddsType:
                            market.gtype === "match1" ? "BM" : "MATCH_ODDS",
                          status:
                            ((_market$externalData7 = market.externalData) ===
                              null || _market$externalData7 === void 0
                              ? void 0
                              : _market$externalData7.status) || "OPEN",
                          runners:
                            (market.runners || []).map((runner) => {
                              var _market$externalData8, _market$runners;
                              // Transform odds based on market type
                              const isBookmaker = market.gtype === "match1";

                              // âœ… ENHANCED: Better debugging for bookmaker markets
                              console.log(
                                `ðŸ”„ Processing ${market.marketName} (${market.gtype}):`,
                                {
                                  isBookmaker,
                                  marketId: market.marketId,
                                  marketStatus:
                                    (_market$externalData8 =
                                      market.externalData) === null ||
                                    _market$externalData8 === void 0
                                      ? void 0
                                      : _market$externalData8.status,
                                  runnersCount:
                                    (_market$runners = market.runners) ===
                                      null || _market$runners === void 0
                                      ? void 0
                                      : _market$runners.length,
                                }
                              );

                              // For bookmaker markets, use the existing price values directly from API
                              const transformOdds = (oddsArray) => {
                                if (!oddsArray || !Array.isArray(oddsArray)) {
                                  console.log(
                                    `âš ï¸ Invalid odds array for ${market.marketName}:`,
                                    oddsArray
                                  );
                                  return [];
                                }
                                const transformed = oddsArray.map((odd) => {
                                  var _odd$price, _odd$price2;
                                  return {
                                    // For bookmaker: use existing price and price1 directly (API already has correct format)
                                    // For regular odds: use price as-is
                                    price: isBookmaker ? odd.price : odd.price,
                                    // Use API price directly for bookmaker
                                    price1: isBookmaker
                                      ? odd.price1 ||
                                        ((_odd$price = odd.price) === null ||
                                        _odd$price === void 0
                                          ? void 0
                                          : _odd$price.toFixed(2))
                                      : (_odd$price2 = odd.price) === null ||
                                        _odd$price2 === void 0
                                      ? void 0
                                      : _odd$price2.toFixed(2),
                                    // Use API price1 for bookmaker
                                    size: odd.size || 0,
                                  };
                                });

                                // âœ… DEBUG: Log the transformation
                                if (isBookmaker) {
                                  console.log(
                                    `ðŸ“Š Transformed ${market.marketName} odds:`,
                                    {
                                      original: oddsArray,
                                      transformed: transformed,
                                    }
                                  );
                                }
                                return transformed;
                              };
                              const transformedRunner = {
                                selectionId: runner.selectionId,
                                runnerName: runner.selectionName,
                                // FIX: For bookmaker markets, use individual runner status from externalData.gstatus
                                // For match odds, use the runner status as-is
                                status: (() => {
                                  if (market.gtype === "match1") {
                                    var _market$externalData9,
                                      _market$externalData0;
                                    // For bookmaker (match1), check individual runner gstatus from externalData
                                    const externalRunner =
                                      (_market$externalData9 =
                                        market.externalData) === null ||
                                      _market$externalData9 === void 0
                                        ? void 0
                                        : (_market$externalData0 =
                                            _market$externalData9.section) ===
                                            null ||
                                          _market$externalData0 === void 0
                                        ? void 0
                                        : _market$externalData0.find((s) => {
                                            var _s$sid,
                                              _runner$selectionId,
                                              _s$sno,
                                              _runner$sortPriority;
                                            return (
                                              ((_s$sid = s.sid) === null ||
                                              _s$sid === void 0
                                                ? void 0
                                                : _s$sid.toString()) ===
                                                ((_runner$selectionId =
                                                  runner.selectionId) ===
                                                  null ||
                                                _runner$selectionId === void 0
                                                  ? void 0
                                                  : _runner$selectionId.toString()) ||
                                              ((_s$sno = s.sno) === null ||
                                              _s$sno === void 0
                                                ? void 0
                                                : _s$sno.toString()) ===
                                                ((_runner$sortPriority =
                                                  runner.sortPriority) ===
                                                  null ||
                                                _runner$sortPriority === void 0
                                                  ? void 0
                                                  : _runner$sortPriority.toString())
                                            );
                                          });
                                    if (externalRunner) {
                                      // Individual runner suspension for bookmaker
                                      return externalRunner.gstatus ===
                                        "SUSPENDED"
                                        ? "SUSPENDED"
                                        : "ACTIVE";
                                    }
                                  }

                                  // For regular match odds, use runner status as-is
                                  return runner.status || "ACTIVE";
                                })(),
                                sortPriority: runner.sortPriority,
                                ex: {
                                  availableToBack: transformOdds(runner.back),
                                  availableToLay: transformOdds(runner.lay),
                                },
                                // Keep the original back/lay arrays for compatibility
                                back: transformOdds(runner.back),
                                lay: transformOdds(runner.lay),
                                // Add gtype for bet validation
                                gtype: market.gtype,
                              };

                              // âœ… DEBUG: Log runner transformation for bookmaker markets
                              if (isBookmaker) {
                                var _transformedRunner$ex,
                                  _transformedRunner$ex2;
                                console.log(
                                  `ðŸƒ Transformed runner ${transformedRunner.runnerName}:`,
                                  {
                                    selectionId: transformedRunner.selectionId,
                                    status: transformedRunner.status,
                                    backOddsCount:
                                      ((_transformedRunner$ex =
                                        transformedRunner.ex
                                          .availableToBack) === null ||
                                      _transformedRunner$ex === void 0
                                        ? void 0
                                        : _transformedRunner$ex.length) || 0,
                                    layOddsCount:
                                      ((_transformedRunner$ex2 =
                                        transformedRunner.ex.availableToLay) ===
                                        null ||
                                      _transformedRunner$ex2 === void 0
                                        ? void 0
                                        : _transformedRunner$ex2.length) || 0,
                                    backOdds:
                                      transformedRunner.ex.availableToBack,
                                    layOdds:
                                      transformedRunner.ex.availableToLay,
                                    originalBack: runner.back,
                                    originalLay: runner.lay,
                                  }
                                );
                              }
                              return transformedRunner;
                            }) || [],
                        };
                        updatedMarketsData[
                          market.marketId ||
                            ((_market$externalData1 = market.externalData) ===
                              null || _market$externalData1 === void 0
                              ? void 0
                              : _market$externalData1.mid)
                        ] = transformedMarket;
                      });

                      // Single setState call for all markets of this match
                      this.setState((prev) => ({
                        runnersData: {
                          ...prev.runnersData,
                          ...updatedMarketsData,
                        },
                      }));
                      console.log(
                        `âœ… Updated ${
                          Object.keys(updatedMarketsData).length
                        } match/bookmaker markets for match ${matchId}`
                      );
                      console.log(
                        "ðŸ“‹ Updated market IDs:",
                        Object.keys(updatedMarketsData)
                      );
                      console.log(
                        "ðŸ”„ Total markets in state:",
                        Object.keys(this.state.runnersData).length
                      );
                    } else {
                      console.log(
                        `âš ï¸ No markets data in response for match ${matchId}`
                      );
                    }
                  } catch (error) {
                    console.error(
                      `âŒ Error polling market data for match ${matchId}:`,
                      error
                    );
                    // Don't stop polling on error, just log it and continue
                  }
                });
              };

              // Clear any existing polling interval
              if (this.pollInterval) {
                clearInterval(this.pollInterval);
              }

              // Poll every 300ms for ultra-fast match/bookmaker updates (optimized for high frequency trading)
              this.pollInterval = setInterval(handler, 300);

              // Also run once immediately
              handler();
            };
            this.joinMarketRoom = () => {
              if (this.props.currentMatch) {
                this.context.socket.emit(
                  "joinRoom",
                  this.props.currentMatch.matchId
                );
              }
              this.safeMarkets(this.props.data).forEach((market) => {
                this.context.socket.emit("joinMarketRoom", market.marketId);
              });
            };
            this.leaveMarketRoom = () => {
              this.safeMarkets(this.props.data).forEach((market) => {
                this.context.socket.emit("leaveRoom", market.marketId);
                this.context.socket.emit("leaveRoom", market.matchId);
              });
            };
            this.getSocketEvents = () => {
              const handler = (market) => {
                this.setState((prev) => ({
                  runnersData: {
                    ...prev.runnersData,
                    [market.marketId]: market,
                  },
                }));
              };
              this.context.socket.on("getMarketData", handler);
            };
            this.offplaylimit = (market) => {
              var _this$props$currentMa2,
                _this$props$currentMa3,
                _this$props$currentMa4,
                _this$props$currentMa5,
                _this$props$currentMa6;
              const inplayl =
                market.oddsType ==
                _models_IMarket__WEBPACK_IMPORTED_MODULE_0__.OddsType.BM
                  ? (_this$props$currentMa2 = this.props.currentMatch) ===
                      null || _this$props$currentMa2 === void 0
                    ? void 0
                    : _this$props$currentMa2.inPlayBookMaxLimit
                  : (_this$props$currentMa3 = this.props.currentMatch) ===
                      null || _this$props$currentMa3 === void 0
                  ? void 0
                  : _this$props$currentMa3.inPlayMaxLimit;
              const offplayl =
                market.oddsType ==
                _models_IMarket__WEBPACK_IMPORTED_MODULE_0__.OddsType.BM
                  ? (_this$props$currentMa4 = this.props.currentMatch) ===
                      null || _this$props$currentMa4 === void 0
                    ? void 0
                    : _this$props$currentMa4.offPlayBookMaxLimit
                  : (_this$props$currentMa5 = this.props.currentMatch) ===
                      null || _this$props$currentMa5 === void 0
                  ? void 0
                  : _this$props$currentMa5.offPlayMaxLimit;
              return (_this$props$currentMa6 = this.props.currentMatch) !==
                null &&
                _this$props$currentMa6 !== void 0 &&
                _this$props$currentMa6.inPlay
                ? inplayl
                : offplayl;
            };
            const selections = {};
            const profitLoss = {};
            const remarkMarket = {};
            let runnersName = {};
            this.safeMarkets(props.data).forEach((market) => {
              const runners = Array.isArray(market === null || market === void 0 ? void 0 : market.runners)
                ? market.runners
                : [];
              runners.forEach((runner) => {
                runnersName = {
                  ...runnersName,
                  [market.marketId]: {
                    ...runnersName[market.marketId],
                    [runner.selectionId]: runner.runnerName,
                  },
                };
                selections[market.marketId] = market;
                profitLoss[runner.selectionId] = 0;
              });
              remarkMarket[market.marketId] = "";
            });
            this.state = {
              runnersData: selections,
              runnersDataPrev: JSON.parse(JSON.stringify(selections)),
              profitLoss,
              getMarketBook: props.getMarketBook,
              remarkMarket: remarkMarket,
              runnersName: runnersName,
            };
          }
          componentDidMount() {
            this.socketEvents();
          }
          componentWillUnmount() {
            this.context.socket.off("getMarketData");
            this.leaveMarketRoom();
            if (this.pollInterval) {
              clearInterval(this.pollInterval);
            }
          }
          componentDidUpdate(prevProps) {
            if (prevProps.data !== this.props.data) {
              this.socketEvents();
            }
          }
          render() {
            const { data, getMarketBook } = this.props;
            console.log(data);
            // {console.log(data)}
            const { runnersData } = this.state;
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
              "div",
              {
                children: [
                  this.safeMarkets(data).map((market) => {
                      var _this$props$currentMa7;
                      const selectionsPrev = {};
                      const oddsData = runnersData
                        ? runnersData[market.marketId]
                        : null;
                      let setVisibleMarketStatus = false;
                      if (oddsData) {
                        var _oddsData$runners, _oddsData$runners$;
                        setVisibleMarketStatus = !!(
                          oddsData !== null &&
                          oddsData !== void 0 &&
                          (_oddsData$runners = oddsData["runners"]) !== null &&
                          _oddsData$runners !== void 0 &&
                          (_oddsData$runners$ = _oddsData$runners[0]) !==
                            null &&
                          _oddsData$runners$ !== void 0 &&
                          _oddsData$runners$.ex
                        );
                      }
                      // changed this code to my code which i have written

                      //   const classforheadingfirst =
                      //   isMobile && market.oddsType == OddsType.F ? "box-6" : "box-4";
                      // const classforheading =
                      //   isMobile && market.oddsType == OddsType.F ? "box-2" : "box-1";
                      const classforheadingfirst =
                        react_device_detect__WEBPACK_IMPORTED_MODULE_5__.isMobile
                          ? "box-6"
                          : "box-4";
                      const classforheading =
                        react_device_detect__WEBPACK_IMPORTED_MODULE_5__.isMobile
                          ? "box-2"
                          : "box-1";
                      if (!setVisibleMarketStatus) return null;
                      return /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                        "div",
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                              _accordian_header__WEBPACK_IMPORTED_MODULE_10__[
                                "default"
                              ],
                              {
                                market: market,
                                offplaylimit: this.offplaylimit(market),
                                oddsData: oddsData,
                                setRules: this.props.setRules,
                                runnersName: this.state.runnersName,
                                getMarketBook: this.props.getMarketBook,
                                selectionsPrev: selectionsPrev,
                                isMobile:
                                  react_device_detect__WEBPACK_IMPORTED_MODULE_5__.isMobile,
                                matchId:
                                  (_this$props$currentMa7 =
                                    this.props.currentMatch) === null ||
                                  _this$props$currentMa7 === void 0
                                    ? void 0
                                    : _this$props$currentMa7.matchId,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 1565,
                                columnNumber: 17,
                              },
                              this
                            ),
                            ((
                              _oddsData$runners2,
                              _oddsData$runners2$,
                              _oddsData$runners2$$e,
                              _oddsData$runners2$$e2,
                              _oddsData$runners3,
                              _oddsData$runners3$,
                              _oddsData$runners3$$e,
                              _oddsData$runners3$$e2
                            ) => {
                              const isBookmaker =
                                market.oddsType ===
                                _models_IMarket__WEBPACK_IMPORTED_MODULE_0__
                                  .OddsType.BM;
                              const hasOnlySingleValues =
                                isBookmaker &&
                                (oddsData === null || oddsData === void 0
                                  ? void 0
                                  : (_oddsData$runners2 = oddsData.runners) ===
                                      null || _oddsData$runners2 === void 0
                                  ? void 0
                                  : (_oddsData$runners2$ =
                                      _oddsData$runners2[0]) === null ||
                                    _oddsData$runners2$ === void 0
                                  ? void 0
                                  : (_oddsData$runners2$$e =
                                      _oddsData$runners2$.ex) === null ||
                                    _oddsData$runners2$$e === void 0
                                  ? void 0
                                  : (_oddsData$runners2$$e2 =
                                      _oddsData$runners2$$e.availableToBack) ===
                                      null || _oddsData$runners2$$e2 === void 0
                                  ? void 0
                                  : _oddsData$runners2$$e2.length) === 1 &&
                                (oddsData === null || oddsData === void 0
                                  ? void 0
                                  : (_oddsData$runners3 = oddsData.runners) ===
                                      null || _oddsData$runners3 === void 0
                                  ? void 0
                                  : (_oddsData$runners3$ =
                                      _oddsData$runners3[0]) === null ||
                                    _oddsData$runners3$ === void 0
                                  ? void 0
                                  : (_oddsData$runners3$$e =
                                      _oddsData$runners3$.ex) === null ||
                                    _oddsData$runners3$$e === void 0
                                  ? void 0
                                  : (_oddsData$runners3$$e2 =
                                      _oddsData$runners3$$e.availableToLay) ===
                                      null || _oddsData$runners3$$e2 === void 0
                                  ? void 0
                                  : _oddsData$runners3$$e2.length) === 1;
                              if (isBookmaker && hasOnlySingleValues) {
                                // For bookmaker with single values, show only main Back and Lay headers
                                // return (
                                //   <>
                                //     <div
                                //       className={`back ${classforheading} float-left text-center`}
                                //     >
                                //       <b>BACK</b>
                                //     </div>
                                //     <div
                                //       className={`lay ${classforheading} float-left text-center`}
                                //     >
                                //       <b>LAY</b>
                                //     </div>
                                //   </>
                                // );
                              } else {
                                // Standard layout with all boxes
                                return /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment,
                                  {},
                                  void 0,
                                  false
                                );
                              }
                            })(),
                          ],
                        },
                        market._id,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 1564,
                          columnNumber: 15,
                        },
                        this
                      );
                    }),
                  this.props.fancySelectionId &&
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                      _fancy_book_popup__WEBPACK_IMPORTED_MODULE_6__["default"],
                      {},
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 1740,
                        columnNumber: 41,
                      },
                      this
                    ),
                  this.props.marketUserBookId &&
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(
                      _user_book_popup__WEBPACK_IMPORTED_MODULE_8__["default"],
                      {},
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 1741,
                        columnNumber: 41,
                      },
                      this
                    ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 1543,
                columnNumber: 7,
              },
              this
            );
          }
        }
        MatchOdds.contextType =
          _context_webSocket__WEBPACK_IMPORTED_MODULE_2__.SocketContext;
        const mapStateToProps = (state) => ({
          bet: state.betReducer.bet,
          getMarketBook: state.betReducer.userBookMarketList,
          fancySelectionId: state.betReducer.fancyMatchAndSelectionId,
          currentMatch: state.sportReducer.currentMatch,
          marketUserBookId: state.betReducer.marketBookAndSelectionId,
        });
        const actionCreators = {
          betPopup:
            _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_3__.betPopup,
          setRules:
            _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_7__.setRules,
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (0,
        react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(
          mapStateToProps,
          actionCreators
        )(MatchOdds);

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/pages/odds/components/pnl-calculate.tsx":
      /*!*****************************************************!*\
  !*** ./src/pages/odds/components/pnl-calculate.tsx ***!
  \*****************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../../redux/actions/bet/betSlice */ "./src/redux/actions/bet/betSlice.ts"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _models_IBet__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../models/IBet */ "./src/models/IBet.ts"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/odds/components/pnl-calculate.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        // ROBUST: Helper function to determine calculation type based on gtype and market properties

        const getCalculationType = (betValue) => {
          var _betValue$marketName;
          console.log(`ðŸ” PnL Calculate - Determining calculation type:`, {
            gtype: betValue.gtype,
            betOn: betValue.betOn,
            oddsType: betValue.oddsType,
            marketName: betValue.marketName,
          });

          // Priority 1: Check gtype (most reliable)
          if (betValue.gtype === "match1") {
            console.log(
              `âœ… PnL Calculate - Using BOOKMAKER based on gtype: match1`
            );
            return "BOOKMAKER";
          } else if (betValue.gtype === "match") {
            console.log(
              `âœ… PnL Calculate - Using MATCH_ODDS based on gtype: match`
            );
            return "MATCH_ODDS";
          } else if (betValue.gtype === "fancy") {
            console.log(`âœ… PnL Calculate - Using FANCY based on gtype: fancy`);
            return "FANCY";
          }

          // Priority 2: Fallback to betOn and oddsType for legacy compatibility
          if (
            betValue.betOn ===
            _models_IBet__WEBPACK_IMPORTED_MODULE_3__.IBetOn.FANCY
          ) {
            console.log(`âœ… PnL Calculate - Using FANCY based on betOn: FANCY`);
            return "FANCY";
          } else if (
            betValue.betOn ===
            _models_IBet__WEBPACK_IMPORTED_MODULE_3__.IBetOn.BOOKMAKER
          ) {
            console.log(
              `âœ… PnL Calculate - Using BOOKMAKER based on betOn: BOOKMAKER`
            );
            return "BOOKMAKER";
          } else if (
            betValue.oddsType === "bookMaker" ||
            betValue.oddsType === "BM"
          ) {
            console.log(
              `âœ… PnL Calculate - Using BOOKMAKER based on oddsType: ${betValue.oddsType}`
            );
            return "BOOKMAKER";
          } else if (
            betValue.betOn ===
              _models_IBet__WEBPACK_IMPORTED_MODULE_3__.IBetOn.MATCH_ODDS ||
            betValue.betOn ===
              _models_IBet__WEBPACK_IMPORTED_MODULE_3__.IBetOn.CASINO
          ) {
            console.log(
              `âœ… PnL Calculate - Using MATCH_ODDS based on betOn: ${betValue.betOn}`
            );
            return "MATCH_ODDS";
          }

          // Priority 3: Default based on market name patterns
          const marketName =
            ((_betValue$marketName = betValue.marketName) === null ||
            _betValue$marketName === void 0
              ? void 0
              : _betValue$marketName.toUpperCase()) || "";
          if (marketName.includes("BOOKMAKER") || marketName.includes("BM_")) {
            console.log(
              `âœ… PnL Calculate - Using BOOKMAKER based on market name: ${betValue.marketName}`
            );
            return "BOOKMAKER";
          } else if (
            marketName.includes("FANCY") ||
            marketName.includes("SESSION")
          ) {
            console.log(
              `âœ… PnL Calculate - Using FANCY based on market name: ${betValue.marketName}`
            );
            return "FANCY";
          }

          // Default: Match odds logic for most markets (OVER_UNDER, MATCH_ODDS, etc.)
          console.log(
            `âœ… PnL Calculate - Using MATCH_ODDS as default for market: ${betValue.marketName}`
          );
          return "MATCH_ODDS";
        };

        // ROBUST: Calculate PnL based on market type
        const calculatePnlByType = (
          calculationType,
          betValue,
          isOpposite = false
        ) => {
          let pnl = 0;
          let colorVal = "";
          console.log(`ðŸ”„ Calculating PnL for ${calculationType} market`, {
            calculationType,
            isBack: betValue.isBack,
            odds: betValue.odds,
            stake: betValue.stack,
            volume: betValue.volume,
            isOpposite,
            gtype: betValue.gtype,
            oddsType: betValue.oddsType,
            marketName: betValue.marketName,
          });
          switch (calculationType) {
            case "BOOKMAKER":
              // âœ… ENHANCED: Bookmaker logic with better debugging
              if (isOpposite) {
                if (betValue.isBack) {
                  pnl = -1 * betValue.stack; // Lose stake if opposite selection wins
                  colorVal = "red";
                  console.log(
                    `ðŸ“Š Bookmaker opposite back: lose stake -${betValue.stack}`
                  );
                } else {
                  pnl = betValue.stack; // Keep stake if opposite selection wins
                  colorVal = "green";
                  console.log(
                    `ðŸ“Š Bookmaker opposite lay: keep stake +${betValue.stack}`
                  );
                }
              } else {
                if (betValue.isBack) {
                  // âœ… FIX: Back bet profit = (odds / 100) Ã— stake (match backend exactly)
                  pnl = (betValue.odds / 100) * betValue.stack;
                  colorVal = pnl > 0 ? "green" : "red";
                  console.log(
                    `ðŸ“Š Bookmaker back profit: (${betValue.odds}/100) Ã— ${betValue.stack} = ${pnl}`
                  );
                } else {
                  // âœ… FIX: Lay bet liability = (odds / 100) Ã— stake (negative)
                  pnl = -1 * ((betValue.odds / 100) * betValue.stack);
                  colorVal = "red";
                  console.log(
                    `ðŸ“Š Bookmaker lay liability: -((${betValue.odds}/100) Ã— ${betValue.stack}) = ${pnl}`
                  );
                }
              }
              break;
            case "FANCY":
              // Fancy odds calculation (volume-based)
              if (isOpposite) {
                if (betValue.isBack) {
                  pnl = -betValue.stack; // Lose stake if opposite selection wins
                  colorVal = "red";
                } else {
                  pnl = betValue.stack; // Keep stake if opposite selection wins
                  colorVal = "green";
                }
              } else {
                if (betValue.isBack) {
                  // Back bet: profit = (volume Ã— stake) / 100, exposure = stake
                  pnl = (betValue.volume * betValue.stack) / 100;
                  colorVal = pnl > 0 ? "green" : "red";
                } else {
                  // Lay bet: liability = (volume Ã— stake) / 100
                  pnl = -((betValue.volume * betValue.stack) / 100);
                  colorVal = "red";
                }
              }
              break;
            case "MATCH_ODDS":
            default:
              // Match odds logic: Standard decimal odds calculation (exchange style)
              if (isOpposite) {
                if (betValue.isBack) {
                  pnl = -betValue.stack; // Lose stake if opposite selection wins
                  colorVal = "red";
                } else {
                  pnl = betValue.stack; // Keep stake if opposite selection wins
                  colorVal = "green";
                }
              } else {
                if (betValue.isBack) {
                  // Back bet: profit = (odds - 1) Ã— stake (match backend exactly)
                  pnl = (betValue.odds - 1) * betValue.stack;
                  colorVal = pnl > 0 ? "green" : "red";
                  console.log(
                    `ðŸ“Š Match odds back profit: (${betValue.odds}-1) Ã— ${betValue.stack} = ${pnl}`
                  );
                } else {
                  // Lay bet: liability = (odds - 1) Ã— stake
                  pnl = -1 * ((betValue.odds - 1) * betValue.stack);
                  colorVal = "red";
                  console.log(
                    `ðŸ“Š Match odds lay liability: -((${betValue.odds}-1) Ã— ${betValue.stack}) = ${pnl}`
                  );
                }
              }
              break;
          }
          console.log(`âœ… Final PnL calculation: ${pnl} (${colorVal})`);
          return {
            pnl,
            colorVal,
          };
        };
        const PnlCalculate = ({ selectionId, marketId, pnlValue }) => {
          _s();
          const betValues = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(
            _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_1__.selectBetPopup
          );
          const marketBook = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(
            _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_1__.selectMarketBook
          );

          // Console log PNL values with descriptive names
          console.log("ðŸ” PnlCalculate Props:", {
            value1: pnlValue,
          });

          // ðŸŽ¯ ENHANCED: Force re-render every 2 seconds for dynamic updates
          const [, setForceUpdate] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(0);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            const interval = setInterval(() => {
              setForceUpdate((prev) => prev + 1);
            }, 2000); // Force update every 2 seconds

            return () => clearInterval(interval);
          }, []);
          const pnl = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
            const betValue = betValues.betData;
            let current = 0,
              oppsite = 0,
              colorVal = "";

            // âœ… ENHANCED: Better debugging for bookmaker markets
            console.log(
              `ðŸŽ¯ PnL Calculate - Selection ${selectionId}, Market ${marketId}`,
              {
                hasActiveBet: Object.keys(betValue).length > 0,
                activeBetMarketId: betValue.marketId,
                activeBetSelectionId: betValue.selectionId,
                gtype: betValue.gtype,
                oddsType: betValue.oddsType,
                marketName: betValue.marketName,
                isMarketMatch: marketId === betValue.marketId,
                marketBookSize: Object.keys(marketBook).length,
                timestamp: new Date().toISOString(),
              }
            );

            // Check if there's an active bet being placed for this market
            const hasActiveBet =
              Object.keys(betValue).length > 0 &&
              marketId === betValue.marketId;
            if (hasActiveBet) {
              // âœ… ENHANCED: More detailed logging for active bet calculation
              const calculationType = getCalculationType(betValue);
              console.log(`ðŸ”„ Active bet PnL calculation:`, {
                calculationType,
                selectionId,
                betSelectionId: betValue.selectionId,
                isCurrentSelection: selectionId === betValue.selectionId,
              });
              if (selectionId === betValue.selectionId) {
                // Current selection calculation
                const result = calculatePnlByType(
                  calculationType,
                  betValue,
                  false
                );
                current = result.pnl;
                colorVal = result.colorVal;
                console.log(
                  `âœ… Current selection PnL: ${current} (${colorVal})`
                );
              } else {
                // Opposite selection calculation
                const result = calculatePnlByType(
                  calculationType,
                  betValue,
                  true
                );
                oppsite = result.pnl;
                colorVal = result.colorVal;
                console.log(
                  `âœ… Opposite selection PnL: ${oppsite} (${colorVal})`
                );
              }
            } else {
              // âœ… ENHANCED: Better debugging for persistent PnL from market book
              const marketKey = `${marketId}_${selectionId}`;
              const persistentPnl = marketBook[marketKey];
              console.log(`ðŸ“Š Checking persistent PnL:`, {
                marketKey,
                persistentPnl,
                marketBookKeys: Object.keys(marketBook).slice(0, 10),
                marketBookSize: Object.keys(marketBook).length,
              });
              if (persistentPnl !== undefined && persistentPnl !== null) {
                current = persistentPnl;
                colorVal =
                  current > 0 ? "green" : current < 0 ? "red" : "black";
                console.log(
                  `âœ… Using persistent PnL for ${marketKey}: ${current} (${colorVal})`
                );
              } else {
                console.log(`âš ï¸ No persistent PnL found for ${marketKey}`);

                // âœ… DEBUG: Show what keys ARE available for this market
                const marketKeys = Object.keys(marketBook).filter((key) =>
                  key.startsWith(`${marketId}_`)
                );
                if (marketKeys.length > 0) {
                  console.log(
                    `ðŸ” Available keys for market ${marketId}:`,
                    marketKeys
                  );
                } else {
                  console.log(
                    `âŒ No PnL data available for market ${marketId}`
                  );

                  // âœ… FALLBACK: Check if this might be a bookmaker market that needs time to load
                  // Force a refresh of bet data for bookmaker markets if no PnL found
                  console.log(
                    `ðŸ”„ Checking if this is a bookmaker market requiring data refresh...`
                  );
                }
              }
            }
            const result = {
              current: current.toFixed(),
              oppsite: oppsite.toFixed(),
              colorVal,
            };
            console.log(
              `ðŸŽ¯ Final PnL result for ${marketId}_${selectionId}:`,
              result
            );
            return result;
          }, [betValues, selectionId, marketId, marketBook]);

          // Show PnL only when odds are clicked (active bet exists)
          const hasActiveBet =
            Object.keys(betValues.betData).length > 0 &&
            marketId === betValues.betData.marketId;
          const marketKey = `${marketId}_${selectionId}`;

          // Only show PnL when there's an active bet (odds clicked)
          if (!hasActiveBet) return null;

          /////////////////////////////////////////////color display changes /////////////////////////////////
          // Calculate final values for display
          const finalCurrentValue =
            hasActiveBet && betValues.betData.selectionId === selectionId
              ? Number(pnl.current) + Number(pnlValue || 0)
              : Number(pnl.current) + Number(pnlValue || 0);
          const finalOppositeValue =
            hasActiveBet && betValues.betData.selectionId !== selectionId
              ? Number(pnl.oppsite) + Number(pnlValue || 0)
              : 0;

          // Determine which value to display and its color
          let displayValue = 0;
          let displayColor = "black";
          if (hasActiveBet) {
            if (betValues.betData.selectionId === selectionId) {
              displayValue = finalCurrentValue;
            } else {
              displayValue = finalOppositeValue;
            }
          } else {
            displayValue = finalCurrentValue;
          }

          // Check if final value equals pnlValue (no change)
          const isNoChange =
            Math.abs(displayValue - Number(pnlValue || 0)) < 0.01;

          // If no change, don't show anything
          if (isNoChange) {
            return null;
          }

          // Set color based on final value: green for >= 0, red for negative
          if (displayValue > 0) {
            displayColor = "green";
          } else if (displayValue < 0) {
            displayColor = "red";
          } else {
            displayColor = "black";
          }
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
            "span",
            {
              className: "float-right",
              style: {
                color: displayColor,
              },
              children: displayValue,
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 320,
              columnNumber: 5,
            },
            undefined
          );
        };
        /////////////////////////////////////////////color display changes /////////////////////////////////
        _s(PnlCalculate, "hY1f3zr2Of3P5u2jbdXfczMkTVw=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
          ];
        });
        _c = PnlCalculate;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          PnlCalculate;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "PnlCalculate");

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/pages/odds/components/score.tsx":
      /*!*********************************************!*\
  !*** ./src/pages/odds/components/score.tsx ***!
  \*********************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! socket.io-client */ "./node_modules/socket.io-client/build/esm/index.js"
          );
        /* harmony import */ var _services_scorecard_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../services/scorecard.service */ "./src/services/scorecard.service.ts"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/odds/components/score.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const Score = ({ matchId, sportId, isT10 = false }) => {
          _s();
          const [loading, setLoading] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);
          const [scorecardData, setScorecardData] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
          const [cricketScoreData, setCricketScoreData] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
          const [isConnected, setIsConnected] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const [iframeHeight, setIframeHeight] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(210);

          // Cricket scorecard specific state
          const [cricketScore, setCricketScore] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
          const [cricketConnected, setCricketConnected] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const pollIntervalRef =
            react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
          const socketRef =
            react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
          const iframeRef =
            react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            fetchScorecardData();

            // Cleanup socket on unmount
            return () => {
              if (socketRef.current) {
                socketRef.current.disconnect();
              }
              if (pollIntervalRef.current) {
                clearInterval(pollIntervalRef.current);
              }
            };
          }, [matchId, sportId]);

          // Cricket scorecard effect - runs when we have oldgmid from scorecardData
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            if (
              scorecardData !== null &&
              scorecardData !== void 0 &&
              scorecardData.oldgmid &&
              sportId === 4
            ) {
              // Only for cricket (sportId 4)
              connectToCricketScore(scorecardData.oldgmid);
            }
            return () => {
              if (pollIntervalRef.current) {
                clearInterval(pollIntervalRef.current);
              }
              // Cleanup backend connection
              if (
                scorecardData !== null &&
                scorecardData !== void 0 &&
                scorecardData.oldgmid
              ) {
                const baseUrl = "/api/" || 0;
                fetch(
                  `${baseUrl}cricket-score/${scorecardData.oldgmid}/disconnect`,
                  {
                    method: "DELETE",
                  }
                ).catch((err) => console.log("Cleanup disconnect error:", err));
              }
            };
          }, [
            scorecardData === null || scorecardData === void 0
              ? void 0
              : scorecardData.oldgmid,
            sportId,
          ]);
          const connectToCricketScore = async (oldgmid) => {
            try {
              console.log(
                `ðŸ Cricket score: Connecting for oldgmid: ${oldgmid}`
              );

              // Enhanced: Get match details first to determine sport type
              let sportType = "cricket"; // Default to cricket

              try {
                const detailsUrl = `https://api.cricketid.xyz/getDetailsData`;
                const detailsResponse = await fetch(detailsUrl, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    gmid: oldgmid,
                  }),
                });
                if (detailsResponse.ok) {
                  var _detailsData$data;
                  const detailsData = await detailsResponse.json();
                  console.log(
                    `ðŸ“Š Cricket score: Details data received for ${oldgmid}`,
                    detailsData
                  );

                  // Determine sport type from details
                  if (
                    detailsData !== null &&
                    detailsData !== void 0 &&
                    (_detailsData$data = detailsData.data) !== null &&
                    _detailsData$data !== void 0 &&
                    _detailsData$data.spid
                  ) {
                    const sportId = detailsData.data.spid;
                    if (sportId === 1) sportType = "cricket";
                    else if (sportId === 2) sportType = "football";
                    else if (sportId === 4) sportType = "tennis";
                    else sportType = "cricket"; // fallback
                  }
                }
              } catch (detailsError) {
                console.warn(
                  "âš ï¸ Could not fetch match details, using cricket as default:",
                  detailsError
                );
              }
              console.log(
                `ðŸŽ¯ Cricket score: Sport type determined as: ${sportType}`
              );
              if (sportType === "cricket") {
                // Start the backend connection with proper parameters
                const baseUrl = "/api/" || 0;
                const connectResponse = await fetch(
                  `${baseUrl}cricket-score/${oldgmid}/connect`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      type: "cricket",
                      oldgmid: oldgmid,
                      sportType: sportType,
                    }),
                  }
                );
                if (connectResponse.ok) {
                  console.log(
                    `âœ… Cricket score: Backend connection initiated for ${oldgmid}`
                  );
                } else {
                  console.warn(
                    `âš ï¸ Cricket score: Backend connection failed for ${oldgmid}`
                  );
                }

                // Start polling for cricket score data
                startScorePolling(oldgmid);

                // Also attempt direct socket connection as backup
                connectToScoreSocket(oldgmid, "cricket");
              } else {
                // For non-cricket sports, fetch scorecard differently
                console.log(
                  `ðŸƒ Non-cricket sport: Using iframe/API approach for ${sportType}`
                );
                connectToNonCricketScore(oldgmid, sportType);
              }
            } catch (error) {
              console.error(
                `âŒ Cricket score connection error for ${oldgmid}:`,
                error
              );
              setCricketConnected(false);
            }
          };

          // Helper function to connect directly to score socket
          const connectToScoreSocket = (oldgmid, type) => {
            try {
              console.log(
                `ðŸ”Œ Direct socket connection for ${oldgmid}, type: ${type}`
              );
              // This is a backup connection method
              // The main connection is handled by the backend service
              setCricketConnected(true);
            } catch (error) {
              console.error("âŒ Direct socket connection failed:", error);
            }
          };

          // Helper function for non-cricket sports scorecard
          const connectToNonCricketScore = (oldgmid, sportType) => {
            try {
              console.log(
                `ðŸƒ Setting up ${sportType} scorecard for ${oldgmid}`
              );
              // For non-cricket sports, we might use different scorecard approaches
              // This is a placeholder for future implementation
              setCricketConnected(false); // Non-cricket sports don't use cricket connection
            } catch (error) {
              console.error(`âŒ ${sportType} scorecard setup failed:`, error);
            }
          };
          const startScorePolling = (oldgmid) => {
            const pollScore = async () => {
              try {
                const baseUrl = "/api/" || 0;
                const response = await fetch(
                  `${baseUrl}cricket-score/${oldgmid}`
                );
                if (response.ok) {
                  // Handle JSON parsing more safely
                  const text = await response.text();
                  if (text && text.trim() !== "") {
                    try {
                      const result = JSON.parse(text);
                      if (result.success && result.data) {
                        console.log(`ðŸ“Š Cricket score update:`, result.data);
                        setCricketScore(result.data);
                        setCricketConnected(result.connected || true);
                      }
                    } catch (jsonError) {
                      console.warn("âŒ JSON parsing error:", jsonError);
                    }
                  }
                } else if (response.status === 204) {
                  // No content yet, keep waiting
                  console.log(
                    `â³ Waiting for cricket score data for ${oldgmid}...`
                  );
                } else {
                  console.warn(
                    `âš ï¸ Unexpected response status: ${response.status}`
                  );
                }
              } catch (error) {
                console.error("âŒ Cricket score polling error:", error);
                setCricketConnected(false);
              }
            };

            // Poll every 3 seconds
            pollScore(); // Initial poll
            pollIntervalRef.current = setInterval(pollScore, 3000);
          };

          // Auto-adjust iframe height for other sports
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            if (
              (scorecardData === null || scorecardData === void 0
                ? void 0
                : scorecardData.type) === "iframe" &&
              iframeRef.current
            ) {
              const adjustHeight = () => {
                try {
                  // Use responsive height based on device
                  const baseHeight =
                    react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile
                      ? 320
                      : 420;
                  const dynamicHeight = Math.max(
                    baseHeight,
                    window.innerHeight * 0.4
                  );
                  setIframeHeight(Math.min(dynamicHeight, 600));
                } catch (error) {
                  setIframeHeight(
                    react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile
                      ? 320
                      : 420
                  );
                }
              };

              // Initial adjustment
              adjustHeight();

              // Adjust on window resize
              window.addEventListener("resize", adjustHeight);

              // Adjust after iframe loads
              const iframe = iframeRef.current;
              if (iframe) {
                iframe.onload = () => {
                  setTimeout(adjustHeight, 500);
                  setTimeout(adjustHeight, 2000);
                };
              }
              return () => {
                window.removeEventListener("resize", adjustHeight);
              };
            }
          }, [
            scorecardData === null || scorecardData === void 0
              ? void 0
              : scorecardData.type,
            scorecardData === null || scorecardData === void 0
              ? void 0
              : scorecardData.scoreUrl,
          ]);
          const fetchScorecardData = async () => {
            try {
              setLoading(true);
              console.log(
                `ðŸ† Fetching scorecard for match ${matchId}, sport ${sportId}`
              );
              const sportIdNum =
                typeof sportId === "string" ? parseInt(sportId) : sportId;
              const data =
                await _services_scorecard_service__WEBPACK_IMPORTED_MODULE_3__[
                  "default"
                ].getScorecardData(matchId, sportIdNum);
              if (data) {
                setScorecardData(data);
                if (data.type === "cricket" && data.oldgmid) {
                  // Initialize cricket WebSocket scorecard
                  setupCricketScorecard(data.oldgmid);
                }
                console.log(`âœ… Scorecard data loaded:`, data);
              } else {
                console.log("âš ï¸ No scorecard data available");
              }
            } catch (error) {
              console.error("âŒ Error fetching scorecard data:", error);
            } finally {
              setLoading(false);
            }
          };
          const setupCricketScorecard = (oldgmid) => {
            if (socketRef.current) {
              socketRef.current.disconnect();
            }

            // Force Socket.IO v2.x protocol (EIO=3) for compatibility
            const options = {
              transports: ["websocket", "polling"],
              upgrade: true,
              rememberUpgrade: true,
              reconnection: true,
              reconnectionAttempts: 3,
              reconnectionDelay: 2000,
              reconnectionDelayMax: 5000,
              timeout: 15000,
              forceNew: true,
              // CRITICAL: Force EIO=3 for v2.x compatibility
              query: {
                EIO: "3",
                transport: "websocket",
              },
              // v2.x specific options
              autoConnect: true,
              jsonp: false,
            };
            try {
              console.log(
                `ðŸ Connecting to cricket scores with v2.x protocol (EIO=3)...`
              );

              // Create socket connection with forced v2.x protocol
              socketRef.current = (0,
              socket_io_client__WEBPACK_IMPORTED_MODULE_2__["default"])(
                "wss://d-score.scoreswift.xyz",
                options
              );

              // Connection event handlers
              socketRef.current.on("connect", () => {
                console.log("âœ… Connected to cricket score server (v2.x)");
                setIsConnected(true);

                // Subscribe to score updates using oldgmid - v2.x format
                const subscribeData = {
                  type: 1,
                  rooms: [parseInt(oldgmid)],
                };
                socketRef.current.emit("subscribe", subscribeData);
                console.log(
                  `ðŸŽ¯ Subscribed to cricket score updates for oldgmid: ${oldgmid}`
                );
              });
              socketRef.current.on("disconnect", (reason) => {
                console.log(
                  "âŒ Disconnected from cricket score server:",
                  reason
                );
                setIsConnected(false);
              });

              // Enhanced error handling with v2.x fallback
              socketRef.current.on("connect_error", (error) => {
                console.error("ðŸ”¥ Cricket score connection error:", error);
                setIsConnected(false);

                // Try HTTP polling fallback with v2.x protocol
                console.log("ðŸ”„ Trying v2.x polling fallback...");
                setTimeout(() => {
                  // connectWithV2Fallback(oldgmid); // This line was removed from the original file, so it's removed here.
                }, 3000);
              });
              socketRef.current.on("connect_timeout", () => {
                console.error("â° Cricket score connection timeout");
                setIsConnected(false);
              });

              // Score update handler - handle v2.x response formats
              socketRef.current.on("update", (data) => {
                console.log("ðŸ”„ Cricket score update received:", data);
                if (data && data.data) {
                  setCricketScoreData(data.data);
                } else if (data && typeof data === "object") {
                  // Handle direct data format
                  setCricketScoreData(data);
                }
              });

              // Additional v2.x compatible events
              socketRef.current.on("message", (data) => {
                console.log("ðŸ“¨ Cricket score message:", data);
                if (data && data.data) {
                  setCricketScoreData(data.data);
                }
              });

              // Handle v2.x specific events
              socketRef.current.on("data", (data) => {
                console.log("ðŸ“Š Cricket score data event:", data);
                if (data) {
                  setCricketScoreData(data);
                }
              });
            } catch (error) {
              console.error(
                "ðŸ”¥ Failed to create cricket socket connection:",
                error
              );
              setIsConnected(false);
            }
          };

          // v2.x polling fallback with forced protocol
          const connectWithV2Fallback = (oldgmid) => {
            try {
              console.log("ðŸ”„ Attempting v2.x polling fallback...");

              // Force polling with v2.x protocol
              const fallbackOptions = {
                transports: ["polling"],
                upgrade: false,
                reconnection: false,
                timeout: 15000,
                forceNew: true,
                // CRITICAL: Force EIO=3 for v2.x polling
                query: {
                  EIO: "3",
                  transport: "polling",
                },
                jsonp: false,
              };
              if (socketRef.current) {
                socketRef.current.disconnect();
              }
              socketRef.current = (0,
              socket_io_client__WEBPACK_IMPORTED_MODULE_2__["default"])(
                "https://d-score.scoreswift.xyz",
                fallbackOptions
              );
              socketRef.current.on("connect", () => {
                console.log("âœ… v2.x Polling fallback connection successful");
                setIsConnected(true);
                socketRef.current.emit("subscribe", {
                  type: 1,
                  rooms: [parseInt(oldgmid)],
                });
                console.log(`ðŸŽ¯ Fallback subscribed to oldgmid: ${oldgmid}`);
              });
              socketRef.current.on("connect_error", (error) => {
                console.error("ðŸ”¥ v2.x Polling fallback failed:", error);
                setIsConnected(false);
                // Show user-friendly message after all attempts fail
                setCricketScoreData({
                  spnmessage:
                    "Live cricket scores temporarily unavailable. Please refresh the page.",
                  spnnation1: "Score service",
                  spnnation2: "Reconnecting...",
                  score1: "",
                  score2: "",
                  spnballrunningstatus: "",
                  spnrunrate1: "",
                  spnrunrate2: "",
                  spnreqrate1: "",
                  spnreqrate2: "",
                  dayno: "",
                  isfinished: "",
                  activenation1: "",
                  activenation2: "",
                  balls: [],
                });
              });

              // Handle score updates in fallback mode
              socketRef.current.on("update", (data) => {
                console.log("ðŸ”„ Fallback score update:", data);
                if (data) {
                  setCricketScoreData(data.data || data);
                }
              });
            } catch (error) {
              console.error(
                "ðŸ”¥ v2.x Fallback connection creation failed:",
                error
              );
              setIsConnected(false);
            }
          };
          const getBallClass = (ball) => {
            switch (ball) {
              case "6":
                return "six";
              case "4":
                return "four";
              case "ww":
              case "W":
                return "wicket";
              default:
                return "";
            }
          };

          // Cricket Scorecard Implementation (Restored Previous UI)
          const renderCricketScorecard = () => {
            if (!cricketScore) {
              return /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                "div",
                {
                  className: "scorecard-cricket m-b-5",
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                    "div",
                    {
                      className: "text-center",
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                          "p",
                          {
                            className: "mb-0",
                            children: cricketConnected
                              ? "Waiting for cricket score updates..."
                              : "Connecting to cricket score server...",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 470,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                          "span",
                          {
                            className: `badge ${
                              cricketConnected
                                ? "badge-success"
                                : "badge-danger"
                            }`,
                            children: cricketConnected
                              ? "Live"
                              : "Disconnected",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 473,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 469,
                      columnNumber: 11,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 468,
                  columnNumber: 9,
                },
                undefined
              );
            }

            // Helper function for ball styling
            const getBallClass = (ball) => {
              if (ball === "4") return "four";
              if (ball === "6") return "six";
              if (ball === "W" || ball === "w") return "wicket";
              return "";
            };
            if (react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile) {
              return /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                "div",
                {
                  className: "scorecard-cricket m-b-5",
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      "div",
                      {
                        className: "row",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                          "div",
                          {
                            className: "col-md-12",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                              "div",
                              {
                                className:
                                  "d-flex justify-content-between align-items-center mb-2",
                                children: [
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                    "h6",
                                    {
                                      className: "mb-0",
                                      children: "Live Cricket Score",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 495,
                                      columnNumber: 17,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                    "span",
                                    {
                                      className: `badge ${
                                        cricketConnected
                                          ? "badge-success"
                                          : "badge-danger"
                                      }`,
                                      children: cricketConnected
                                        ? "Live"
                                        : "Disconnected",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 496,
                                      columnNumber: 17,
                                    },
                                    undefined
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 494,
                                columnNumber: 15,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 493,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 492,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      "div",
                      {
                        className: "row row5",
                        children: [
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            "div",
                            {
                              className: "col-6",
                              children:
                                cricketScore.spnnation1 &&
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "p",
                                  {
                                    className: "team-1 row m-t-10",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                        "span",
                                        {
                                          className: "team-name col-6",
                                          children: [
                                            cricketScore.spnnation1.trim(),
                                            cricketScore.activenation1 ===
                                              "1" &&
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                "span",
                                                {
                                                  className: "text-success",
                                                  children: " *",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 509,
                                                  columnNumber: 60,
                                                },
                                                undefined
                                              ),
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 507,
                                          columnNumber: 19,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                        "span",
                                        {
                                          className: "score col-6 text-right",
                                          children: cricketScore.score1,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 511,
                                          columnNumber: 19,
                                        },
                                        undefined
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 506,
                                    columnNumber: 17,
                                  },
                                  undefined
                                ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 504,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            "div",
                            {
                              className: "col-6",
                              children:
                                cricketScore.spnnation2 &&
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "p",
                                  {
                                    className: "team-1 row m-t-10",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                        "span",
                                        {
                                          className: "team-name col-6",
                                          children: [
                                            cricketScore.spnnation2.trim(),
                                            cricketScore.activenation2 ===
                                              "1" &&
                                              /*#__PURE__*/ (0,
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                "span",
                                                {
                                                  className: "text-success",
                                                  children: " *",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 520,
                                                  columnNumber: 60,
                                                },
                                                undefined
                                              ),
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 518,
                                          columnNumber: 19,
                                        },
                                        undefined
                                      ),
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                        "span",
                                        {
                                          className: "score col-6 text-right",
                                          children: cricketScore.score2,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 522,
                                          columnNumber: 19,
                                        },
                                        undefined
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 517,
                                    columnNumber: 17,
                                  },
                                  undefined
                                ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 515,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 503,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                    cricketScore.spnmessage &&
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                        "div",
                        {
                          className: "row",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            "div",
                            {
                              className: "col-md-12",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                "div",
                                {
                                  className: "text-center mb-2",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                    "small",
                                    {
                                      children: cricketScore.spnmessage,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 532,
                                      columnNumber: 19,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 531,
                                  columnNumber: 17,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 530,
                              columnNumber: 15,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 529,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                    cricketScore.balls &&
                      cricketScore.balls.length > 0 &&
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                        "div",
                        {
                          className: "row",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            "div",
                            {
                              className: "col-md-12",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                "p",
                                {
                                  className: "text-center ball-by-ball",
                                  children: cricketScore.balls.map(
                                    (ball, index) =>
                                      ball !== "" &&
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                        "span",
                                        {
                                          className: `ball-runs m-l-5 ${getBallClass(
                                            ball
                                          )}`,
                                          children: ball,
                                        },
                                        `ball-${index}`,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 544,
                                          columnNumber: 23,
                                        },
                                        undefined
                                      )
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 541,
                                  columnNumber: 17,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 540,
                              columnNumber: 15,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 539,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                    cricketScore.spnballrunningstatus &&
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                        "div",
                        {
                          className: "row",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            "div",
                            {
                              className: "col-md-12",
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                "div",
                                {
                                  className:
                                    "text-center alert alert-warning mb-2",
                                  children: [
                                    "Ball Running: ",
                                    cricketScore.spnballrunningstatus,
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 560,
                                  columnNumber: 17,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 559,
                              columnNumber: 15,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 558,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: _jsxFileName,
                  lineNumber: 491,
                  columnNumber: 9,
                },
                undefined
              );
            }

            // Desktop cricket scorecard (Previous UI)
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
              "div",
              {
                className: "scorecard-cricket m-b-5",
                children: [
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                    "div",
                    {
                      className: "row",
                      children: /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                        "div",
                        {
                          className: "col-md-12",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                            "div",
                            {
                              className:
                                "d-flex justify-content-between align-items-center mb-2",
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "h6",
                                  {
                                    className: "mb-0",
                                    children: "Live Cricket Score",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 576,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "span",
                                  {
                                    className: `badge ${
                                      cricketConnected
                                        ? "badge-success"
                                        : "badge-danger"
                                    }`,
                                    children: cricketConnected
                                      ? "Live"
                                      : "Disconnected",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 577,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 575,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 574,
                          columnNumber: 11,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 573,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                    "div",
                    {
                      className: "row",
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                          "div",
                          {
                            className: "col-md-5",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                              "div",
                              {
                                children: [
                                  cricketScore.spnnation1 &&
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "p",
                                      {
                                        className: "team-1 d-flex m-t-10",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                            "span",
                                            {
                                              className: "team-name col-md-6",
                                              children: [
                                                cricketScore.spnnation1.trim(),
                                                cricketScore.activenation1 ===
                                                  "1" &&
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                    "span",
                                                    {
                                                      className: "text-success",
                                                      children: " *",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 591,
                                                      columnNumber: 60,
                                                    },
                                                    undefined
                                                  ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 589,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                            "span",
                                            {
                                              className:
                                                "score col-md-6 text-right",
                                              children: cricketScore.score1,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 593,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 588,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    ),
                                  cricketScore.spnnation2 &&
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "p",
                                      {
                                        className: "team-1 d-flex m-t-10",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                            "span",
                                            {
                                              className: "team-name col-md-6",
                                              children: [
                                                cricketScore.spnnation2.trim(),
                                                cricketScore.activenation2 ===
                                                  "1" &&
                                                  /*#__PURE__*/ (0,
                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                    "span",
                                                    {
                                                      className: "text-success",
                                                      children: " *",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName: _jsxFileName,
                                                      lineNumber: 600,
                                                      columnNumber: 60,
                                                    },
                                                    undefined
                                                  ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 598,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                            "span",
                                            {
                                              className:
                                                "score col-md-6 text-right",
                                              children: cricketScore.score2,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 602,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 597,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    ),
                                  !cricketScore.spnnation1 &&
                                    !cricketScore.spnnation2 &&
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "p",
                                      {
                                        className: "team-1 m-t-10",
                                        children: /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                          "span",
                                          {
                                            children: "\xA0",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 606,
                                            columnNumber: 46,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 606,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 586,
                                columnNumber: 13,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 585,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                          "div",
                          {
                            className: "col-md-7",
                            children: [
                              cricketScore.spnmessage &&
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                  "div",
                                  {
                                    className: "text-right",
                                    children: /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                      "p",
                                      {
                                        className: "m-b-0",
                                        children: cricketScore.spnmessage,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 613,
                                        columnNumber: 17,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 612,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                "div",
                                {
                                  className: "row",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                    "div",
                                    {
                                      className: "col-md-12",
                                      children:
                                        cricketScore.balls &&
                                        cricketScore.balls.length > 0 &&
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                          "p",
                                          {
                                            className:
                                              "text-right ball-by-ball m-t-10",
                                            children: cricketScore.balls.map(
                                              (ball, index) =>
                                                ball !== "" &&
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                                                  "span",
                                                  {
                                                    className: `ball-runs m-l-5 ${getBallClass(
                                                      ball
                                                    )}`,
                                                    children: ball,
                                                  },
                                                  `ball-${index}`,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 622,
                                                    columnNumber: 25,
                                                  },
                                                  undefined
                                                )
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 619,
                                            columnNumber: 19,
                                          },
                                          undefined
                                        ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 617,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 616,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 610,
                            columnNumber: 11,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 584,
                      columnNumber: 9,
                    },
                    undefined
                  ),
                  cricketScore.spnballrunningstatus &&
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      "div",
                      {
                        className: "row",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                          "div",
                          {
                            className: "col-md-12",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                              "div",
                              {
                                className:
                                  "text-center alert alert-warning mb-2",
                                children: [
                                  "Ball Running: ",
                                  cricketScore.spnballrunningstatus,
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 640,
                                columnNumber: 15,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 639,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 638,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 572,
                columnNumber: 7,
              },
              undefined
            );
          };
          const renderIframeScorecard = () => {
            if (
              !(
                scorecardData !== null &&
                scorecardData !== void 0 &&
                scorecardData.scoreUrl
              )
            ) {
              // No scorecard available - show message instead of loading
              return /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                "div",
                {
                  className: "scorecard m-b-5",
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                    "div",
                    {
                      className: "text-center p-3",
                      style: {
                        backgroundColor: "#f8f9fa",
                        borderRadius: "8px",
                        border: "1px solid #dee2e6",
                      },
                      children: /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                        "p",
                        {
                          className: "mb-0",
                          style: {
                            color: "#6c757d",
                          },
                          children: loading
                            ? "Loading scorecard..."
                            : "Scorecard not available for this match",
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 660,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 655,
                      columnNumber: 11,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 654,
                  columnNumber: 9,
                },
                undefined
              );
            }
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
              "div",
              {
                className: "scorecard-iframe m-b-5",
                children: /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                  "iframe",
                  {
                    ref: iframeRef,
                    style: {
                      width: "100%",
                      height: `${iframeHeight}px`,
                      border: "none",
                      transition: "height 0.3s ease-in-out",
                      minHeight:
                        react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile
                          ? "280px"
                          : "320px",
                      maxHeight: "600px",
                      display: "block",
                    },
                    src: scorecardData.scoreUrl,
                    title: "Live Scorecard",
                    onLoad: () => {
                      console.log(
                        `ðŸ“Š Iframe scorecard loaded: ${scorecardData.scoreUrl}`
                      );
                    },
                    onError: () => {
                      console.error("âŒ Failed to load iframe scorecard");
                    },
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 670,
                    columnNumber: 9,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 669,
                columnNumber: 7,
              },
              undefined
            );
          };
          if (loading) {
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
              "div",
              {
                className: "scorecard m-b-5",
                children: /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                  "div",
                  {
                    className: "text-center",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
                      "p",
                      {
                        children: "Loading scorecard...",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 698,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 697,
                    columnNumber: 9,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 696,
                columnNumber: 7,
              },
              undefined
            );
          }

          // Convert sportId to number for comparison
          const sportIdNum =
            typeof sportId === "string" ? parseInt(sportId) : sportId;
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
            {
              children:
                scorecardData !== null &&
                scorecardData !== void 0 &&
                scorecardData.scoreUrl
                  ? renderIframeScorecard()
                  : (scorecardData === null || scorecardData === void 0
                      ? void 0
                      : scorecardData.type) === "cricket" || sportIdNum === 4
                  ? renderCricketScorecard()
                  : renderIframeScorecard(),
            },
            void 0,
            false
          );
        };
        _s(Score, "nwTnI816QAJouX5shuSavWuUVv8=");
        _c = Score;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Score;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "Score");

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/pages/odds/components/user-book-popup.tsx":
      /*!*******************************************************!*\
  !*** ./src/pages/odds/components/user-book-popup.tsx ***!
  \*******************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react-modal */ "./node_modules/react-modal/lib/index.js"
          );
        /* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_modal__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../../services/book.service */ "./src/services/book.service.ts"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../../redux/hooks */ "./src/redux/hooks.ts"
          );
        /* harmony import */ var _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../../redux/actions/bet/betSlice */ "./src/redux/actions/bet/betSlice.ts"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/odds/components/user-book-popup.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const UserBookPopup = () => {
          _s();
          const bookMarketUser = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(
            _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__.selectBookMarketUser
          );
          const dispatch = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
          const [book, setBook] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
          const [market, setMarketRunners] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
          const [isOpen, setIsOpen] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            if (bookMarketUser.matchId) {
              _services_book_service__WEBPACK_IMPORTED_MODULE_2__["default"]
                .getUserwiseBook(bookMarketUser)
                .then((res) => {
                  setBook(res.data.data.completeBookList);
                  setMarketRunners(res.data.data.markets);
                  setIsOpen(true);
                });
            }
          }, [bookMarketUser]);
          const close = () => {
            dispatch(
              (0,
              _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__.setMarketBookUser)(
                {}
              )
            );
            setIsOpen(false);
          };
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
            {
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                react_modal__WEBPACK_IMPORTED_MODULE_1___default(),
                {
                  isOpen: isOpen,
                  onRequestClose: (e) => {
                    close();
                  },
                  contentLabel: "Fancy Book",
                  className: "modal-dialog modal-lg",
                  ariaHideApp: false,
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                    "div",
                    {
                      className: "modal-content",
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                          "div",
                          {
                            className: "modal-header",
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                "h5",
                                {
                                  children: [
                                    bookMarketUser.marketName,
                                    " Book",
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 44,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                "span",
                                {
                                  onClick: close,
                                  className: "float-right",
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                    "i",
                                    {
                                      className: "fa fa-times-circle",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 46,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 45,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 43,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                          "table",
                          {
                            className: "table",
                            children: [
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                "thead",
                                {
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                    "tr",
                                    {
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                          "th",
                                          {
                                            children: "Username",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 52,
                                            columnNumber: 15,
                                          },
                                          undefined
                                        ),
                                        market.map((Item, index) => {
                                          return /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "th",
                                            {
                                              children: Item.runnerName,
                                            },
                                            index,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 54,
                                              columnNumber: 24,
                                            },
                                            undefined
                                          );
                                        }),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 51,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 50,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                              /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                "tbody",
                                {
                                  children:
                                    book.length > 0
                                      ? book.map((Item, index) => {
                                          return /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                            "tr",
                                            {
                                              children: [
                                                /*#__PURE__*/ (0,
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                  "td",
                                                  {
                                                    children: Item.username,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 63,
                                                    columnNumber: 21,
                                                  },
                                                  undefined
                                                ),
                                                market.map(
                                                  (
                                                    ItemRunners,
                                                    indexRunner
                                                  ) => {
                                                    var _Item;
                                                    return /*#__PURE__*/ (0,
                                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                                      "td",
                                                      {
                                                        children:
                                                          (_Item =
                                                            Item[
                                                              `${bookMarketUser.selectionId}_${ItemRunners.selectionId}`
                                                            ]) === null ||
                                                          _Item === void 0
                                                            ? void 0
                                                            : _Item.toFixed(2),
                                                      },
                                                      index + indexRunner,
                                                      false,
                                                      {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 66,
                                                        columnNumber: 25,
                                                      },
                                                      undefined
                                                    );
                                                  }
                                                ),
                                              ],
                                            },
                                            index,
                                            true,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 62,
                                              columnNumber: 19,
                                            },
                                            undefined
                                          );
                                        })
                                      : /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                          "tr",
                                          {
                                            children: /*#__PURE__*/ (0,
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(
                                              "td",
                                              {
                                                colSpan: 5,
                                                className: "text-center",
                                                children: "No Result Found",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 76,
                                                columnNumber: 17,
                                              },
                                              undefined
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 75,
                                            columnNumber: 15,
                                          },
                                          undefined
                                        ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 58,
                                  columnNumber: 11,
                                },
                                undefined
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 49,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 42,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 5,
                },
                undefined
              ),
            },
            void 0,
            false
          );
        };
        _s(UserBookPopup, "y0bqDccCfrxpuN+Sws8RXesgOWU=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,
          ];
        });
        _c = UserBookPopup;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          UserBookPopup;
        var _c;
        __webpack_require__.$Refresh$.register(_c, "UserBookPopup");

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/pages/odds/odds.tsx":
      /*!*********************************!*\
  !*** ./src/pages/odds/odds.tsx ***!
  \*********************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _services_sports_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../services/sports.service */ "./src/services/sports.service.ts"
          );
        /* harmony import */ var _services_scorecard_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../../services/scorecard.service */ "./src/services/scorecard.service.ts"
          );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router/dist/index.js"
          );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! react-redux */ "./node_modules/react-redux/es/index.js"
          );
        /* harmony import */ var _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../redux/actions/bet/betSlice */ "./src/redux/actions/bet/betSlice.ts"
          );
        /* harmony import */ var _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../redux/actions/sports/sportSlice */ "./src/redux/actions/sports/sportSlice.ts"
          );
        /* harmony import */ var _components_score__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./components/score */ "./src/pages/odds/components/score.tsx"
          );
        /* harmony import */ var _context_webSocketUser__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ../../context/webSocketUser */ "./src/context/webSocketUser.tsx"
          );
        /* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! ../../redux/hooks */ "./src/redux/hooks.ts");
        /* harmony import */ var _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../../redux/actions/login/loginSlice */ "./src/redux/actions/login/loginSlice.ts"
          );
        /* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js"
          );
        /* harmony import */ var _components_match_detail__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ./components/match-detail */ "./src/pages/odds/components/match-detail.tsx"
          );
        /* harmony import */ var _components_match_detail_mobile__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ./components/match-detail-mobile */ "./src/pages/odds/components/match-detail-mobile.tsx"
          );
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
        /* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
        /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! ../../services/auth.service */ "./src/services/auth.service.ts"
          );
        /* harmony import */ var _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! ../../redux/actions/common/commonSlice */ "./src/redux/actions/common/commonSlice.ts"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        var _jsxFileName =
            "/www/wwwroot/Ambani/fair-react-stone/src/pages/odds/odds.tsx",
          _s = __webpack_require__.$Refresh$.signature();

        const Odds = () => {
          _s();
          var _userState$user;
          const [marketDataList, setMarketDataList] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState({});
          const [scorecardData, setScorecardData] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
          const [t10Channel, setT10Chanel] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState();
          const [isTvShow, setIsTvShow] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const [isScorecardShow, setIsScorecardShow] =
            react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
          const userState = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector)(
            _redux_actions_login_loginSlice__WEBPACK_IMPORTED_MODULE_9__.selectUserData
          );
          const { matchId } = (0,
          react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useParams)();
          const dispatch = (0,
          react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
          const selectFancyT = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector)(
            _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__.selectFancyType
          );
          const initApp = (0,
          _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector)(
            _redux_actions_common_commonSlice__WEBPACK_IMPORTED_MODULE_15__.selectInitApp
          );
          const { socketUser } = (0,
          _context_webSocketUser__WEBPACK_IMPORTED_MODULE_7__.useWebsocketUser)();
          const fetchOddsDetail = async () => {
            try {
              axios__WEBPACK_IMPORTED_MODULE_18__["default"]
                .all([
                  _services_sports_service__WEBPACK_IMPORTED_MODULE_1__[
                    "default"
                  ].getMatchById(matchId),
                  _services_sports_service__WEBPACK_IMPORTED_MODULE_1__[
                    "default"
                  ].getMarketList(matchId),
                  _services_sports_service__WEBPACK_IMPORTED_MODULE_1__[
                    "default"
                  ].getFancyList(matchId),
                ])
                .then(
                  axios__WEBPACK_IMPORTED_MODULE_18__["default"].spread(
                    (currentMatch, marketData, fancyData) => {
                      dispatch(
                        (0,
                        _redux_actions_sports_sportSlice__WEBPACK_IMPORTED_MODULE_5__.setCurrentMatch)(
                          currentMatch.data.data.match
                        )
                      );

                      // Transform new fancy API response format to expected format
                      let fancySessions = [];
                      if (
                        fancyData.data.data &&
                        Array.isArray(fancyData.data.data)
                      ) {
                        // New format: markets with sections
                        fancySessions = fancyData.data.data.flatMap(
                          (market) => {
                            var _market$section;
                            return (
                              ((_market$section = market.section) === null ||
                              _market$section === void 0
                                ? void 0
                                : _market$section.map((section) => {
                                    var _section$odds,
                                      _section$odds$find,
                                      _section$odds2,
                                      _section$odds2$find,
                                      _section$odds3,
                                      _section$odds3$find,
                                      _section$odds4,
                                      _section$odds4$find;
                                    return {
                                      _id: section.sid,
                                      marketId: section.sid.toString(),
                                      fancyName: section.nat,
                                      gtype: market.gtype,
                                      active: section.gscode === 1,
                                      suspended:
                                        section.gstatus === "SUSPENDED" ||
                                        section.gstatus === "Ball Running",
                                      GameStatus: section.gstatus,
                                      BackPrice1:
                                        ((_section$odds = section.odds) ===
                                          null || _section$odds === void 0
                                          ? void 0
                                          : (_section$odds$find =
                                              _section$odds.find(
                                                (o) => o.otype === "back"
                                              )) === null ||
                                            _section$odds$find === void 0
                                          ? void 0
                                          : _section$odds$find.odds) || 0,
                                      BackSize1:
                                        ((_section$odds2 = section.odds) ===
                                          null || _section$odds2 === void 0
                                          ? void 0
                                          : (_section$odds2$find =
                                              _section$odds2.find(
                                                (o) => o.otype === "back"
                                              )) === null ||
                                            _section$odds2$find === void 0
                                          ? void 0
                                          : _section$odds2$find.size) || 0,
                                      LayPrice1:
                                        ((_section$odds3 = section.odds) ===
                                          null || _section$odds3 === void 0
                                          ? void 0
                                          : (_section$odds3$find =
                                              _section$odds3.find(
                                                (o) => o.otype === "lay"
                                              )) === null ||
                                            _section$odds3$find === void 0
                                          ? void 0
                                          : _section$odds3$find.odds) || 0,
                                      LaySize1:
                                        ((_section$odds4 = section.odds) ===
                                          null || _section$odds4 === void 0
                                          ? void 0
                                          : (_section$odds4$find =
                                              _section$odds4.find(
                                                (o) => o.otype === "lay"
                                              )) === null ||
                                            _section$odds4$find === void 0
                                          ? void 0
                                          : _section$odds4$find.size) || 0,
                                      BackPrice2: 0,
                                      BackSize2: 0,
                                      LayPrice2: 0,
                                      LaySize2: 0,
                                      BackPrice3: 0,
                                      BackSize3: 0,
                                      LayPrice3: 0,
                                      LaySize3: 0,
                                      min: section.min,
                                      max: section.max,
                                      sr_no: section.sno,
                                      rem: section.rem,
                                      ballsess: "",
                                      status:
                                        section.gscode === 1
                                          ? "active"
                                          : "inactive",
                                      SelectionId: section.sid,
                                      RunnerName: section.nat,
                                      matchId: parseInt(matchId),
                                      sportId: 4,
                                    };
                                  })) || []
                            );
                          }
                        );
                      } else if (fancyData.data.sessions) {
                        // Old format: direct sessions (fallback)
                        fancySessions = fancyData.data.sessions;
                      }
                      setMarketDataList({
                        currentMatch: currentMatch.data.data.match,
                        fancies: fancySessions,
                        markets: marketData.data.data.markets,
                        stake: currentMatch.data.data.stake,
                      });
                    }
                  )
                );
            } catch (error) {
              console.log(error);
              fetchOddsDetail();
            }
          };
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            return () => {
              dispatch(
                (0,
                _redux_actions_bet_betSlice__WEBPACK_IMPORTED_MODULE_4__.betPopup)(
                  {
                    isOpen: false,
                    betData: {},
                  }
                )
              );
            };
          }, []);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            if (initApp.event) {
              _services_sports_service__WEBPACK_IMPORTED_MODULE_1__["default"]
                .getFancyList(matchId, selectFancyT)
                .then((fancyData) => {
                  //setMarketDataList({ ...marketDataList, fancies: fancyData.data.data })
                })
                .catch((e) => console.log(e.message));
            }
          }, [initApp]);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            fetchOddsDetail();
          }, [matchId]);
          const fetchT10Stream = async () => {
            if (
              currentMatch !== null &&
              currentMatch !== void 0 &&
              currentMatch.isT10
            ) {
              const resp =
                await _services_auth_service__WEBPACK_IMPORTED_MODULE_14__[
                  "default"
                ].gett10Streams();
              if (resp !== null && resp !== void 0 && resp.data) {
                var _resp$data, _dataFilter$;
                const dataFilter =
                  resp === null || resp === void 0
                    ? void 0
                    : (_resp$data = resp.data) === null || _resp$data === void 0
                    ? void 0
                    : _resp$data.filter(
                        (Item) =>
                          parseInt(Item.gameId) ==
                          (currentMatch === null || currentMatch === void 0
                            ? void 0
                            : currentMatch.matchId)
                      );
                setT10Chanel(
                  dataFilter === null || dataFilter === void 0
                    ? void 0
                    : (_dataFilter$ = dataFilter[0]) === null ||
                      _dataFilter$ === void 0
                    ? void 0
                    : _dataFilter$.channel
                );
              }
            }
          };
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            (async () => {
              if (selectFancyT && Object.keys(marketDataList).length > 0) {
                const fancyData =
                  await _services_sports_service__WEBPACK_IMPORTED_MODULE_1__[
                    "default"
                  ].getFancyList(matchId, selectFancyT);

                // Transform new fancy API response format to expected format
                let fancySessions = [];
                if (fancyData.data.data && Array.isArray(fancyData.data.data)) {
                  // New format: markets with sections
                  fancySessions = fancyData.data.data.flatMap((market) => {
                    var _market$section2;
                    return (
                      ((_market$section2 = market.section) === null ||
                      _market$section2 === void 0
                        ? void 0
                        : _market$section2.map((section) => {
                            var _section$odds5,
                              _section$odds5$find,
                              _section$odds6,
                              _section$odds6$find,
                              _section$odds7,
                              _section$odds7$find,
                              _section$odds8,
                              _section$odds8$find;
                            return {
                              _id: section.sid,
                              marketId: section.sid.toString(),
                              fancyName: section.nat,
                              gtype: market.gtype,
                              active: section.gscode === 1,
                              suspended:
                                section.gstatus === "SUSPENDED" ||
                                section.gstatus === "Ball Running",
                              GameStatus: section.gstatus,
                              BackPrice1:
                                ((_section$odds5 = section.odds) === null ||
                                _section$odds5 === void 0
                                  ? void 0
                                  : (_section$odds5$find = _section$odds5.find(
                                      (o) => o.otype === "back"
                                    )) === null ||
                                    _section$odds5$find === void 0
                                  ? void 0
                                  : _section$odds5$find.odds) || 0,
                              BackSize1:
                                ((_section$odds6 = section.odds) === null ||
                                _section$odds6 === void 0
                                  ? void 0
                                  : (_section$odds6$find = _section$odds6.find(
                                      (o) => o.otype === "back"
                                    )) === null ||
                                    _section$odds6$find === void 0
                                  ? void 0
                                  : _section$odds6$find.size) || 0,
                              LayPrice1:
                                ((_section$odds7 = section.odds) === null ||
                                _section$odds7 === void 0
                                  ? void 0
                                  : (_section$odds7$find = _section$odds7.find(
                                      (o) => o.otype === "lay"
                                    )) === null ||
                                    _section$odds7$find === void 0
                                  ? void 0
                                  : _section$odds7$find.odds) || 0,
                              LaySize1:
                                ((_section$odds8 = section.odds) === null ||
                                _section$odds8 === void 0
                                  ? void 0
                                  : (_section$odds8$find = _section$odds8.find(
                                      (o) => o.otype === "lay"
                                    )) === null ||
                                    _section$odds8$find === void 0
                                  ? void 0
                                  : _section$odds8$find.size) || 0,
                              BackPrice2: 0,
                              BackSize2: 0,
                              LayPrice2: 0,
                              LaySize2: 0,
                              BackPrice3: 0,
                              BackSize3: 0,
                              LayPrice3: 0,
                              LaySize3: 0,
                              min: section.min,
                              max: section.max,
                              sr_no: section.sno,
                              rem: section.rem,
                              ballsess: "",
                              status:
                                section.gscode === 1 ? "active" : "inactive",
                              SelectionId: section.sid,
                              RunnerName: section.nat,
                              matchId: parseInt(matchId),
                              sportId: 4,
                            };
                          })) || []
                    );
                  });
                } else if (fancyData.data.sessions) {
                  // Old format: direct sessions (fallback)
                  fancySessions = fancyData.data.sessions;
                }
                setMarketDataList({
                  ...marketDataList,
                  fancies: fancySessions,
                });
              }
            })();
          }, [selectFancyT]);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            if (userState.user._id) {
              socketUser.emit(
                "joinRoomMatchIdWUserId",
                `${userState.user._id}-${matchId}`
              );
              socketUser.on("connect", () => {
                socketUser.emit(
                  "joinRoomMatchIdWUserId",
                  `${userState.user._id}-${matchId}`
                );
              });
            }
          }, [userState.user]);
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            fetchT10Stream();
          }, [marketDataList]);
          const fetchScorecardData = async (match) => {
            if (
              !(match !== null && match !== void 0 && match.matchId) ||
              !(match !== null && match !== void 0 && match.sportId)
            ) {
              console.log("Missing match ID or sport ID for scorecard");
              return;
            }
            try {
              console.log(
                `ðŸ† Fetching scorecard data for match ${match.matchId}, sport ${match.sportId}`
              );
              const sportId =
                typeof match.sportId === "string"
                  ? parseInt(match.sportId)
                  : match.sportId;
              const data =
                await _services_scorecard_service__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ].getScorecardData(match.matchId, sportId);
              if (data) {
                // Type assertion to ensure compatibility with ScorecardData interface
                const typedData = {
                  type: data.type,
                  oldgmid: data.oldgmid || undefined,
                  scoreUrl: data.scoreUrl || undefined,
                  matchData: data.matchData,
                };
                setScorecardData(typedData);
                console.log(`âœ… Scorecard data loaded:`, typedData);
              } else {
                console.log("âš ï¸ No scorecard data available");
                setScorecardData(null);
              }
            } catch (error) {
              console.error("âŒ Error fetching scorecard data:", error);
              setScorecardData(null);
            }
          };
          const scoreBoard = () => {
            if (!currentMatch) {
              return /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                "div",
                {
                  children: "Loading scorecard...",
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 14,
                },
                undefined
              );
            }

            // Togglable scorecard like the live TV
            return /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
              "div",
              {
                className: "card m-b-10",
                style: {
                  border: "0px none",
                },
                children: [
                  !react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile
                    ? /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                        "div",
                        {
                          className: "card-header",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                            "h6",
                            {
                              onClick: () =>
                                setIsScorecardShow(!isScorecardShow),
                              className: "card-title",
                              style: {
                                cursor: "pointer",
                              },
                              children: [
                                "Live Scorecard",
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                                  "span",
                                  {
                                    className: "float-right",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                                        "i",
                                        {
                                          className: "fa fa-chart-line",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 264,
                                          columnNumber: 17,
                                        },
                                        undefined
                                      ),
                                      " ",
                                      currentMatch.name,
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 263,
                                    columnNumber: 15,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 261,
                              columnNumber: 13,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 260,
                          columnNumber: 11,
                        },
                        undefined
                      )
                    : "",
                  !react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile &&
                    isScorecardShow &&
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                      "div",
                      {
                        className: "card-body p0",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                          _components_score__WEBPACK_IMPORTED_MODULE_6__[
                            "default"
                          ],
                          {
                            matchId: currentMatch.matchId,
                            sportId: currentMatch.sportId,
                            isT10: currentMatch.isT10 || false,
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 273,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 272,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                  react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile &&
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                      "div",
                      {
                        className: "card-body p0",
                        children: /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                          _components_score__WEBPACK_IMPORTED_MODULE_6__[
                            "default"
                          ],
                          {
                            matchId: currentMatch.matchId,
                            sportId: currentMatch.sportId,
                            isT10: currentMatch.isT10 || false,
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 278,
                            columnNumber: 13,
                          },
                          undefined
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 277,
                        columnNumber: 11,
                      },
                      undefined
                    ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 7,
              },
              undefined
            );
          };
          const { currentMatch, markets, fancies } = marketDataList;

          // Add useEffect for scorecard data after currentMatch is available
          react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
            if (currentMatch) {
              fetchScorecardData(currentMatch);
            }
          }, [currentMatch]);
          const t10Tv = (height) => {
            if (currentMatch && currentMatch.isT10)
              return /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                "div",
                {
                  className: "t10-iframe",
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                    "iframe",
                    {
                      style: {
                        height: `${height}px`,
                      },
                      src: `https://alpha-n.qnsports.live/route/rih.php?id=${t10Channel}`,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 297,
                      columnNumber: 11,
                    },
                    undefined
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 296,
                  columnNumber: 9,
                },
                undefined
              );
            /*#__PURE__*/ else
              (0, react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                "div",
                {},
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 303,
                  columnNumber: 10,
                },
                undefined
              );
          };
          const otherTv = () => {
            // Use new streaming service with proper gmid and sid parameters
            const streamingUrl = `/stream/test.html?gmid=${
              currentMatch === null || currentMatch === void 0
                ? void 0
                : currentMatch.matchId
            }&sid=${
              (currentMatch === null || currentMatch === void 0
                ? void 0
                : currentMatch.sportId) || 4
            }`;
            return (
              !(
                currentMatch !== null &&
                currentMatch !== void 0 &&
                currentMatch.isT10
              ) &&
              /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                "div",
                {
                  className: "card m-b-10",
                  style: {
                    border: "0px none",
                  },
                  children: [
                    !react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile
                      ? /*#__PURE__*/ (0,
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                          "div",
                          {
                            className: "card-header",
                            children: /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                              "h6",
                              {
                                onClick: () => setIsTvShow(!isTvShow),
                                className: "card-title",
                                style: {
                                  cursor: "pointer",
                                },
                                children: [
                                  "Live Match",
                                  /*#__PURE__*/ (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                                    "span",
                                    {
                                      className: "float-right",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                                          "i",
                                          {
                                            className: "fa fa-tv",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 318,
                                            columnNumber: 19,
                                          },
                                          undefined
                                        ),
                                        " live stream started",
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 317,
                                      columnNumber: 17,
                                    },
                                    undefined
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 315,
                                columnNumber: 15,
                              },
                              undefined
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 314,
                            columnNumber: 13,
                          },
                          undefined
                        )
                      : "",
                    !react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile &&
                      isTvShow &&
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                        "div",
                        {
                          className: "card-body p0",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                            "iframe",
                            {
                              style: {
                                width: "100%",
                                height: "250px",
                              },
                              src: streamingUrl,
                              title: "Live Match Stream",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 327,
                              columnNumber: 15,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 326,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                    react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile &&
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                        "div",
                        {
                          className: "card-body p0",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                            "iframe",
                            {
                              style: {
                                width: "100%",
                                height: "250px",
                              },
                              src: streamingUrl,
                              title: "Live Match Stream",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 336,
                              columnNumber: 15,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 335,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: _jsxFileName,
                  lineNumber: 312,
                  columnNumber: 9,
                },
                undefined
              )
            );
          };
          return !react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile ||
            (react_device_detect__WEBPACK_IMPORTED_MODULE_10__.isMobile &&
              (userState === null || userState === void 0
                ? void 0
                : (_userState$user = userState.user) === null ||
                  _userState$user === void 0
                ? void 0
                : _userState$user.role) !=
                _models_User__WEBPACK_IMPORTED_MODULE_13__.RoleType.user)
            ? /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                _components_match_detail__WEBPACK_IMPORTED_MODULE_11__[
                  "default"
                ],
                {
                  currentMatch: currentMatch,
                  fancies: fancies,
                  scoreBoard: scoreBoard,
                  marketDataList: marketDataList,
                  matchId: matchId,
                  markets: markets,
                  t10Tv: t10Tv,
                  otherTv: otherTv,
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 349,
                  columnNumber: 5,
                },
                undefined
              )
            : /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(
                _components_match_detail_mobile__WEBPACK_IMPORTED_MODULE_12__[
                  "default"
                ],
                {
                  currentMatch: currentMatch,
                  fancies: fancies,
                  scoreBoard: scoreBoard,
                  marketDataList: marketDataList,
                  matchId: matchId,
                  t10Tv: t10Tv,
                  markets: markets,
                  otherTv: otherTv,
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 360,
                  columnNumber: 5,
                },
                undefined
              );
        };
        _s(Odds, "4tPDMWpkotPkvemQam5HoPxlYks=", false, function () {
          return [
            _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector,
            react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useParams,
            react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector,
            _redux_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector,
            _context_webSocketUser__WEBPACK_IMPORTED_MODULE_7__.useWebsocketUser,
          ];
        });
        _c = Odds;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 =
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().memo(
            Odds
          ));
        var _c, _c2;
        __webpack_require__.$Refresh$.register(_c, "Odds");
        __webpack_require__.$Refresh$.register(_c2, "%default%");

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/services/book.service.ts":
      /*!**************************************!*\
  !*** ./src/services/book.service.ts ***!
  \**************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../utils/api */ "./src/utils/api.ts");
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        class BookService {
          getFancyBook(fancyBook) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].post(
              "get-fancy-position",
              fancyBook
            );
          }
          getUserwiseBook(fancyBook) {
            return _utils_api__WEBPACK_IMPORTED_MODULE_0__["default"].post(
              "get-user-wise-book",
              fancyBook
            );
          }
        }
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          new BookService();

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/services/scorecard.service.ts":
      /*!*******************************************!*\
  !*** ./src/services/scorecard.service.ts ***!
  \*******************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        // Use fan-server-stone endpoints (which proxy to super-node-server Diamond API)
        // Remove trailing slashes and ensure proper URL format
        const rawBaseUrl = "/api/" || 0;
        const FAN_SERVER_BASE_URL = rawBaseUrl.replace(/\/+$/, ""); // Remove trailing slashes

        class ScorecardService {
          /**
           * Get match details including oldgmid for cricket and gtv for other sports
           */
          async getMatchDetails(gmid, sid) {
            try {
              // Get the token from localStorage
              const token = window.location.pathname.includes("admin")
                ? localStorage.getItem("token-admin")
                : localStorage.getItem("token");
              const response = await axios__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ].get(`${FAN_SERVER_BASE_URL}/match-details`, {
                params: {
                  gmid: gmid,
                  sid: sid,
                },
                headers: {
                  Authorization: token ? `Bearer ${token}` : "",
                  "Content-Type": "application/json",
                },
                timeout: 10000,
              });
              console.log(
                `ðŸ“Š Match details fetched from fan-server for gmid: ${gmid}, sid: ${sid}`,
                response.data
              );
              return response.data;
            } catch (error) {
              console.error(
                "Error fetching match details from fan-server:",
                error
              );
              throw error;
            }
          }

          /**
           * Get scorecard iframe URL for non-cricket sports via fan-server
           */
          async getScoreUrl(gtv, sportid) {
            try {
              // Get the token from localStorage
              const token = window.location.pathname.includes("admin")
                ? localStorage.getItem("token-admin")
                : localStorage.getItem("token");
              const response = await axios__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ].get(`${FAN_SERVER_BASE_URL}/score`, {
                params: {
                  gtv: gtv,
                  sportid: sportid,
                },
                headers: {
                  Authorization: token ? `Bearer ${token}` : "",
                  "Content-Type": "application/json",
                },
                timeout: 10000,
              });
              console.log(
                `ðŸŽ¯ Score URL fetched from fan-server for gtv: ${gtv}, sportid: ${sportid}`,
                response.data
              );
              return response.data;
            } catch (error) {
              console.error("Error fetching score URL from fan-server:", error);
              throw error;
            }
          }

          /**
           * Check if a sport is cricket (sport ID 4)
           */
          isCricket(sportId) {
            return parseInt(sportId.toString()) === 4;
          }

          /**
           * Get the appropriate scorecard data based on sport type
           * UPDATED: Now calls the backend /scorecard-data endpoint which handles:
           *   - Sport 1 (Football) & 2 (Tennis): Diamond API with gtv
           *   - Sport 4 (Cricket): Zplay scorecard with oldgmid
           */
          async getScorecardData(matchId, sportId) {
            try {
              var _response$data, _response$data2;
              console.log(
                `ðŸŽ¯ Getting scorecard data for match ${matchId}, sport ${sportId}`
              );

              // Get the token from localStorage
              const token = window.location.pathname.includes("admin")
                ? localStorage.getItem("token-admin")
                : localStorage.getItem("token");

              // Call the backend /scorecard-data endpoint which handles all sports correctly
              const response = await axios__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ].get(`${FAN_SERVER_BASE_URL}/scorecard-data`, {
                params: {
                  gmid: matchId,
                  sid: sportId,
                },
                headers: {
                  Authorization: token ? `Bearer ${token}` : "",
                  "Content-Type": "application/json",
                },
                timeout: 15000,
              });
              if (
                (_response$data = response.data) !== null &&
                _response$data !== void 0 &&
                _response$data.success &&
                (_response$data2 = response.data) !== null &&
                _response$data2 !== void 0 &&
                _response$data2.data
              ) {
                const data = response.data.data;
                console.log(`âœ… Scorecard data from backend:`, data);
                console.log(
                  `   Source: ${data.source}, Type: ${data.type}, ScoreUrl: ${data.scoreUrl}`
                );
                return {
                  type: data.type || "iframe",
                  oldgmid: data.oldgmid,
                  scoreUrl: data.scoreUrl,
                  streamingUrl: data.streamingUrl,
                  gtv: data.gtv,
                  source: data.source,
                  matchData: data.matchData,
                };
              }
              console.warn(
                `âš ï¸ Backend returned no scorecard data for match ${matchId}`
              );
              return null;
            } catch (error) {
              console.error(
                "âŒ Error getting scorecard data from backend:",
                error.message
              );
              // Fallback to direct zplay method if backend fails
              return await this.getScorecardFromZplayDirect(matchId, sportId);
            }
          }

          /**
           * FALLBACK: Direct zplay scorecard fetch (used if backend fails)
           * This is a backup method in case the backend is unavailable
           */
          async getScorecardFromZplayDirect(matchId, sportId) {
            try {
              var _matchDetailsResponse, _matchDetailsResponse2;
              console.log(
                `ðŸ”„ Fallback: Fetching scorecard directly for match ${matchId}, sport ${sportId}`
              );

              // Get the token from localStorage
              const token = window.location.pathname.includes("admin")
                ? localStorage.getItem("token-admin")
                : localStorage.getItem("token");

              // Get match details to get oldgmid and gtv
              const matchDetailsResponse =
                await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(
                  `${FAN_SERVER_BASE_URL}/match-details`,
                  {
                    params: {
                      gmid: matchId,
                      sid: sportId,
                    },
                    headers: {
                      Authorization: token ? `Bearer ${token}` : "",
                      "Content-Type": "application/json",
                    },
                    timeout: 10000,
                  }
                );
              const matchData =
                (_matchDetailsResponse = matchDetailsResponse.data) === null ||
                _matchDetailsResponse === void 0
                  ? void 0
                  : (_matchDetailsResponse2 = _matchDetailsResponse.data) ===
                      null || _matchDetailsResponse2 === void 0
                  ? void 0
                  : _matchDetailsResponse2[0];
              const oldgmid =
                matchData === null || matchData === void 0
                  ? void 0
                  : matchData.oldgmid;
              const gtv =
                matchData === null || matchData === void 0
                  ? void 0
                  : matchData.gtv;
              let scoreUrl = null;
              let source = "fallback";
              if (sportId === 4 && oldgmid) {
                // Cricket: Try zplay
                try {
                  var _zplayResponse$data,
                    _zplayResponse$data$d,
                    _zplayResponse$data$d2;
                  const zplayResponse =
                    await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(
                      `https://zplay1.in/pb/api/v1/events/matchDetails/${oldgmid}`,
                      {
                        headers: {
                          Accept: "application/json",
                          Origin: "https://zplay1.in",
                          Referer: "https://zplay1.in/",
                        },
                        timeout: 10000,
                      }
                    );
                  const radarId =
                    (_zplayResponse$data = zplayResponse.data) === null ||
                    _zplayResponse$data === void 0
                      ? void 0
                      : (_zplayResponse$data$d = _zplayResponse$data.data) ===
                          null || _zplayResponse$data$d === void 0
                      ? void 0
                      : (_zplayResponse$data$d2 =
                          _zplayResponse$data$d.match) === null ||
                        _zplayResponse$data$d2 === void 0
                      ? void 0
                      : _zplayResponse$data$d2.sportsradar_id;
                  if (radarId && radarId !== 0) {
                    scoreUrl = `https://live.ckex.xyz/lmt/#/?matchId=${radarId}&language=en`;
                    source = "zplay";
                  }
                } catch (err) {
                  console.warn("Zplay fallback failed:", err);
                }
              } else if ((sportId === 1 || sportId === 2) && gtv && gtv !== 0) {
                // Football/Tennis: Try Diamond API
                try {
                  var _diamondResponse$data;
                  const diamondResponse =
                    await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(
                      "https://diamond-api.softgamingapi.com/score",
                      {
                        params: {
                          gtv,
                          sportid: sportId,
                          key: "wwdiamond_mainkey01",
                        },
                        timeout: 10000,
                      }
                    );
                  if (
                    (_diamondResponse$data = diamondResponse.data) !== null &&
                    _diamondResponse$data !== void 0 &&
                    _diamondResponse$data.score_url
                  ) {
                    scoreUrl = diamondResponse.data.score_url;
                    source = "diamond";
                  }
                } catch (err) {
                  console.warn("Diamond API fallback failed:", err);
                }
              }

              // NO FALLBACK to turnkeyxgaming - return null if no scorecard available
              if (!scoreUrl) {
                console.log(
                  `âš ï¸ No scorecard available for match ${matchId}, sport ${sportId}`
                );
              }
              return {
                type: "iframe",
                oldgmid: oldgmid,
                scoreUrl: scoreUrl,
                // Will be null if not found
                gtv: gtv,
                source: scoreUrl ? source : "unavailable",
                matchData: matchData,
              };
            } catch (error) {
              console.error("âŒ Fallback scorecard fetch also failed:", error);
              return {
                type: "iframe",
                oldgmid: null,
                scoreUrl: null,
                // NO FALLBACK - return null
                source: "error",
                error: error.message,
              };
            }
          }

          /**
           * @deprecated Use getScorecardData instead - now works for all sports
           * Kept for backward compatibility, but redirects to new unified method
           */
          async getCricketScorecardFromZplay(matchId) {
            // Redirect to unified method with sport ID 4 (Cricket)
            return this.getScorecardData(matchId, 4);
          }

          /**
           * @deprecated Renamed to getScorecardFromZplayDirect
           * Kept for backward compatibility
           */
          async getScorecardFromZplay(matchId, sportId) {
            return this.getScorecardFromZplayDirect(matchId, sportId);
          }

          /**
           * Get streaming URL for any sport
           */
          getStreamingUrl(matchId, sportId) {
            return `https://www.d247.site/stream/directStream?gmid=${matchId}&sid=${sportId}`;
          }
        }
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          new ScorecardService();

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./src/utils/cashout-calculator.ts":
      /*!*****************************************!*\
  !*** ./src/utils/cashout-calculator.ts ***!
  \*****************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ calculateCashout: () =>
            /* binding */ calculateCashout,
          /* harmony export */
        });
        /* harmony import */ var _models_IBet__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../models/IBet */ "./src/models/IBet.ts");
        /* provided dependency */ var __react_refresh_utils__ =
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          );
        __webpack_require__.$Refresh$.runtime = __webpack_require__(
          /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
        );

        /**
         * Cashout Calculator Utility
         * Calculates the optimal balancing bet for cashing out a position
         */

        /**
         * Calculate PnL for a specific bet based on gtype and bet type
         * Matches Python backend logic exactly
         */
        function calculateBetPnL(bet, winningSelectionId, gtype) {
          const selectionId = bet.selectionId.toString();
          const isCurrentSelection = selectionId === winningSelectionId;
          if (gtype === "match1") {
            // BOOKMAKER logic (matches Python lines 905-925)
            if (isCurrentSelection) {
              // This selection wins
              if (bet.isBack) {
                // Back bet wins: profit = (odds / 100) Ã— stake
                return (bet.odds / 100) * bet.stack;
              } else {
                // Lay bet loses: liability = -(odds / 100) Ã— stake
                return -((bet.odds / 100) * bet.stack);
              }
            } else {
              // Other selection wins
              if (bet.isBack) {
                // Back bet loses: loss = -stake
                return -bet.stack;
              } else {
                // Lay bet wins: profit = stake
                return bet.stack;
              }
            }
          } else {
            // MATCH_ODDS logic (matches Python lines 949-969)
            if (isCurrentSelection) {
              // This selection wins
              if (bet.isBack) {
                // Back bet wins: profit = (odds - 1) Ã— stake
                return (bet.odds - 1) * bet.stack;
              } else {
                // Lay bet loses: liability = -(odds - 1) Ã— stake
                return -((bet.odds - 1) * bet.stack);
              }
            } else {
              // Other selection wins
              if (bet.isBack) {
                // Back bet loses: loss = -stake
                return -bet.stack;
              } else {
                // Lay bet wins: profit = stake
                return bet.stack;
              }
            }
          }
        }

        /**
         * Calculate current position for each selection
         * Position = PnL if that selection wins
         */
        function calculateCurrentPositions(userBets, allSelectionIds, gtype) {
          const positions = {};

          // Initialize all positions to 0
          allSelectionIds.forEach((id) => {
            positions[id] = 0;
          });

          // Calculate PnL for each possible outcome
          allSelectionIds.forEach((winningSelectionId) => {
            userBets.forEach((bet) => {
              const pnl = calculateBetPnL(bet, winningSelectionId, gtype);
              positions[winningSelectionId] += pnl;
            });
          });
          return positions;
        }

        /**
         * Simulate a cashout bet and calculate new positions
         */
        function simulateCashoutBet(
          currentPositions,
          cashoutSelectionId,
          betType,
          stake,
          odds,
          gtype,
          allSelectionIds
        ) {
          const newPositions = {
            ...currentPositions,
          };

          // Create a simulated bet object
          const simulatedBet = {
            selectionId: parseInt(cashoutSelectionId),
            odds: odds,
            stack: stake,
            isBack: betType === "back",
            marketId: "",
            matchId: 0,
            selectionName: "",
            marketName: "",
            betOn:
              gtype === "match1"
                ? _models_IBet__WEBPACK_IMPORTED_MODULE_0__.IBetOn.BOOKMAKER
                : _models_IBet__WEBPACK_IMPORTED_MODULE_0__.IBetOn.MATCH_ODDS,
            gtype: gtype,
            oddsType: gtype === "match1" ? "BM" : "MATCH_ODDS",
            volume: 0,
            pnl: 0,
            exposure: 0,
            currentMarketOdds: odds,
            type: _models_IBet__WEBPACK_IMPORTED_MODULE_0__.IBetType.Match,
            suspended: false,
            betLocked: false,
            eventId: 0,
            ipAddress: "",
            matchName: "",
            sportId: 0,
          };

          // Calculate impact of simulated bet on each outcome
          allSelectionIds.forEach((winningSelectionId) => {
            const pnl = calculateBetPnL(
              simulatedBet,
              winningSelectionId,
              gtype
            );
            newPositions[winningSelectionId] += pnl;
          });
          return newPositions;
        }

        /**
         * Find the optimal stake that makes ALL outcomes as EQUAL as possible
         * Goal: Make all team outcomes the same (perfect balance)
         */
        function findOptimalStake(
          currentPositions,
          cashoutSelectionId,
          betType,
          odds,
          gtype,
          allSelectionIds
        ) {
          // Start with a rough estimate based on the imbalance
          const positionValues = Object.values(currentPositions);
          const maxPosition = Math.max(...positionValues);
          const minPosition = Math.min(...positionValues);
          const imbalance = maxPosition - minPosition;

          // Calculate profit factor based on bet type and gtype
          let profitFactor = 1;
          if (gtype === "match1") {
            profitFactor = odds / 100;
          } else {
            profitFactor = odds - 1;
          }

          // Initial estimate
          let stake = Math.round(imbalance / (profitFactor + 1));

          // âœ… MINIMUM STAKE: 100 (as per user requirement)
          stake = Math.max(100, stake);

          // âœ… ENHANCED: Two-pass search for optimal stake that makes outcomes EQUAL
          let bestStake = stake;
          let bestMeanDeviation = Infinity; // PRIMARY goal: minimize this (make outcomes equal)
          let bestVariance = Infinity; // SECONDARY goal

          const minStake = 100; // âœ… MINIMUM 100
          const maxStake = Math.max(30000, Math.ceil(stake * 3)); // Search wider range

          // âœ… PASS 1: Coarse search (bigger steps) to find approximate optimal
          const coarseStep = Math.max(
            100,
            Math.floor((maxStake - minStake) / 100)
          );
          for (
            let testStake = minStake;
            testStake <= maxStake;
            testStake += coarseStep
          ) {
            const testPositions = simulateCashoutBet(
              currentPositions,
              cashoutSelectionId,
              betType,
              testStake,
              odds,
              gtype,
              allSelectionIds
            );
            const testValues = Object.values(testPositions);
            const testMean =
              testValues.reduce((sum, val) => sum + val, 0) / testValues.length;
            const testMeanDeviation =
              testValues.reduce(
                (sum, val) => sum + Math.abs(val - testMean),
                0
              ) / testValues.length;

            // PRIMARY: Find stake with minimum mean deviation (most equal outcomes)
            if (testMeanDeviation < bestMeanDeviation) {
              bestMeanDeviation = testMeanDeviation;
              bestStake = testStake;

              // If we found near-perfect equality, no need to search further
              if (testMeanDeviation < 5) {
                break;
              }
            }
          }

          // âœ… PASS 2: Fine search around the best stake found (Â±500, step 10)
          const fineSearchMin = Math.max(minStake, bestStake - 500);
          const fineSearchMax = Math.min(maxStake, bestStake + 500);
          const fineStep = 10;
          bestMeanDeviation = Infinity;
          bestVariance = Infinity;
          let finalBestStake = bestStake;
          for (
            let testStake = fineSearchMin;
            testStake <= fineSearchMax;
            testStake += fineStep
          ) {
            const testPositions = simulateCashoutBet(
              currentPositions,
              cashoutSelectionId,
              betType,
              testStake,
              odds,
              gtype,
              allSelectionIds
            );
            const testValues = Object.values(testPositions);
            const testMax = Math.max(...testValues);
            const testMin = Math.min(...testValues);
            const testVariance = testMax - testMin;
            const testMean =
              testValues.reduce((sum, val) => sum + val, 0) / testValues.length;
            const testMeanDeviation =
              testValues.reduce(
                (sum, val) => sum + Math.abs(val - testMean),
                0
              ) / testValues.length;

            // âœ… Selection criteria:
            // 1. PRIMARY: Minimize mean deviation (makes outcomes equal)
            // 2. SECONDARY: If mean deviation is similar, minimize variance
            const isSignificantlyMoreEqual =
              testMeanDeviation < bestMeanDeviation - 1;
            const isSimilarEquality =
              Math.abs(testMeanDeviation - bestMeanDeviation) <= 1;
            const isBetterVariance = testVariance < bestVariance - 5;
            if (
              isSignificantlyMoreEqual ||
              (isSimilarEquality && isBetterVariance)
            ) {
              bestMeanDeviation = testMeanDeviation;
              bestVariance = testVariance;
              finalBestStake = testStake;
            }

            // Early exit for near-perfect balance
            if (testVariance < 5 && testMeanDeviation < 2) {
              finalBestStake = testStake;
              break;
            }
          }

          // Round to nearest 10 for cleaner stakes
          finalBestStake = Math.round(finalBestStake / 10) * 10;
          finalBestStake = Math.max(100, finalBestStake); // âœ… Ensure minimum 100

          return finalBestStake;
        }

        /**
         * Calculate the best cashout option for a given market
         * ENHANCED: Analyzes ALL possible back/lay options on ALL runners
         * @param userBets - User's current bets in the market
         * @param currentOdds - Current odds for all runners
         * @param gtype - Market type ('match' or 'match1')
         * @returns Cashout calculation result
         */
        function calculateCashout(userBets, currentOdds, gtype) {
          if (
            !userBets ||
            userBets.length === 0 ||
            !currentOdds ||
            currentOdds.length === 0
          ) {
            return null;
          }
          console.log("ðŸ’° ENHANCED Cashout Calculation Started");
          console.log("ðŸ“Š User bets:", userBets.length);
          console.log("ðŸ“Š Available runners:", currentOdds.length);
          console.log("ðŸ“Š Market type:", gtype);

          // Get all selection IDs
          const allSelectionIds = currentOdds.map((r) =>
            r.selectionId.toString()
          );

          // Calculate current positions (PnL if each selection wins)
          const currentPositions = calculateCurrentPositions(
            userBets,
            allSelectionIds,
            gtype
          );
          console.log("ðŸ“Š â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•");
          console.log("ðŸ“Š CURRENT POSITION (Before Cashout):");
          console.log("ðŸ“Š â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•");

          // Show current position for each team
          allSelectionIds.forEach((selectionId) => {
            const runner = currentOdds.find(
              (r) => r.selectionId.toString() === selectionId
            );
            const outcome = currentPositions[selectionId];
            const name = runner ? runner.selectionName : selectionId;
            const status = outcome >= 0 ? "âœ…" : "âŒ";
            console.log(`   ${status} ${name}: â‚¹${outcome.toFixed(2)}`);
          });

          // Calculate current imbalance
          const currentValues = Object.values(currentPositions);
          const currentMax = Math.max(...currentValues);
          const currentMin = Math.min(...currentValues);
          const currentVariance = currentMax - currentMin;
          console.log("");
          console.log(`ðŸ“Š Analysis:`);
          console.log(`   Best case (max): â‚¹${currentMax.toFixed(2)}`);
          console.log(`   Worst case (min): â‚¹${currentMin.toFixed(2)}`);
          console.log(`   Variance (range): â‚¹${currentVariance.toFixed(2)}`);
          console.log("ðŸ“Š â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•");
          console.log("");
          console.log("ðŸ” â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•");
          console.log("ðŸ” ANALYZING ALL CASHOUT OPTIONS:");
          console.log("ðŸ” â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•");
          console.log("");

          // Try ALL possible cashout options (back and lay on each runner)

          const options = [];
          currentOdds.forEach((runner) => {
            // Try BACK bet on this runner
            if (runner.backOdds && runner.backOdds > 0) {
              const stake = findOptimalStake(
                currentPositions,
                runner.selectionId.toString(),
                "back",
                runner.backOdds,
                gtype,
                allSelectionIds
              );
              const newPositions = simulateCashoutBet(
                currentPositions,
                runner.selectionId.toString(),
                "back",
                stake,
                runner.backOdds,
                gtype,
                allSelectionIds
              );
              const values = Object.values(newPositions);
              const maxProfit = Math.max(...values);
              const minProfit = Math.min(...values);
              const variance = maxProfit - minProfit;
              options.push({
                selectionId: runner.selectionId.toString(),
                selectionName: runner.selectionName,
                betType: "back",
                odds: runner.backOdds,
                stake,
                newPositions,
                variance,
                minProfit,
                maxProfit,
              });

              // Calculate mean deviation for this option
              const mean =
                values.reduce((sum, val) => sum + val, 0) / values.length;
              const meanDeviation =
                values.reduce((sum, val) => sum + Math.abs(val - mean), 0) /
                values.length;
              const allPositive = values.every((v) => v >= 0);
              console.log(
                `ðŸ” BACK ${runner.selectionName} @ ${runner.backOdds}, Stake: â‚¹${stake}`
              );
              console.log(`   Final outcomes:`);
              allSelectionIds.forEach((selId) => {
                var _currentOdds$find;
                const runnerName =
                  ((_currentOdds$find = currentOdds.find(
                    (r) => r.selectionId.toString() === selId
                  )) === null || _currentOdds$find === void 0
                    ? void 0
                    : _currentOdds$find.selectionName) || selId;
                const outcome = newPositions[selId];
                const change = outcome - currentPositions[selId];
                const status = outcome >= 0 ? "âœ…" : "âŒ";
                console.log(
                  `      ${status} ${runnerName}: â‚¹${outcome.toFixed(2)} (${
                    change >= 0 ? "+" : ""
                  }${change.toFixed(2)})`
                );
              });
              console.log(
                `   Variance: ${variance.toFixed(
                  2
                )}, Mean Dev: ${meanDeviation.toFixed(2)}, All +ve: ${
                  allPositive ? "YES âœ…" : "NO âŒ"
                }`
              );
            }

            // Try LAY bet on this runner
            if (runner.layOdds && runner.layOdds > 0) {
              const stake = findOptimalStake(
                currentPositions,
                runner.selectionId.toString(),
                "lay",
                runner.layOdds,
                gtype,
                allSelectionIds
              );
              const newPositions = simulateCashoutBet(
                currentPositions,
                runner.selectionId.toString(),
                "lay",
                stake,
                runner.layOdds,
                gtype,
                allSelectionIds
              );
              const values = Object.values(newPositions);
              const maxProfit = Math.max(...values);
              const minProfit = Math.min(...values);
              const variance = maxProfit - minProfit;
              options.push({
                selectionId: runner.selectionId.toString(),
                selectionName: runner.selectionName,
                betType: "lay",
                odds: runner.layOdds,
                stake,
                newPositions,
                variance,
                minProfit,
                maxProfit,
              });

              // Calculate mean deviation for this option
              const mean =
                values.reduce((sum, val) => sum + val, 0) / values.length;
              const meanDeviation =
                values.reduce((sum, val) => sum + Math.abs(val - mean), 0) /
                values.length;
              const allPositive = values.every((v) => v >= 0);
              console.log(
                `ðŸ” LAY ${runner.selectionName} @ ${runner.layOdds}, Stake: â‚¹${stake}`
              );
              console.log(`   Final outcomes:`);
              allSelectionIds.forEach((selId) => {
                var _currentOdds$find2;
                const runnerName =
                  ((_currentOdds$find2 = currentOdds.find(
                    (r) => r.selectionId.toString() === selId
                  )) === null || _currentOdds$find2 === void 0
                    ? void 0
                    : _currentOdds$find2.selectionName) || selId;
                const outcome = newPositions[selId];
                const change = outcome - currentPositions[selId];
                const status = outcome >= 0 ? "âœ…" : "âŒ";
                console.log(
                  `      ${status} ${runnerName}: â‚¹${outcome.toFixed(2)} (${
                    change >= 0 ? "+" : ""
                  }${change.toFixed(2)})`
                );
              });
              console.log(
                `   Variance: ${variance.toFixed(
                  2
                )}, Mean Dev: ${meanDeviation.toFixed(2)}, All +ve: ${
                  allPositive ? "YES âœ…" : "NO âŒ"
                }`
              );
            }
          });
          if (options.length === 0) {
            console.log("âŒ No valid cashout options found");
            return null;
          }
          console.log("");
          console.log("âœ… Total options analyzed: " + options.length);
          console.log("");
          console.log("âš–ï¸ â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•");
          console.log("âš–ï¸ SELECTING BEST OPTION:");
          console.log("âš–ï¸ â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•");
          console.log("");

          // Use the already calculated currentVariance and add max loss/profit variables
          const currentMaxLoss = currentMin;
          const currentMaxProfit = currentMax;
          console.log("ðŸ“Š Current Position Analysis:");
          console.log(
            `   Max loss: â‚¹${currentMaxLoss.toFixed(
              2
            )} (worst case before cashout)`
          );
          console.log(
            `   Max profit: â‚¹${currentMaxProfit.toFixed(
              2
            )} (best case before cashout)`
          );
          console.log(
            `   Variance: â‚¹${currentVariance.toFixed(
              2
            )} (difference between best and worst)`
          );
          console.log("");

          // âœ… ENHANCED SELECTION: Best cashout that makes outcomes equal and reduces max loss
          const bestOption = options.reduce((best, current) => {
            // Calculate metrics for current option
            const currentValues = Object.values(current.newPositions);
            const currentMin = Math.min(...currentValues);
            const currentMax = Math.max(...currentValues);
            const currentMean =
              currentValues.reduce((sum, val) => sum + val, 0) /
              currentValues.length;
            const currentAllPositive = currentValues.every((val) => val >= 0);
            const currentMeanDeviation =
              currentValues.reduce(
                (sum, val) => sum + Math.abs(val - currentMean),
                0
              ) / currentValues.length;
            const currentMaxLossImprovement = currentMin - currentMaxLoss; // How much we reduce max loss

            // Calculate metrics for best option
            const bestValues = Object.values(best.newPositions);
            const bestMin = Math.min(...bestValues);
            const bestMax = Math.max(...bestValues);
            const bestMean =
              bestValues.reduce((sum, val) => sum + val, 0) / bestValues.length;
            const bestAllPositive = bestValues.every((val) => val >= 0);
            const bestMeanDeviation =
              bestValues.reduce(
                (sum, val) => sum + Math.abs(val - bestMean),
                0
              ) / bestValues.length;
            const bestMaxLossImprovement = bestMin - currentMaxLoss;
            console.log(`âš–ï¸ Comparing options:
      Current: ${current.selectionName} ${current.betType.toUpperCase()} @ ${
              current.odds
            }, Stake â‚¹${current.stake}
        - Outcomes: [${currentValues.map((v) => v.toFixed(2)).join(", ")}]
        - Range: â‚¹${currentMin.toFixed(2)} to â‚¹${currentMax.toFixed(
              2
            )} (Variance: ${current.variance.toFixed(2)})
        - Mean: â‚¹${currentMean.toFixed(
          2
        )}, Mean Deviation: ${currentMeanDeviation.toFixed(2)}
        - Max loss improvement: ${
          currentMaxLossImprovement >= 0 ? "+" : ""
        }â‚¹${currentMaxLossImprovement.toFixed(2)}
        - All positive: ${currentAllPositive ? "YES âœ…" : "NO âŒ"}
      
      Best: ${best.selectionName} ${best.betType.toUpperCase()} @ ${
              best.odds
            }, Stake â‚¹${best.stake}
        - Outcomes: [${bestValues.map((v) => v.toFixed(2)).join(", ")}]
        - Range: â‚¹${bestMin.toFixed(2)} to â‚¹${bestMax.toFixed(
              2
            )} (Variance: ${best.variance.toFixed(2)})
        - Mean: â‚¹${bestMean.toFixed(
          2
        )}, Mean Deviation: ${bestMeanDeviation.toFixed(2)}
        - Max loss improvement: ${
          bestMaxLossImprovement >= 0 ? "+" : ""
        }â‚¹${bestMaxLossImprovement.toFixed(2)}
        - All positive: ${bestAllPositive ? "YES âœ…" : "NO âŒ"}`);

            // âœ… PRIORITY 1: Most equal outcomes (lowest mean deviation AND variance)
            // This is the PRIMARY goal - make all outcomes the same
            const equalityThreshold = 20; // Consider "equal" if mean deviation < 20
            const currentIsEqual = currentMeanDeviation < equalityThreshold;
            const bestIsEqual = bestMeanDeviation < equalityThreshold;
            if (currentIsEqual && !bestIsEqual) {
              console.log(
                `  ðŸŽ¯ Current WINS: Outcomes are nearly EQUAL! (MeanDev: ${currentMeanDeviation.toFixed(
                  2
                )} < ${equalityThreshold})`
              );
              return current;
            }
            if (bestIsEqual && !currentIsEqual) {
              console.log(
                `  ðŸŽ¯ Best WINS: Outcomes are nearly EQUAL! (MeanDev: ${bestMeanDeviation.toFixed(
                  2
                )} < ${equalityThreshold})`
              );
              return best;
            }

            // Both are equal, prefer the one with lower variance (tighter range)
            if (currentIsEqual && bestIsEqual) {
              if (current.variance < best.variance - 5) {
                // 5 rupee tolerance
                console.log(
                  `  âš–ï¸ Current wins: Tighter range (Variance: ${current.variance.toFixed(
                    2
                  )} vs ${best.variance.toFixed(2)})`
                );
                return current;
              } else if (best.variance < current.variance - 5) {
                console.log(
                  `  âš–ï¸ Best wins: Tighter range (Variance: ${best.variance.toFixed(
                    2
                  )} vs ${current.variance.toFixed(2)})`
                );
                return best;
              }

              // If variance is similar, prefer all positive
              if (currentAllPositive && !bestAllPositive) {
                console.log(`  ðŸ’° Current wins: All outcomes positive`);
                return current;
              }
              if (bestAllPositive && !currentAllPositive) {
                console.log(`  ðŸ’° Best wins: All outcomes positive`);
                return best;
              }

              // If both positive or both negative, prefer higher mean
              if (currentMean > bestMean + 5) {
                console.log(
                  `  ðŸ’µ Current wins: Higher mean (â‚¹${currentMean.toFixed(
                    2
                  )} vs â‚¹${bestMean.toFixed(2)})`
                );
                return current;
              } else {
                console.log(
                  `  ðŸ’µ Best wins: Higher mean (â‚¹${bestMean.toFixed(
                    2
                  )} vs â‚¹${currentMean.toFixed(2)})`
                );
                return best;
              }
            }

            // âœ… PRIORITY 2: Neither is perfectly equal - prefer the one with lower mean deviation
            // (closer to equal outcomes)
            const deviationDiff = currentMeanDeviation - bestMeanDeviation;
            if (Math.abs(deviationDiff) > 5) {
              // Significant difference in equality
              if (currentMeanDeviation < bestMeanDeviation) {
                console.log(
                  `  âš–ï¸ Current wins: More equal outcomes (MeanDev: ${currentMeanDeviation.toFixed(
                    2
                  )} vs ${bestMeanDeviation.toFixed(2)})`
                );
                return current;
              } else {
                console.log(
                  `  âš–ï¸ Best wins: More equal outcomes (MeanDev: ${bestMeanDeviation.toFixed(
                    2
                  )} vs ${currentMeanDeviation.toFixed(2)})`
                );
                return best;
              }
            }

            // âœ… PRIORITY 3: Similar equality - prefer the one that reduces max loss more
            if (
              Math.abs(currentMaxLossImprovement - bestMaxLossImprovement) > 10
            ) {
              if (currentMaxLossImprovement > bestMaxLossImprovement) {
                console.log(
                  `  ðŸ“ˆ Current wins: Better reduces max loss (${
                    currentMaxLossImprovement >= 0 ? "+" : ""
                  }â‚¹${currentMaxLossImprovement.toFixed(2)} vs ${
                    bestMaxLossImprovement >= 0 ? "+" : ""
                  }â‚¹${bestMaxLossImprovement.toFixed(2)})`
                );
                return current;
              } else {
                console.log(
                  `  ðŸ“ˆ Best wins: Better reduces max loss (${
                    bestMaxLossImprovement >= 0 ? "+" : ""
                  }â‚¹${bestMaxLossImprovement.toFixed(2)} vs ${
                    currentMaxLossImprovement >= 0 ? "+" : ""
                  }â‚¹${currentMaxLossImprovement.toFixed(2)})`
                );
                return best;
              }
            }

            // âœ… PRIORITY 4: Prefer lower variance (tighter outcome range)
            if (Math.abs(current.variance - best.variance) > 10) {
              if (current.variance < best.variance) {
                console.log(
                  `  ðŸ“Š Current wins: Lower variance (${current.variance.toFixed(
                    2
                  )} vs ${best.variance.toFixed(2)})`
                );
                return current;
              } else {
                console.log(
                  `  ðŸ“Š Best wins: Lower variance (${best.variance.toFixed(
                    2
                  )} vs ${current.variance.toFixed(2)})`
                );
                return best;
              }
            }

            // âœ… PRIORITY 5: Prefer all positive outcomes
            if (currentAllPositive && !bestAllPositive) {
              console.log(`  âœ… Current wins: All outcomes positive`);
              return current;
            }
            if (bestAllPositive && !currentAllPositive) {
              console.log(`  âœ… Best wins: All outcomes positive`);
              return best;
            }

            // âœ… PRIORITY 6: Fallback - prefer higher mean (more profit or less loss)
            if (currentMean > bestMean) {
              console.log(
                `  ðŸ’° Current wins: Higher mean outcome (â‚¹${currentMean.toFixed(
                  2
                )} vs â‚¹${bestMean.toFixed(2)})`
              );
              return current;
            } else {
              console.log(
                `  ðŸ’° Best wins: Higher mean outcome (â‚¹${bestMean.toFixed(
                  2
                )} vs â‚¹${currentMean.toFixed(2)})`
              );
              return best;
            }
          });

          // Calculate final metrics
          const finalValues = Object.values(bestOption.newPositions);
          const finalMin = Math.min(...finalValues);
          const finalMax = Math.max(...finalValues);
          const finalMean =
            finalValues.reduce((sum, val) => sum + val, 0) / finalValues.length;
          const finalAllPositive = finalValues.every((val) => val >= 0);
          const finalMeanDeviation =
            finalValues.reduce(
              (sum, val) => sum + Math.abs(val - finalMean),
              0
            ) / finalValues.length;
          const finalIsEqual = finalMeanDeviation < 20;

          // Calculate improvements
          const maxLossImprovement = finalMin - currentMaxLoss;
          const varianceImprovement = currentVariance - bestOption.variance;
          const varianceReductionPercent =
            (varianceImprovement / currentVariance) * 100;
          console.log("");
          console.log(
            "ðŸŽ¯ â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•"
          );
          console.log("ðŸŽ¯ BEST CASHOUT OPTION SELECTED:");
          console.log(
            "ðŸŽ¯ â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•"
          );
          console.log(
            `   ðŸ’œ Cashout Bet: ${bestOption.betType.toUpperCase()} ${
              bestOption.selectionName
            } @ ${bestOption.odds}`
          );
          console.log(`   ðŸ’µ Stake: â‚¹${bestOption.stake}`);
          console.log("");
          console.log("   ðŸ“Š OUTCOMES COMPARISON:");
          console.log(
            "   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”"
          );
          console.log(
            "   â”‚ Before Cashout (Current Position)                      â”‚"
          );
          console.log(
            "   â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤"
          );

          // Show current position for each team
          const selectionNames = allSelectionIds.map((id) => {
            const runner = currentOdds.find(
              (r) => r.selectionId.toString() === id
            );
            return runner ? runner.selectionName : id;
          });
          allSelectionIds.forEach((id, index) => {
            const currentOutcome = currentPositions[id];
            const selectionName = selectionNames[index];
            const color = currentOutcome >= 0 ? "âœ…" : "âŒ";
            console.log(
              `   â”‚ ${color} ${selectionName.padEnd(35)}: â‚¹${currentOutcome
                .toFixed(2)
                .padStart(10)} â”‚`
            );
          });
          console.log(
            `   â”‚ Range: â‚¹${currentMaxLoss.toFixed(
              2
            )} to â‚¹${currentMaxProfit.toFixed(
              2
            )} (Variance: â‚¹${currentVariance.toFixed(2)})    â”‚`
          );
          console.log(
            "   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜"
          );
          console.log("");
          console.log(
            "   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”"
          );
          console.log(
            "   â”‚ After Cashout (New Position)                           â”‚"
          );
          console.log(
            "   â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤"
          );
          allSelectionIds.forEach((id, index) => {
            const newOutcome = bestOption.newPositions[id];
            const currentOutcome = currentPositions[id];
            const change = newOutcome - currentOutcome;
            const selectionName = selectionNames[index];
            const color = newOutcome >= 0 ? "âœ…" : "âŒ";
            const changeColor = change >= 0 ? "â¬†ï¸" : "â¬‡ï¸";
            const changeSign = change >= 0 ? "+" : "";
            console.log(
              `   â”‚ ${color} ${selectionName.padEnd(35)}: â‚¹${newOutcome
                .toFixed(2)
                .padStart(10)} ${changeColor} (${changeSign}â‚¹${change.toFixed(
                2
              )}) â”‚`
            );
          });
          console.log(
            `   â”‚ Range: â‚¹${finalMin.toFixed(2)} to â‚¹${finalMax.toFixed(
              2
            )} (Variance: â‚¹${bestOption.variance.toFixed(2)})    â”‚`
          );
          console.log(
            "   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜"
          );
          console.log("");
          console.log("   ðŸ“ˆ IMPROVEMENTS:");
          console.log(
            `      ðŸŽ¯ Max loss improved: ${
              maxLossImprovement >= 0 ? "âœ…" : "âŒ"
            } ${
              maxLossImprovement >= 0 ? "+" : ""
            }â‚¹${maxLossImprovement.toFixed(2)} (${currentMaxLoss.toFixed(
              2
            )} â†’ ${finalMin.toFixed(2)})`
          );
          console.log(
            `      ðŸ“Š Variance reduced: ${
              varianceImprovement >= 0 ? "âœ…" : "âŒ"
            } â‚¹${varianceImprovement.toFixed(
              2
            )} (-${varianceReductionPercent.toFixed(1)}%)`
          );
          console.log(
            `      âš–ï¸ Mean deviation: ${finalMeanDeviation.toFixed(2)} ${
              finalIsEqual ? "âœ… (Nearly equal!)" : "âš ï¸ (Could be more equal)"
            }`
          );
          console.log(
            `      ðŸ’° All outcomes positive: ${
              finalAllPositive ? "YES âœ… (Guaranteed profit!)" : "NO âŒ"
            }`
          );
          console.log(`      ðŸ’µ Average outcome: â‚¹${finalMean.toFixed(2)}`);
          console.log("");
          if (finalIsEqual && finalAllPositive) {
            console.log(
              "   ðŸ† PERFECT CASHOUT: All outcomes are equal AND positive!"
            );
          } else if (finalIsEqual) {
            console.log(
              "   âš–ï¸ BALANCED CASHOUT: All outcomes are nearly equal!"
            );
          } else if (finalAllPositive) {
            console.log("   âœ… PROFITABLE CASHOUT: All outcomes are positive!");
          } else if (maxLossImprovement > 0) {
            console.log(
              "   ðŸ“ˆ RISK-REDUCING CASHOUT: Max loss has been reduced!"
            );
          } else {
            console.log(
              "   ðŸ“Š OPTIMIZED CASHOUT: Best available balance achieved!"
            );
          }
          console.log(
            "ðŸŽ¯ â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•"
          );
          return {
            shouldPlaceBet: true,
            betType: bestOption.betType,
            selectionId: bestOption.selectionId,
            selectionName: bestOption.selectionName,
            stake: bestOption.stake,
            odds: bestOption.odds,
            estimatedProfit: Math.round(bestOption.maxProfit),
            estimatedLoss: Math.round(bestOption.minProfit),
            isBalanced: finalIsEqual, // âœ… Balanced if outcomes are nearly equal
          };
        }

        const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
        const $ReactRefreshCurrentExports$ =
          __react_refresh_utils__.getModuleExports($ReactRefreshModuleId$);

        function $ReactRefreshModuleRuntime$(exports) {
          if (true) {
            let errorOverlay;
            if (true) {
              errorOverlay = false;
            }
            let testMode;
            if (typeof __react_refresh_test__ !== "undefined") {
              testMode = __react_refresh_test__;
            }
            return __react_refresh_utils__.executeRuntime(
              exports,
              $ReactRefreshModuleId$,
              module.hot,
              errorOverlay,
              testMode
            );
          }
        }

        if (
          typeof Promise !== "undefined" &&
          $ReactRefreshCurrentExports$ instanceof Promise
        ) {
          $ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
        } else {
          $ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
        }

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/styles/market-layout.css":
      /*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/styles/market-layout.css ***!
  \************************************************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `/* Market Layout Styles */
.markets-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  padding: 20px;
}

.market-card {
  background: #2d3748;
  border-radius: 8px;
  border: 1px solid #4a5568;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.market-header {
  background: #1a202c;
  padding: 12px 15px;
  border-bottom: 1px solid #4a5568;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.market-title {
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
}

.market-max-limit {
  color: #a0aec0;
  font-size: 12px;
}

.market-cashout {
  background: #48bb78;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
}

/* Market Grid Headers */
.market-grid-header {
  display: grid;
  grid-template-columns: 1fr 80px 80px;
  background: #4a5568;
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}

.market-grid-header-fancy {
  display: grid;
  grid-template-columns: 1fr 80px 80px;
  background: #4a5568;
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}

.market-grid-header > div,
.market-grid-header-fancy > div {
  padding: 8px;
  border-right: 1px solid #2d3748;
}

.market-grid-header > div:last-child,
.market-grid-header-fancy > div:last-child {
  border-right: none;
}

/* Market Runners */
.market-runners {
  background: #2d3748;
}

.market-runner-row {
  display: grid;
  grid-template-columns: 1fr 80px 80px;
  border-bottom: 1px solid #4a5568;
  align-items: center;
}

.market-runner-row:last-child {
  border-bottom: none;
}

.runner-info {
  padding: 12px 15px;
  color: white;
}

.runner-name {
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 4px;
}

.runner-pnl {
  font-size: 11px;
  color: #a0aec0;
}

.runner-pnl.positive {
  color: #48bb78;
}

.runner-pnl.negative {
  color: #f56565;
}

/* Odds Boxes */
.odds-box {
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-right: 1px solid #4a5568;
  transition: all 0.2s;
  position: relative;
}

.odds-box:last-child {
  border-right: none;
}

.odds-box:hover {
  transform: scale(1.02);
  z-index: 1;
}

.odds-box.back {
  background: linear-gradient(135deg, #4299e1 0%, #2b6cb0 100%);
  color: white;
}

.odds-box.lay {
  background: linear-gradient(135deg, #ed64a6 0%, #b83280 100%);
  color: white;
}

.odds-box.back:hover {
  background: linear-gradient(135deg, #3182ce 0%, #2c5282 100%);
}

.odds-box.lay:hover {
  background: linear-gradient(135deg, #d53f8c 0%, #97266d 100%);
}

.odds-value {
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
}

.odds-size {
  font-size: 10px;
  opacity: 0.9;
  margin-top: 2px;
}

/* Suspended State */
.odds-box.suspended {
  background: #4a5568 !important;
  color: #a0aec0 !important;
  cursor: not-allowed;
}

.odds-box.suspended:hover {
  transform: none;
}

/* HT/FT Special Layout */
.htft-market {
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.htft-combination {
  background: #1a202c;
  border: 1px solid #4a5568;
  border-radius: 6px;
  padding: 8px;
  text-align: center;
}

.htft-label {
  color: #a0aec0;
  font-size: 11px;
  margin-bottom: 4px;
}

.htft-odds {
  background: #4299e1;
  color: white;
  padding: 8px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.htft-odds:hover {
  background: #3182ce;
}

.htft-size {
  font-size: 10px;
  color: #a0aec0;
  margin-top: 2px;
}

/* Golden Glow Animation */
@keyframes marketGoldenGlow {
  0% {
    box-shadow: 0 0 5px rgba(255, 215, 0, 0.3);
    border-color: rgba(255, 215, 0, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.9);
    border-color: #ffd700;
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.6);
    border-color: rgba(255, 215, 0, 0.6);
  }
}

.market-box-glow {
  animation: marketGoldenGlow 1.5s ease-in-out;
}

/* Responsive Design */
@media (max-width: 768px) {
  .markets-container {
    grid-template-columns: 1fr;
    padding: 10px;
    gap: 10px;
  }
  
  .market-grid-header,
  .market-runner-row {
    grid-template-columns: 1fr 60px 60px;
  }
  
  .odds-box {
    height: 50px;
  }
  
  .odds-value {
    font-size: 12px;
  }
  
  .odds-size {
    font-size: 9px;
  }
  
  .htft-market {
    grid-template-columns: 1fr;
  }
}

/* Market Type Specific Styles */
.market-card.match-odds {
  border-left: 4px solid #4299e1;
}

.market-card.bookmaker {
  border-left: 4px solid #ed8936;
}

.market-card.fancy {
  border-left: 4px solid #48bb78;
}

.market-card.over-under {
  border-left: 4px solid #9f7aea;
}

.market-card.goals {
  border-left: 4px solid #f56565;
}

.market-card.htft {
  border-left: 4px solid #38b2ac;
} `,
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles/market-layout.css"],
            names: [],
            mappings:
              "AAAA,yBAAyB;AACzB;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;EACT,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,wCAAwC;AAC1C;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gCAAgC;EAChC,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,oCAAoC;EACpC,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;EAEE,YAAY;EACZ,+BAA+B;AACjC;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA,mBAAmB;AACnB;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA,eAAe;AACf;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,+BAA+B;EAC/B,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,6DAA6D;EAC7D,YAAY;AACd;;AAEA;EACE,6DAA6D;EAC7D,YAAY;AACd;;AAEA;EACE,6DAA6D;AAC/D;;AAEA;EACE,6DAA6D;AAC/D;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA,oBAAoB;AACpB;EACE,8BAA8B;EAC9B,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA,yBAAyB;AACzB;EACE,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,eAAe;AACjB;;AAEA,0BAA0B;AAC1B;EACE;IACE,0CAA0C;IAC1C,oCAAoC;EACtC;EACA;IACE,2CAA2C;IAC3C,qBAAqB;EACvB;EACA;IACE,2CAA2C;IAC3C,oCAAoC;EACtC;AACF;;AAEA;EACE,4CAA4C;AAC9C;;AAEA,sBAAsB;AACtB;EACE;IACE,0BAA0B;IAC1B,aAAa;IACb,SAAS;EACX;;EAEA;;IAEE,oCAAoC;EACtC;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,0BAA0B;EAC5B;AACF;;AAEA,gCAAgC;AAChC;EACE,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC",
            sourcesContent: [
              "/* Market Layout Styles */\r\n.markets-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  gap: 15px;\r\n  padding: 20px;\r\n}\r\n\r\n.market-card {\r\n  background: #2d3748;\r\n  border-radius: 8px;\r\n  border: 1px solid #4a5568;\r\n  overflow: hidden;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.market-header {\r\n  background: #1a202c;\r\n  padding: 12px 15px;\r\n  border-bottom: 1px solid #4a5568;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.market-title {\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  margin: 0;\r\n}\r\n\r\n.market-max-limit {\r\n  color: #a0aec0;\r\n  font-size: 12px;\r\n}\r\n\r\n.market-cashout {\r\n  background: #48bb78;\r\n  color: white;\r\n  padding: 4px 8px;\r\n  border-radius: 4px;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n}\r\n\r\n/* Market Grid Headers */\r\n.market-grid-header {\r\n  display: grid;\r\n  grid-template-columns: 1fr 80px 80px;\r\n  background: #4a5568;\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n}\r\n\r\n.market-grid-header-fancy {\r\n  display: grid;\r\n  grid-template-columns: 1fr 80px 80px;\r\n  background: #4a5568;\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n}\r\n\r\n.market-grid-header > div,\r\n.market-grid-header-fancy > div {\r\n  padding: 8px;\r\n  border-right: 1px solid #2d3748;\r\n}\r\n\r\n.market-grid-header > div:last-child,\r\n.market-grid-header-fancy > div:last-child {\r\n  border-right: none;\r\n}\r\n\r\n/* Market Runners */\r\n.market-runners {\r\n  background: #2d3748;\r\n}\r\n\r\n.market-runner-row {\r\n  display: grid;\r\n  grid-template-columns: 1fr 80px 80px;\r\n  border-bottom: 1px solid #4a5568;\r\n  align-items: center;\r\n}\r\n\r\n.market-runner-row:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.runner-info {\r\n  padding: 12px 15px;\r\n  color: white;\r\n}\r\n\r\n.runner-name {\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.runner-pnl {\r\n  font-size: 11px;\r\n  color: #a0aec0;\r\n}\r\n\r\n.runner-pnl.positive {\r\n  color: #48bb78;\r\n}\r\n\r\n.runner-pnl.negative {\r\n  color: #f56565;\r\n}\r\n\r\n/* Odds Boxes */\r\n.odds-box {\r\n  height: 60px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  border-right: 1px solid #4a5568;\r\n  transition: all 0.2s;\r\n  position: relative;\r\n}\r\n\r\n.odds-box:last-child {\r\n  border-right: none;\r\n}\r\n\r\n.odds-box:hover {\r\n  transform: scale(1.02);\r\n  z-index: 1;\r\n}\r\n\r\n.odds-box.back {\r\n  background: linear-gradient(135deg, #4299e1 0%, #2b6cb0 100%);\r\n  color: white;\r\n}\r\n\r\n.odds-box.lay {\r\n  background: linear-gradient(135deg, #ed64a6 0%, #b83280 100%);\r\n  color: white;\r\n}\r\n\r\n.odds-box.back:hover {\r\n  background: linear-gradient(135deg, #3182ce 0%, #2c5282 100%);\r\n}\r\n\r\n.odds-box.lay:hover {\r\n  background: linear-gradient(135deg, #d53f8c 0%, #97266d 100%);\r\n}\r\n\r\n.odds-value {\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n}\r\n\r\n.odds-size {\r\n  font-size: 10px;\r\n  opacity: 0.9;\r\n  margin-top: 2px;\r\n}\r\n\r\n/* Suspended State */\r\n.odds-box.suspended {\r\n  background: #4a5568 !important;\r\n  color: #a0aec0 !important;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.odds-box.suspended:hover {\r\n  transform: none;\r\n}\r\n\r\n/* HT/FT Special Layout */\r\n.htft-market {\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 10px;\r\n}\r\n\r\n.htft-combination {\r\n  background: #1a202c;\r\n  border: 1px solid #4a5568;\r\n  border-radius: 6px;\r\n  padding: 8px;\r\n  text-align: center;\r\n}\r\n\r\n.htft-label {\r\n  color: #a0aec0;\r\n  font-size: 11px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.htft-odds {\r\n  background: #4299e1;\r\n  color: white;\r\n  padding: 8px;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: background-color 0.2s;\r\n}\r\n\r\n.htft-odds:hover {\r\n  background: #3182ce;\r\n}\r\n\r\n.htft-size {\r\n  font-size: 10px;\r\n  color: #a0aec0;\r\n  margin-top: 2px;\r\n}\r\n\r\n/* Golden Glow Animation */\r\n@keyframes marketGoldenGlow {\r\n  0% {\r\n    box-shadow: 0 0 5px rgba(255, 215, 0, 0.3);\r\n    border-color: rgba(255, 215, 0, 0.3);\r\n  }\r\n  50% {\r\n    box-shadow: 0 0 20px rgba(255, 215, 0, 0.9);\r\n    border-color: #ffd700;\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 10px rgba(255, 215, 0, 0.6);\r\n    border-color: rgba(255, 215, 0, 0.6);\r\n  }\r\n}\r\n\r\n.market-box-glow {\r\n  animation: marketGoldenGlow 1.5s ease-in-out;\r\n}\r\n\r\n/* Responsive Design */\r\n@media (max-width: 768px) {\r\n  .markets-container {\r\n    grid-template-columns: 1fr;\r\n    padding: 10px;\r\n    gap: 10px;\r\n  }\r\n  \r\n  .market-grid-header,\r\n  .market-runner-row {\r\n    grid-template-columns: 1fr 60px 60px;\r\n  }\r\n  \r\n  .odds-box {\r\n    height: 50px;\r\n  }\r\n  \r\n  .odds-value {\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .odds-size {\r\n    font-size: 9px;\r\n  }\r\n  \r\n  .htft-market {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n/* Market Type Specific Styles */\r\n.market-card.match-odds {\r\n  border-left: 4px solid #4299e1;\r\n}\r\n\r\n.market-card.bookmaker {\r\n  border-left: 4px solid #ed8936;\r\n}\r\n\r\n.market-card.fancy {\r\n  border-left: 4px solid #48bb78;\r\n}\r\n\r\n.market-card.over-under {\r\n  border-left: 4px solid #9f7aea;\r\n}\r\n\r\n.market-card.goals {\r\n  border-left: 4px solid #f56565;\r\n}\r\n\r\n.market-card.htft {\r\n  border-left: 4px solid #38b2ac;\r\n} ",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        ___CSS_LOADER_EXPORT___.locals = {};
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./src/styles/market-layout.css":
      /*!**************************************!*\
  !*** ./src/styles/market-layout.css ***!
  \**************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_market_layout_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./market-layout.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/styles/market-layout.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_market_layout_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        if (true) {
          if (
            !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_market_layout_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ].locals ||
            module.hot.invalidate
          ) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }
              var p;
              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }
                if (a[p] !== b[p]) {
                  return false;
                }
              }
              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }
                if (!a[p]) {
                  return false;
                }
              }
              return true;
            };
            var isNamedExport =
              !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_market_layout_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals;
            var oldLocals = isNamedExport
              ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_market_layout_css__WEBPACK_IMPORTED_MODULE_6__
              : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_market_layout_css__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ].locals;

            module.hot.accept(
              /*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./market-layout.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/styles/market-layout.css",
              (__WEBPACK_OUTDATED_DEPENDENCIES__) => {
                /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_market_layout_css__WEBPACK_IMPORTED_MODULE_6__ =
                  __webpack_require__(
                    /*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./market-layout.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[5].use[2]!./src/styles/market-layout.css"
                  );
                (function () {
                  if (
                    !isEqualLocals(
                      oldLocals,
                      isNamedExport
                        ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_market_layout_css__WEBPACK_IMPORTED_MODULE_6__
                        : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_market_layout_css__WEBPACK_IMPORTED_MODULE_6__[
                            "default"
                          ].locals,
                      isNamedExport
                    )
                  ) {
                    module.hot.invalidate();

                    return;
                  }

                  oldLocals = isNamedExport
                    ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_market_layout_css__WEBPACK_IMPORTED_MODULE_6__
                    : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_market_layout_css__WEBPACK_IMPORTED_MODULE_6__[
                        "default"
                      ].locals;

                  update(
                    _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_market_layout_css__WEBPACK_IMPORTED_MODULE_6__[
                      "default"
                    ]
                  );
                })(__WEBPACK_OUTDATED_DEPENDENCIES__);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_market_layout_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_market_layout_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_oneOf_5_use_2_market_layout_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },
  },
]);
//# sourceMappingURL=src_pages_odds_odds_tsx.chunk.js.map



