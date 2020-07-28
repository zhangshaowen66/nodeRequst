import axios from 'axios';
import './requset2.js';

                export function _addAgain (data) {
                   return axios.post('/addAgain',data)
                }
            
                export function _addBlackList (data) {
                   return axios.post('/addBlackList',data)
                }
            
                export function _addBuddy (data) {
                   return axios.post('/addBuddy',data)
                }
            
                export function _addStar (data) {
                   return axios.post('/addStar',data)
                }
            
                export function _batchCreateGroup (data) {
                   return axios.post('/batchCreateGroup',data)
                }
            
                export function _clientToServer (data) {
                   return axios.post('/clientToServer',data)
                }
            
                export function _confirmAdd (data) {
                   return axios.post('/confirmAdd',data)
                }
            
                export function _deviceStatus (data) {
                   return axios.post('/deviceStatus',data)
                }
            
                export function _downLoadExcel (data) {
                   return axios.post('/downLoadExcel',data)
                }
            
                export function _employee (data) {
                   return axios.get('/employee'+ data)
                }
            
                export function _errorCommand (data) {
                   return axios.post('/errorCommand',data)
                }
            
                export function _exportExcel (data) {
                   return axios.post('/exportExcel',data)
                }
            
                export function _getAddFriendMessage (data) {
                   return axios.post('/getAddFriendMessage',data)
                }
            
                export function _getAddFriendTask (data) {
                   return axios.post('/getAddFriendTask',data)
                }
            
                export function _getBuddy (data) {
                   return axios.post('/getBuddy',data)
                }
            
                export function _getContentType (data) {
                   return axios.post('/getContentType',data)
                }
            
                export function _getCustomer (data) {
                   return axios.post('/getCustomer',data)
                }
            
                export function _getCustomerProfile (data) {
                   return axios.post('/getCustomerProfile',data)
                }
            
                export function _getGroupList (data) {
                   return axios.post('/getGroupList',data)
                }
            
                export function _getMyLabel (data) {
                   return axios.post('/getMyLabel',data)
                }
            
                export function _getPersonInfo (data) {
                   return axios.post('/getPersonInfo',data)
                }
            
                export function _getSendMsgTask (data) {
                   return axios.post('/getSendMsgTask',data)
                }
            
                export function _getTask (data) {
                   return axios.post('/getTask',data)
                }
            
                export function _getTechnique (data) {
                   return axios.post('/getTechnique',data)
                }
            
                export function _getToken (data) {
                   return axios.post('/getToken',data)
                }
            
                export function _importWxIdExcel (data) {
                   return axios.post('/importWxIdExcel',data)
                }
            
                export function _inviteMember (data) {
                   return axios.post('/inviteMember',data)
                }
            
                export function _leaveGroup (data) {
                   return axios.post('/leaveGroup',data)
                }
            
                export function _likeMoment (data) {
                   return axios.post('/likeMoment',data)
                }
            
                export function _manageTask (data) {
                   return axios.post('/manageTask',data)
                }
            
                export function _massMessage (data) {
                   return axios.post('/massMessage',data)
                }
            
                export function _momentList (data) {
                   return axios.post('/momentList',data)
                }
            
                export function _momentListByWxid (data) {
                   return axios.post('/momentListByWxid',data)
                }
            
                export function _notifyToServer (data) {
                   return axios.post('/notifyToServer',data)
                }
            
                export function _postMoment (data) {
                   return axios.post('/postMoment',data)
                }
            
                export function _queryAddressBookByLabel (data) {
                   return axios.post('/queryAddressBookByLabel',data)
                }
            
                export function _queryGroupInfo (data) {
                   return axios.post('/queryGroupInfo',data)
                }
            
                export function _queryGroups (data) {
                   return axios.post('/queryGroups',data)
                }
            
                export function _queryHistory (data) {
                   return axios.post('/queryHistory',data)
                }
            
                export function _queryMsg (data) {
                   return axios.post('/queryMsg',data)
                }
            
                export function _queryMyAddFriendMsg (data) {
                   return axios.post('/queryMyAddFriendMsg',data)
                }
            
                export function _queryMyAddressBook (data) {
                   return axios.post('/queryMyAddressBook',data)
                }
            
                export function _queryMyAddressBookByLabel (data) {
                   return axios.post('/queryMyAddressBookByLabel',data)
                }
            
                export function _queryMyAddressBookDetail (data) {
                   return axios.post('/queryMyAddressBookDetail',data)
                }
            
                export function _querySessionByLabel (data) {
                   return axios.post('/querySessionByLabel',data)
                }
            
                export function _refreshAddressBook (data) {
                   return axios.post('/refreshAddressBook',data)
                }
            
                export function _refreshMoment (data) {
                   return axios.post('/refreshMoment',data)
                }
            
                export function _refreshToken (data) {
                   return axios.post('/refreshToken',data)
                }
            
                export function _removeBlackList (data) {
                   return axios.post('/removeBlackList',data)
                }
            
                export function _removeBuddy (data) {
                   return axios.post('/removeBuddy',data)
                }
            
                export function _removeMember (data) {
                   return axios.post('/removeMember',data)
                }
            
                export function _removeStar (data) {
                   return axios.post('/removeStar',data)
                }
            
                export function _replyMoment (data) {
                   return axios.post('/replyMoment',data)
                }
            
                export function _saveCustomer (data) {
                   return axios.post('/saveCustomer',data)
                }
            
                export function _saveSession (data) {
                   return axios.post('/saveSession',data)
                }
            
                export function _searchContent (data) {
                   return axios.post('/searchContent',data)
                }
            
                export function _searchContentCategory (data) {
                   return axios.post('/searchContentCategory',data)
                }
            
                export function _searchKeyword (data) {
                   return axios.post('/searchKeyword',data)
                }
            
                export function _sendFile (data) {
                   return axios.post('/sendFile',data)
                }
            
                export function _sendGroupFile (data) {
                   return axios.post('/sendGroupFile',data)
                }
            
                export function _sendGroupForAll (data) {
                   return axios.post('/sendGroupForAll',data)
                }
            
                export function _sendGroupForText (data) {
                   return axios.post('/sendGroupForText',data)
                }
            
                export function _sendGroupLink (data) {
                   return axios.post('/sendGroupLink',data)
                }
            
                export function _sendGroupText (data) {
                   return axios.post('/sendGroupText',data)
                }
            
                export function _sendLink (data) {
                   return axios.post('/sendLink',data)
                }
            
                export function _sendText (data) {
                   return axios.post('/sendText',data)
                }
            
                export function _serverToClient (data) {
                   return axios.post('/serverToClient',data)
                }
            
                export function _setGender (data) {
                   return axios.post('/setGender',data)
                }
            
                export function _setGroupName (data) {
                   return axios.post('/setGroupName',data)
                }
            
                export function _setHeadPic (data) {
                   return axios.post('/setHeadPic',data)
                }
            
                export function _setNickName (data) {
                   return axios.post('/setNickName',data)
                }
            
                export function _setRegion (data) {
                   return axios.post('/setRegion',data)
                }
            
                export function _setRemark (data) {
                   return axios.post('/setRemark',data)
                }
            
                export function _setSignature (data) {
                   return axios.post('/setSignature',data)
                }
            
                export function _setTag (data) {
                   return axios.post('/setTag',data)
                }
            
                export function _updateEmployeeHeadPic (data) {
                   return axios.post('/updateEmployeeHeadPic',data)
                }
            
                export function _updatePassword (data) {
                   return axios.post('/updatePassword',data)
                }
            
                export function _wxids (data) {
                   return axios.get('/wxids'+ data)
                }
            